import { NextPageWithLayout } from "../../types";
import MetaConfig from "src/components/MetaConfig";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamic imports for below-fold sections (Next.js best practice)
const FAQSection = dynamic(() => import("../ai-memory-system/components/FAQSection"), { ssr: true });
const ProductionVsDemo = dynamic(() => import("../ai-memory-system/components/ProductionVsDemo"), { ssr: true });
const AIMemoryByRole = dynamic(() => import("../ai-memory-system/components/AIMemoryByRole"), { ssr: true });
const AIMemoryByIndustry = dynamic(() => import("../ai-memory-system/components/AIMemoryByIndustry"), { ssr: true });
const HowWeBuildIt = dynamic(() => import("../ai-memory-system/components/HowWeBuildIt"), { ssr: true });

// Reusable section wrapper component
const Section = ({
    children,
    bgColor = "white",
    id
}: {
    children: React.ReactNode;
    bgColor?: "white" | "gray";
    id?: string;
}) => (
    <div
        id={id}
        className="py-12 sm:py-16 lg:py-20"
        style={{
            backgroundColor: bgColor === "gray" ? "#F9F6F4" : "white",
            width: bgColor === "gray" ? "calc(100% + 2rem)" : "100%",
            marginLeft: bgColor === "gray" ? "-1rem" : "0",
            marginRight: bgColor === "gray" ? "-1rem" : "0",
        }}
    >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    </div>
);

// CTA Button Component (matching existing design system)
const CTAButton = ({
    href,
    label,
    variant = "primary"
}: {
    href: string;
    label: string;
    variant?: "primary" | "secondary";
}) => (
    <Link
        href={href}
        className={`inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-base transition-colors ${variant === "primary"
            ? "bg-[#FCCA07] text-[#0A1128] hover:bg-yellow-500"
            : "bg-white text-[#0A1128] hover:bg-gray-50 border border-gray-200 shadow-sm"
            }`}
    >
        {label}
    </Link>
);

