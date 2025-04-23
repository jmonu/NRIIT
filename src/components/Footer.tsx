import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">NRI Institute of Technology</h3>
            <p>
              Pothavarappadu (V), Agiripalli (M),
              <br />
              Vijayawada, Andhra Pradesh, India
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Email: info@nriit.edu.in</p>
            <p>Phone: +91-866-2469201</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook"><FaFacebook size={24} /></a>
              <a href="#" aria-label="Twitter"><FaTwitter size={24} /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
              <a href="#" aria-label="Instagram"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; NRI Institute of Technology. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
