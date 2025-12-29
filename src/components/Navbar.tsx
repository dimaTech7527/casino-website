import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#020617] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-4 py-4 items-center">
          {/* Logo */}
          <div className="col-span-4 lg:col-span-3">
            <Link to="/" className="flex items-start">
              <img 
                src="logo.png" 
                alt="OKWins UK" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:col-span-6 items-center justify-start space-x-8">
            <Link 
              to="/" 
              className="text-[#FFFFFF] hover:text-[#8B5CF6] transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-[#FFFFFF] hover:text-[#8B5CF6] transition-colors duration-200"
            >
              About
            </Link>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex lg:col-span-3 items-center justify-end space-x-4">
            <a 
              href="tel:+447506596350" 
              className="flex items-center space-x-2 text-[#C7D2FE] hover:text-[#8B5CF6] transition-colors duration-200"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm">+44 7506596350</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="col-span-8 lg:hidden flex justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#FFFFFF] hover:text-[#8B5CF6] transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-800 py-4 space-y-4">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="block text-[#FFFFFF] hover:text-[#8B5CF6] transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsOpen(false)}
              className="block text-[#FFFFFF] hover:text-[#8B5CF6] transition-colors duration-200"
            >
              About
            </Link>
            <div className="border-t border-gray-800 pt-4 space-y-2">
              <a 
                href="tel:+447506596350" 
                className="flex items-center space-x-2 text-[#C7D2FE] hover:text-[#8B5CF6] transition-colors duration-200"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">+44 7506596350</span>
              </a>
              <a 
                href="mailto:info@okwinsuk.com" 
                className="flex items-center space-x-2 text-[#C7D2FE] hover:text-[#8B5CF6] transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@okwinsuk.com</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
