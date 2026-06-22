import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-text text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-white flex items-center gap-2">
              <span className="text-primary">Riyan</span> Purifiers
            </h2>
            <p className="text-gray-400 mb-6">
              20+ Years of Experience in providing premium RO Water Purifier solutions to homes and businesses.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/riyanpurifier?igsh=bDd0bWE1d281Mjdl"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill group transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:text-white hover:border-transparent"
              >
                <FaInstagram
                  size={18}
                  className="text-pink-600 group-hover:text-white transition-colors"
                />
              </a>

              <a
                href="https://www.facebook.com/people/Riyan-Purifiers/61579686325976/?rdid=Fn47Ls7GjglfQ3EO&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Kiyyw9tEo%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill group transition-all duration-300 hover:bg-[#1877F2] hover:text-white hover:border-transparent"
              >
                <FaFacebookF
                  size={18}
                  className="text-[#1877F2] group-hover:text-white transition-colors"
                />
              </a>

              <a
                href="https://www.youtube.com/@resalesproperties"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill group transition-all duration-300 hover:bg-[#FF0000] hover:text-white hover:border-transparent"
              >
                <FaYoutube
                  size={18}
                  className="text-[#FF0000] group-hover:text-white transition-colors"
                />
              </a>

              <a
                href="https://api.whatsapp.com/message/NSXTEJO2OGDFJ1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill group transition-all duration-300 hover:bg-[#25D366] hover:text-white hover:border-transparent"
              >
                <FaWhatsapp
                  size={18}
                  className="text-[#25D366] group-hover:text-white transition-colors"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/catalogue" className="text-gray-400 hover:text-white transition-colors">Catalogue</Link></li>
              <li><Link to="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
                <span>Tamil Nadu, India</span>
              </li>

              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-primary flex-shrink-0" size={20} />
                <a
                  href="tel:+918438512282"
                  className="hover:text-primary transition-colors"
                >
                  +91 8438512282
                </a>
              </li>

              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="text-primary flex-shrink-0" size={20} />
                <a
                  href="mailto:riyanrealtorz@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  riyanrealtorz@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Riyan Purifiers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;