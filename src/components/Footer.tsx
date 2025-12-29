import { Mail, Phone } from 'lucide-react';
import footerData from '../data/footer.json';

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="col-span-12 lg:col-span-5">
            <img 
              src="logo.png" 
              alt="OKWins UK" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-[#C7D2FE] text-base leading-relaxed">
              Your trusted guide to the best online casinos in the UK. We provide comprehensive reviews and exclusive bonuses to help you find the perfect gaming experience.
            </p>
          </div>

          {/* Contact Information */}
          <div className="col-span-12 lg:col-span-4">
            <h3 className="text-[#FFFFFF] text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a 
                href="mailto:info@okwinsuk.com" 
                className="flex items-center space-x-3 text-[#C7D2FE] hover:text-[#8B5CF6] transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
                <span>info@okwinsuk.com</span>
              </a>
              <a 
                href="tel:+447506596350" 
                className="flex items-center space-x-3 text-[#C7D2FE] hover:text-[#8B5CF6] transition-colors duration-200"
              >
                <Phone className="h-5 w-5" />
                <span>+44 7506596350</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-12 lg:col-span-3">
            <h3 className="text-[#FFFFFF] text-lg font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-[#C7D2FE] hover:text-[#8B5CF6] transition-colors duration-200">
                Home
              </a>
              <a href="/about" className="block text-[#C7D2FE] hover:text-[#8B5CF6] transition-colors duration-200">
                About
              </a>
            </div>
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="grid grid-cols-12 gap-4 mt-12 border-t border-gray-800 pt-8">
          <div className="col-span-12">
            <h3 className="text-[#FFFFFF] text-lg font-bold mb-4">Responsible Gaming</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {footerData.map((badge, index) => (
                <a
                  key={index}
                  href={badge.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 bg-[#1E1B4B] rounded hover:bg-[#8B5CF6] transition-colors duration-200"
                >
                  <img
                    src={badge.image}
                    alt={`Badge ${index + 1}`}
                    className="h-12 w-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright and Disclaimer */}
        <div className="grid grid-cols-12 gap-4 mt-8 border-t border-gray-800 pt-8">
          <div className="col-span-12">
            <p className="text-[#C7D2FE] text-sm leading-relaxed mb-4">
              © {new Date().getFullYear()} okwinsuk.com. All rights reserved.
            </p>
            <p className="text-[#C7D2FE] text-sm leading-relaxed">
              18+ only. Please gamble responsibly. BeGambleAware.org. Gambling can be addictive. This website contains affiliate links, and we may receive compensation if you sign up with one of our partners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
