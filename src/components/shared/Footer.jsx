import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MessageCircle, Share2, ArrowRight, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-1 mb-6">
              <img src="/logo/t360.png" alt="Transact360 Logo" className="h-16 lg:h-20 w-auto object-contain" />
            </Link>
            <p className="text-text-muted leading-relaxed mb-8 max-w-sm">
              Empowering modern financial ecosystems with scalable, secure, and intelligent enterprise software solutions.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300">
                <Share2 size={18} />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-text-main mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/services" className="font-semibold text-text-muted hover:text-brand-green transition-colors">BBPS & Utility</Link></li>
              <li><Link to="/services" className="font-semibold text-text-muted hover:text-brand-green transition-colors">RuPay QR</Link></li>
              <li><Link to="/services" className="font-semibold text-text-muted hover:text-brand-green transition-colors">T360 Pay</Link></li>
              <li><Link to="/services" className="font-semibold text-text-muted hover:text-brand-green transition-colors">DMT & Add Money</Link></li>
              <li><Link to="/services" className="font-semibold text-text-muted hover:text-brand-green transition-colors">POS Systems</Link></li>
              <li><Link to="/services" className="font-semibold text-text-muted hover:text-brand-green transition-colors">Credit Card Services</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-text-main mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/about" className="font-semibold text-text-muted hover:text-brand-blue transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="font-semibold text-text-muted hover:text-brand-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter & App Column */}
          <div className="lg:col-span-4">
            <div className="bg-gray-50 rounded-1xl p-6 border border-border mb-8">
              <h4 className="font-bold text-text-main mb-2 flex items-center gap-2">
                <Mail size={18} className="text-brand-yellow" />
                Stay Updated
              </h4>
              <p className="text-sm text-text-muted mb-4">Subscribe to our newsletter for the latest fintech insights.</p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-white border border-border rounded-1xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                  required
                />
                <button type="submit" className="bg-brand-green hover:bg-brand-green-dark text-white px-4 py-2.5 rounded-1xl font-bold text-sm transition-colors">
                  Subscribe
                </button>
              </form>
            </div>

            <div>
              <h4 className="font-bold text-text-main mb-4 uppercase tracking-wider text-sm">Download Our App</h4>
              <a href="https://play.google.com/store/apps/details?id=com.chirag.transact360&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="inline-block hover:-translate-y-1 transition-transform duration-300">
                <img src="/googleplay.png" alt="Get it on Google Play" className="h-[48px] w-auto object-contain" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">
            &copy; {currentYear} Transact360 Solutions Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-text-muted">
            <Link to="/privacy" className="hover:text-brand-blue transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-blue transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
