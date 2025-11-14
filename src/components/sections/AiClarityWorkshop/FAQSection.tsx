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
        answer: "Nope. It&apos;s a clarity session — the goal is to show you what&apos;s possible, not to sell tools.",
      },
      {
        question: "Do I need to know AI?",
        answer: "Not at all. We translate everything into ROI, not jargon.",
      },
      {
        question: "What do I need before the call?",
        answer: "Just bring your current workflow and pain points. We&apos;ll do the rest.",
      },
      {
        question: "How long does the workshop take?",
        answer: "Exactly 30 minutes. We respect your time and deliver maximum value in minimum time.",
      },
      {
        question: "What happens after the call?",
        answer: "You&apos;ll get a clear roadmap of opportunities. If you want to move forward with an AI Audit, we can discuss that—but there&apos;s zero pressure.",
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
  