import { useState } from 'react';
import { Send } from 'lucide-react';
import Button from './Button';

interface NewsletterFormProps {
  variant?: 'inline' | 'stacked';
  light?: boolean;
}

export default function NewsletterForm({ variant = 'inline', light = false }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    // Store in localStorage for now
    const subscribers = JSON.parse(localStorage.getItem('hlp-subscribers') || '[]');
    subscribers.push({ email, subscribedAt: new Date().toISOString() });
    localStorage.setItem('hlp-subscribers', JSON.stringify(subscribers));
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 4000);
  };

  if (variant === 'stacked') {
    return (
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-3">
        <input
          id="newsletter-email-stacked"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className={`w-full px-5 py-3.5 rounded-lg border text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-teal ${
            light
              ? 'bg-white/10 border-white/20 text-white placeholder:text-white/50'
              : 'bg-white border-gray-200 text-dark placeholder:text-gray-400'
          }`}
        />
        <Button type="submit" variant="primary" size="lg" className="w-full">
          <Send className="w-4 h-4" />
          Subscribe
        </Button>
        {status === 'success' && (
          <p className="text-brand-teal text-sm font-medium">✓ You're subscribed! Welcome to The Higher Life.</p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-sm font-medium">Please enter a valid email address.</p>
        )}
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
      <input
        id="newsletter-email-inline"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className={`flex-1 px-5 py-3.5 rounded-lg border text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-teal ${
          light
            ? 'bg-white/10 border-white/20 text-white placeholder:text-white/50'
            : 'bg-white border-gray-200 text-dark placeholder:text-gray-400'
        }`}
      />
      <Button type="submit" variant="primary" size="md">
        <Send className="w-4 h-4" />
        Subscribe
      </Button>
      {status === 'success' && (
        <p className="text-brand-teal text-sm font-medium self-center">✓ Subscribed!</p>
      )}
    </form>
  );
}
