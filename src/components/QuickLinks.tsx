import { quickLinks } from '../data/quickLinks';
import { Link } from 'react-router-dom';

const QuickLinks = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="bg-white p-4 rounded-lg shadow-md hover:bg-secondary hover:text-white transition-colors text-center"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
