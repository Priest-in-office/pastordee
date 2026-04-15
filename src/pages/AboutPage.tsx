import { ArrowRight, Award, Globe, Heart, Mic, Stethoscope } from 'lucide-react';
import { Link } from 'react-router';
import pastorDeola from '../assets/pastordeola.webp';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import SectionIntro from '../components/ui/SectionIntro';
import SurfaceCard from '../components/ui/SurfaceCard';

const highlights = [
  {
    icon: Heart,
    title: 'Pastoral leadership',
    description:
      'As the Zonal Pastor of Christ Embassy Lagos Zone 5, Pastor Deola Phillips shepherds a thriving community of believers with warmth, wisdom, and a heart for excellence.',
  },
  {
    icon: Stethoscope,
    title: 'From medicine to ministry',
    description:
      'A graduate of Medicine and Surgery (M.B.B.S) from the University of Lagos, Pastor Deola answered a higher calling — bringing the same precision and care to the ministry of God\'s Word.',
  },
  {
    icon: Globe,
    title: 'Global impact',
    description:
      'Through The Higher Life Podcast, major conferences, and digital media, Pastor Deola\'s ministry reaches thousands of people across continents with the message of faith and spiritual growth.',
  },
  {
    icon: Award,
    title: 'Executive minister',
    description:
      'She serves as the Executive Minister of the Ministry of Healing and the Ministry of Ministerial Development — equipping ministers and championing divine health worldwide.',
  },
];

const milestones = [
  {
    year: '2025',
    title: 'A Night of Blessings — Tafawa Balewa Square',
    description:
      'On September 12, 2025, Pastor Deola Phillips hosted "A Night of Blessings" at the iconic Tafawa Balewa Square in Lagos. Thousands gathered for a night of powerful ministry that continued from 6 PM until dawn — a defining moment in her ministry.',
  },
  {
    year: '2026',
    title: 'The Higher Life Podcast launches',
    description:
      'The Higher Life Podcast was launched to extend the reach of Pastor Deola\'s teaching ministry beyond the four walls of the church. Covering faith, family, destiny, and spiritual maturity, the podcast has quickly grown to reach thousands of viewers across the globe.',
  },
  {
    year: 'Ongoing',
    title: 'Healing School & Ministerial Development',
    description:
      'As director of the Healing School and the International School of Ministry, Pastor Deola continues to raise a generation of ministers and spread the message of divine healing to all nations.',
  },
];

export default function AboutPage() {
  return (
    <main id="about-page">
      <PageHero
        eyebrow="About Pastor Deola Phillips"
        title="A voice shaped by conviction, clarity, and a call to help believers live the higher life."
        copy="Pastor Deola Phillips is the Zonal Pastor of Christ Embassy Lagos Zone 5, a dynamic minister of the Gospel, and the host of The Higher Life Podcast. With a background in medicine and a heart fully surrendered to ministry, she ministers God's Word with clarity, direction, and a passion that has reached thousands across the globe."
        actions={
          <>
            <Link to="/episodes">
              <Button variant="primary" size="lg">
                Watch Episodes
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/ask">
              <Button
                variant="outline"
                size="lg"
                className="border-white/14 bg-white/6 text-white hover:border-white/30 hover:bg-white/10"
              >
                Ask a Question
              </Button>
            </Link>
          </>
        }
        media={
          <div className="mx-auto max-w-[28rem] overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900 shadow-[var(--shadow-card)]">
            <img
              src={pastorDeola}
              alt="Pastor Deola Phillips"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
        }
      />

      {/* Bio Section */}
      <Section tone="paper" spacing="default">
        <Container size="wide">
          <SectionIntro
            eyebrow="Her story"
            title="From the lecture halls of medicine to the pulpits of the world."
            copy="Pastor Deola Phillips' journey is a testimony of total surrender to God's purpose — a life that traded a career in medicine for a calling to shape lives through the Word."
            align="center"
          />

          <div className="mx-auto mt-10 max-w-4xl space-y-5 text-center text-base leading-8 text-ink-600 sm:text-lg">
            <p>
              Born and raised in Nigeria, Pastor Deola gave her life to Christ on March 15, 1985, while a student at the International School Ibadan. That decision would mark the beginning of a life fully devoted to ministry. She went on to graduate with a degree in Medicine and Surgery (M.B.B.S) from the College of Medicine, University of Lagos, in 1994 — but her heart had already been captured by a higher calling.
            </p>
            <p>
              Rising through the ranks of Christ Embassy (LoveWorld Inc.), she took on pioneering roles across the ministry. From launching the LoveWorld Television Ministry to directing the Healing School, the International School of Ministry, the Trauma Care International Foundation, the Volunteer Medical Corps, and the Future Africa Leaders Foundation — her leadership has been both expansive and transformative.
            </p>
            <p>
              Today, as the Zonal Pastor of Christ Embassy Lagos Zone 5 and a trusted associate of the ministry's founder, Rev. Dr. Chris Oyakhilome, Pastor Deola continues to impact lives through her dynamic preaching, her administrative excellence, and initiatives like The Higher Life Podcast.
            </p>
          </div>
        </Container>
      </Section>

      {/* Why Listeners Stay */}
      <Section tone="transparent" spacing="default">
        <Container size="wide">
          <SectionIntro
            eyebrow="Her ministry"
            title="Leading with clarity. Ministering with heart."
            copy="Pastor Deola Phillips' ministry spans pastoral leadership, executive administration, healing, and ministerial development across multiple nations."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => (
              <SurfaceCard key={item.title} tone="paper" padding="lg" className="h-full">
                <div className="flex h-13 w-13 items-center justify-center rounded-full bg-gold-500/12 text-gold-700">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl text-ink-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink-600">{item.description}</p>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Milestones */}
      <Section tone="warm" spacing="default">
        <Container size="wide">
          <SectionIntro
            eyebrow="Key milestones"
            title="Moments that define the ministry."
            copy="From landmark events to pioneering digital ministry, these are the milestones that continue to shape the impact of Pastor Deola Phillips."
            align="center"
          />

          <div className="mx-auto mt-12 max-w-4xl space-y-8">
            {milestones.map((milestone) => (
              <SurfaceCard key={milestone.title} tone="paper" padding="lg">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
                  <span className="shrink-0 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold-600">
                    {milestone.year}
                  </span>
                  <div>
                    <h3 className="text-2xl text-ink-950">{milestone.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-ink-600">{milestone.description}</p>
                  </div>
                </div>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* The Podcast Section */}
      <Section tone="paper" spacing="default">
        <Container size="wide">
          <SectionIntro
            eyebrow="The Higher Life Podcast"
            title="More than a podcast — a platform for transformation."
            copy="The Higher Life Podcast with Pastor Deola Phillips is a teaching platform for faith, purpose, family, and spiritual maturity, designed to bring biblical wisdom into the rhythm of everyday life."
            align="center"
          />

          <div className="mx-auto mt-10 max-w-4xl space-y-5 text-center text-base leading-8 text-ink-600 sm:text-lg">
            <p>
              Through each episode, Pastor Deola creates a space where profound truths feel both spiritually rich and practically useful. Covering topics from divine destiny and walking in excellence to family, relationships, and the fullness of the blessing, The Higher Life Podcast is a resource for believers at every stage of their walk with Christ.
            </p>
            <p>
              With over 13 episodes published, tens of thousands of views, and a growing global community of listeners, the podcast has quickly established itself as a trusted voice for Christ-centered growth and spiritual maturity.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <Link to="/episodes">
              <Button variant="primary" size="lg">
                <Mic className="h-5 w-5" />
                Explore All Episodes
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
