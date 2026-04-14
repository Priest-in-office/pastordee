import { motion } from 'framer-motion';
import YouTubePlayer from '../youtube/YouTubePlayer';
import { episodes } from '../../data/episodes';
import { Calendar, Eye } from 'lucide-react';

export default function FeaturedEpisode() {
  const featured = episodes[0]; // Latest episode

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

  return (
    <section id="featured-episode" className="py-20 lg:py-28 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-semibold mb-4">
            Latest Episode
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-dark">
            Now Playing
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Player — takes more space */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <YouTubePlayer videoId={featured.videoId} title={featured.title} />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            {featured.category && (
              <span className="inline-block px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal-dark text-xs font-semibold mb-4">
                {featured.category}
              </span>
            )}
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-dark mb-4">
              {featured.title}
            </h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              {featured.description}
            </p>
            <div className="flex items-center gap-5 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(featured.date)}
              </span>
              {featured.views && (
                <span className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4" />
                  {featured.views} views
                </span>
              )}
            </div>

            {/* Episode resources */}
            {featured.resources && featured.resources.length > 0 && (
              <div className="mt-8 p-5 bg-white rounded-xl border border-gray-100">
                <h4 className="font-heading text-sm font-bold text-dark mb-3 uppercase tracking-wider">
                  Episode Resources
                </h4>
                <ul className="space-y-2">
                  {featured.resources.map((r, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" />
                      {r.reference || r.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
