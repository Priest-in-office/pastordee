import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Eye } from 'lucide-react';
import type { Episode } from '../../types';

interface EpisodeCardProps {
  episode: Episode;
  index?: number;
  onClick?: (episode: Episode) => void;
  variant?: 'featured' | 'standard';
}

export default function EpisodeCard({
  episode,
  index = 0,
  onClick,
  variant = 'standard',
}: EpisodeCardProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${episode.videoId}/mqdefault.jpg`;

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

  if (variant === 'featured') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay: index * 0.08 }}
        className="group cursor-pointer"
        onClick={() => onClick?.(episode)}
      >
        <div className="grid overflow-hidden rounded-[1.75rem] border border-ink-950/8 bg-white shadow-[var(--shadow-soft)] transition-transform duration-300 group-hover:-translate-y-1 lg:grid-cols-[minmax(280px,0.95fr)_minmax(0,1fr)]">
          <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
            <img
              src={thumbnailUrl}
              alt={episode.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
            {episode.category && (
              <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-950">
                {episode.category}
              </span>
            )}
          </div>

          <div className="flex flex-col justify-between p-6 sm:p-8">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-600">
                Featured conversation
              </p>
              <h3 className="mt-4 text-3xl text-ink-950">{episode.title}</h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-ink-600">
                {episode.description}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-ink-500">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gold-600" />
                {formatDate(episode.date)}
              </span>
              {episode.views && (
                <span className="inline-flex items-center gap-2">
                  <Eye className="h-4 w-4 text-gold-600" />
                  {episode.views} views
                </span>
              )}
              <span className="inline-flex items-center gap-2 text-ink-950">
                Watch episode
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group cursor-pointer"
      onClick={() => onClick?.(episode)}
    >
      <div className="h-full overflow-hidden rounded-[1.5rem] border border-ink-950/8 bg-white shadow-[var(--shadow-soft)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-card)]">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={thumbnailUrl}
            alt={episode.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
          {episode.category && (
            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-950">
              {episode.category}
            </span>
          )}
        </div>

        <div className="flex h-full flex-col p-5 sm:p-6">
          <h3 className="text-[1.45rem] leading-tight text-ink-950 transition-colors duration-300 group-hover:text-gold-700">
            {episode.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink-600">
            {episode.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.16em] text-ink-500">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5 text-gold-600" />
              {formatDate(episode.date)}
            </span>
            {episode.views && (
              <span className="inline-flex items-center gap-2">
                <Eye className="h-3.5 w-3.5 text-gold-600" />
                {episode.views}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
