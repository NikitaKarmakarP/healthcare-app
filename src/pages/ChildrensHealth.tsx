import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Baby, Syringe, Heart, Star, MapPin, Package, ShieldCheck, 
  ArrowRight, Video, Calendar, Activity, TrendingUp, Apple, 
  FileText, ChevronRight, CheckCircle2, Sparkles, Clock, Award
} from 'lucide-react';

const ChildrensHealth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('doctors');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab && ['doctors', 'vaccination', 'store', 'growth', 'nutrition'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [location]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    navigate(`/childrens-health?tab=${tab}`);
  };

  const pediatricians = [
    { name: "Dr. Ananya Roy", special: "Pediatrician", exp: "12 Yrs Exp", rating: 4.9, reviews: 342, image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300", clinic: "Happy Kids Clinic, Kolkata", verified: true },
    { name: "Dr. Vikram Gupta", special: "Child Specialist", exp: "18 Yrs Exp", rating: 4.8, reviews: 512, image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300", clinic: "Apollo Pediatrics, Howrah", verified: true },
    { name: "Dr. Neha Sharma", special: "Pediatric Nutritionist", exp: "8 Yrs Exp", rating: 4.7, reviews: 128, image: "https://images.unsplash.com/photo-1594824416175-9273b75494f1?auto=format&fit=crop&q=80&w=300", clinic: "Online Consultation Only", verified: true }
  ];

  const vaccines = [
    { age: "At Birth", list: [{ name: "BCG", status: "completed" }, { name: "OPV 0", status: "completed" }, { name: "Hep-B", status: "completed" }] },
    { age: "6 Weeks", list: [{ name: "DTwP 1", status: "completed" }, { name: "IPV 1", status: "completed" }, { name: "Hep-B 2", status: "completed" }, { name: "Rotavirus 1", status: "completed" }] },
    { age: "10 Weeks", list: [{ name: "DTwP 2", status: "pending", due: "15 Days Overdue" }, { name: "IPV 2", status: "pending" }, { name: "Rotavirus 2", status: "pending" }] },
    { age: "14 Weeks", list: [{ name: "DTwP 3", status: "upcoming", due: "Oct 25, 2024" }, { name: "IPV 3", status: "upcoming", due: "Oct 25, 2024" }] }
  ];

  return (
    <div className="pt-20 pb-24 bg-[#F8FBFF] min-h-screen font-sans">
      
      {/* Playful Premium Hero */}
      <div className="relative bg-[#0B1219] overflow-hidden rounded-b-[4rem] pb-32 shadow-2xl">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-[2.5rem] mx-auto flex items-center justify-center mb-8 shadow-2xl shadow-cyan-500/30 border-4 border-white/10"
          >
            <Baby className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight"
          >
            Nurturing the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Next Generation</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium"
          >
            Expert pediatric care, smart vaccination tracking, and specialized nutrition—all in one professional portal.
          </motion.p>

          {/* Navigation Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 bg-white/5 backdrop-blur-2xl p-3 rounded-[2.5rem] border border-white/10 mx-auto inline-flex shadow-2xl"
          >
            {[
              { id: 'doctors', icon: Heart, label: 'Pediatricians', color: 'bg-cyan-500' },
              { id: 'vaccination', icon: Syringe, label: 'Vaccination', color: 'bg-orange-500' },
              { id: 'nutrition', icon: Apple, label: 'Nutrition', color: 'bg-emerald-500' }
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-8 py-4 rounded-[1.5rem] font-black text-xs uppercase tracking-widest flex items-center transition-all ${activeTab === tab.id ? `${tab.color} text-white shadow-xl` : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
              >
                <tab.icon className="w-4 h-4 mr-2" /> {tab.label}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <AnimatePresence mode="wait">
          {activeTab === 'doctors' && (
            <motion.div 
              key="doctors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {pediatricians.map((doc, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-[3rem] p-8 shadow-xl border border-gray-100 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50 rounded-full blur-3xl opacity-50 -mr-16 -mt-16 group-hover:bg-cyan-100 transition-colors"></div>
                  
                  <div className="relative mb-8">
                    <img src={doc.image} alt={doc.name} className="w-24 h-24 rounded-[2rem] object-cover border-4 border-white shadow-lg" />
                    {doc.verified && (
                      <div className="absolute -bottom-2 -right-2 bg-cyan-600 text-white p-2 rounded-xl border-4 border-white shadow-lg">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 tracking-tight">{doc.name}</h3>
                      <p className="text-cyan-600 font-black uppercase text-[10px] tracking-widest">{doc.special}</p>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-xs font-bold text-gray-500">
                      <div className="flex items-center"><Star className="w-4 h-4 text-amber-500 fill-current mr-1" /> {doc.rating}</div>
                      <div className="flex items-center"><Clock className="w-4 h-4 text-gray-400 mr-1" /> {doc.exp}</div>
                    </div>
                    
                    <p className="text-gray-400 text-sm font-medium flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-300" /> {doc.clinic}
                    </p>
                    
                    <div className="pt-6 border-t border-gray-50 flex gap-3">
                      <button className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-cyan-100">
                        Book Now
                      </button>
                      <button className="p-4 bg-gray-50 hover:bg-gray-100 text-gray-900 rounded-2xl transition-all border border-gray-200">
                        <Video className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'vaccination' && (
            <motion.div 
              key="vaccination"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-2xl border border-orange-50"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                <div>
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight flex items-center">
                    <Syringe className="w-8 h-8 text-orange-500 mr-3" /> Vaccination Timeline
                  </h2>
                  <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mt-1">Smart tracking for your child's safety</p>
                </div>
                <div className="flex gap-4">
                  <div className="bg-orange-50 px-6 py-3 rounded-2xl border border-orange-100">
                    <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Next Due</p>
                    <p className="text-lg font-black text-gray-900">Oct 25, 2024</p>
                  </div>
                </div>
              </div>

              <div className="space-y-12 relative before:absolute before:left-8 before:top-4 before:bottom-4 before:w-1 before:bg-gradient-to-b before:from-green-100 before:via-orange-100 before:to-gray-100">
                {vaccines.map((vax, idx) => (
                  <div key={idx} className="relative pl-20 group">
                    <div className={`absolute left-0 top-0 w-16 h-16 rounded-2xl border-4 border-white shadow-xl flex items-center justify-center z-10 transition-transform group-hover:scale-110 ${vax.list.some(v => v.status === 'pending') ? 'bg-orange-500 text-white shadow-orange-200' : vax.list.every(v => v.status === 'completed') ? 'bg-green-500 text-white shadow-green-200' : 'bg-gray-100 text-gray-400'}`}>
                      <Calendar className="w-6 h-6" />
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-xl font-black text-gray-900 tracking-tight">{vax.age}</h3>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {vax.list.map((v, i) => (
                          <div key={i} className={`p-6 rounded-[2rem] border transition-all flex items-center justify-between group/item ${v.status === 'completed' ? 'bg-green-50/50 border-green-100' : v.status === 'pending' ? 'bg-orange-50 border-orange-200 shadow-lg' : 'bg-white border-gray-100 opacity-60'}`}>
                            <div>
                              <p className={`font-black text-sm ${v.status === 'pending' ? 'text-orange-700' : 'text-gray-900'}`}>{v.name}</p>
                              {v.due && <p className="text-[10px] font-bold text-orange-600 mt-1 uppercase tracking-widest">{v.due}</p>}
                            </div>
                            {v.status === 'completed' ? (
                              <CheckCircle2 className="w-5 h-5 text-green-500" />
                            ) : v.status === 'pending' ? (
                              <button className="bg-orange-500 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 shadow-lg shadow-orange-200">Book</button>
                            ) : (
                              <Clock className="w-5 h-5 text-gray-300" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'nutrition' && (
            <motion.div 
              key="nutrition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                { age: "0-6 Months", focus: "Exclusive Breastfeeding", tips: ["Breast milk provides all nutrients.", "Feed on demand.", "No water is needed."], color: 'cyan', icon: Baby },
                { age: "6-12 Months", focus: "Intro to Solids", tips: ["Start with pureed fruits.", "Iron-fortified cereals.", "Continue breastfeeding."], color: 'orange', icon: Apple },
                { age: "1-3 Years", focus: "Toddler Diet", tips: ["3 meals + 2 snacks.", "Include dairy for calcium.", "Avoid choking hazards."], color: 'emerald', icon: Activity }
              ].map((plan, idx) => (
                <div key={idx} className="bg-white rounded-[3rem] p-10 shadow-xl border border-gray-100 group relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-${plan.color === 'cyan' ? 'cyan-50' : plan.color === 'orange' ? 'orange-50' : 'emerald-50'} rounded-full blur-3xl opacity-50 -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700`}></div>
                  <div className={`w-16 h-16 ${plan.color === 'cyan' ? 'bg-cyan-50 text-cyan-600' : plan.color === 'orange' ? 'bg-orange-50 text-orange-600' : 'bg-emerald-50 text-emerald-600'} rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform`}>
                    <plan.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">{plan.age}</h3>
                  <h4 className="text-2xl font-black text-gray-900 tracking-tight mb-6">{plan.focus}</h4>
                  <ul className="space-y-4 mb-8">
                    {plan.tips.map((tip, i) => (
                      <li key={i} className="flex items-start text-sm font-medium text-gray-600">
                        <CheckCircle2 className={`w-4 h-4 mr-3 mt-0.5 ${plan.color === 'cyan' ? 'text-cyan-500' : plan.color === 'orange' ? 'text-orange-500' : 'text-emerald-500'} flex-shrink-0`} />
                        {tip}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${plan.color === 'cyan' ? 'bg-cyan-600' : plan.color === 'orange' ? 'bg-orange-600' : 'bg-emerald-600'} text-white shadow-lg`}>
                    Download Guide
                  </button>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ChildrensHealth;
