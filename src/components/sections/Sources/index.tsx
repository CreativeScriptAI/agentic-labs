import { Container, Eyebrow, FadeUp } from "src/components/sections/AiVisibilityChecker/primitives";

export type Source = { label: string; href: string };

/* Reusable "Sources" section. Lists the primary, authoritative sources a page
 * genuinely draws on, as outbound dofollow citations. An E-E-A-T / trust signal
 * and a citation surface for AI answer engines. Render only real sources the
 * page actually references, never a boilerplate list. */
const Sources = ({ sources }: { sources: Source[] }) => {
  if (!sources || sources.length === 0) return null;
  return (
    <section className="bg-[#F9F6F4] py-14 sm:py-20 border-b border-[#e7e6e4]">
      <Container size="md">
        <FadeUp>
          <Eyebrow text="SOURCES" />
          <p className="font-alte text-[16px] sm:text-[17px] text-slate-600 tracking-[-0.04em] leading-[1.5] max-w-2xl mb-6">
            The guidance on this page draws on these primary, authoritative sources.
          </p>
          <ul className="space-y-3 max-w-2xl">
            {sources.map((s) => (
              <li key={s.href} className="font-alte text-[15px] sm:text-[16px] tracking-[-0.02em] leading-[1.5]">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A1128] underline decoration-[#FCCA07] decoration-2 underline-offset-2 hover:text-blue-600"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </FadeUp>
      </Container>
    </section>
  );
};

export default Sources;
