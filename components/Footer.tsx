import Link from 'next/link';
import { Mail, MapPin, Phone, Gem } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-linear-to-br from-neutral-50 to-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-md">
                <Gem className="w-6 h-6 text-white" />
              </div>
              <div className="text-lg font-bold text-neutral-800">Opulence Tools</div>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Luxury tools and equipment for discerning craftsmen. Unparalleled quality and sophistication in every piece.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-neutral-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/shop" className="text-sm text-neutral-600 hover:text-emerald-600 transition-colors">Shop Tools</Link></li>
              <li><Link href="/about" className="text-sm text-neutral-600 hover:text-emerald-600 transition-colors">About Us</Link></li>
              <li><Link href="/faq" className="text-sm text-neutral-600 hover:text-emerald-600 transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-sm text-neutral-600 hover:text-emerald-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-neutral-900 font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-neutral-600 hover:text-emerald-600 transition-colors">Shipping Information</a></li>
              <li><a href="#" className="text-sm text-neutral-600 hover:text-emerald-600 transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-neutral-600 hover:text-emerald-600 transition-colors">Order Tracking</a></li>
              <li><a href="#" className="text-sm text-neutral-600 hover:text-emerald-600 transition-colors">Bulk Ordering</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-neutral-900 font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 text-emerald-600" />
                <span className="text-sm text-neutral-600">concierge@opulencetools.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 text-emerald-600" />
                <span className="text-sm text-neutral-600">1-800-OPULENT</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-emerald-600" />
                <span className="text-sm text-neutral-600">Mon-Fri 9AM-6PM EST</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-500">
              © 2026 Opulence Tools. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-neutral-500 hover:text-emerald-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-neutral-500 hover:text-emerald-600 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-neutral-500 hover:text-emerald-600 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
