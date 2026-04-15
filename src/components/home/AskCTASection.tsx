import { ArrowRight, MessageCircleQuestion } from 'lucide-react';
import { Link } from 'react-router';
import Container from '../ui/Container';
import Section from '../ui/Section';
import Button from '../ui/Button';
import SurfaceCard from '../ui/SurfaceCard';

export default function AskCTASection() {
  return (
    <Section tone="transparent" spacing="compact">
      <Container size="wide">
        <SurfaceCard tone="dark" padding="lg" className="site-grain overflow-hidden">
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(64,224,208,0.32),transparent_70%)]" />
            <div className="relative">
              <span className="eyebrow">Ask Pastor Deola</span>
              <h2 className="mt-4 max-w-2xl text-4xl text-white sm:text-5xl">
                Bring real questions from real life into the next conversation.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                Do you have questions about faith, family, purpose, or spiritual growth? Send it in and get answers by the Spirit of God through Pastor Deola Phillips.
              </p>
            </div>

            <div className="relative">
              <Link to="/ask">
                <Button variant="primary" size="lg" className="min-w-52">
                  <MessageCircleQuestion className="h-5 w-5" />
                  Submit a Question
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </SurfaceCard>
      </Container>
    </Section>
  );
}
