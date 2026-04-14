import HeroSection from '../components/home/HeroSection';
import ProofStrip from '../components/home/ProofStrip';
import FeaturedEpisode from '../components/home/FeaturedEpisode';
import RecentEpisodes from '../components/home/RecentEpisodes';
import AboutSnippet from '../components/home/AboutSnippet';
import AskCTASection from '../components/home/AskCTASection';
import NewsletterSection from '../components/home/NewsletterSection';

export default function HomePage() {
  return (
    <main id="home-page">
      <HeroSection />
      <ProofStrip />
      <FeaturedEpisode />
      <RecentEpisodes />
      <AboutSnippet />
      <AskCTASection />
      <NewsletterSection />
    </main>
  );
}
