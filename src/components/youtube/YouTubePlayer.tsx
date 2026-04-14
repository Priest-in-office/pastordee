import { useState, useCallback } from 'react';
import { Play } from 'lucide-react';

interface YouTubePlayerProps {
  videoId: string;
  title: string;
  className?: string;
  aspectRatio?: 'video' | 'square';
}

export default function YouTubePlayer({
  videoId,
  title,
  className = '',
  aspectRatio = 'video',
}: YouTubePlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const fallbackThumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const handlePlay = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = fallbackThumbnail;
  };

  const aspect = aspectRatio === 'video' ? 'aspect-video' : 'aspect-square';

  if (isLoaded) {
    return (
      <div className={`relative w-full ${aspect} rounded-xl overflow-hidden shadow-xl ${className}`}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      onClick={handlePlay}
      className={`group relative w-full ${aspect} rounded-xl overflow-hidden shadow-xl cursor-pointer transition-transform duration-300 hover:scale-[1.01] ${className}`}
      aria-label={`Play: ${title}`}
    >
      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        alt={title}
        onError={handleImgError}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/80" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="yt-play-btn w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-teal/90 flex items-center justify-center backdrop-blur-sm">
          <Play className="w-7 h-7 md:w-9 md:h-9 text-dark fill-dark ml-1" />
        </div>
      </div>

      {/* Title overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
        <p className="text-white font-semibold text-sm md:text-base line-clamp-2 text-left">
          {title}
        </p>
      </div>
    </button>
  );
}
