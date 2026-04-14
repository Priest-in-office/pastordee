import { Calendar, Clock, ExternalLink, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { events } from '../data/episodes';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import SectionIntro from '../components/ui/SectionIntro';
import SurfaceCard from '../components/ui/SurfaceCard';

const typeStyles: Record<string, string> = {
  conference: 'bg-gold-500/14 text-gold-700',
  service: 'bg-ink-950 text-white',
  speaking: 'bg-sand-200 text-ink-950',
  online: 'bg-white text-ink-700',
};

const typeLabels: Record<string, string> = {
  conference: 'Conference',
  service: 'Church service',
  speaking: 'Speaking',
  online: 'Online event',
};

export default function EventsPage() {
  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

  const upcomingEvents = events
    .filter((event) => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const pastEvents = events
    .filter((event) => new Date(event.date) < new Date())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main id="events-page">
      <PageHero
        eyebrow="Events"
        title="Bring the audience beyond the screen and into real gatherings."
        copy="This page now presents events with stronger hierarchy, calmer spacing, and cards that feel consistent with the new editorial site system."
      />

      <Section tone="paper" spacing="default">
        <Container size="default">
          <SectionIntro
            eyebrow="Upcoming"
            title="Opportunities to listen, gather, and grow in person."
            copy="The redesigned event shelf uses a cleaner premium card treatment with stronger metadata and action placement."
          />

          <div className="mt-12 space-y-6">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event, index) => (
                <motion.article
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <SurfaceCard tone="paper" padding="lg">
                    <div className="flex flex-col gap-5 border-b border-ink-950/8 pb-6 md:flex-row md:items-start md:justify-between">
                      <div>
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] ${
                            typeStyles[event.type] || 'bg-white text-ink-600'
                          }`}
                        >
                          {typeLabels[event.type] || event.type}
                        </span>
                        <h3 className="mt-4 text-3xl text-ink-950">{event.title}</h3>
                      </div>

                      {event.registrationUrl && (
                        <Button href={event.registrationUrl} variant="primary" size="md">
                          <ExternalLink className="h-4 w-4" />
                          Register
                        </Button>
                      )}
                    </div>

                    <p className="mt-6 text-base leading-7 text-ink-600">{event.description}</p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                      <div className="rounded-[1.25rem] border border-ink-950/8 bg-sand-50 px-4 py-4 text-sm text-ink-600">
                        <span className="inline-flex items-center gap-2 font-semibold text-ink-950">
                          <Calendar className="h-4 w-4 text-gold-600" />
                          Date
                        </span>
                        <p className="mt-2 leading-6">{formatDate(event.date)}</p>
                      </div>
                      <div className="rounded-[1.25rem] border border-ink-950/8 bg-sand-50 px-4 py-4 text-sm text-ink-600">
                        <span className="inline-flex items-center gap-2 font-semibold text-ink-950">
                          <Clock className="h-4 w-4 text-gold-600" />
                          Time
                        </span>
                        <p className="mt-2 leading-6">{event.time}</p>
                      </div>
                      <div className="rounded-[1.25rem] border border-ink-950/8 bg-sand-50 px-4 py-4 text-sm text-ink-600">
                        <span className="inline-flex items-center gap-2 font-semibold text-ink-950">
                          <MapPin className="h-4 w-4 text-gold-600" />
                          Location
                        </span>
                        <p className="mt-2 leading-6">{event.location}</p>
                      </div>
                    </div>
                  </SurfaceCard>
                </motion.article>
              ))
            ) : (
              <SurfaceCard tone="paper" padding="lg" className="text-center">
                <h3 className="text-3xl text-ink-950">No upcoming events right now.</h3>
                <p className="mt-4 text-base leading-7 text-ink-600">
                  This state is now handled with the same premium surface treatment as the
                  rest of the site.
                </p>
              </SurfaceCard>
            )}
          </div>
        </Container>
      </Section>

      {pastEvents.length > 0 && (
        <Section tone="transparent" spacing="default">
          <Container size="default">
            <SectionIntro
              eyebrow="Archive"
              title="Past gatherings"
              copy="A quieter archive treatment for previous events."
            />

            <div className="mt-10 space-y-4">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                >
                  <SurfaceCard tone="warm" padding="md">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-500">
                          {typeLabels[event.type]}
                        </p>
                        <h3 className="mt-2 text-2xl text-ink-950">{event.title}</h3>
                      </div>
                      <div className="text-sm text-ink-600 sm:text-right">
                        <p>{formatDate(event.date)}</p>
                        <p className="mt-1">{event.location}</p>
                      </div>
                    </div>
                  </SurfaceCard>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </main>
  );
}
