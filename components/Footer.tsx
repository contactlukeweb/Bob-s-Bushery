
import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth text-stone-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-primary text-3xl">
                <i className="fas fa-tree"></i>
              </span>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Bob's <span className="text-primary">Bushery</span>
              </span>
            </div>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Serving the Gold Coast with professional landscaping and garden maintenance since 2014. Quality you can trust, passion you can see.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors text-xl"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-primary transition-colors text-xl"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-primary transition-colors text-xl"><i className="fab fa-google"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-b border-stone-700 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/reviews" className="hover:text-primary transition-colors">Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-b border-stone-700 pb-2 inline-block">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <i className="fas fa-phone-alt text-primary mt-1"></i>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-primary transition-colors">{BUSINESS_INFO.phone}</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-envelope text-primary mt-1"></i>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-primary transition-colors">{BUSINESS_INFO.email}</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-primary mt-1"></i>
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-stone-400">{BUSINESS_INFO.location}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-b border-stone-700 pb-2 inline-block">Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between"><span>Mon - Fri</span> <span>7am - 5pm</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>8am - 12pm</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-700 pt-8 text-center text-stone-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Bob's Bushery. All rights reserved. Gold Coast, QLD.</p>
        </div>
      </div>

      {/* Persistent Mobile Call Action */}
      <div className="fixed bottom-0 left-0 right-0 bg-primary text-white p-3 md:hidden flex justify-around items-center z-40 shadow-lg">
        <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center space-x-2 font-bold">
          <i className="fas fa-phone"></i>
          <span>Call Now</span>
        </a>
        <div className="h-6 w-px bg-white/30"></div>
        <Link to="/contact" className="flex items-center space-x-2 font-bold">
          <i className="fas fa-paper-plane"></i>
          <span>Get Quote</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
