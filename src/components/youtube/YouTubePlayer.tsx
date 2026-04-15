import { useState } from 'react';
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
  const aspect = aspectRatio === 'video' ? 'aspect-video' : 'aspect-square';

  if (isLoaded) {
    return (
      <div
        className={`relative w-full overflow-hidden rounded-[1.75rem] shadow-[var(--shadow-card)] ${aspect} ${className}`}
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsLoaded(true)}
      className={`group relative w-full cursor-pointer overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-950 shadow-[var(--shadow-card)] transition-transform duration-300 hover:scale-[1.01] ${aspect} ${className}`}
      aria-label={`Play: ${title}`}
    >
      <img
        src={thumbnailUrl}
        alt={title}
        onError={(e) => {
          e.currentTarget.src = fallbackThumbnail;
        }}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(64,224,208,0.2),transparent_40%)]" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="yt-play-btn flex h-18 w-18 items-center justify-center rounded-full bg-gold-500 text-ink-950 md:h-22 md:w-22">
          <Play className="ml-1 h-7 w-7 fill-current md:h-9 md:w-9" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 text-left sm:p-6">
        <p className="max-w-xl text-sm font-semibold leading-6 text-white sm:text-base">
          {title}
        </p>
      </div>
    </button>
  );
}
