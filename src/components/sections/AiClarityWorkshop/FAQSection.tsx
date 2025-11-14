import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "src/components/ui/accordion";
  
  const FAQSection = () => {
    const faqs = [
      {
        question: "Is this a sales call?",
        answer: "No. This is a clarity session. We look at your workflows, spot inefficiencies, and show you where AI can actually save time and money. No pressure. No pitches. Just honest insight.",
      },
      {
        question: "Do I need to know AI?",
        answer: "Not at all. You don't need technical skills or AI knowledge. You bring the problems — we translate them into simple automation opportunities.",
      },
      { 
        question: "What do I need before the call?",
        answer: "Just three things: • Your top repetitive tasks • A basic understanding of how work moves in your team • 30 minutes of distraction-free time. That's enough for us to create value.",
      },
      {
        question: "How long does the workshop take?",
        answer: "The session is 30 minutes. Short, sharp, and focused — designed to save you weeks of trial-and-error.",
      },
      {
        question: "What happens after the call?",
        answer: "You get a simple 1-page breakdown: • What to automate • Expected ROI (time + cost savings) • A clear next-step plan. You can execute it yourself or work with us — your call.",
      },
      {
        question: "Who is this workshop for?",
        answer: "Founders, operators, growth leaders, and teams drowning in manual work — especially across sales, support, ops, and marketing. If you're stuck deciding what to automate, this is for you.",
      },
      {
        question: "What if I'm a small team?",
        answer: "Small teams benefit the most. Automation replaces repetitive tasks and gives your limited bandwidth more leverage. Think of it as adding an extra team member without hiring.",
      },
      {
        question: "What if we already use AI tools?",
        answer: "Perfect. Most companies use AI as isolated tools — not systems. We look at end-to-end workflow gaps and help you connect everything so the tools actually work together.",
      },
      {
        question: "Is my data safe?",
        answer: "Yes. We don't store, share, or use your internal data beyond the workshop context. Everything stays between us, and we can sign an NDA if required.",
      },
      {
        question: "What if you can't find any automation opportunities?",
        answer: "Hasn't happened yet — but if it does, the workshop is free. We only charge when we unlock clear ROI.",
      },
    ];
  
    return (
      <section id="faq" className="py-10 md:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 
              className="font-sf-pro font-semibold text-foreground mb-4 text-[28px] sm:text-[36px] md:text-[44px]"
              style={{ 
                lineHeight: '1.1',
                fontVariationSettings: "'wdth' 100"
              }}
            >
              You might be wondering...
            </h2>
          </div>
  
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="rounded-lg px-4 sm:px-6 shadow-sm"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <AccordionTrigger 
                  className="text-foreground hover:text-primary text-left text-[16px] sm:text-[17px] md:text-[18px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent 
                  className="text-muted-foreground"
                  style={{ fontSize: '16px', lineHeight: '1.6' }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  };
  
  export default FAQSection;
  