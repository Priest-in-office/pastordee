import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, CheckCircle2, User, Mail, HelpCircle } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import type { Question } from '../types';

const questionCategories = [
  'Faith & Salvation',
  'Relationships & Family',
  'Leadership & Ministry',
  'Purpose & Destiny',
  'Personal Growth',
  'Other',
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
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim() || !formData.email.includes('@'))
      errs.email = 'Please enter a valid email';
    if (!formData.question.trim()) errs.question = 'Please enter your question';
    if (formData.question.trim().length < 10)
      errs.question = 'Please provide more detail (min 10 characters)';
    if (!formData.category) errs.category = 'Please select a category';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    // Store in localStorage
    const questions: Question[] = JSON.parse(
      localStorage.getItem('hlp-questions') || '[]'
    );
    const newQuestion: Question = {
      id: `q-${Date.now()}`,
      name: formData.name.trim(),
      email: formData.email.trim(),
      question: formData.question.trim(),
      category: formData.category,
      timestamp: new Date().toISOString(),
      status: 'pending',
    };
    questions.push(newQuestion);
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
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <main id="ask-page">
      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-br from-dark via-dark-secondary to-dark-surface overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-teal/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-brand-teal/20 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-brand-teal" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Ask Pastor Deola
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Have a question about faith, life, or purpose? Submit it here and it may be
              featured on an upcoming episode of The Higher Life Podcast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 lg:py-24 bg-surface-light">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 rounded-full bg-brand-teal/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-brand-teal" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-dark mb-3">
                Question Submitted!
              </h2>
              <p className="text-gray-500 max-w-md mx-auto">
                Thank you for your question. If selected, it will be featured on an upcoming
                episode. Stay tuned!
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-10"
            >
              <h2 className="font-heading text-2xl font-bold text-dark mb-2">
                Submit Your Question
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Fill in the form below. All fields are required.
              </p>

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="ask-name"
                    className="flex items-center gap-2 text-sm font-semibold text-dark mb-2"
                  >
                    <User className="w-4 h-4 text-brand-teal" />
                    Your Name
                  </label>
                  <input
                    id="ask-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 rounded-xl border text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-teal ${
                      errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="ask-email"
                    className="flex items-center gap-2 text-sm font-semibold text-dark mb-2"
                  >
                    <Mail className="w-4 h-4 text-brand-teal" />
                    Email Address
                  </label>
                  <input
                    id="ask-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-xl border text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-teal ${
                      errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Category */}
                <div>
                  <label
                    htmlFor="ask-category"
                    className="flex items-center gap-2 text-sm font-semibold text-dark mb-2"
                  >
                    <HelpCircle className="w-4 h-4 text-brand-teal" />
                    Category
                  </label>
                  <select
                    id="ask-category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-teal appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%236B7280%22%20d%3D%22M2%204l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_1rem] ${
                      errors.category ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <option value="">Select a category</option>
                    {questionCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="text-red-500 text-xs mt-1">{errors.category}</p>
                  )}
                </div>

                {/* Question */}
                <div>
                  <label
                    htmlFor="ask-question"
                    className="flex items-center gap-2 text-sm font-semibold text-dark mb-2"
                  >
                    <MessageCircle className="w-4 h-4 text-brand-teal" />
                    Your Question
                  </label>
                  <textarea
                    id="ask-question"
                    name="question"
                    value={formData.question}
                    onChange={handleChange}
                    placeholder="Type your question here... Be as detailed as you'd like."
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-teal resize-none ${
                      errors.question ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                  {errors.question && (
                    <p className="text-red-500 text-xs mt-1">{errors.question}</p>
                  )}
                </div>

                {/* Submit */}
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  <Send className="w-5 h-5" />
                  Submit Question
                </Button>

                <p className="text-gray-400 text-xs text-center">
                  Your email will not be shared publicly. Questions may be edited for clarity.
                </p>
              </div>
            </motion.form>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How It Works"
            subtitle="Your question could be featured on The Higher Life Podcast"
          />

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Submit',
                desc: 'Fill out the form above with your question and category.',
              },
              {
                step: '02',
                title: 'Review',
                desc: 'Pastor Deola and the team review all submitted questions.',
              },
              {
                step: '03',
                title: 'Featured',
                desc: 'Selected questions are answered on upcoming podcast episodes.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <span className="font-heading text-5xl font-bold text-brand-teal/20 block mb-3">
                  {item.step}
                </span>
                <h3 className="font-heading text-lg font-bold text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
