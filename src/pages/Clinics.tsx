import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, TrendingUp, Users, CalendarCheck, ShieldCheck, 
  ArrowRight, Activity, Zap, BarChart3, Globe, Award, Briefcase, 
  ChevronRight, HeartPulse, Sparkles
} from 'lucide-react';

const Clinics = () => {
  return (
    <div className="pt-20 bg-[#F8FBFF] min-h-screen font-sans">
      
      {/* Premium B2B Hero Section */}
      <div className="relative bg-[#0B0F19] overflow-hidden rounded-b-[4rem] pb-32 shadow-2xl">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/20 text-blue-300 px-5 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest backdrop-blur-md mb-8"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Partner Network Portal
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight leading-none"
              >
                Empower <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Your Facility
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 text-lg md:text-xl font-medium mb-12 max-w-xl leading-relaxed"
              >
                Join India's most advanced AI healthcare ecosystem. Automate bed management, reach more patients, and digitize your entire clinical operation.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-[2rem] font-black text-[10px] uppercase tracking-widest transition-all shadow-2xl shadow-blue-600/30 flex items-center justify-center">
                  Register Facility <ChevronRight className="w-4 h-4 ml-2" />
                </button>
                <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-10 py-5 rounded-[2rem] font-black text-[10px] uppercase tracking-widest transition-all backdrop-blur-md flex items-center justify-center">
                  Request Demo
                </button>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative hidden lg:block"
            >
               <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] p-12 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  <div className="space-y-8">
                     {[
                       { label: "Partner Growth", value: "+340%", icon: TrendingUp, color: "emerald" },
                       { label: "Active Facilities", value: "850+", icon: Building2, color: "blue" },
                       { label: "Patient Reach", value: "1.2M", icon: Users, color: "indigo" }
                     ].map((stat, i) => (
                       <div key={i} className="flex items-center justify-between p-6 bg-white/5 rounded-[2rem] border border-white/5">
                          <div className="flex items-center space-x-6">
                             <div className={`w-14 h-14 bg-${stat.color}-500/10 rounded-2xl flex items-center justify-center`}>
                                <stat.icon className={`w-7 h-7 text-${stat.color}-400`} />
                             </div>
                             <span className="text-gray-400 font-black text-xs uppercase tracking-widest">{stat.label}</span>
                          </div>
                          <span className="text-3xl font-black text-white tracking-tighter">{stat.value}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-24">
        
        {/* Core Value Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-32">
          {[
            { 
              title: "Smart Bed Logistics", 
              desc: "Real-time ICU and general ward tracking system with auto-allocation.", 
              icon: Activity, 
              color: "blue",
              delay: 0.1
            },
            { 
              title: "Unified Scheduling", 
              desc: "Automated doctor calendar with WhatsApp reminders and no-show protection.", 
              icon: CalendarCheck, 
              color: "indigo",
              delay: 0.2
            },
            { 
              title: "AI Patient Triage", 
              desc: "Digital pre-screening tool that categorizes emergencies before arrival.", 
              icon: Sparkles, 
              color: "purple",
              delay: 0.3
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: feature.delay }}
              className="bg-white rounded-[3.5rem] p-12 shadow-2xl border border-gray-100 hover:shadow-blue-500/5 transition-all group"
            >
              <div className={`w-20 h-20 bg-${feature.color}-50 rounded-[2rem] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-10 h-10 text-${feature.color}-600`} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Impact Section */}
        <div className="bg-gray-900 rounded-[4rem] p-16 md:p-24 relative overflow-hidden shadow-2xl mb-32">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -mr-64 -mt-64"></div>
           
           <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <div>
                 <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
                    Scale Your Impact <br />
                    <span className="text-blue-400">Digitally</span>
                 </h2>
                 <p className="text-gray-400 text-lg font-medium mb-12 leading-relaxed">
                    MediSaathi connects your specialized infrastructure with patients who need it most. Our dashboard provides deep analytics on patient flow, facility load, and revenue growth.
                 </p>
                 
                 <div className="space-y-6">
                    {[
                      "Real-time Inventory Management",
                      "Cloud-based Health Records (ABDM Compliant)",
                      "Priority Emergency Dispatch Integration",
                      "Automated Billing & Insurance"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-4">
                         <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white">
                            <ShieldCheck className="w-4 h-4" />
                         </div>
                         <span className="text-gray-300 font-black text-xs uppercase tracking-widest">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                 {[
                   { label: "Efficiency", icon: Zap, value: "+45%", color: "amber" },
                   { label: "Optimization", icon: BarChart3, value: "+30%", color: "emerald" },
                   { label: "Global Trust", icon: Globe, value: "ISO", color: "blue" },
                   { label: "Support", icon: HeartPulse, value: "24/7", color: "rose" }
                 ].map((box, i) => (
                   <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[3rem] text-center hover:bg-white/10 transition-all">
                      <box.icon className={`w-8 h-8 text-${box.color}-400 mx-auto mb-4`} />
                      <div className="text-3xl font-black text-white tracking-tighter">{box.value}</div>
                      <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-2">{box.label}</div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Executive Testimonials */}
        <div className="mb-20">
           <div className="text-center mb-20">
              <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight text-center">Trusted by Industry Leaders</h2>
              <p className="text-gray-500 font-medium text-lg">See how top medical facilities are transforming with MediSaathi.</p>
           </div>
           
           <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  quote: "Since partnering with MediSaathi, our ICU bed utilization is perfectly optimized. We've seen a 40% reduction in emergency wait times.",
                  author: "Dr. Manish",
                  title: "Chief Medical Officer, CarePlus Hospital",
                  initials: "DM",
                  color: "blue"
                },
                {
                  quote: "The automated scheduling system reduced our clinic's no-show rate by 60%. The digital workflow is absolutely world-class.",
                  author: "Dr. Sanya Kapoor",
                  title: "Founder, City Smile Dental",
                  initials: "SK",
                  color: "emerald"
                }
              ].map((test, i) => (
                <div key={i} className="bg-white rounded-[3.5rem] p-12 shadow-xl border border-gray-100 relative group">
                   <Award className="absolute top-10 right-10 w-8 h-8 text-gray-100 group-hover:text-blue-500 transition-colors" />
                   <p className="text-gray-500 text-xl font-medium italic mb-10 leading-relaxed">"{test.quote}"</p>
                   <div className="flex items-center">
                      <div className={`w-16 h-16 bg-${test.color}-50 rounded-2xl flex items-center justify-center font-black text-${test.color}-600 text-xl mr-6`}>
                         {test.initials}
                      </div>
                      <div>
                         <h4 className="text-lg font-black text-gray-900 tracking-tight">{test.author}</h4>
                         <p className="text-xs font-black text-gray-400 uppercase tracking-widest mt-1">{test.title}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default Clinics;

