import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, BookOpen } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import YouTubePlayer from '../components/youtube/YouTubePlayer';
import EpisodeCard from '../components/youtube/EpisodeCard';
import Button from '../components/ui/Button';
import { episodes, categories } from '../data/episodes';
import type { Episode } from '../types';

export default function EpisodesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(() => {
    const playId = searchParams.get('play');
    if (playId) {
      return episodes.find((ep) => ep.videoId === playId) || null;
    }
    return null;
  });

  const filteredEpisodes = useMemo(() => {
    return episodes.filter((ep) => {
      const matchSearch =
        !search ||
        ep.title.toLowerCase().includes(search.toLowerCase()) ||
        ep.description.toLowerCase().includes(search.toLowerCase());
      const matchCategory =
        activeCategory === 'All' || ep.category === activeCategory;
      return matchSearch && matchCategory;
    });
  }, [search, activeCategory]);

  const handleEpisodeClick = (episode: Episode) => {
    setSelectedEpisode(episode);
    setSearchParams({ play: episode.videoId });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClosePlayer = () => {
    setSelectedEpisode(null);
    setSearchParams({});
  };

  return (
    <main id="episodes-page" className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Selected Episode Player */}
        <AnimatePresence>
          {selectedEpisode && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mb-12"
            >
              <div className="flex items-center justify-between mb-6">
                <h1 className="font-heading text-2xl md:text-3xl font-bold text-dark">
                  Now Playing
                </h1>
                <Button variant="ghost" size="sm" onClick={handleClosePlayer}>
                  <X className="w-4 h-4" />
                  Close
                </Button>
              </div>

              <div className="grid lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">
                  <YouTubePlayer
                    videoId={selectedEpisode.videoId}
                    title={selectedEpisode.title}
                  />
                </div>
                <div className="lg:col-span-2">
                  {selectedEpisode.category && (
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal-dark text-xs font-semibold mb-3">
                      {selectedEpisode.category}
                    </span>
                  )}
                  <h2 className="font-heading text-xl lg:text-2xl font-bold text-dark mb-3">
                    {selectedEpisode.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-6 text-sm">
                    {selectedEpisode.description}
                  </p>

                  {/* Resources */}
                  {selectedEpisode.resources &&
                    selectedEpisode.resources.length > 0 && (
                      <div className="p-4 bg-surface-ivory rounded-xl border border-gray-100">
                        <h4 className="flex items-center gap-2 font-heading text-sm font-bold text-dark mb-3">
                          <BookOpen className="w-4 h-4 text-brand-teal" />
                          Episode Resources
                        </h4>
                        <ul className="space-y-2">
                          {selectedEpisode.resources.map((r, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-sm text-gray-600"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" />
                              {r.reference || r.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>
              </div>

              <hr className="mt-12 border-gray-200" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header  */}
        <div className="pt-4">
          <SectionHeading
            title="All Episodes"
            subtitle={`${episodes.length} episodes of faith, growth, and purpose`}
          />
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              id="episode-search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search episodes..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all duration-300"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-brand-teal text-dark'
                    : 'bg-gray-100 text-gray-600 hover:bg-brand-teal/10 hover:text-brand-teal-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Episodes Grid */}
        {filteredEpisodes.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredEpisodes.map((ep, i) => (
              <EpisodeCard
                key={ep.id}
                episode={ep}
                index={i}
                onClick={handleEpisodeClick}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No episodes found matching your search.
            </p>
            <Button
              variant="ghost"
              className="mt-4"
              onClick={() => {
                setSearch('');
                setActiveCategory('All');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
