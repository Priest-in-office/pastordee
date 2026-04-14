import { useState } from 'react';
import { Send } from 'lucide-react';
import Button from './Button';

interface NewsletterFormProps {
  variant?: 'inline' | 'stacked';
  light?: boolean;
}

export default function NewsletterForm({
  variant = 'inline',
  light = false,
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const inputClasses = light
    ? 'border-white/14 bg-white/6 text-white placeholder:text-white/40'
    : 'border-ink-950/10 bg-white text-ink-950 placeholder:text-ink-500';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }

    const subscribers = JSON.parse(localStorage.getItem('hlp-subscribers') || '[]');
    subscribers.push({ email, subscribedAt: new Date().toISOString() });
    localStorage.setItem('hlp-subscribers', JSON.stringify(subscribers));
    setStatus('success');
    setEmail('');

    setTimeout(() => setStatus('idle'), 4000);
  };

  if (variant === 'stacked') {
    return (
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-3">
        <input
          id="newsletter-email-stacked"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className={`min-h-13 w-full rounded-full border px-5 text-base transition-colors duration-300 focus:border-gold-500 focus:outline-none ${inputClasses}`}
        />
        <Button type="submit" variant={light ? 'outline' : 'primary'} size="lg" className="w-full">
          <Send className="h-4 w-4" />
          Subscribe
        </Button>
        {status === 'success' && (
          <p className={`text-sm font-medium ${light ? 'text-gold-300' : 'text-sage-500'}`}>
            You&apos;re subscribed. Welcome to The Higher Life.
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm font-medium text-red-400">
            Please enter a valid email address.
          </p>
        )}
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="newsletter-email-inline"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className={`min-h-13 flex-1 rounded-full border px-5 text-base transition-colors duration-300 focus:border-gold-500 focus:outline-none ${inputClasses}`}
        />
        <Button type="submit" variant={light ? 'outline' : 'primary'} size="lg">
          <Send className="h-4 w-4" />
          Subscribe
        </Button>
      </div>
      {status === 'success' && (
        <p className={`mt-4 text-sm font-medium ${light ? 'text-gold-300' : 'text-sage-500'}`}>
          You&apos;re subscribed. Welcome to The Higher Life.
        </p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-sm font-medium text-red-400">
          Please enter a valid email address.
        </p>
      )}
    </form>
  );
}
