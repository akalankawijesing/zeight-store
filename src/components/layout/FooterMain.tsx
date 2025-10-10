import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, CreditCard, Truck, Shield, RefreshCw } from 'lucide-react';

export default function FooterMain() {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Feature Cards Section */}
      <div className="border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Free Shipping */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center mb-4 group-hover:bg-white transition-colors duration-300">
                <Truck className="w-8 h-8 text-white group-hover:text-neutral-900 transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-medium mb-2">Free Shipping</h3>
              <p className="text-sm text-neutral-400">On orders over $100</p>
            </div>

            {/* Secure Payment */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center mb-4 group-hover:bg-white transition-colors duration-300">
                <Shield className="w-8 h-8 text-white group-hover:text-neutral-900 transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-medium mb-2">Secure Payment</h3>
              <p className="text-sm text-neutral-400">100% secure transactions</p>
            </div>

            {/* Easy Returns */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center mb-4 group-hover:bg-white transition-colors duration-300">
                <RefreshCw className="w-8 h-8 text-white group-hover:text-neutral-900 transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-medium mb-2">Easy Returns</h3>
              <p className="text-sm text-neutral-400">30-day return policy</p>
            </div>

            {/* Multiple Payment */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center mb-4 group-hover:bg-white transition-colors duration-300">
                <CreditCard className="w-8 h-8 text-white group-hover:text-neutral-900 transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-medium mb-2">Payment Options</h3>
              <p className="text-sm text-neutral-400">Multiple payment methods</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-light tracking-wider">FashionStore</h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Timeless elegance meets contemporary design. Curating sophisticated fashion for the modern woman.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-white hover:text-neutral-900 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-white hover:text-neutral-900 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-white hover:text-neutral-900 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-white hover:text-neutral-900 transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-lg font-medium mb-6 tracking-wide">SHOP</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300">
                  Dresses
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300">
                  Tops & Blouses
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300">
                  Bottoms
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300">
                  Outerwear
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div>
            <h3 className="text-lg font-medium mb-6 tracking-wide">CUSTOMER SERVICE</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-medium mb-6 tracking-wide">CONTACT</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-neutral-400 mt-1 flex-shrink-0" />
                <span className="text-sm text-neutral-400">
                  123 Fashion Street<br />New York, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                <a href="mailto:hello@desinelle.com" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300">
                  hello@desinelle.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-sm font-medium mb-3 tracking-wide">NEWSLETTER</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-neutral-800 text-white text-sm border border-neutral-700 focus:outline-none focus:border-white transition-colors duration-300"
                />
                <button className="px-6 py-2 bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-400">
              © 2025 Desinelle. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-neutral-400">We accept:</span>
              <div className="flex space-x-2">
                <div className="w-12 h-8 bg-neutral-800 rounded flex items-center justify-center text-xs text-neutral-400">
                  VISA
                </div>
                <div className="w-12 h-8 bg-neutral-800 rounded flex items-center justify-center text-xs text-neutral-400">
                  MC
                </div>
                <div className="w-12 h-8 bg-neutral-800 rounded flex items-center justify-center text-xs text-neutral-400">
                  AMEX
                </div>
                <div className="w-12 h-8 bg-neutral-800 rounded flex items-center justify-center text-xs text-neutral-400">
                  PYPL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}