import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Menu, X, Phone, User, Settings, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{name: string, avatar: string} | null>(null);

  const handleLoginSuccess = (_provider: string) => {
    setIsLoggedIn(true);
    setUser({
      name: "Nikita",
      avatar: "https://i.pravatar.cc/150?img=47"
    });
    setIsLoginModalOpen(false);
  };

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Hospitals', path: '/hospitals' },
    { name: 'Find Doctors', path: '/doctors' },
    { name: 'Pharmacy', path: '/pharmacy' },
    { 
      name: 'Women\'s', 
      path: '/womens-health',
      subLinks: [
        { name: 'Period Tracker', path: '/womens-health?tab=period' },
        { name: 'Pregnancy Tracker', path: '/womens-health?tab=pregnancy' }
      ]
    },
    { 
      name: 'Children\'s', 
      path: '/childrens-health',
      subLinks: [
        { name: 'Pediatricians', path: '/childrens-health?tab=doctors' },
        { name: 'Vaccination Tracker', path: '/childrens-health?tab=vaccination' },
        { name: 'Baby Care Store', path: '/childrens-health?tab=store' }
      ]
    },
    { name: 'Admin', path: '/admin' },
  ];

  return (
    <nav className="fixed w-full z-50 glassmorphism transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-primary-600 p-2 rounded-xl">
              <HeartPulse className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500">
              MediSaathi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className="text-gray-600 hover:text-primary-600 font-medium transition-colors py-4"
                >
                  {link.name}
                </Link>
                {link.subLinks && (
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {link.subLinks.map(sub => (
                        <Link key={sub.name} to={sub.path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium">
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/emergency" className="flex items-center space-x-2 text-red-600 font-semibold hover:bg-red-50 px-4 py-2 rounded-full transition-colors border border-red-200">
              <Phone className="h-4 w-4" />
              <span>SOS</span>
            </Link>
            
            {isLoggedIn && user ? (
              <div className="relative group">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center space-x-3 bg-white border border-gray-100 pl-2 pr-4 py-1.5 rounded-full shadow-sm cursor-pointer hover:shadow-md transition-all"
                >
                  <img src={user.avatar} alt="Profile" className="w-8 h-8 rounded-full border-2 border-primary-500 shadow-sm" />
                  <span className="font-bold text-gray-700 hidden lg:block">{user.name}</span>
                </motion.div>
                <div className="absolute right-0 mt-0 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    <Link to="/settings" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-medium">
                      <Settings className="w-4 h-4 mr-3" />
                      Settings
                    </Link>
                    <button 
                      onClick={() => { setIsLoggedIn(false); setUser(null); }}
                      className="w-full flex items-center px-4 py-3 text-sm text-red-600 hover:bg-red-50 font-medium"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <motion.button 
                onClick={() => setIsLoginModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-blue-400 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] group"
              >
                <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:animate-[ripple_1s_ease-in-out_infinite]"></span>
                <User className="h-4 w-4 relative z-10" />
                <span className="relative z-10">Login Securely</span>
              </motion.button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glassmorphism border-t border-gray-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg"
                    onClick={() => !link.subLinks && setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <div className="pl-6 space-y-1 mt-1">
                      {link.subLinks.map(sub => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-3 py-2 text-sm font-medium text-gray-500 hover:text-pink-600 hover:bg-pink-50 rounded-lg"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <button className="flex justify-center items-center space-x-2 text-red-600 font-semibold bg-red-50 border border-red-200 px-4 py-3 rounded-xl">
                  <Phone className="h-5 w-5" />
                  <span>Emergency SOS</span>
                </button>
                
                {isLoggedIn && user ? (
                   <div className="flex flex-col space-y-3">
                     <div className="flex justify-center items-center space-x-3 bg-white border border-gray-100 px-4 py-3 rounded-xl shadow-sm">
                       <img src={user.avatar} alt="Profile" className="w-8 h-8 rounded-full border-2 border-primary-500 shadow-sm" />
                       <span className="font-bold text-gray-700">{user.name}</span>
                     </div>
                     <Link onClick={() => setIsOpen(false)} to="/settings" className="flex justify-center items-center space-x-2 text-gray-700 font-semibold bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl hover:bg-gray-100 transition-colors">
                       <Settings className="h-5 w-5" />
                       <span>Settings</span>
                     </Link>
                     <button onClick={() => { setIsLoggedIn(false); setUser(null); setIsOpen(false); }} className="flex justify-center items-center space-x-2 text-red-600 font-semibold bg-red-50 border border-red-200 px-4 py-3 rounded-xl hover:bg-red-100 transition-colors">
                       <LogOut className="h-5 w-5" />
                       <span>Logout</span>
                     </button>
                   </div>
                ) : (
                  <button 
                    onClick={() => { setIsOpen(false); setIsLoginModalOpen(true); }}
                    className="relative overflow-hidden flex justify-center items-center space-x-2 bg-gradient-to-r from-primary-600 to-blue-400 text-white px-4 py-3 rounded-xl font-bold shadow-[0_0_15px_rgba(59,130,246,0.5)] group"
                  >
                    <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
                    <User className="h-5 w-5 relative z-10" />
                    <span className="relative z-10">Login Securely</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} onLoginSuccess={handleLoginSuccess} />
    </nav>
  );
};

export default Navbar;
