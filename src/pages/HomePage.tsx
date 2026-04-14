import HeroSection from '../components/home/HeroSection';
import FeaturedEpisode from '../components/home/FeaturedEpisode';
import RecentEpisodes from '../components/home/RecentEpisodes';
import AboutSnippet from '../components/home/AboutSnippet';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewsletterSection from '../components/home/NewsletterSection';

export default function HomePage() {
  return (
    <main id="home-page">
      <HeroSection />
      <FeaturedEpisode />
      <RecentEpisodes />
      <AboutSnippet />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
}
