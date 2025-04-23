import { announcements } from '../data/announcements';

const AnnouncementTicker = () => {
  return (
    <section className="bg-secondary text-white py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="animate-marquee whitespace-nowrap">
          {announcements.map((announcement, index) => (
            <span key={index} className="mx-4">
              {announcement.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementTicker;
