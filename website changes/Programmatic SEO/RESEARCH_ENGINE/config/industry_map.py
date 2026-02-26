"""
Agentic AI Labs — pSEO Research Engine
config/industry_map.py

PURPOSE:
  This is the single config file that maps page slugs to all data sources.
  To add a new page type: copy an existing entry, update the values, done.
  No other file needs to change.

STRUCTURE PER ENTRY:
  "slug": {
    "playbook":         Which playbook folder (01_PERSONAS, 02_INTEGRATIONS, etc.)
    "page_title":       Human-readable page name for the brief header
    "role":             AI role name (used in content)
    "industry":         Industry name (used in content)
    "replaced_role":    The human job this AI replaces (used in BLS + jobs lookup)
    "bls_soc":          BLS Standard Occupational Classification code
    "subreddits":       List of subreddits to search for pain quotes
    "reddit_keywords":  Search terms to use within those subreddits
    "rss_feeds":        List of RSS feed URLs for industry news
    "trends_keywords":  Keywords to check on Google Trends
    "job_search_title": Job title to search on Indeed
  }
"""

INDUSTRY_MAP = {

    # ─────────────────────────────────────────────────────────────────────────
    # PLAYBOOK 1: PERSONAS
    # ─────────────────────────────────────────────────────────────────────────

    "dental-practices": {
        "playbook": "01_PERSONAS",
        "page_title": "AI Receptionist for Dental Practices",
        "role": "AI Receptionist",
        "industry": "Dental Practices",
        "replaced_role": "Dental Receptionist",
        "bls_soc": "43-4171",  # Receptionists and Information Clerks
        "subreddits": ["Dentistry", "DentalAssistants", "smallbusiness"],
        "reddit_keywords": ["receptionist", "missed calls", "phone", "front desk", "appointment"],
        "rss_feeds": [
            "https://www.dentistrytoday.com/feed/",
            "https://www.dentaleconomics.com/rss",
        ],
        "trends_keywords": ["AI receptionist dental", "dental answering service", "dental AI"],
        "job_search_title": "dental receptionist",
    },

    "medical-clinics": {
        "playbook": "01_PERSONAS",
        "page_title": "AI Receptionist for Medical Clinics",
        "role": "AI Receptionist",
        "industry": "Medical Clinics",
        "replaced_role": "Medical Receptionist",
        "bls_soc": "43-4171",
        "subreddits": ["medicine", "healthcareworkers", "smallbusiness"],
        "reddit_keywords": ["receptionist", "missed calls", "scheduling", "phone", "front desk"],
        "rss_feeds": [
            "https://www.modernhealthcare.com/rss",
            "https://www.healthcareit.net/rss",
        ],
        "trends_keywords": ["AI medical receptionist", "medical clinic AI", "healthcare AI answering"],
        "job_search_title": "medical receptionist",
    },

    "med-spa": {
        "playbook": "01_PERSONAS",
        "page_title": "AI Receptionist for Med Spas",
        "role": "AI Receptionist",
        "industry": "Med Spas",
        "replaced_role": "Med Spa Receptionist",
        "bls_soc": "43-4171",
        "subreddits": ["MedSpa", "aesthetics", "smallbusiness"],
        "reddit_keywords": ["receptionist", "booking", "missed calls", "appointment", "front desk"],
        "rss_feeds": [
            "https://www.medspanews.com/feed",
            "https://www.aestheticsjournal.com/rss",
        ],
        "trends_keywords": ["AI receptionist med spa", "med spa booking AI", "aesthetics clinic AI"],
        "job_search_title": "med spa receptionist",
    },

    "recruiting-agencies": {
        "playbook": "01_PERSONAS",
        "page_title": "AI Interviewer for Recruiting Agencies",
        "role": "AI Interviewer",
        "industry": "Recruiting Agencies",
        "replaced_role": "Recruiter / HR Sourcer",
        "bls_soc": "13-1071",  # Human Resources Specialists
        "subreddits": ["recruiting", "humanresources", "HRpros"],
        "reddit_keywords": ["phone screens", "screening calls", "interviewing", "outreach", "applicants"],
        "rss_feeds": [
            "https://www.ere.net/feed/",
            "https://www.shrm.org/rss/rss.aspx",
        ],
        "trends_keywords": ["AI recruiter", "AI phone screening", "automated recruiting"],
        "job_search_title": "recruiter phone screen",
    },

    "ghl-agencies": {
        "playbook": "01_PERSONAS",
        "page_title": "AI SDR for GoHighLevel Agencies",
        "role": "AI SDR",
        "industry": "GoHighLevel Agencies",
        "replaced_role": "Sales Development Representative",
        "bls_soc": "41-3091",  # Sales Representatives, Services
        "subreddits": ["GHLusergroup", "DigitalMarketing", "agency"],
        "reddit_keywords": ["SDR", "outbound", "cold calls", "leads", "automation"],
        "rss_feeds": [
            "https://www.searchenginejournal.com/feed",
            "https://marketingland.com/feed",
        ],
        "trends_keywords": ["AI SDR GoHighLevel", "GHL AI automation", "AI lead qualification"],
        "job_search_title": "sales development representative",
    },

    "b2b-saas": {
        "playbook": "01_PERSONAS",
        "page_title": "AI SDR for B2B SaaS",
        "role": "AI SDR",
        "industry": "B2B SaaS",
        "replaced_role": "Sales Development Representative",
        "bls_soc": "41-3091",
        "subreddits": ["SaaS", "sales", "startups"],
        "reddit_keywords": ["SDR", "outbound", "cold email", "pipeline", "prospecting"],
        "rss_feeds": [
            "https://www.saastr.com/feed/",
            "https://blog.hubspot.com/marketing/rss.xml",
        ],
        "trends_keywords": ["AI SDR SaaS", "B2B AI sales", "automated outbound"],
        "job_search_title": "SaaS SDR outbound",
    },

    "ecommerce": {
        "playbook": "01_PERSONAS",
        "page_title": "AI Support Rep for E-Commerce",
        "role": "AI Support Rep",
        "industry": "E-Commerce",
        "replaced_role": "Customer Support Representative",
        "bls_soc": "43-4051",  # Customer Service Representatives
        "subreddits": ["ecommerce", "shopify", "FulfillmentByAmazon"],
        "reddit_keywords": ["support tickets", "returns", "order status", "customer service", "chargeback"],
        "rss_feeds": [
            "https://www.practicalecommerce.com/feed",
            "https://www.shopify.com/blog.atom",
        ],
        "trends_keywords": ["AI customer support ecommerce", "Shopify AI chatbot", "ecommerce AI support"],
        "job_search_title": "ecommerce customer support",
    },

    "real-estate": {
        "playbook": "01_PERSONAS",
        "page_title": "AI Showing Coordinator for Real Estate",
        "role": "AI Showing Coordinator",
        "industry": "Real Estate",
        "replaced_role": "Real Estate Admin / Showing Coordinator",
        "bls_soc": "43-6014",  # Secretaries and Administrative Assistants
        "subreddits": ["realestateinvesting", "REAgents", "realestate"],
        "reddit_keywords": ["showings", "leads", "follow-up", "CRM", "missed calls", "inquiries"],
        "rss_feeds": [
            "https://www.inman.com/feed/",
            "https://www.nar.realtor/rss/newsroom.xml",
        ],
        "trends_keywords": ["AI real estate agent", "real estate AI automation", "property AI"],
        "job_search_title": "real estate showing coordinator",
    },

    "hvac": {
        "playbook": "01_PERSONAS",
        "page_title": "AI Dispatch Agent for HVAC Companies",
        "role": "AI Dispatch Agent",
        "industry": "HVAC Companies",
        "replaced_role": "Dispatcher / Service Coordinator",
        "bls_soc": "43-5032",  # Dispatchers (except police, fire, ambulance)
        "subreddits": ["HVAC", "hvacadvice", "smallbusiness"],
        "reddit_keywords": ["dispatch", "missed calls", "scheduling", "service calls", "technician"],
        "rss_feeds": [
            "https://www.achrnews.com/rss",
            "https://www.contractingbusiness.com/rss.xml",
        ],
        "trends_keywords": ["AI HVAC dispatch", "HVAC scheduling software AI", "field service AI"],
        "job_search_title": "HVAC dispatcher",
    },

    "gyms": {
        "playbook": "01_PERSONAS",
        "page_title": "AI Membership Advisor for Gyms",
        "role": "AI Membership Advisor",
        "industry": "Fitness / Gyms",
        "replaced_role": "Gym Front Desk / Membership Sales",
        "bls_soc": "43-4171",
        "subreddits": ["gymowners", "personaltraining", "fitness"],
        "reddit_keywords": ["membership", "churn", "cancellations", "front desk", "booking"],
        "rss_feeds": [
            "https://www.clubindustry.com/rss",
            "https://www.ihrsa.org/feed/",
        ],
        "trends_keywords": ["AI gym membership", "fitness studio AI", "gym automation"],
        "job_search_title": "gym membership sales",
    },

    # ─────────────────────────────────────────────────────────────────────────
    # PLAYBOOK 2: INTEGRATIONS
    # ─────────────────────────────────────────────────────────────────────────

    "gohighlevel": {
        "playbook": "02_INTEGRATIONS",
        "page_title": "AI Voice Agent for GoHighLevel",
        "role": "AI Voice Agent",
        "industry": "GoHighLevel Agencies",
        "replaced_role": "SDR / Customer Success",
        "bls_soc": "41-3091",
        "subreddits": ["GHLusergroup", "DigitalMarketing", "agency"],
        "reddit_keywords": ["GHL AI", "GoHighLevel voice", "automation", "AI calls", "workflow"],
        "rss_feeds": [
            "https://www.searchenginejournal.com/feed",
        ],
        "trends_keywords": ["GoHighLevel AI", "GHL voice agent", "GHL automation AI"],
        "job_search_title": "GoHighLevel specialist",
    },

    "hubspot": {
        "playbook": "02_INTEGRATIONS",
        "page_title": "AI Agent HubSpot Integration",
        "role": "AI Agent",
        "industry": "HubSpot Users",
        "replaced_role": "Sales / Support Rep",
        "bls_soc": "41-3091",
        "subreddits": ["hubspot", "sales", "CRM"],
        "reddit_keywords": ["HubSpot AI", "CRM automation", "sales AI", "HubSpot integration"],
        "rss_feeds": [
            "https://blog.hubspot.com/marketing/rss.xml",
        ],
        "trends_keywords": ["HubSpot AI integration", "AI for HubSpot", "HubSpot automation AI"],
        "job_search_title": "HubSpot specialist",
    },

    # ─────────────────────────────────────────────────────────────────────────
    # PLAYBOOK 3: COMPARISONS
    # ─────────────────────────────────────────────────────────────────────────

    "vapi-alternative": {
        "playbook": "03_COMPARISONS",
        "page_title": "Vapi Alternative — Full AI System",
        "role": "AI System",
        "industry": "Voice AI users",
        "replaced_role": "NA",
        "bls_soc": "NA",
        "subreddits": ["artificial", "MachineLearning", "startups"],
        "reddit_keywords": ["Vapi alternative", "Vapi review", "Vapi memory", "voice agent production"],
        "rss_feeds": [
            "https://www.therundown.ai/rss",
            "https://techcrunch.com/feed/",
        ],
        "trends_keywords": ["Vapi alternative", "Vapi vs", "AI voice agent alternative"],
        "job_search_title": "NA",
    },

    # ─────────────────────────────────────────────────────────────────────────
    # PLAYBOOK 4: GLOSSARY
    # ─────────────────────────────────────────────────────────────────────────

    "what-is-ai-receptionist": {
        "playbook": "04_GLOSSARY",
        "page_title": "What is an AI Receptionist?",
        "role": "AI Receptionist",
        "industry": "General",
        "replaced_role": "Receptionist",
        "bls_soc": "43-4171",
        "subreddits": ["artificial", "smallbusiness", "Dentistry"],
        "reddit_keywords": ["AI receptionist", "virtual receptionist", "automated answering"],
        "rss_feeds": [
            "https://www.therundown.ai/rss",
            "https://techcrunch.com/feed/",
        ],
        "trends_keywords": ["AI receptionist", "virtual receptionist AI", "what is AI receptionist"],
        "job_search_title": "receptionist",
    },

}


def get_config(slug: str) -> dict:
    """
    Returns the config dict for a given slug.
    Raises KeyError with helpful message if slug not found.
    """
    if slug not in INDUSTRY_MAP:
        available = "\n  - ".join(INDUSTRY_MAP.keys())
        raise KeyError(
            f"\n\nSlug '{slug}' not found in industry_map.py.\n"
            f"Available slugs:\n  - {available}\n\n"
            f"To add a new page type, add an entry to INDUSTRY_MAP in config/industry_map.py"
        )
    return INDUSTRY_MAP[slug]
