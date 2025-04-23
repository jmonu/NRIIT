import HeroSlider from '../components/HeroSlider';
import AnnouncementTicker from '../components/AnnouncementTicker';
import AboutSection from '../components/AboutSection';
import QuickLinks from '../components/QuickLinks';
import Departments from '../components/Departments';
import StatisticsSection from '../components/StatisticsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import EventsSection from '../components/EventsSection';
import NewsSection from '../components/NewsSection';

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <AnnouncementTicker />
      <AboutSection />
      <QuickLinks />
      <Departments />
      <StatisticsSection />
      <TestimonialsSection />
      <EventsSection />
      <NewsSection />
    </div>
  );
};

export default HomePage;
