import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Partner With Us', path: '/partner' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white border-b border-border py-4">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 group shrink-0">
          <img src="/logo/t360.png" alt="Transact360 Logo" className="h-14 lg:h-16 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-bold text-base tracking-wide transition-colors ${
                location.pathname === link.path
                  ? 'text-brand-blue'
                  : 'text-text-muted hover:text-brand-blue'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4 shrink-0">
          <Link
            to="/login"
            className="font-bold text-base text-text-main hover:text-brand-blue transition-colors px-4 py-2"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="group flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white px-6 py-2.5 rounded-1xl font-bold text-base transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-text-main hover:text-brand-blue transition-colors shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-border flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-semibold text-lg py-2 border-b border-border/50 ${
                location.pathname === link.path ? 'text-brand-blue' : 'text-text-main'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Link
              to="/login"
              className="flex items-center justify-center w-full border-2 border-border text-text-main px-6 py-3 rounded-1xl font-bold text-base hover:bg-gray-50 transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="flex items-center justify-center w-full bg-brand-green text-white px-6 py-3 rounded-1xl font-bold text-base hover:bg-brand-green-dark transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
