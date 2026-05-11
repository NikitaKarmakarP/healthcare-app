import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeartPulse, Menu, X, Phone, User, Settings, LogOut, ChevronDown, LayoutDashboard, Stethoscope, Building2, Pill, Sparkles, Baby, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{name: string, avatar: string} | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleLoginSuccess = (_provider: string) => {
    setIsLoggedIn(true);
    setUser({
      name: "Nikita",
      avatar: "https://i.pravatar.cc/150?img=47"
    });
    setIsLoginModalOpen(false);
  };

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { 
      name: 'Healthcare', 
      path: '#',
      subLinks: [
        { name: 'Find Doctors', path: '/doctors', desc: 'Book expert consultations', icon: Stethoscope, color: 'text-blue-500', bg: 'bg-blue-50' },
        { name: 'Hospitals', path: '/hospitals', desc: 'Find nearby medical centers', icon: Building2, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { name: 'Pharmacy', path: '/pharmacy', desc: 'Order medicines online', icon: Pill, color: 'text-purple-500', bg: 'bg-purple-50' },
      ]
    },
    { 
      name: 'Specialties', 
      path: '#',
      subLinks: [
        { name: 'Women\'s Health', path: '/womens-health', desc: 'Pregnancy & cycle tracking', icon: Sparkles, color: 'text-pink-500', bg: 'bg-pink-50' },
        { name: 'Children\'s Care', path: '/childrens-health', desc: 'Pediatricians & vaccinations', icon: Baby, color: 'text-orange-500', bg: 'bg-orange-50' },
        { name: 'Rural Telemedicine', path: '/rural-telemedicine', desc: 'Remote healthcare access', icon: Phone, color: 'text-teal-500', bg: 'bg-teal-50' },
      ]
    },
    { name: 'Admin', path: '/admin', icon: ShieldCheck },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-br from-primary-600 to-blue-500 p-2.5 rounded-xl shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-all group-hover:scale-105">
                <HeartPulse className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 tracking-tight">
                Medi<span className="text-primary-600">Saathi</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.subLinks ? (
                    <button className="flex items-center space-x-1 px-4 py-2.5 text-gray-600 hover:text-gray-900 font-bold rounded-full hover:bg-gray-50 transition-all group-hover:bg-gray-50">
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-transform group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-4 py-2.5 font-bold rounded-full transition-all ${location.pathname === link.path ? 'text-primary-600 bg-primary-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* Mega Menu Dropdown */}
                  {link.subLinks && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="w-[320px] bg-white rounded-3xl shadow-[0_20px_40px_rgb(0,0,0,0.1)] border border-gray-100 overflow-hidden relative">
                        {/* Decorative top bar */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-blue-500"></div>
                        <div className="p-3">
                          {link.subLinks.map(sub => (
                            <Link 
                              key={sub.name} 
                              to={sub.path} 
                              className="flex items-start p-3 rounded-2xl hover:bg-gray-50 transition-colors group/sub"
                            >
                              <div className={`w-10 h-10 rounded-xl ${sub.bg} flex items-center justify-center flex-shrink-0 mr-4 shadow-sm`}>
                                <sub.icon className={`w-5 h-5 ${sub.color}`} />
                              </div>
                              <div>
                                <h4 className="text-sm font-bold text-gray-900 group-hover/sub:text-primary-600 transition-colors">{sub.name}</h4>
                                <p className="text-xs text-gray-500 mt-0.5 font-medium">{sub.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/emergency" className="flex items-center space-x-2 text-red-600 font-bold hover:bg-red-50 px-5 py-2.5 rounded-full transition-colors border border-red-200 shadow-sm shadow-red-100 group">
                <Phone className="h-4 w-4 group-hover:animate-bounce" />
                <span>SOS</span>
              </Link>
              
              {isLoggedIn && user ? (
                <div className="relative group">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center space-x-3 bg-white border border-gray-200 pl-2 pr-4 py-1.5 rounded-full shadow-sm cursor-pointer hover:shadow-md transition-all hover:border-primary-200"
                  >
                    <img src={user.avatar} alt="Profile" className="w-8 h-8 rounded-full border-2 border-primary-100" />
                    <span className="font-bold text-gray-800 hidden lg:block">{user.name}</span>
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:rotate-180 transition-transform" />
                  </motion.div>
                  
                  {/* User Dropdown */}
                  <div className="absolute right-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="w-56 bg-white rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.1)] border border-gray-100 overflow-hidden">
                      <div className="p-4 border-b border-gray-50 bg-gray-50/50">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Signed in as</p>
                        <p className="text-sm font-bold text-gray-900 truncate">{user.name}</p>
                      </div>
                      <div className="p-2">
                        <Link to="/settings" className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 font-bold rounded-xl transition-colors">
                          <Settings className="w-4 h-4 mr-3" /> Settings
                        </Link>
                        <button 
                          onClick={() => { setIsLoggedIn(false); setUser(null); }}
                          className="w-full flex items-center px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 font-bold rounded-xl transition-colors"
                        >
                          <LogOut className="w-4 h-4 mr-3" /> Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <motion.button 
                  onClick={() => setIsLoginModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden flex items-center space-x-2 bg-gray-900 hover:bg-black text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-gray-900/20 group"
                >
                  <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
                  <User className="h-4 w-4 relative z-10" />
                  <span className="relative z-10">Login</span>
                </motion.button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-4">
              <Link to="/emergency" className="flex items-center justify-center w-10 h-10 bg-red-50 text-red-600 rounded-full border border-red-200">
                <Phone className="h-4 w-4" />
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-900 bg-gray-50 hover:bg-gray-100 p-2.5 rounded-full transition-colors focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl z-40 max-h-[calc(100vh-80px)] overflow-y-auto"
            >
              <div className="px-4 py-6 space-y-6">
                
                {/* Mobile Links */}
                <div className="space-y-4">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      {link.subLinks ? (
                        <div className="space-y-3">
                          <p className="text-xs font-black text-gray-400 uppercase tracking-wider ml-2">{link.name}</p>
                          <div className="grid gap-2">
                            {link.subLinks.map(sub => (
                              <Link
                                key={sub.name}
                                to={sub.path}
                                className="flex items-center p-3 rounded-2xl border border-gray-50 bg-gray-50/50 hover:bg-gray-50 hover:border-gray-100 transition-colors"
                              >
                                <div className={`w-10 h-10 rounded-xl ${sub.bg} flex items-center justify-center mr-4 flex-shrink-0`}>
                                  <sub.icon className={`w-5 h-5 ${sub.color}`} />
                                </div>
                                <div>
                                  <h4 className="font-bold text-gray-900 text-sm">{sub.name}</h4>
                                  <p className="text-xs text-gray-500 font-medium">{sub.desc}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={link.path}
                          className="flex items-center px-4 py-3 text-base font-bold text-gray-900 hover:text-primary-600 bg-gray-50 rounded-2xl"
                        >
                          <link.icon className="w-5 h-5 mr-3 text-gray-400" />
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Auth/Actions */}
                <div className="pt-6 border-t border-gray-100 space-y-3">
                  {isLoggedIn && user ? (
                    <div className="bg-gray-50 rounded-3xl p-4">
                      <div className="flex items-center space-x-4 mb-4 pb-4 border-b border-gray-200">
                        <img src={user.avatar} alt="Profile" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                        <div>
                          <p className="font-bold text-gray-900 text-lg">{user.name}</p>
                          <p className="text-xs font-bold text-primary-600">View Profile</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Link to="/settings" className="flex-1 flex justify-center items-center py-2.5 bg-white border border-gray-200 rounded-xl font-bold text-gray-700 text-sm">
                          <Settings className="w-4 h-4 mr-2" /> Settings
                        </Link>
                        <button onClick={() => { setIsLoggedIn(false); setUser(null); setIsOpen(false); }} className="flex-1 flex justify-center items-center py-2.5 bg-red-50 text-red-600 rounded-xl font-bold text-sm">
                          <LogOut className="w-4 h-4 mr-2" /> Logout
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button 
                      onClick={() => { setIsOpen(false); setIsLoginModalOpen(true); }}
                      className="w-full flex justify-center items-center py-4 bg-gray-900 text-white rounded-2xl font-bold text-lg shadow-lg"
                    >
                      <User className="h-5 w-5 mr-2" /> Login / Sign Up
                    </button>
                  )}
                </div>
                
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} onLoginSuccess={handleLoginSuccess} />
    </>
  );
};

export default Navbar;
