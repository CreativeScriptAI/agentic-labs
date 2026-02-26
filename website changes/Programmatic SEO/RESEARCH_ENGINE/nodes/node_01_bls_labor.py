"""
NODE 01 — BLS Labor Market Data
node_01_bls_labor.py

SOURCE:   Bureau of Labor Statistics Occupational Employment & Wage Statistics (OEWS)
API:      https://api.bls.gov/publicAPI/v1/timeseries/data/ (free, no key)
PULLS:    Median annual wage, mean annual wage, national employment count
OUTPUTS:  plaintext section for the research brief
"""

import requests
import time


# BLS API v1 base URL (no registration required, 25 req/day limit)
BLS_API_URL = "https://api.bls.gov/publicAPI/v1/timeseries/data/"

# Readable labels for BLS measure codes
MEASURE_LABELS = {
    "W": "Mean Annual Wage",
    "A": "Mean Hourly Wage",
    "E": "Employment (thousands)",
}

def build_series_id(soc_code: str, measure: str = "W") -> str:
    """
    Builds a BLS OES national series ID.
    BLS OES series format: OE + U + N + {12-digit area} + {4-digit industry} + {6-digit SOC} + {2 ownership} + {2 level} + {measure}
    National area code = 0000000000 (10 zeros), all industries = 000000, all ownership = 00, all level = 0

    Example for SOC 43-4171, mean annual wage:
      OEUN000000000000000004317100000W
    """
    soc_clean = soc_code.replace("-", "")  # e.g. "434171"
    # Documented format from BLS: OEU + seasonality + area(10) + industry(6) + occupation(8) + datatype(1)
    # Simplest confirmed working format for national OES:
    series_id = f"OEUN0000000000{soc_clean.ljust(8,'0')}0{measure}"
    return series_id


def fetch_bls_series(series_ids: list) -> dict:
    """
    Fetches one or more BLS series from the v1 API.
    Returns: dict of {series_id: [data_points]}
    """
    headers = {"Content-type": "application/json"}
    payload = {"seriesid": series_ids}

    try:
        response = requests.post(BLS_API_URL, json=payload, headers=headers, timeout=15)
        response.raise_for_status()
        data = response.json()

        if data.get("status") != "REQUEST_SUCCEEDED":
            return {"error": f"BLS API returned status: {data.get('status')} — {data.get('message', '')}"}

        result = {}
        for series in data.get("Results", {}).get("series", []):
            sid = series["seriesID"]
            result[sid] = series.get("data", [])
        return result

    except requests.exceptions.RequestException as e:
        return {"error": f"Request failed: {str(e)}"}
    except Exception as e:
        return {"error": f"Parsing failed: {str(e)}"}


def get_latest_value(data_points: list) -> dict:
    """Extracts the most recent data point from the series."""
    if not data_points:
        return {"value": "N/A", "year": "N/A", "period": "N/A"}
    latest = data_points[0]  # BLS returns newest first
    return {
        "value": latest.get("value", "N/A"),
        "year": latest.get("year", "N/A"),
        "period": latest.get("periodName", "N/A"),
    }


def run(config: dict) -> str:
    """
    Main function — runs BLS node for the given industry config.
    Returns a formatted text block for the research brief.
    """
    soc = config.get("bls_soc", "")
    role_name = config.get("replaced_role", "")
    industry = config.get("industry", "")

    output_lines = [
        "NODE 01 — BLS LABOR MARKET DATA",
        "─" * 60,
        f"Role replaced:     {role_name}",
        f"Industry:          {industry}",
        f"BLS SOC code:      {soc}",
        f"Source:            U.S. Bureau of Labor Statistics (OEWS)",
        "",
    ]

    if not soc or soc == "NA":
        output_lines.append("  [SKIPPED] No BLS SOC code configured for this slug.")
        return "\n".join(output_lines)

    # Build series IDs for wage and employment
    series_wage_mean   = build_series_id(soc, "W")   # mean annual wage
    series_employment  = build_series_id(soc, "E")   # employment count

    output_lines.append(f"Series IDs queried:")
    output_lines.append(f"  Wage (mean annual):  {series_wage_mean}")
    output_lines.append(f"  Employment count:    {series_employment}")
    output_lines.append("")

    # Fetch data
    raw = fetch_bls_series([series_wage_mean, series_employment])

    if "error" in raw:
        output_lines.append(f"  [ERROR] {raw['error']}")
        output_lines.append("")
        output_lines.append("  Fallback — use these BLS.gov reference pages manually:")
        output_lines.append(f"  https://www.bls.gov/oes/current/oes{soc.replace('-','')}.htm")
        return "\n".join(output_lines)

    # Parse results
    wage_data = raw.get(series_wage_mean, [])
    emp_data  = raw.get(series_employment, [])

    wage_latest = get_latest_value(wage_data)
    emp_latest  = get_latest_value(emp_data)

    # Format wage
    try:
        wage_val = float(wage_latest["value"])
        wage_fmt = f"${wage_val:,.0f}/year"
        hourly_est = f"(~${wage_val/2080:.2f}/hour)"
    except (ValueError, TypeError):
        wage_fmt = wage_latest["value"]
        hourly_est = ""

    # Format employment
    try:
        emp_thousands = float(emp_latest["value"])
        emp_fmt = f"{emp_thousands * 1000:,.0f} workers nationally"
    except (ValueError, TypeError):
        emp_fmt = emp_latest["value"]

    output_lines += [
        f"MEAN ANNUAL WAGE:      {wage_fmt} {hourly_est}",
        f"  Period:              {wage_latest['period']} {wage_latest['year']}",
        "",
        f"NATIONAL EMPLOYMENT:   {emp_fmt}",
        f"  Period:              {emp_latest['period']} {emp_latest['year']}",
        "",
        "CITE IN PAGE COPY:",
        f"  'The average {role_name} earns {wage_fmt} — that's the fixed",
        f"   annual cost before a single missed call or training hour.'",
        "",
        "  Source citation: U.S. Bureau of Labor Statistics, Occupational",
        f"  Employment and Wage Statistics (OEWS), {wage_latest['year']}.",
        "",
        "BLS DETAIL PAGE:",
        f"  https://www.bls.gov/oes/current/oes{soc.replace('-','')}.htm",
    ]

    return "\n".join(output_lines)


if __name__ == "__main__":
    # Quick test — run: python node_01_bls_labor.py
    test_config = {
        "replaced_role": "Dental Receptionist",
        "industry": "Dental Practices",
        "bls_soc": "43-4171",
    }
    print(run(test_config))
