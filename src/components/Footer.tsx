import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-primary-500 p-2 rounded-xl">
                <HeartPulse className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                MediSaathi
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              India's most advanced AI-powered healthcare platform connecting patients with the best doctors, pharmacies, and emergency services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            
            <div className="pt-4">
              <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get the App</p>
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                <a href="#" className="transition-transform hover:scale-105 inline-block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Get it on Google Play" 
                    className="h-12"
                  />
                </a>
                <a href="#" className="transition-transform hover:scale-105 inline-block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                    alt="Download on the App Store" 
                    className="h-12"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/doctors" className="hover:text-primary-400 transition-colors">Find Doctors</Link></li>
              <li><Link to="/appointment" className="hover:text-primary-400 transition-colors">Book Appointment</Link></li>
              <li><Link to="/ai-assistant" className="hover:text-primary-400 transition-colors">AI Health Assistant</Link></li>
              <li><Link to="/pharmacy" className="hover:text-primary-400 transition-colors">Medicine Delivery</Link></li>
              <li><Link to="/records" className="hover:text-primary-400 transition-colors">Digital Health Records</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/rural-telemedicine" className="hover:text-primary-400 transition-colors">Rural Telemedicine</Link></li>
              <li><Link to="/ai-report" className="hover:text-primary-400 transition-colors">AI Report Analyzer</Link></li>
              <li><Link to="/emergency" className="hover:text-red-400 transition-colors">Emergency SOS</Link></li>
              <li><Link to="/plans" className="hover:text-primary-400 transition-colors">Health Subscription Plans</Link></li>
              <li><Link to="/clinics" className="hover:text-primary-400 transition-colors">For Clinics & Hospitals</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <span>123 Tech Park, Cyber City, Gurugram, Haryana 122002, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <span>+91 1800-123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <span>support@medisaathi.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} MediSaathi. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
