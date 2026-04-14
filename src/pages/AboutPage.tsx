import { motion } from 'framer-motion';
import { Heart, BookOpen, Globe, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import Button from '../components/ui/Button';
import pastorDeola from '../assets/pastordeola.webp';

const highlights = [
  {
    icon: Heart,
    title: 'Passionate Minister',
    description:
      'A dynamic minister of the Gospel with a heart for seeing lives transformed through the Word of God.',
  },
  {
    icon: BookOpen,
    title: 'Biblical Teacher',
    description:
      'Known for making deep spiritual truths practical, relatable, and applicable to everyday living.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description:
      'Reaching audiences across multiple continents with the message of the higher life in Christ.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'Committed to the standard of excellence in ministry, leadership, and personal development.',
  },
];

export default function AboutPage() {
  return (
    <main id="about-page">
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-br from-dark via-dark-secondary to-dark-surface overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-brand-teal/8 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto">
                <img
                  src={pastorDeola}
                  alt="Pastor Deola Phillips"
                  className="w-full h-[500px] lg:h-[580px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-48 h-48 border-2 border-brand-teal/20 rounded-3xl" />
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-semibold mb-6">
                Meet the Host
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
                Pastor Deola Phillips
              </h1>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Pastor Deola Phillips is a dynamic and anointed minister of the Gospel of
                  Jesus Christ, with a burning passion for helping people discover and live the
                  higher life that God has ordained for them. Her ministry is characterized by
                  a powerful combination of deep scriptural knowledge and practical wisdom.
                </p>
                <p>
                  As the host of <strong className="text-white">The Higher Life Podcast</strong>,
                  she brings transformative conversations that cover faith, purpose, family,
                  personal growth, and walking in the fullness of God's blessings. Her unique ability
                  to make profound spiritual truths accessible and actionable has impacted thousands
                  of lives globally.
                </p>
                <p>
                  Pastor Deola is committed to raising a generation of believers who walk in
                  excellence, understand their identity in Christ, and influence their world
                  with the Gospel. Through her teachings, books, and ministry events, she
                  continues to inspire and empower people to reach their God-given potential.
                </p>
              </div>

              <div className="flex gap-4 mt-8">
                <Link to="/episodes">
                  <Button variant="primary" size="md">
                    Watch Episodes
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/ask">
                  <Button variant="outline" size="md">
                    Ask a Question
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
              The Mission Behind{' '}
              <span className="text-brand-teal">The Higher Life</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              "The Higher Life" is more than a podcast — it is a movement. Our mission is to
              help every believer discover the reality of who they are in Christ and walk in
              the fullness of God's purpose for their life. We believe that as you hear the
              Word and receive it with faith, your life is transformed from glory to glory.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Through weekly episodes, we tackle the questions that matter — from faith and
              family to destiny and personal excellence — providing biblically-grounded,
              Spirit-filled wisdom for everyday living.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 lg:py-28 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Why Listen
            </h2>
            <div className="h-1 w-16 bg-brand-teal rounded-full mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-teal/20 transition-all duration-500 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-teal/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-6 h-6 text-brand-teal" />
                </div>
                <h3 className="font-heading text-lg font-bold text-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
