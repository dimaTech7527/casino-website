import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import footerBadges from '../data/footer.json';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#14532D] via-[#166534] to-[#14532D] text-[#F0FDF4] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <img src="logo.png" alt="Unreal Cheat Casino" className="h-16 w-auto mb-4" />
            <p className="text-[#DCFCE7] leading-relaxed">
              Your trusted guide to the best UK online casinos. We provide honest reviews and expert recommendations to help you find safe and licensed gambling sites.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-[#DCFCE7] hover:text-[#22C55E] transition-all duration-500 inline-block hover:translate-x-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#DCFCE7] hover:text-[#22C55E] transition-all duration-500 inline-block hover:translate-x-2"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/payment-methods"
                  className="text-[#DCFCE7] hover:text-[#22C55E] transition-all duration-500 inline-block hover:translate-x-2"
                >
                  Payment Methods
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">
              Contact Us
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:info@unrealcheatcasino.com"
                className="flex items-center gap-3 text-[#DCFCE7] hover:text-[#22C55E] transition-all duration-500 group"
              >
                <Mail className="group-hover:scale-110 transition-all duration-500" />
                <span>info@unrealcheatcasino.com</span>
              </a>
              <a
                href="tel:+447915207386"
                className="flex items-center gap-3 text-[#DCFCE7] hover:text-[#22C55E] transition-all duration-500 group"
              >
                <Phone className="group-hover:scale-110 transition-all duration-500" />
                <span>+44 7915207386</span>
              </a>
            </div>
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="py-8 border-t border-[#22C55E]/30">
          <h4 className="text-center text-xl font-bold mb-6 text-[#DCFCE7]">
            Responsible Gambling & Compliance
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {footerBadges.map((badge, index) => (
              <a
                key={index}
                href={badge.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-500 hover:scale-110 hover:brightness-110"
              >
                <img
                  src={badge.image}
                  alt="Compliance Badge"
                  className="h-12 w-auto rounded-2xl"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-[#22C55E]/30">
          <p className="text-center text-[#DCFCE7] text-sm leading-relaxed mb-4">
            <strong className="text-[#4ADE80]">18+ Only.</strong> Gambling can be addictive. Please play responsibly.
            All casinos listed are licensed by the UK Gambling Commission. This website contains affiliate links,
            and we may receive compensation if you sign up through our links.
          </p>
          <p className="text-center text-[#BBF7D0] text-sm">
            © 2025 unrealcheatcasino.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
