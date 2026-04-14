import Container from '../ui/Container';
import Section from '../ui/Section';

const proofItems = [
  { value: '13+', label: 'episodes released' },
  { value: '70K+', label: 'views and growing' },
  { value: 'Global', label: 'listeners in community' },
  { value: 'Weekly', label: 'conversations that endure' },
];

export default function ProofStrip() {
  return (
    <Section tone="paper" spacing="compact" className="border-y border-ink-950/8">
      <Container size="wide">
        <div className="grid gap-6 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-center">
          <div>
            <span className="eyebrow">Built for thoughtful listening</span>
            <p className="mt-4 max-w-xl text-base leading-7 text-ink-600">
              A premium podcast home for biblical teaching, meaningful conversations, and
              practical spiritual growth.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {proofItems.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.25rem] border border-ink-950/8 bg-white/70 px-4 py-5"
              >
                <p className="font-heading text-3xl text-ink-950">{item.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
