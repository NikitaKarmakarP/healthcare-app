import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#0B0F19] overflow-hidden rounded-t-[3rem] mt-24 pt-20 pb-8 border-t border-white/10">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-teal-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter Section */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Subscribe to our Newsletter</h3>
            <p className="text-gray-400">Get the latest health tips, medical news, and exclusive MediSaathi Prime offers delivered directly to your inbox.</p>
          </div>
          <div className="w-full md:w-1/2 flex">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full bg-white/10 border border-white/20 rounded-l-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
            />
            <button className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-r-2xl font-bold transition-colors flex items-center shadow-lg shadow-primary-500/20">
              Subscribe <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-br from-primary-600 to-blue-500 p-2.5 rounded-xl shadow-lg shadow-primary-500/30 group-hover:scale-105 transition-transform">
                <HeartPulse className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Medi<span className="text-primary-500">Saathi</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              India's most advanced AI-powered healthcare platform. Seamlessly connecting you with the best doctors, digital records, and emergency services.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all shadow-sm">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-black mb-6 uppercase tracking-wider text-sm">Explore</h3>
            <ul className="space-y-3">
              {[
                { name: 'Find Doctors', path: '/doctors' },
                { name: 'Book Appointment', path: '/appointment' },
                { name: 'AI Health Assistant', path: '/ai-assistant' },
                { name: 'Pharmacy Delivery', path: '/pharmacy' },
                { name: 'Digital Health Records', path: '/records' }
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors flex items-center group text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-black mb-6 uppercase tracking-wider text-sm">Special Services</h3>
            <ul className="space-y-3">
              {[
                { name: 'Women\'s Health', path: '/womens-health' },
                { name: 'Children\'s Care', path: '/childrens-health' },
                { name: 'Rural Telemedicine', path: '/rural-telemedicine' },
                { name: 'AI Report Analyzer', path: '/ai-report' },
                { name: 'Emergency SOS', path: '/emergency', special: true }
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className={`transition-colors flex items-center group text-sm ${link.special ? 'text-red-400 hover:text-red-300 font-bold' : 'text-gray-400 hover:text-white'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${link.special ? 'bg-red-500' : 'bg-primary-500'} mr-2 opacity-0 group-hover:opacity-100 transition-opacity`}></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & App */}
          <div>
            <h3 className="text-white text-lg font-black mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <span>123 Tech Park, Cyber City, Gurugram, India</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <span>+91 1800-123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <span>support@medisaathi.in</span>
              </li>
            </ul>

            <div>
              <p className="text-xs font-black text-gray-500 uppercase tracking-wider mb-3">Download App</p>
              <div className="flex gap-3">
                <a href="#" className="transition-transform hover:scale-105 inline-block opacity-80 hover:opacity-100">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
                </a>
                <a href="#" className="transition-transform hover:scale-105 inline-block opacity-80 hover:opacity-100">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="font-medium">&copy; {new Date().getFullYear()} MediSaathi Healthcare Platform. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 font-medium">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
