import Container from '../ui/Container';
import Section from '../ui/Section';
import NewsletterForm from '../ui/NewsletterForm';

export default function NewsletterSection() {
  return (
    <Section tone="dark" spacing="default" className="site-grain overflow-hidden" id="newsletter-section">
      <Container size="narrow" className="text-center">
        <span className="eyebrow">Stay close to the message</span>
        <h2 className="mt-4 text-4xl text-white sm:text-5xl">
          Get new episodes, notes, and updates delivered with intention.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          Sign up to get weekly updates on new episodes, messages, and events from Pastor Deola Phillips right in your inbox.
        </p>

        <div className="mt-10 flex justify-center">
          <NewsletterForm variant="inline" light />
        </div>

        <p className="mt-4 text-sm text-white/45">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </Container>
    </Section>
  );
}
