import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Payment Methods', path: '/payment-methods' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#14532D]/95 backdrop-blur-sm shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center transition-all duration-500 hover:scale-105">
            <img src="logo.png" alt="Unreal Cheat Casino" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-6 py-3 rounded-full text-[#F0FDF4] font-medium transition-all duration-500 ease-out ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-[#22C55E] to-[#4ADE80] shadow-lg'
                    : 'hover:bg-[#166534] hover:scale-105'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Info Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+447915207386"
              className="text-[#BBF7D0] hover:text-[#4ADE80] transition-all duration-500"
            >
              +44 7915207386
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full bg-[#166534] text-[#BBF7D0] hover:bg-[#22C55E] transition-all duration-500"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-700 ease-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3 bg-[#166534]/95 backdrop-blur-sm rounded-[2rem] mx-4 mb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-6 py-3 rounded-full text-[#F0FDF4] font-medium transition-all duration-500 ${
                isActive(link.path)
                  ? 'bg-gradient-to-r from-[#22C55E] to-[#4ADE80]'
                  : 'hover:bg-[#14532D]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+447915207386"
            className="block px-6 py-3 rounded-full text-[#BBF7D0] hover:bg-[#14532D] transition-all duration-500"
          >
            +44 7915207386
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