const AIMemorySystemPage: NextPageWithLayout = () => {
    const meta = {
        title: "AI Memory System: Build AI That Actually Remembers Your Customers | Agentic AI Labs",
        description: "You spent $50K on an AI receptionist. Your customer called twice. The AI asked for their name both times. You just paid for a parrot with a phone line.",
        type: "Article",
        url: "https://www.tryagentikai.com/ai-memory-system",
        keywords: [
            "ai memory system",
            "ai agent memory",
            "persistent ai memory",
            "ai that remembers customers",
            "production ai memory",
            "ai receptionist with memory",
            "ai voice agent memory",
        ],
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: 'What exactly is an "AI memory system" vs. a "memory tool"?',
                acceptedAnswer: {
                    "@type": "Answer",
                    text: 'A memory tool stores data. An AI memory system integrates that storage with voice agents and automation so the AI can actually use the memory in real conversations. A database is a memory tool. A receptionist who remembers every patient is a memory system. We build the system. The tools are components inside it.',
                },
            },
            {
                "@type": "Question",
                name: "How much memory can the AI store?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "As much as you need. We use tiered storage: Hot memory (last 30 days) for fast retrieval of active customers, and cold memory (older than 30 days) for cheap archival storage. Your AI can remember 10,000+ customer interactions without breaking the bank.",
                },
            },
            {
                "@type": "Question",
                name: "Is AI memory HIPAA/GDPR compliant?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "We design the system around your compliance requirements: PII redaction (no SSNs, credit cards, or health records stored in memory), encryption at rest and in transit, user control (customers can view, edit, or delete their memory), and audit logs. If you're in a regulated industry, we align storage, retention, access controls, and vendor setup to your specific requirements.",
                },
            },
        ],
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "AI Memory System: Build AI That Actually Remembers Your Customers",
        description: "You spent $50K on an AI receptionist. Your customer called twice. The AI asked for their name both times. You just paid for a parrot with a phone line.",
        author: {
            "@type": "Organization",
            name: "Agentic AI Labs",
        },
        publisher: {
            "@type": "Organization",
            name: "Agentic AI Labs",
            logo: {
                "@type": "ImageObject",
                url: "https://www.tryagentikai.com/logo.png",
            },
        },
        datePublished: "2026-02-11",
        dateModified: "2026-02-11",
    };

    return (
        <>
            <MetaConfig {...meta} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            {/* Hero Section - Minimal & Clean */}
            <div className="relative overflow-hidden bg-[#F9F6F4] w-[calc(100%+2rem)] pt-32 pb-16 sm:py-24 flex items-center">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col max-w-6xl mx-auto py-12 sm:py-16 lg:py-20">
                        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
                            {/* Main Headline */}
                            <h1
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-4 sm:mb-6 text-center font-mondwest tracking-tight"
                                style={{ textWrap: "balance" }}
                            >
                                <span>You spent $50K on an AI receptionist. </span>
                                <span className="text-gray-500">Your customer called twice. </span>
                                <span className="text-blue-600 block sm:inline">The AI asked for their name both times.</span>
                            </h1>

                            {/* Subtitle */}
                            <p className="text-center text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl px-4">
                                Your AI forgets your customers because memory tools ≠ memory systems.
                            </p>
                            <p className="text-center text-slate-800 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-3xl px-4">
                                We build the full stack (voice + memory + automation) so your AI actually remembers who it's talking to.
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-4">
                                <CTAButton href="/book-a-call" label="Book a Free Memory Audit" />
                                <a
                                    href="#the-moment"
                                    className="text-sm sm:text-base font-medium text-blue-600 hover:text-blue-700 transition-colors px-4 py-3"
                                >
                                    See What Breaks &darr;
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 1: The Moment (Story-Driven Pain) */}
            <Section id="the-moment">
                <div className="max-w-3xl mx-auto">
                    {/* Section Header */}
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1128] font-mondwest mb-8 text-center">
                        This happened last Tuesday.
                    </h2>

                    {/* Timeline */}
                    <div className="space-y-8 border-l-4 border-blue-600 pl-6 sm:pl-8">
                        {/* Monday 10:15 AM */}
                        <div className="relative">
                            <div className="absolute -left-[30px] sm:-left-[34px] w-4 h-4 rounded-full bg-blue-600 border-4 border-white" />
                            <p className="font-bold text-blue-600 font-sfpro text-sm sm:text-base mb-2">
                                10:15 AM — Monday
                            </p>
                            <p className="text-gray-700 font-sfpro text-base sm:text-lg mb-3">
                                Sarah calls your dental practice.
                            </p>
                            <div className="space-y-2 text-gray-600 font-sfpro text-sm sm:text-base italic">
                                <p><strong>AI Receptionist:</strong> "Hi! How can I help you today?"</p>
                                <p><strong>Sarah:</strong> "I need to book a cleaning."</p>
                                <p><strong>AI:</strong> "Great! How about Thursday at 2 PM?"</p>
                                <p><strong>Sarah:</strong> "Perfect."</p>
                                <p><strong>AI:</strong> "Done. You'll get a confirmation text."</p>
                            </div>
                        </div>

                        {/* Wednesday 3:42 PM */}
                        <div className="relative">
                            <div className="absolute -left-[30px] sm:-left-[34px] w-4 h-4 rounded-full bg-blue-600 border-4 border-white" />
                            <p className="font-bold text-blue-600 font-sfpro text-sm sm:text-base mb-2">
                                3:42 PM — Wednesday
                            </p>
                            <p className="text-gray-700 font-sfpro text-base sm:text-lg mb-3">
                                Sarah calls back.
                            </p>
                            <div className="space-y-2 text-gray-600 font-sfpro text-sm sm:text-base italic">
                                <p><strong>AI Receptionist:</strong> "Hi! How can I help you today?"</p>
                                <p><strong>Sarah:</strong> "I need to reschedule my Thursday appointment."</p>
                                <p><strong>AI:</strong> "Sure! What's your name?"</p>
                                <p><strong>Sarah:</strong> "...Sarah. I called Monday. You booked me for Thursday."</p>
                                <p><strong>AI:</strong> "Let me look that up. Can you spell your last name?"</p>
                            </div>
                        </div>

                        {/* Wednesday 3:43 PM */}
                        <div className="relative">
                            <div className="absolute -left-[30px] sm:-left-[34px] w-4 h-4 rounded-full bg-red-600 border-4 border-white" />
                            <p className="font-bold text-red-600 font-sfpro text-sm sm:text-base mb-2">
                                3:43 PM — Wednesday
                            </p>
                            <div className="space-y-2 text-gray-700 font-sfpro text-base sm:text-lg">
                                <p>Sarah hangs up.</p>
                                <p>She calls your competitor.</p>
                                <p>Books with them instead.</p>
                            </div>
                        </div>
                    </div>

                    {/* Final Impact */}
                    <div className="mt-8 p-6 bg-red-50 border-l-4 border-red-600 rounded-r-lg">
                        <p className="text-red-900 font-sfpro text-lg sm:text-xl font-bold">
                            You just lost a $50K/year patient because your AI has the memory of a goldfish.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Section 2: The Uncomfortable Truth - Simplified */}
            <Section bgColor="gray">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1128] font-mondwest mb-8 text-center">
                        "But my AI works fine."
                    </h2>

                    <div className="space-y-6 text-gray-700 font-sfpro text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
                        <p className="text-center">Does it?</p>
                        <p className="text-center">Here's what's happening right now:</p>

                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <ul className="space-y-3 text-gray-700 font-sfpro text-base sm:text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>Your AI handles 300 calls/month</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>40% are returning customers</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span className="font-bold text-gray-900">Every single one gets treated like a stranger</span>
                                </li>
                            </ul>
                        </div>

                        <p className="text-center text-gray-700">
                            Your customers are calling back. Asking follow-up questions. Rescheduling appointments. Checking order status.
                        </p>
                        <p className="text-center text-[#0A1128] font-bold text-xl sm:text-2xl">
                            And your AI says: "Hi! How can I help you today?"
                        </p>
                        <p className="text-center text-gray-500 italic text-base">
                            Like it's never met them before.
                        </p>
                    </div>

                    {/* Stats Block - Minimal Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                            <p className="text-5xl sm:text-6xl font-bold text-blue-600 font-mondwest mb-2">23%</p>
                            <p className="text-gray-700 font-sfpro text-sm leading-relaxed">
                                Customer churn rate when AI doesn't remember them
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                            <p className="text-5xl sm:text-6xl font-bold text-blue-600 font-mondwest mb-2">$127K</p>
                            <p className="text-gray-700 font-sfpro text-sm leading-relaxed">
                                Average annual revenue lost per 1,000 customers
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                            <p className="text-5xl sm:text-6xl font-bold text-blue-600 font-mondwest mb-2">6 mo</p>
                            <p className="text-gray-700 font-sfpro text-sm leading-relaxed">
                                How long it takes competitors to steal your customers
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 text-center space-y-2">
                        <p className="text-gray-700 font-sfpro text-xl sm:text-2xl font-bold">
                            This isn't a feature gap.
                        </p>
                        <p className="text-blue-600 font-sfpro text-2xl sm:text-3xl font-bold">
                            It's a revenue leak.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Section 3: What is AI Memory */}
            <Section bgColor="gray" id="what-is-ai-memory">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8 sm:mb-12">
                        <p className="text-red-500 font-medium text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6 font-sfpro">
                            DEFINITION
                        </p>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest mb-6">
                            What is AI memory?
                        </h2>
                        <p className="text-gray-600 font-sfpro text-lg sm:text-xl mb-4">
                            (and why it's not a database)
                        </p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 font-sfpro text-base sm:text-lg leading-relaxed mb-6">
                            AI memory is what lets your AI agent remember customers, conversations, and context across interactions—days, weeks, or months later.
                        </p>
                        <p className="text-gray-700 font-sfpro text-base sm:text-lg leading-relaxed mb-6">
                            It's not a database. Databases store facts. Memory stores <strong>understanding</strong>.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-white p-6 rounded-lg border border-gray-200">
                                <h4 className="font-bold text-gray-900 font-sfpro text-lg mb-3">Database thinking:</h4>
                                <ul className="space-y-2 text-gray-700 font-sfpro text-sm">
                                    <li>• Customer ID: 12345</li>
                                    <li>• Name: Sarah</li>
                                    <li>• Last call: 2026-02-05</li>
                                    <li>• Status: Qualified lead</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                <h4 className="font-bold text-blue-900 font-sfpro text-lg mb-3">Memory thinking:</h4>
                                <ul className="space-y-2 text-blue-800 font-sfpro text-sm">
                                    <li>• Sarah called Monday about pricing for her dental practice</li>
                                    <li>• She was concerned about HIPAA compliance</li>
                                    <li>• She's comparing 3 vendors</li>
                                    <li>• She wants to go live before March</li>
                                    <li>• She prefers email follow-ups, not calls</li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-gray-700 font-sfpro text-base sm:text-lg leading-relaxed">
                            The database knows <strong>what</strong> happened. Memory knows <strong>why</strong> it matters.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Three Types of Memory */}
            <Section id="memory-types">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1128] font-mondwest mb-8 text-center">
                        The three types of AI memory
                    </h3>
                    <p className="text-gray-700 font-sfpro text-base sm:text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                        Modern AI memory systems (like the ones we build at Agentic AI Labs) use a <strong>layered architecture</strong>—similar to how human memory works:
                    </p>

                    <div className="space-y-6">
                        {/* Memory Type 1 */}
                        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-200">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl sm:text-4xl font-bold text-blue-600/15 font-mondwest">01</span>
                                <h4 className="text-lg sm:text-xl font-bold text-[#0A1128] font-mondwest">
                                    Short-Term Memory (Working Memory)
                                </h4>
                            </div>
                            <div className="space-y-3 text-sm sm:text-base text-gray-700 font-sfpro">
                                <p><strong>What it does:</strong> Holds the immediate context of the current conversation.</p>
                                <p><strong>Example:</strong> "You just told me you need an AI receptionist for a 5-doctor practice. Got it. Let me ask about your current call volume..."</p>
                                <p><strong>Technical reality:</strong> This lives in the AI's prompt or temporary RAM. Limited by the model's context window (usually 8K-128K tokens).</p>
                                <p><strong className="text-red-600">When it breaks:</strong> Long conversations exceed the context window. The AI "forgets" the beginning of the call by the end.</p>
                            </div>
                        </div>

                        {/* Memory Type 2 */}
                        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-200">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl sm:text-4xl font-bold text-blue-600/15 font-mondwest">02</span>
                                <h4 className="text-lg sm:text-xl font-bold text-[#0A1128] font-mondwest">
                                    Long-Term Memory (Episodic + Semantic Memory)
                                </h4>
                            </div>
                            <div className="space-y-3 text-sm sm:text-base text-gray-700 font-sfpro">
                                <p><strong>What it does:</strong> Stores past interactions, customer history, preferences, and learned patterns.</p>
                                <p><strong>Episodic Memory:</strong> Specific events. "Sarah called on Feb 5 and asked about HIPAA compliance."</p>
                                <p><strong>Semantic Memory:</strong> General knowledge. "Dental practices care about HIPAA. Real estate firms care about lead response time."</p>
                                <p><strong>Example:</strong> When Sarah calls back 2 weeks later, the AI remembers her previous questions, her timeline, and her concerns—without asking again.</p>
                                <p><strong>Technical reality:</strong> Stored in vector databases (embeddings for semantic search) + relational databases (structured event logs). Retrieval-Augmented Generation (RAG) pulls relevant memories into the current prompt.</p>
                                <p><strong className="text-red-600">When it breaks:</strong> Poor retrieval logic. The AI remembers everything but can't find the right memory at the right time. Or it pulls irrelevant memories and pollutes the context.</p>
                            </div>
                        </div>

                        {/* Memory Type 3 */}
                        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-200">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl sm:text-4xl font-bold text-blue-600/15 font-mondwest">03</span>
                                <h4 className="text-lg sm:text-xl font-bold text-[#0A1128] font-mondwest">
                                    Procedural Memory (Shared Memory Across Agents)
                                </h4>
                            </div>
                            <div className="space-y-3 text-sm sm:text-base text-gray-700 font-sfpro">
                                <p><strong>What it does:</strong> Stores how to perform tasks, successful action patterns, and shared knowledge across multiple AI agents.</p>
                                <p><strong>Example:</strong> Your AI Receptionist learns that "Dr. Smith's patients prefer morning appointments." Your AI Follow-Up Agent uses that same knowledge when scheduling callbacks.</p>
                                <p><strong>Technical reality:</strong> Multi-agent systems share a unified memory layer. Agent A writes to memory. Agent B reads from it. They collaborate without repeating work.</p>
                                <p><strong className="text-red-600">When it breaks:</strong> Memory silos. Each agent has its own memory. Your customer repeats themselves to every AI they talk to.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-8 text-center">
                        <p className="font-bold text-blue-900 font-sfpro text-base sm:text-lg">
                            Key Insight: Most AI tools give you short-term memory (the conversation context). We build systems with all three layers—connected.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Production vs Demo Section */}
            <ProductionVsDemo />

            {/* Mid-Page CTA */}
            <Section bgColor="gray">
                <div className="text-center max-w-2xl mx-auto">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1128] font-mondwest mb-4">
                        Ready to build AI that actually remembers?
                    </h3>
                    <p className="text-gray-700 font-sfpro text-base sm:text-lg mb-6">
                        Book a free 15-minute memory audit. We'll show you exactly what's broken and how to fix it.
                    </p>
                    <CTAButton href="/book-a-call" label="Book Your Free Memory Audit" />
                </div>
            </Section>

            {/* AI Memory by Role */}
            <AIMemoryByRole />

            {/* AI Memory by Industry */}
            <AIMemoryByIndustry />

            {/* How We Build It */}
            <HowWeBuildIt />

            {/* FAQ Section */}
            <FAQSection />

            {/* Final CTA - Minimal */}
            <Section bgColor="gray">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1128] font-mondwest mb-8">
                        Your AI should remember your customers.
                    </h2>

                    <p className="text-gray-700 font-sfpro text-lg sm:text-xl mb-8">
                        You have two options:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white border border-gray-200 rounded-lg p-6 text-left">
                            <p className="font-bold text-gray-900 font-sfpro text-lg mb-2">Option A:</p>
                            <p className="text-gray-700 font-sfpro text-base">
                                Keep losing customers because your AI treats them like strangers.
                            </p>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left">
                            <p className="font-bold text-blue-900 font-sfpro text-lg mb-2">Option B:</p>
                            <p className="text-blue-800 font-sfpro text-base">
                                Book a 15-minute call. We'll audit your AI setup and show you exactly what a memory system would look like for your business.
                            </p>
                        </div>
                    </div>

                    <p className="text-gray-600 font-sfpro text-base mb-6">
                        No pitch. No pressure. Just a straight answer.
                    </p>

                    <CTAButton href="/book-a-call" label="Book Your Free Memory Audit Call" />

                    <p className="text-gray-500 font-sfpro text-sm mt-6">
                        Or email us: hello@tryagentikai.com
                    </p>
                </div>
            </Section>
        </>
    );
};

AIMemorySystemPage.getLayout = (page) => page;

export default AIMemorySystemPage;
