// ─── SINGLE SOURCE OF TRUTH FOR ALL PRICING ─────────────────────────────────
//
// Update prices here → every page (SEO pages, hub page, CTAs) updates automatically.
// No other file should hardcode pricing numbers.
//

export const PRICING = {
  // ── Plans ──────────────────────────────────────────────────────────────────
  starter: {
    name: "Starter",
    monthly: { inr: 2499, usd: 299 },
    setup: { inr: 0, usd: 0 },
    voiceRate: { inr: 6, usd: 0.08 },
    includedMinutes: 100,
    concurrent: 1,
    maxCallsPerDay: 15,
  },
  professional: {
    name: "Professional",
    monthly: { inr: 9999, usd: 499 },
    setup: { inr: 15000, usd: 199 },
    voiceRate: { inr: 5, usd: 0.06 },
    includedMinutes: 1500,
    concurrent: 3,
    maxCallsPerDay: 40,
  },
  enterprise: {
    name: "Enterprise",
    monthly: { inr: 24999, usd: 999 },
    setup: { inr: 45000, usd: 599 },
    voiceRate: { inr: 4.5, usd: 0.05 },
    includedMinutes: 5000,
    concurrent: 10,
    maxCallsPerDay: 999,
  },

  // ── Booster Packs ─────────────────────────────────────────────────────────
  boosters: {
    starter: { inr: 600, usd: 8, minutes: 100 },
    professional: { inr: 2500, usd: 30, minutes: 500 },
    enterprise: { inr: 4500, usd: 55, minutes: 1000 },
  },

  agentBooster: {
    monthly: { inr: 799, usd: 10 },
  },

  // ── Human receptionist comparison (for AI vs Human pages) ─────────────────
  humanReceptionist: {
    india: { min: 15000, max: 25000 },      // ₹/month
    us: { min: 2000, max: 4000 },            // $/month
    uae: { min: 1500, max: 3000 },           // $/month
    uk: { min: 1800, max: 3500 },            // £/month (stored as $-equivalent)
  },
} as const;

// ─── Formatted strings (use these in content/copy) ──────────────────────────
// These are the strings you'll see in SEO pages, CTAs, FAQs, etc.

export const P = {
  // Starter plan
  starterINR: `₹${PRICING.starter.monthly.inr.toLocaleString("en-IN")}`,                    // "₹2,499"
  starterUSD: `$${PRICING.starter.monthly.usd}`,                                             // "$299"
  starterDual: `₹${PRICING.starter.monthly.inr.toLocaleString("en-IN")}/month ($${PRICING.starter.monthly.usd}/month)`,  // "₹2,499/month ($299/month)"
  starterShort: `₹${PRICING.starter.monthly.inr.toLocaleString("en-IN")}/$${PRICING.starter.monthly.usd} per month`,     // "₹2,499/$299 per month"

  // Professional plan
  proINR: `₹${PRICING.professional.monthly.inr.toLocaleString("en-IN")}`,                    // "₹9,999"
  proUSD: `$${PRICING.professional.monthly.usd}`,                                             // "$499"
  proDual: `₹${PRICING.professional.monthly.inr.toLocaleString("en-IN")}/month ($${PRICING.professional.monthly.usd}/month)`,

  // Enterprise plan
  entINR: `₹${PRICING.enterprise.monthly.inr.toLocaleString("en-IN")}`,                      // "₹24,999"
  entUSD: `$${PRICING.enterprise.monthly.usd}`,                                               // "$999"
  entDual: `₹${PRICING.enterprise.monthly.inr.toLocaleString("en-IN")}/month ($${PRICING.enterprise.monthly.usd}/month)`,

  // Human receptionist comparison
  humanINR: `₹${PRICING.humanReceptionist.india.min.toLocaleString("en-IN")}–₹${PRICING.humanReceptionist.india.max.toLocaleString("en-IN")}/month`,  // "₹15,000–₹25,000/month"
  humanUSD: `$${PRICING.humanReceptionist.us.min.toLocaleString("en-US")}–$${PRICING.humanReceptionist.us.max.toLocaleString("en-US")}/month`,        // "$2,000–$4,000/month"
  humanDual: `₹${PRICING.humanReceptionist.india.min.toLocaleString("en-IN")}–₹${PRICING.humanReceptionist.india.max.toLocaleString("en-IN")}/month ($${PRICING.humanReceptionist.us.min.toLocaleString("en-US")}–$${PRICING.humanReceptionist.us.max.toLocaleString("en-US")}/month)`,

  // "Starts at" strings (for CTAs, cost callouts)
  startsAt: `Starts at ₹${PRICING.starter.monthly.inr.toLocaleString("en-IN")}/month ($${PRICING.starter.monthly.usd}/month)`,
  startsAtINR: `Starts at ₹${PRICING.starter.monthly.inr.toLocaleString("en-IN")}/month`,
  startsAtUSD: `Starts at $${PRICING.starter.monthly.usd}/month`,
} as const;
