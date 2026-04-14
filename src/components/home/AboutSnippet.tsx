import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import Button from '../ui/Button';
import pastorDeola from '../../assets/pastordeola.webp';

export default function AboutSnippet() {
  return (
    <section id="about-snippet" className="py-20 lg:py-28 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={pastorDeola}
                alt="Pastor Deola Phillips"
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
            </div>
            {/* Accent corner */}
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-brand-teal/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-brand-teal/30 rounded-2xl" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-semibold mb-6">
              About the Host
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
              Pastor Deola Phillips
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Pastor Deola Phillips is a dynamic minister of the Gospel, passionate about
                helping people discover and walk in the higher life that God has called them to.
                Through The Higher Life Podcast, she brings powerful, practical teachings that
                transform lives across the globe.
              </p>
              <p>
                With a unique gift for making deep spiritual truths relatable and actionable,
                Pastor Deola empowers believers to live with excellence, purpose, and an
                unshakeable faith in God's Word.
              </p>
            </div>

            <div className="mt-8">
              <Link to="/about">
                <Button variant="secondary" size="md">
                  Read Full Bio
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
