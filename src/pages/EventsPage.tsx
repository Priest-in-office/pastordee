import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink, Ticket } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { events } from '../data/episodes';

const typeColors: Record<string, string> = {
  conference: 'bg-brand-gold/10 text-brand-gold',
  service: 'bg-brand-teal/10 text-brand-teal-dark',
  speaking: 'bg-purple-100 text-purple-700',
  online: 'bg-blue-100 text-blue-700',
};

const typeLabels: Record<string, string> = {
  conference: 'Conference',
  service: 'Church Service',
  speaking: 'Speaking',
  online: 'Online Event',
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
    .filter((e) => new Date(e.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const pastEvents = events
    .filter((e) => new Date(e.date) < new Date())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main id="events-page">
      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-br from-dark via-dark-secondary to-dark-surface overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-brand-teal/20 flex items-center justify-center mx-auto mb-6">
              <Ticket className="w-8 h-8 text-brand-teal" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Events
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Join us at upcoming conferences, services, and special events. Experience The Higher
              Life in person.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 lg:py-24 bg-surface-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Upcoming Events"
            subtitle="Don't miss these upcoming opportunities to grow in faith"
          />

          {upcomingEvents.length > 0 ? (
            <div className="space-y-6">
              {upcomingEvents.map((event, i) => (
                <motion.article
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-teal/20 transition-all duration-500 overflow-hidden"
                >
                  <div className="p-6 lg:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                            typeColors[event.type] || 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {typeLabels[event.type] || event.type}
                        </span>
                        <h3 className="font-heading text-xl lg:text-2xl font-bold text-dark">
                          {event.title}
                        </h3>
                      </div>

                      {event.registrationUrl && (
                        <Button href={event.registrationUrl} variant="primary" size="sm">
                          <ExternalLink className="w-4 h-4" />
                          Register
                        </Button>
                      )}
                    </div>

                    <p className="text-gray-500 mb-6">{event.description}</p>

                    <div className="flex flex-wrap gap-5 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-brand-teal" />
                        {formatDate(event.date)}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-brand-teal" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-brand-teal" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
              <p className="text-gray-400 text-lg">
                No upcoming events at the moment. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Past Events"
              subtitle="A look back at our previous gatherings"
            />

            <div className="space-y-4">
              {pastEvents.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                >
                  <div className="text-center shrink-0 w-14">
                    <span className="text-lg font-bold text-dark block">
                      {new Date(event.date).getDate()}
                    </span>
                    <span className="text-xs text-gray-400 uppercase">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-dark text-sm truncate">{event.title}</h4>
                    <p className="text-gray-400 text-xs">{event.location}</p>
                  </div>
                  <span
                    className={`shrink-0 px-2 py-1 rounded text-xs font-medium ${
                      typeColors[event.type] || 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {typeLabels[event.type]}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
