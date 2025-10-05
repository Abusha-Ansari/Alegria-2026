import { Calendar, Clock, MapPin } from 'lucide-react';

const ScheduleSection = () => {
  const schedule = [
    {
      day: 'DAY 1',
      date: 'March 15, 2025',
      events: [
        { time: '09:00 AM', name: 'Inauguration Ceremony', venue: 'Main Auditorium' },
        { time: '11:00 AM', name: 'Technical Events Begin', venue: 'Tech Block' },
        { time: '02:00 PM', name: 'Cultural Preliminaries', venue: 'Open Stage' },
        { time: '07:00 PM', name: 'Opening Concert', venue: 'Main Ground' },
      ],
    },
    {
      day: 'DAY 2',
      date: 'March 16, 2025',
      events: [
        { time: '09:00 AM', name: 'Sports Events', venue: 'Sports Complex' },
        { time: '11:00 AM', name: 'Hackathon Finals', venue: 'Lab 301' },
        { time: '03:00 PM', name: 'Cultural Finals', venue: 'Main Auditorium' },
        { time: '08:00 PM', name: 'Celebrity Night', venue: 'Main Ground' },
      ],
    },
    {
      day: 'DAY 3',
      date: 'March 17, 2025',
      events: [
        { time: '10:00 AM', name: 'Informal Events', venue: 'Campus Wide' },
        { time: '02:00 PM', name: 'Fashion Show', venue: 'Main Auditorium' },
        { time: '06:00 PM', name: 'Prize Distribution', venue: 'Main Auditorium' },
        { time: '09:00 PM', name: 'Closing Ceremony', venue: 'Main Ground' },
      ],
    },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-transparent to-card/30" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-slide-in">
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl text-gradient">
            SCHEDULE
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-20 bg-primary rounded-full" />
            <p className="text-secondary text-sm tracking-widest">3 DAYS OF HEROIC ACTION</p>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {schedule.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className="animate-scale-in"
              style={{ animationDelay: `${dayIndex * 0.2}s` }}
            >
              {/* Day Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="glass rounded-xl px-6 py-4 border-glow inline-flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="font-heading text-2xl text-foreground">{day.day}</h3>
                    <p className="text-sm text-muted-foreground">{day.date}</p>
                  </div>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-primary via-accent to-transparent" />
              </div>

              {/* Events Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="group glass rounded-xl p-6 hover:border-glow-accent transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    {/* Time */}
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-accent" />
                      <span className="text-sm font-semibold text-accent">{event.time}</span>
                    </div>

                    {/* Event Name */}
                    <h4 className="font-heading text-lg text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
                      {event.name}
                    </h4>

                    {/* Venue */}
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{event.venue}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground italic">
            * Schedule subject to change. Updates will be posted on our social media.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
