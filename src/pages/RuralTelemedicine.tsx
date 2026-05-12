import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wifi, Users, Smartphone, HeartHandshake, ArrowRight, Languages, 
  MapPin, Globe, Sparkles, ShieldCheck, Activity, ChevronRight
} from 'lucide-react';

const RuralTelemedicine = () => {
  return (
    <div className="pt-20 pb-24 bg-[#F9FCFB] min-h-screen font-sans">
      
      {/* Premium Dark Hero */}
      <div className="relative bg-[#061A14] overflow-hidden rounded-b-[4rem] pb-32 shadow-2xl">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
            <div className="text-center lg:text-left space-y-6 lg:w-2/3">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-xs font-black uppercase tracking-widest backdrop-blur-md mb-2"
               >
                 <Globe className="w-4 h-4 mr-2 text-emerald-400" />
                 Bharat Health Initiative
               </motion.div>
               <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight leading-tight">
                 Connecting Villages <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">to Top Specialists</span>
               </h1>
               <p className="text-gray-400 text-lg md:text-xl max-w-xl font-medium">
                 Bridging India's healthcare divide with low-bandwidth video consultations, local language support, and ASHA worker integrated kiosks.
               </p>
               
               <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                 <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-emerald-500/20 flex items-center group">
                   Start Kiosk Session
                   <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                 </button>
                 <button className="bg-white/5 text-white border border-white/10 hover:bg-white/10 px-10 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest transition-all backdrop-blur-md">
                   Partner with Us
                 </button>
               </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:w-1/3 relative"
            >
              <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-[100px] animate-pulse"></div>
              <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-8 rounded-[3rem] shadow-2xl relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/150?u=${i}`} className="w-12 h-12 rounded-2xl border-4 border-[#061A14] shadow-lg" alt="User" />
                    ))}
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white text-xs font-black border-4 border-[#061A14]">+12k</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                      <Activity className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Active Consultations</p>
                      <p className="text-white font-black text-lg">1,284 Sessions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Network Stability</p>
                      <p className="text-white font-black text-lg">99.9% Uptime</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        
        {/* Core Capabilities */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: Wifi, title: "Low Bandwidth Ready", desc: "Proprietary video compression technology that works on even 2G/3G rural networks.", color: "emerald" },
            { icon: Languages, title: "12+ Local Languages", desc: "Full interface translation and AI-powered voice guidance in all major Indian dialects.", color: "teal" },
            { icon: HeartHandshake, title: "ASHA Worker Integrated", desc: "A centralized platform for local health workers to assist rural citizens in city bookings.", color: "cyan" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-100 group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color}-50 rounded-full blur-3xl opacity-50 -mr-16 -mt-16 group-hover:bg-${item.color}-100 transition-colors`}></div>
              <div className={`w-16 h-16 bg-${item.color}-50 text-${item.color}-600 rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight relative z-10">{item.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed relative z-10">{item.desc}</p>
              <div className="mt-8 flex items-center text-xs font-black uppercase tracking-widest text-emerald-600 group-hover:translate-x-2 transition-transform cursor-pointer">
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Visualized */}
        <div className="bg-[#0B1F1A] rounded-[4rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.4)]">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
           <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[150px] -mr-96 -mb-96"></div>
           
           <div className="text-center mb-20 relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Our Rural Footprint</h2>
              <p className="text-emerald-100/60 max-w-2xl mx-auto font-medium text-lg">Delivering world-class healthcare to every corner of Bharat, one village at a time.</p>
           </div>

           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {[
                { label: "Villages Reached", val: "500+", color: "emerald" },
                { label: "Consultations", val: "50k+", color: "teal" },
                { label: "ASHA Workers", val: "1,200", color: "cyan" },
                { label: "Regional Dialects", val: "12+", color: "amber" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center space-y-2">
                  <div className={`text-4xl md:text-6xl font-black text-${stat.color}-400 mb-2 tracking-tighter`}>{stat.val}</div>
                  <div className="text-gray-400 font-black uppercase text-[10px] tracking-widest">{stat.label}</div>
                </div>
              ))}
           </div>

           <div className="mt-24 pt-20 border-t border-white/5 grid lg:grid-cols-2 gap-16 relative z-10">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-xs font-black uppercase tracking-widest">
                  Upcoming: 5G Kiosks
                </div>
                <h3 className="text-3xl font-black leading-tight tracking-tight">The Future of Rural Health is Digital.</h3>
                <p className="text-gray-400 font-medium text-lg leading-relaxed">We are deploying satellite-linked health kiosks in dark-zones, ensuring that even the most remote hamlets have access to top AI diagnostics and specialist opinions.</p>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center"><ShieldCheck className="w-6 h-6 text-emerald-400" /></div>
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center"><Activity className="w-6 h-6 text-teal-400" /></div>
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center"><Globe className="w-6 h-6 text-cyan-400" /></div>
                </div>
              </div>
              <div className="relative group">
                 <div className="absolute inset-0 bg-emerald-500/20 rounded-[3rem] blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
                 <img src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?auto=format&fit=crop&q=80" className="relative z-10 rounded-[3rem] border-2 border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 object-cover h-[400px] w-full" alt="Rural Care" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default RuralTelemedicine;

