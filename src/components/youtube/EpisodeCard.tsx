import { motion } from 'framer-motion';
import { Calendar, Eye } from 'lucide-react';
import type { Episode } from '../../types';

interface EpisodeCardProps {
  episode: Episode;
  index?: number;
  onClick?: (episode: Episode) => void;
}

export default function EpisodeCard({ episode, index = 0, onClick }: EpisodeCardProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${episode.videoId}/mqdefault.jpg`;

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={() => onClick?.(episode)}
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-brand-teal/30">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={thumbnailUrl}
            alt={episode.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Play icon on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-brand-teal/90 flex items-center justify-center backdrop-blur-sm transform scale-75 group-hover:scale-100 transition-transform duration-300">
              <svg className="w-5 h-5 text-dark fill-dark ml-0.5" viewBox="0 0 24 24">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
          </div>

          {/* Category badge */}
          {episode.category && (
            <span className="absolute top-3 left-3 px-3 py-1 bg-brand-teal/90 text-dark text-xs font-semibold rounded-full backdrop-blur-sm">
              {episode.category}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-heading text-lg font-bold text-dark mb-2 line-clamp-2 group-hover:text-brand-teal-dark transition-colors duration-300">
            {episode.title}
          </h3>
          <p className="text-gray-500 text-sm mb-4 line-clamp-2">
            {episode.description}
          </p>

          {/* Meta info */}
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(episode.date)}
            </span>
            {episode.views && (
              <span className="flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" />
                {episode.views} views
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
