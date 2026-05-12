import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, MapPin, AlertCircle, Navigation, ShieldAlert, HeartPulse, 
  BellRing, ChevronRight, X, Clock, Activity, ShieldCheck, Zap, 
  Radio, Loader2, Send
} from 'lucide-react';

const Emergency = () => {
  const [sosActive, setSosActive] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
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
    <div className="pt-20 bg-[#F8FBFF] min-h-screen font-sans">
      
      {/* SOS Overlay Modal */}
      <AnimatePresence>
        {sosActive && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B0F19]/90 backdrop-blur-2xl px-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50, opacity: 0 }} 
              animate={{ scale: 1, y: 0, opacity: 1 }} 
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[4rem] p-12 max-w-lg w-full text-center relative overflow-hidden shadow-[0_50px_100px_rgba(220,38,38,0.3)]"
            >
              <div className="absolute top-0 left-0 w-full h-3 bg-gray-100">
                <motion.div 
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="h-full bg-red-600"
                />
              </div>
              
              <div className="w-32 h-32 bg-red-50 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 relative">
                <motion.div
                  animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 bg-red-400 rounded-[2.5rem]"
                />
                <BellRing className="w-16 h-16 text-red-600 relative z-10 animate-bounce" />
              </div>
              
              <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">SOS Triggered</h2>
              <p className="text-gray-500 font-medium mb-12 leading-relaxed">
                Relaying your coordinates to emergency dispatch and nearby clinics.
              </p>
              
              <div className="text-8xl font-black text-red-600 mb-12 tabular-nums tracking-tighter">
                {countdown > 0 ? countdown : "0"}
              </div>
              
              <div className="space-y-4">
                {countdown > 0 ? (
                  <button 
                    onClick={cancelSOS}
                    className="w-full py-6 bg-gray-900 hover:bg-black text-white rounded-[2rem] font-black text-xs uppercase tracking-widest transition-all shadow-xl"
                  >
                    Abort Signal
                  </button>
                ) : (
                  <div className="w-full py-6 bg-emerald-50 text-emerald-600 rounded-[2rem] font-black text-xs uppercase tracking-widest border border-emerald-100 flex items-center justify-center">
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Dispatching Response
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div className="relative bg-[#0B0F19] overflow-hidden rounded-b-[4rem] pb-24 shadow-2xl">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10 flex flex-col lg:flex-row justify-between items-center gap-16">
          <div className="text-center lg:text-left max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/30 text-red-400 px-5 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest mb-8 backdrop-blur-md"
            >
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse mr-2 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
              Live Monitoring Active
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight leading-none"
            >
              Rapid <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
                Life Response
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-xl leading-relaxed mb-10 font-medium max-w-xl"
            >
              One tap dispatches specialized medical support to your location. India's fastest emergency network at your fingertips.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
               <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl flex items-center">
                  <ShieldCheck className="w-5 h-5 text-red-400 mr-3" />
                  <span className="text-white font-black text-xs uppercase tracking-widest">ISRO Mapping</span>
               </div>
               <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl flex items-center">
                  <Radio className="w-5 h-5 text-red-400 mr-3" />
                  <span className="text-white font-black text-xs uppercase tracking-widest">Sat-Link Active</span>
               </div>
            </motion.div>
          </div>
          
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.4, 2], opacity: [0.4, 0.2, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 bg-red-600 rounded-full pointer-events-none"
            />
            
            <motion.button 
              onClick={triggerSOS}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex flex-col items-center justify-center text-white font-black shadow-[0_0_100px_rgba(220,38,38,0.5)] border-8 border-white/10 backdrop-blur-md group overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Phone className="w-20 h-20 mb-4 group-hover:animate-bounce transition-all drop-shadow-2xl" />
              <span className="text-5xl tracking-tighter drop-shadow-2xl">108</span>
              <span className="text-[10px] font-black text-red-200 mt-4 tracking-[0.3em] uppercase">Emergency SOS</span>
            </motion.button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-20">
        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* Main Action Area */}
          <div className="lg:col-span-2 space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[3.5rem] p-10 shadow-2xl border border-gray-100"
            >
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center space-x-4">
                   <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center">
                      <MapPin className="text-red-600 w-8 h-8" />
                   </div>
                   <div>
                      <h2 className="text-2xl font-black text-gray-900 tracking-tight">Tactical Map</h2>
                      <p className="text-xs font-black text-gray-400 uppercase tracking-widest mt-1">Real-time coordinates active</p>
                   </div>
                </div>
                <div className="bg-emerald-500/10 text-emerald-600 px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center border border-emerald-500/20">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div> Signal: Strong
                </div>
              </div>
              
              <div className="bg-gray-900 w-full h-[450px] rounded-[3rem] flex items-center justify-center relative overflow-hidden group shadow-2xl border border-gray-800">
                {/* Simulated High-Tech Map */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
                
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                
                {/* Tactical Elements */}
                <div className="absolute inset-0 border-[0.5px] border-red-500/20 rounded-full w-[200%] h-[200%] -top-1/2 -left-1/2 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(220,38,38,0.1)_0deg,rgba(220,38,38,0)_360deg)] animate-[spin_10s_linear_infinite] pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div 
                    animate={{ scale: [1, 3], opacity: [0.4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-24 h-24 bg-red-500 rounded-full absolute"
                  />
                  <div className="w-12 h-12 bg-red-600 rounded-full border-4 border-white shadow-2xl relative z-10 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                  <div className="bg-black/80 backdrop-blur-md px-6 py-3 rounded-2xl shadow-2xl mt-6 border border-white/10 text-white flex items-center space-x-3">
                     <Zap className="w-4 h-4 text-amber-400" />
                     <span className="text-xs font-black uppercase tracking-widest">Active Marker</span>
                  </div>
                </div>

                {/* Corner UI */}
                <div className="absolute top-8 left-8 text-white/40 font-black text-[8px] uppercase tracking-[0.3em] space-y-1">
                   <div>LAT: 28.6139° N</div>
                   <div>LONG: 77.2090° E</div>
                </div>
              </div>
              
              <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-6 bg-gray-50 p-6 rounded-[2.5rem] border border-gray-100">
                <div className="flex items-center text-gray-500 font-black text-[10px] uppercase tracking-widest">
                  <ShieldAlert className="w-5 h-5 text-red-500 mr-3" />
                  End-to-End Encrypted Signal
                </div>
                <button className="w-full sm:w-auto bg-gray-900 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center shadow-2xl">
                  <Navigation className="w-4 h-4 mr-2 text-blue-400" /> Relocate Signal
                </button>
              </div>
            </motion.div>

            <div className="bg-white rounded-[3.5rem] p-10 shadow-2xl border border-gray-100">
              <h2 className="text-3xl font-black text-gray-900 mb-10 tracking-tight">Direct Emergency Hub</h2>
              <div className="grid sm:grid-cols-3 gap-8">
                {[
                  { title: "Ambulance", desc: "Private & Govt", icon: HeartPulse, color: "red" },
                  { title: "Police", desc: "Dial 100", icon: AlertCircle, color: "blue" },
                  { title: "Fire Control", desc: "Dial 101", icon: Activity, color: "rose" }
                ].map((service, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -10 }}
                    className="bg-white border border-gray-100 p-8 rounded-[3rem] text-center hover:shadow-2xl transition-all cursor-pointer group"
                  >
                    <div className={`bg-${service.color}-50 w-20 h-20 mx-auto rounded-[2rem] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <service.icon className={`w-10 h-10 text-${service.color}-600`} />
                    </div>
                    <h3 className="font-black text-gray-900 text-xl tracking-tight">{service.title}</h3>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mt-2">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Hospital Sidebar */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[3.5rem] p-10 shadow-2xl border border-gray-100 sticky top-28"
            >
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-2xl font-black text-gray-900 tracking-tight">Nearby Trauma Centers</h2>
                <span className="bg-red-50 text-red-600 text-[10px] font-black px-4 py-2 rounded-2xl uppercase tracking-widest border border-red-100">Live</span>
              </div>
              
              <div className="space-y-6">
                {[
                  { name: 'City Trauma Hub', dist: '1.2 km', time: '5 mins', color: 'red' },
                  { name: 'Fortis Multi-Spec', dist: '2.5 km', time: '12 mins', color: 'blue' },
                  { name: 'Apollo Critical', dist: '4.1 km', time: '18 mins', color: 'rose' }
                ].map((hospital, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 border border-gray-100 rounded-[2.5rem] p-6 hover:border-red-200 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <h3 className="font-black text-gray-900 text-lg mb-4 group-hover:text-red-600 transition-colors leading-tight">{hospital.name}</h3>
                    <div className="flex items-center text-[10px] text-gray-400 font-black uppercase tracking-widest mb-6 space-x-6">
                      <span className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-red-500" /> {hospital.dist}</span>
                      <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-blue-500" /> {hospital.time}</span>
                    </div>
                    <div className="flex gap-4">
                      <button className="flex-1 bg-white border border-gray-200 text-gray-900 hover:bg-red-600 hover:text-white hover:border-red-600 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                        Alert
                      </button>
                      <button className="flex-1 bg-gray-900 text-white hover:bg-black py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center">
                        <Send className="w-3.5 h-3.5 mr-2" /> Route
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <button className="w-full mt-10 py-6 border-2 border-dashed border-gray-100 text-gray-400 font-black text-[10px] uppercase tracking-widest rounded-3xl hover:border-red-500 hover:text-red-600 transition-all flex items-center justify-center">
                Search Universal Centers <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Emergency;

