import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import NewsletterForm from '../ui/NewsletterForm';

export default function NewsletterSection() {
  return (
    <section id="newsletter-section" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-teal via-brand-gold to-brand-teal" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-brand-teal/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-7 h-7 text-brand-teal" />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
            Never Miss an Episode
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter and get the latest episodes, resources, and
            updates delivered straight to your inbox.
          </p>

          <div className="flex justify-center">
            <NewsletterForm variant="inline" />
          </div>

          <p className="text-gray-400 text-xs mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
