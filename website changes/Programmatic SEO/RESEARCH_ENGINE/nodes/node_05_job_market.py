"""
NODE 05 — Job Market Intelligence
node_05_job_market.py

SOURCE:   BLS Occupational Employment Statistics (primary — free API)
          Public Indeed search fallback (HTML scrape — no API key)
PULLS:    Open job count for the role being replaced
          Salary ranges from live postings
          Employment context (how many of these jobs exist)
OUTPUTS:  Formatted text section for the research brief

WHY THIS MATTERS:
  "There are 14,200 open dental receptionist jobs on Indeed right now at
  an average salary of $36,400/year" — this is live, per-page data that
  makes the ROI argument concrete and citable.
  No two pages use the same numbers because each targets a different role.
"""

import requests
import time
import re


INDEED_HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    )
}

# BLS employment series prefix for national OES
BLS_API_URL = "https://api.bls.gov/publicAPI/v1/timeseries/data/"


def build_employment_series(soc_code: str) -> str:
    """Builds BLS OES employment series ID for a given SOC code."""
    soc_clean = soc_code.replace("-", "").ljust(8, "0")
    return f"OEUN000000000000{soc_clean}00000E"


def fetch_bls_employment(soc_code: str) -> dict:
    """
    Fetches employment count from BLS for the given SOC code.
    Returns: {"count": str, "year": str} or {"error": str}
    """
    series_id = build_employment_series(soc_code)
    try:
        resp = requests.post(
            BLS_API_URL,
            json={"seriesid": [series_id]},
            headers={"Content-type": "application/json"},
            timeout=15,
        )
        resp.raise_for_status()
        data = resp.json()

        if data.get("status") != "REQUEST_SUCCEEDED":
            return {"error": f"BLS status: {data.get('status')}"}

        series = data.get("Results", {}).get("series", [])
        if not series or not series[0].get("data"):
            return {"error": "No data returned for this series"}

        latest = series[0]["data"][0]
        try:
            count_thousands = float(latest["value"])
            count_formatted = f"{count_thousands * 1000:,.0f}"
        except (ValueError, TypeError):
            count_formatted = latest["value"]

        return {"count": count_formatted, "year": latest.get("year", "N/A")}

    except Exception as e:
        return {"error": str(e)}


def scrape_indeed_count(job_title: str) -> dict:
    """
    Scrapes the job count and salary info from an Indeed public search page.
    Returns: {"count": str, "salary_range": str} or {"error": str}

    NOTE: This is a best-effort scrape. If Indeed changes their HTML,
    update the CSS selectors here. No API key required.
    """
    if not job_title or job_title == "NA":
        return {"error": "No job title configured"}

    try:
        from bs4 import BeautifulSoup
    except ImportError:
        return {"error": "beautifulsoup4 not installed — run: pip install beautifulsoup4"}

    encoded_title = requests.utils.quote(job_title)
    url = f"https://www.indeed.com/jobs?q={encoded_title}&l=United+States"

    try:
        resp = requests.get(url, headers=INDEED_HEADERS, timeout=15)

        if resp.status_code == 403:
            return {"error": "Indeed blocked the request (403). Use BLS data instead."}
        if resp.status_code == 429:
            return {"error": "Indeed rate-limited (429). Wait and retry or use BLS data."}

        resp.raise_for_status()
        soup = BeautifulSoup(resp.text, "lxml")

        # Try to get the result count (Indeed's HTML may vary)
        count_str = "unknown"
        count_candidates = [
            soup.find("div", class_="jobsearch-JobCountAndSortPane-jobCount"),
            soup.find("div", attrs={"data-testid": "jobsearch-JobCountAndSortPane-jobCount"}),
            soup.find(string=re.compile(r"\d+[\d,]* jobs?")),
        ]
        for candidate in count_candidates:
            if candidate:
                text = candidate.get_text(strip=True) if hasattr(candidate, "get_text") else str(candidate)
                numbers = re.findall(r"[\d,]+", text)
                if numbers:
                    count_str = numbers[0]
                    break

        # Try to find salary ranges in job cards
        salary_matches = []
        for tag in soup.find_all(string=re.compile(r"\$[\d,]+")):
            salary_matches.append(str(tag).strip())

        salary_range = " / ".join(salary_matches[:3]) if salary_matches else "See BLS data"

        return {
            "count": count_str,
            "salary_range": salary_range,
            "url": url,
        }

    except Exception as e:
        return {"error": str(e), "url": url}


def run(config: dict) -> str:
    """
    Main function — pulls job market data from BLS + Indeed.
    Returns a formatted text block for the research brief.
    """
    soc_code      = config.get("bls_soc", "")
    job_title     = config.get("job_search_title", "")
    replaced_role = config.get("replaced_role", "")
    industry      = config.get("industry", "")

    output_lines = [
        "NODE 05 — JOB MARKET INTELLIGENCE",
        "─" * 60,
        f"Role replaced:     {replaced_role}",
        f"Industry:          {industry}",
        f"BLS SOC:           {soc_code}",
        f"Indeed search:     \"{job_title}\"",
        "",
    ]

    if soc_code == "NA" or not soc_code:
        output_lines.append("  [SKIPPED] No SOC code configured.")
        return "\n".join(output_lines)

    # ── BLS Employment Count ─────────────────────────────────────────────────
    output_lines.append("BLS EMPLOYMENT DATA:")
    bls_result = fetch_bls_employment(soc_code)
    if "error" in bls_result:
        output_lines += [
            f"  [ERROR] {bls_result['error']}",
            f"  Manual: https://www.bls.gov/oes/current/oes{soc_code.replace('-','')}.htm",
        ]
    else:
        output_lines += [
            f"  National employment:  {bls_result['count']} workers",
            f"  Data year:            {bls_result['year']}",
            f"  Source:               BLS OES series {build_employment_series(soc_code)}",
        ]
    output_lines.append("")

    time.sleep(2)

    # ── Indeed Job Listings ──────────────────────────────────────────────────
    output_lines.append("INDEED JOB LISTINGS (live, United States):")
    indeed_result = scrape_indeed_count(job_title)
    if "error" in indeed_result:
        output_lines += [
            f"  [ERROR] {indeed_result['error']}",
            f"  Manual: https://www.indeed.com/jobs?q={requests.utils.quote(job_title)}&l=United+States",
        ]
    else:
        output_lines += [
            f"  Open listings found:  {indeed_result.get('count', 'unknown')}",
            f"  Salary in postings:   {indeed_result.get('salary_range', 'N/A')}",
            f"  Search URL:           {indeed_result.get('url', '')}",
        ]
    output_lines.append("")

    output_lines += [
        "CITE IN PAGE COPY:",
        f"  'There are [X] open {replaced_role} positions in the US right now,",
        f"   with salaries ranging from [range]. That's the annual cost AI eliminates.'",
        "",
        "  Source citations:",
        f"  'Source: U.S. Bureau of Labor Statistics, OEWS {bls_result.get('year', '')}'",
        f"  'Source: Indeed job search, {time.strftime('%B %Y')}'",
    ]

    return "\n".join(output_lines)


if __name__ == "__main__":
    test_config = {
        "bls_soc": "43-4171",
        "job_search_title": "dental receptionist",
        "replaced_role": "Dental Receptionist",
        "industry": "Dental Practices",
    }
    print(run(test_config))
