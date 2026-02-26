"""
NODE 03 — Google Trends
node_03_google_trends.py

SOURCE:   pytrends (unofficial Google Trends wrapper — free, no API key)
INSTALL:  pip install pytrends
PULLS:    12-month interest trend for target keywords
          Rising related queries
          Top states by search volume
OUTPUTS:  Formatted text section with trend data for page copy

NOTE:
  Google Trends returns relative interest (0-100 scale), not absolute volumes.
  This is still highly citable: "interest grew from 12 to 89 over 12 months"
  is meaningful and compelling even without absolute numbers.

  If you get a 429 (rate limit): wait 1-2 hours and retry.
"""

import time


def run(config: dict) -> str:
    """
    Main function — fetches Google Trends data for the configured keywords.
    Returns a formatted text block for the research brief.
    """
    keywords   = config.get("trends_keywords", [])
    industry   = config.get("industry", "")
    role       = config.get("role", "")

    output_lines = [
        "NODE 03 — GOOGLE TRENDS",
        "─" * 60,
        f"Industry:        {industry}",
        f"Role:            {role}",
        f"Keywords:        {', '.join(keywords)}",
        f"Source:          Google Trends via pytrends (12-month window, US)",
        "",
    ]

    if not keywords:
        output_lines.append("  [SKIPPED] No trend keywords configured.")
        return "\n".join(output_lines)

    # Try to import pytrends — give helpful error if not installed
    try:
        from pytrends.request import TrendReq
    except ImportError:
        output_lines += [
            "  [ERROR] pytrends not installed.",
            "  Run: pip install pytrends",
            "",
            "  Manual fallback:",
            f"  https://trends.google.com/trends/explore?q={'+'.join(keywords[:2])}&geo=US",
        ]
        return "\n".join(output_lines)

    try:
        # Use the first 2 keywords (pytrends accepts max 5, but keep it focused)
        target_keywords = keywords[:2]

        pytrends = TrendReq(hl="en-US", tz=360)
        time.sleep(3)  # Avoid rate limiting

        pytrends.build_payload(
            target_keywords,
            cat=0,
            timeframe="today 12-m",
            geo="US",
            gprop=""
        )

        # ── Interest over time ───────────────────────────────────────────────
        interest_df = pytrends.interest_over_time()

        if interest_df is None or interest_df.empty:
            output_lines.append("  [NO DATA] Google returned empty interest data. Try again later.")
            output_lines.append(f"  Manual: https://trends.google.com/trends/explore?q={target_keywords[0]}&geo=US")
            return "\n".join(output_lines)

        # Drop the 'isPartial' column
        if "isPartial" in interest_df.columns:
            interest_df = interest_df.drop(columns=["isPartial"])

        for kw in target_keywords:
            if kw not in interest_df.columns:
                continue
            series = interest_df[kw]
            first_val = series.iloc[0] if not series.empty else 0
            last_val  = series.iloc[-1] if not series.empty else 0
            peak_val  = series.max()
            peak_date = series.idxmax()

            if first_val > 0:
                growth_pct = round(((last_val - first_val) / first_val) * 100)
                growth_str = f"+{growth_pct}%" if growth_pct >= 0 else f"{growth_pct}%"
            else:
                growth_str = "N/A (started from 0)"

            output_lines += [
                f"KEYWORD: \"{kw}\"",
                f"  12-month range:   {first_val} → {last_val} (relative interest, 0-100)",
                f"  Growth:           {growth_str} over 12 months",
                f"  Peak interest:    {peak_val} in {peak_date.strftime('%B %Y') if hasattr(peak_date, 'strftime') else peak_date}",
                "",
            ]

        time.sleep(3)

        # ── Regional interest ────────────────────────────────────────────────
        try:
            regional_df = pytrends.interest_by_region(resolution="REGION", inc_low_vol=False)
            if not regional_df.empty:
                kw = target_keywords[0]
                if kw in regional_df.columns:
                    top_states = regional_df[kw].sort_values(ascending=False).head(5)
                    output_lines.append("TOP STATES BY SEARCH INTEREST:")
                    for state, val in top_states.items():
                        output_lines.append(f"  {state:<20} {val}")
                    output_lines.append("")
        except Exception as e:
            output_lines.append(f"  [Regional data skipped: {e}]")
            output_lines.append("")

        time.sleep(3)

        # ── Rising related queries ───────────────────────────────────────────
        try:
            related = pytrends.related_queries()
            for kw in target_keywords:
                kw_data = related.get(kw, {})
                rising  = kw_data.get("rising")
                if rising is not None and not rising.empty:
                    output_lines.append(f"RISING RELATED QUERIES for \"{kw}\":")
                    for _, row in rising.head(5).iterrows():
                        output_lines.append(f"  {row['query']}  (value: {row['value']})")
                    output_lines.append("")
        except Exception as e:
            output_lines.append(f"  [Related queries skipped: {e}]")
            output_lines.append("")

        output_lines += [
            "CITE IN PAGE COPY:",
            f"  'Searches for \"{target_keywords[0]}\" have grown [X]% in the last 12 months",
            "   (Google Trends, United States).'",
            "  Use the rising related queries as additional H2/H3 topics to target.",
        ]

    except Exception as e:
        output_lines += [
            f"  [ERROR] {str(e)}",
            "",
            "  Common fix: Wait 30-60 minutes if rate-limited (429 error).",
            "  Manual fallback:",
            f"  https://trends.google.com/trends/explore?q={keywords[0]}&geo=US",
        ]

    return "\n".join(output_lines)


if __name__ == "__main__":
    test_config = {
        "industry": "Dental Practices",
        "role": "AI Receptionist",
        "trends_keywords": ["AI receptionist dental", "dental answering service"],
    }
    print(run(test_config))
