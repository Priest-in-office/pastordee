import { useState } from 'react';
import { CheckCircle2, HelpCircle, Mail, MessageCircle, Send, User } from 'lucide-react';
import type { Question } from '../types';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import SectionIntro from '../components/ui/SectionIntro';
import SurfaceCard from '../components/ui/SurfaceCard';

const questionCategories = [
  'Faith & Salvation',
  'Relationships & Family',
  'Leadership & Ministry',
  'Purpose & Destiny',
  'Personal Growth',
  'Other',
];

const processSteps = [
  {
    step: '01',
    title: 'Submit your question',
    desc: 'Share the situation, tension, or topic you would like Pastor Deola to address.',
  },
  {
    step: '02',
    title: 'We review it carefully',
    desc: 'Questions are grouped by theme so future episodes can answer them with depth.',
  },
  {
    step: '03',
    title: 'Selected questions are featured',
    desc: 'Your submission may help shape an upcoming conversation on the podcast.',
  },
];

export default function AskPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
    category: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!formData.name.trim()) nextErrors.name = 'Please enter your name';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      nextErrors.email = 'Please enter a valid email';
    }
    if (!formData.question.trim()) nextErrors.question = 'Please enter your question';
    if (formData.question.trim().length < 10) {
      nextErrors.question = 'Please provide more detail (minimum 10 characters)';
    }
    if (!formData.category) nextErrors.category = 'Please select a category';

    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const questions: Question[] = JSON.parse(localStorage.getItem('hlp-questions') || '[]');
    questions.push({
      id: `q-${Date.now()}`,
      name: formData.name.trim(),
      email: formData.email.trim(),
      question: formData.question.trim(),
      category: formData.category,
      timestamp: new Date().toISOString(),
      status: 'pending',
    });

    localStorage.setItem('hlp-questions', JSON.stringify(questions));
    setSubmitted(true);
    setFormData({ name: '', email: '', question: '', category: '' });
    setErrors({});

    setTimeout(() => setSubmitted(false), 6000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));

    if (errors[name]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[name];
        return next;
      });
    }
  };

  const fieldClass =
    'w-full rounded-[1.25rem] border bg-white px-4 text-base text-ink-950 placeholder:text-ink-500 transition-colors duration-300 focus:border-gold-500 focus:outline-none';

  return (
    <main id="ask-page">
      <PageHero
        eyebrow="Listener questions"
        title="Make the podcast feel like a living conversation with the audience."
        copy="This page now frames question submission as part of the show experience, with calmer hierarchy, premium form styling, and clearer expectations."
      />

      <Section tone="paper" spacing="default">
        <Container size="wide">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]">
            <div>
              <SectionIntro
                eyebrow="How it works"
                title="Thoughtful submissions make for better episodes."
                copy="The supporting content now sits beside the form instead of below it, which makes the page feel more editorial and less generic."
              />

              <div className="mt-8 space-y-4">
                {processSteps.map((item) => (
                  <SurfaceCard key={item.step} tone="warm" padding="md">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold-700">
                      Step {item.step}
                    </p>
                    <h3 className="mt-3 text-2xl text-ink-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-ink-600">{item.desc}</p>
                  </SurfaceCard>
                ))}
              </div>
            </div>

            <SurfaceCard tone="paper" padding="lg">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full bg-gold-500/14 text-gold-700">
                    <CheckCircle2 className="h-9 w-9" />
                  </div>
                  <h2 className="mt-6 text-4xl text-ink-950">Question submitted</h2>
                  <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-ink-600">
                    Thank you for sharing. Your question has been saved and may help shape a
                    future episode.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <span className="eyebrow">Submission form</span>
                    <h2 className="mt-4 text-4xl text-ink-950">Ask Pastor Deola</h2>
                    <p className="mt-4 text-base leading-7 text-ink-600">
                      Share your question clearly. All fields are required.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-ink-700">
                        <User className="h-4 w-4 text-gold-600" />
                        Your name
                      </span>
                      <input
                        id="ask-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={`${fieldClass} min-h-13 ${
                          errors.name ? 'border-red-300' : 'border-ink-950/10'
                        }`}
                      />
                      {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
                    </label>

                    <label className="block">
                      <span className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-ink-700">
                        <Mail className="h-4 w-4 text-gold-600" />
                        Email address
                      </span>
                      <input
                        id="ask-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={`${fieldClass} min-h-13 ${
                          errors.email ? 'border-red-300' : 'border-ink-950/10'
                        }`}
                      />
                      {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-ink-700">
                      <HelpCircle className="h-4 w-4 text-gold-600" />
                      Category
                    </span>
                    <select
                      id="ask-category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className={`${fieldClass} min-h-13 appearance-none ${
                        errors.category ? 'border-red-300' : 'border-ink-950/10'
                      }`}
                    >
                      <option value="">Select a category</option>
                      {questionCategories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    {errors.category && (
                      <p className="mt-2 text-sm text-red-500">{errors.category}</p>
                    )}
                  </label>

                  <label className="block">
                    <span className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-ink-700">
                      <MessageCircle className="h-4 w-4 text-gold-600" />
                      Your question
                    </span>
                    <textarea
                      id="ask-question"
                      name="question"
                      value={formData.question}
                      onChange={handleChange}
                      placeholder="Describe the question, context, or tension you would like addressed."
                      rows={6}
                      className={`${fieldClass} min-h-40 py-4 ${
                        errors.question ? 'border-red-300' : 'border-ink-950/10'
                      }`}
                    />
                    {errors.question && (
                      <p className="mt-2 text-sm text-red-500">{errors.question}</p>
                    )}
                  </label>

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    <Send className="h-5 w-5" />
                    Submit Question
                  </Button>

                  <p className="text-sm leading-6 text-ink-500">
                    Your email will not be shared publicly. Questions may be edited for
                    clarity before being featured.
                  </p>
                </form>
              )}
            </SurfaceCard>
          </div>
        </Container>
      </Section>
    </main>
  );
}
