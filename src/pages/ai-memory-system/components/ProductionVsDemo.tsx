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

// Issue Card Component
const IssueCard = ({
    number,
    title,
    problem,
    whatBreaks,
    howWeFix,
}: {
    number: string;
    title: string;
    problem: string;
    whatBreaks: string;
    howWeFix: string;
}) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
        <h4 className="text-lg font-bold text-gray-900 mb-4 font-sfpro">
            {number}. {title}
        </h4>
        <div className="space-y-3 text-sm sm:text-base text-gray-700 font-sfpro">
            <p><strong className="text-gray-900">The Problem:</strong> {problem}</p>
            <p><strong className="text-red-600">What breaks:</strong> {whatBreaks}</p>
            <p><strong className="text-blue-600">How we fix it:</strong> {howWeFix}</p>
        </div>
    </div>
);

const ProductionVsDemo = () => {
    return (
        <Section bgColor="gray" id="production-vs-demo">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <p className="text-red-500 font-medium text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6 font-sfpro">
                        TECHNICAL REALITY
                    </p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest mb-6">
                        Production-grade vs demo-grade memory
                    </h2>
                    <p className="text-gray-600 font-sfpro text-lg sm:text-xl">
                        (what breaks at scale)
                    </p>
                </div>

                <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed font-sfpro mb-12">
                    <p>Here's what nobody tells you about AI memory:</p>
                    <p>It's easy to build a demo. It's brutally hard to build a system that works in production.</p>
                    <p>We've taken over AI projects from founders who spent 3 months building "AI with memory." It worked great in testing. It broke with real customers.</p>
                    <p className="font-bold text-gray-900 text-xl">Here's what breaks:</p>
                </div>

                {/* Issues */}
                <div className="space-y-6 mb-12">
                    <IssueCard
                        number="1"
                        title="Context Window Limits"
                        problem="Most AI models have a context window (how much text they can 'see' at once). GPT-4: 128K tokens. Claude: 200K tokens. Sounds like a lot. It's not. A single customer with 50 interactions over 6 months? That's 200K+ tokens of history. Your AI can't fit it all in the prompt."
                        whatBreaks="The AI 'forgets' older interactions. It only remembers the last 10-20 conversations. Your long-term customers get treated like new customers."
                        howWeFix="Intelligent memory retrieval. We don't dump the entire history into the prompt. We use semantic search to pull only the relevant memories for the current conversation. Sarah calls about rescheduling? We retrieve her appointment history and preferences. We don't load her entire 6-month conversation log."
                    />

                    <IssueCard
                        number="2"
                        title="Memory Retrieval Accuracy"
                        problem="Your AI has 10,000 customer memories stored. When Sarah calls, it needs to find her memories—not someone else's. Sounds simple. It's not. Vector search (semantic similarity) can retrieve the wrong memories if the query is vague. Keyword search misses context. Hybrid search (combining both) requires careful tuning."
                        whatBreaks="The AI pulls irrelevant memories. Sarah asks about her appointment. The AI references someone else's conversation. Embarrassing."
                        howWeFix="Tiered retrieval pipeline: 1. Filter by customer ID (exact match) 2. Semantic search within that customer's history (find relevant past conversations) 3. Keyword boost for specific entities (appointment dates, product names, etc.) 4. Recency weighting (prioritize recent interactions over old ones)"
                    />

                    <IssueCard
                        number="3"
                        title="Concurrency and Race Conditions"
                        problem="Your AI is handling 50 calls simultaneously. Two agents try to write to the same customer's memory at the same time."
                        whatBreaks="Memory conflicts. Agent A writes 'Sarah prefers morning appointments.' Agent B writes 'Sarah prefers afternoon appointments' 2 seconds later. Which one is correct?"
                        howWeFix="Transactional writes with conflict resolution. Last-write-wins for preferences. Append-only for event logs. Versioning for critical data."
                    />

                    <IssueCard
                        number="4"
                        title="Memory Pollution (Too Much Noise)"
                        problem="Your AI remembers everything. Every 'hello,' every 'thank you,' every small talk comment. After 6 months, Sarah's memory is 90% noise, 10% signal."
                        whatBreaks="The AI retrieves irrelevant memories. Sarah asks about pricing. The AI says, 'Last time you mentioned you like coffee!' Weird."
                        howWeFix="Memory consolidation and summarization. We don't store every word. We store insights: 'Sarah is price-sensitive. She compared 3 vendors before choosing us.' 'Sarah prefers email follow-ups, not calls.' 'Sarah's decision timeline: wants to go live before March.' We compress 50 interactions into 5 key facts. Signal, not noise."
                    />

                    <IssueCard
                        number="5"
                        title="Data Integrity and Privacy"
                        problem="You're storing customer data. HIPAA (healthcare), GDPR (EU), CCPA (California) all have rules."
                        whatBreaks="You store sensitive data (SSN, health records, payment info) in memory. You get audited. You're non-compliant. You're sued."
                        howWeFix="PII redaction: We don't store SSNs, credit cards, or health records in memory. We store references ('Patient ID 12345') and retrieve sensitive data from your secure system only when needed. User control: Customers can view, edit, or delete their memory. GDPR 'right to be forgotten' compliance. Encryption: Memory is encrypted at rest and in transit."
                    />

                    <IssueCard
                        number="6"
                        title="Cost at Scale"
                        problem="Vector databases aren't free. Storing 100,000 customer memories with embeddings? That's $$$. Retrieving memories on every call? More $$$."
                        whatBreaks="Your AI memory bill is higher than your revenue. You shut it down."
                        howWeFix="Tiered storage: Hot memory (last 30 days) in fast, expensive storage. Cold memory (older than 30 days) in cheap, slow storage. Lazy loading: We don't load all memories upfront. We load on-demand. Batch embeddings: We don't re-embed the same text 100 times. We cache embeddings."
                    />
                </div>

                {/* Comparison Table */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                        <h4 className="font-bold text-red-900 mb-4 font-sfpro text-lg">Demo-Grade Memory:</h4>
                        <ul className="space-y-2 text-red-800 font-sfpro text-sm sm:text-base">
                            <li>• Works with 10-100 interactions</li>
                            <li>• Breaks with concurrency</li>
                            <li>• No privacy controls</li>
                            <li>• Expensive at scale</li>
                        </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                        <h4 className="font-bold text-green-900 mb-4 font-sfpro text-lg">Production-Grade Memory (What We Build):</h4>
                        <ul className="space-y-2 text-green-800 font-sfpro text-sm sm:text-base">
                            <li>• Works with 10,000+ interactions</li>
                            <li>• Handles 50+ concurrent calls</li>
                            <li>• HIPAA/GDPR compliant</li>
                            <li>• Cost-optimized for scale</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default ProductionVsDemo;
