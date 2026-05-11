import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, AlertCircle, Navigation, ShieldAlert, HeartPulse, BellRing, ChevronRight, X, Clock, Activity } from 'lucide-react';

const Emergency = () => {
  const [sosActive, setSosActive] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (sosActive && countdown > 0) {
      timer = setTimeout(() => setCountdown(c => c - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [sosActive, countdown]);

  const triggerSOS = () => {
    setSosActive(true);
    setCountdown(5);
  };

  const cancelSOS = () => {
    setSosActive(false);
  };

  return (
    <div className="pt-20 bg-[#F8FAFC] min-h-screen font-sans">
      {/* SOS Overlay Modal */}
      <AnimatePresence>
        {sosActive && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl p-8 md:p-12 max-w-lg w-full text-center relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gray-100">
                <motion.div 
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="h-full bg-red-600"
                />
              </div>
              
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 bg-red-400 rounded-full"
                />
                <BellRing className="w-12 h-12 text-red-600 relative z-10 animate-bounce" />
              </div>
              
              <h2 className="text-3xl font-black text-gray-900 mb-2">Emergency SOS Triggered</h2>
              <p className="text-gray-600 text-lg mb-8">
                Alerting nearby hospitals, ambulance services, and your emergency contacts in...
              </p>
              
              <div className="text-7xl font-black text-red-600 mb-8 tabular-nums tracking-tighter">
                {countdown > 0 ? countdown : "0"}
              </div>
              
              {countdown > 0 ? (
                <button 
                  onClick={cancelSOS}
                  className="w-full py-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-2xl font-bold text-lg transition-colors flex items-center justify-center"
                >
                  <X className="w-6 h-6 mr-2" /> Cancel SOS
                </button>
              ) : (
                <div className="w-full py-4 bg-green-100 text-green-700 rounded-2xl font-bold text-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 mr-2" /> Dispatching Help Now
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div className="relative bg-[#0B0F19] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587556610432-843825832a8f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded-full font-bold text-sm mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
              <span>24/7 Rapid Response</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
              Emergency <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">SOS System</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed mb-8">
              One tap dispatches an ambulance to your exact location, alerts nearby hospitals, and notifies your family instantly.
            </p>
          </div>
          
          <div className="relative">
            {/* SOS Button Pulse Rings */}
            <motion.div
              animate={{ scale: [1, 1.4, 2], opacity: [0.6, 0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 bg-red-600 rounded-full pointer-events-none"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1.6], opacity: [0.8, 0.4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
              className="absolute inset-0 bg-red-500 rounded-full pointer-events-none"
            />
            
            <motion.button 
              onClick={triggerSOS}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-56 h-56 md:w-64 md:h-64 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex flex-col items-center justify-center text-white font-black shadow-[0_0_60px_rgba(220,38,38,0.6)] border-4 border-red-400/50 backdrop-blur-md group overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Phone className="w-16 h-16 mb-2 group-hover:animate-bounce drop-shadow-lg" />
              <span className="text-3xl tracking-widest drop-shadow-md">108</span>
              <span className="text-sm font-bold text-red-200 mt-2 tracking-widest uppercase">Tap to Call</span>
            </motion.button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Action Area */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <MapPin className="text-red-500 mr-3 w-7 h-7" /> Live Location Tracking
                </h2>
                <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold flex items-center border border-green-200">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span> GPS Active
                </div>
              </div>
              
              <div className="bg-gray-100 w-full h-96 rounded-2xl flex items-center justify-center relative overflow-hidden group shadow-inner">
                {/* Simulated Map Background */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-blue-500/10 mix-blend-multiply"></div>
                
                {/* Radar Sweep Effect */}
                <div className="absolute inset-0 border-[0.5px] border-white/20 rounded-full w-[200%] h-[200%] -top-1/2 -left-1/2 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(59,130,246,0.1)_0deg,rgba(59,130,246,0)_360deg)] animate-[spin_4s_linear_infinite] pointer-events-none"></div>
                
                {/* Mock Map Marker */}
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div 
                    animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 bg-blue-500 rounded-full absolute"
                  />
                  <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-2xl relative z-10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-xl shadow-xl mt-4 font-bold text-sm text-gray-800 border border-gray-100">Current Location</div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <p className="text-gray-600 text-sm font-medium flex items-center">
                  <ShieldAlert className="w-4 h-4 text-primary-500 mr-2" />
                  Auto-sharing with nearby units
                </p>
                <button className="w-full sm:w-auto bg-white text-gray-800 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center border border-gray-200 shadow-sm">
                  <Navigation className="w-4 h-4 mr-2 text-blue-500" /> Refresh Location
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Quick Action Services</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { title: "Ambulance", desc: "Private & Govt", icon: HeartPulse, colorTheme: "red", bgLight: "bg-red-50", text: "text-red-600", bgHover: "group-hover:bg-red-100", bar: "bg-red-500" },
                  { title: "Police", desc: "Dial 100", icon: AlertCircle, colorTheme: "blue", bgLight: "bg-blue-50", text: "text-blue-600", bgHover: "group-hover:bg-blue-100", bar: "bg-blue-500" },
                  { title: "Fire Station", desc: "Dial 101", icon: Activity, colorTheme: "orange", bgLight: "bg-orange-50", text: "text-orange-600", bgHover: "group-hover:bg-orange-100", bar: "bg-orange-500" }
                ].map((service, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="bg-white border border-gray-100 p-6 rounded-2xl text-center hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all cursor-pointer group relative overflow-hidden"
                  >
                    <div className={`absolute top-0 left-0 w-full h-1 ${service.bar} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                    <div className={`${service.bgLight} w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${service.bgHover} transition-colors`}>
                      <service.icon className={`w-8 h-8 ${service.text}`} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">{service.title}</h3>
                    <p className="text-sm text-gray-500 mt-1 font-medium">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Nearby Hospitals */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 sticky top-28">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-gray-900">Nearby Hospitals</h2>
                <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">3 Found</span>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: 'City General Hospital', dist: '1.2 km', time: '5 mins' },
                  { name: 'Fortis Healthcare', dist: '2.5 km', time: '12 mins' },
                  { name: 'Apollo Emergency', dist: '4.1 km', time: '18 mins' }
                ].map((hospital, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:border-red-200 hover:shadow-md transition-all cursor-pointer group"
                  >
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{hospital.name}</h3>
                    <div className="flex items-center text-xs text-gray-500 font-medium mb-4 space-x-4">
                      <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1 text-gray-400" /> {hospital.dist}</span>
                      <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1 text-gray-400" /> {hospital.time}</span>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex-1 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white py-2.5 rounded-xl text-sm font-bold transition-colors">
                        Call
                      </button>
                      <button className="flex-1 bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 py-2.5 rounded-xl text-sm font-bold transition-colors flex items-center justify-center">
                        Route <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <button className="w-full mt-6 py-4 border-2 border-dashed border-gray-200 text-gray-500 font-bold rounded-2xl hover:border-primary-500 hover:text-primary-600 transition-colors">
                View All Medical Centers
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Emergency;
