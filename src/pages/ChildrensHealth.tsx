import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Baby, Syringe, Heart, Star, MapPin, Package, ShieldCheck, ArrowRight, Video, Calendar, Activity } from 'lucide-react';

const ChildrensHealth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('doctors');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab && ['doctors', 'vaccination', 'store'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [location]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    navigate(`/childrens-health?tab=${tab}`);
  };

  const pediatricians = [
    { name: "Dr. Ananya Roy", special: "Pediatrician", exp: "12 Yrs Exp", rating: 4.9, reviews: 342, image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300", clinic: "Happy Kids Clinic, Kolkata" },
    { name: "Dr. Vikram Gupta", special: "Child Specialist", exp: "18 Yrs Exp", rating: 4.8, reviews: 512, image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300", clinic: "Apollo Pediatrics, Howrah" },
    { name: "Dr. Neha Sharma", special: "Pediatric Nutritionist", exp: "8 Yrs Exp", rating: 4.7, reviews: 128, image: "https://images.unsplash.com/photo-1594824432258-8b5e28a55639?auto=format&fit=crop&q=80&w=300", clinic: "Online Consultation Only" }
  ];

  const vaccines = [
    { age: "At Birth", list: [{ name: "BCG", status: "completed" }, { name: "OPV 0", status: "completed" }, { name: "Hep-B", status: "completed" }] },
    { age: "6 Weeks", list: [{ name: "DTwP 1", status: "completed" }, { name: "IPV 1", status: "completed" }, { name: "Hep-B 2", status: "completed" }, { name: "Rotavirus 1", status: "completed" }] },
    { age: "10 Weeks", list: [{ name: "DTwP 2", status: "pending", due: "15 Days Overdue" }, { name: "IPV 2", status: "pending" }, { name: "Rotavirus 2", status: "pending" }] },
    { age: "14 Weeks", list: [{ name: "DTwP 3", status: "upcoming", due: "Oct 25, 2024" }, { name: "IPV 3", status: "upcoming", due: "Oct 25, 2024" }] }
  ];

  const storeItems = [
    { name: "Sebamed Baby Wash", price: 450, oldPrice: 500, rating: 4.8, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300", category: "Skin Care" },
    { name: "Himalaya Baby Powder", price: 150, oldPrice: 175, rating: 4.6, image: "https://images.unsplash.com/photo-1550572017-edb964eb27bf?auto=format&fit=crop&q=80&w=300", category: "Hygiene" },
    { name: "Cerelac Stage 1 (Wheat)", price: 320, oldPrice: 350, rating: 4.9, image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=300", category: "Nutrition" },
  ];

  return (
    <div className="pt-20 pb-24 bg-[#F8FAFC] min-h-screen font-sans">
      
      {/* Playful Premium Hero */}
      <div className="relative bg-[#0B0F19] overflow-hidden rounded-b-[3rem] pb-20 shadow-2xl">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl mx-auto flex items-center justify-center mb-6 shadow-xl shadow-cyan-500/30"
          >
            <Baby className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight"
          >
            Children's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Health Hub</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Everything you need for your child's well-being—from top pediatricians to tracking essential vaccinations.
          </motion.p>

          {/* Navigation Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 bg-white/10 backdrop-blur-md p-2 rounded-3xl inline-flex border border-white/20 mx-auto"
          >
            <button 
              onClick={() => handleTabChange('doctors')}
              className={`px-6 py-3 rounded-2xl font-bold flex items-center transition-all ${activeTab === 'doctors' ? 'bg-cyan-500 text-white shadow-lg' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
            >
              <Heart className="w-5 h-5 mr-2" /> Pediatricians
            </button>
            <button 
              onClick={() => handleTabChange('vaccination')}
              className={`px-6 py-3 rounded-2xl font-bold flex items-center transition-all ${activeTab === 'vaccination' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
            >
              <Syringe className="w-5 h-5 mr-2" /> Vaccinations
            </button>
            <button 
              onClick={() => handleTabChange('store')}
              className={`px-6 py-3 rounded-2xl font-bold flex items-center transition-all ${activeTab === 'store' ? 'bg-purple-500 text-white shadow-lg' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
            >
              <Package className="w-5 h-5 mr-2" /> Baby Store
            </button>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        
        <AnimatePresence mode="wait">
          
          {/* 1. DOCTORS TAB */}
          {activeTab === 'doctors' && (
            <motion.div 
              key="doctors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="flex justify-between items-end mb-4 px-2">
                <h2 className="text-2xl font-black text-gray-900">Top Pediatricians in your area</h2>
                <button className="text-cyan-600 font-bold hover:underline">See all filters</button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pediatricians.map((doc, idx) => (
                  <div key={idx} className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-cyan-200 transition-all group">
                    <div className="flex items-start gap-4 mb-6">
                      <img src={doc.image} alt={doc.name} className="w-20 h-20 rounded-2xl object-cover shadow-sm group-hover:scale-105 transition-transform" />
                      <div>
                        <div className="flex items-center bg-amber-50 px-2 py-0.5 rounded-lg w-max mb-2">
                          <Star className="w-3.5 h-3.5 text-amber-500 fill-current mr-1" />
                          <span className="text-xs font-bold text-amber-700">{doc.rating} ({doc.reviews})</span>
                        </div>
                        <h3 className="text-lg font-black text-gray-900 leading-tight mb-1 group-hover:text-cyan-600 transition-colors">{doc.name}</h3>
                        <p className="text-cyan-600 text-sm font-bold">{doc.special}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Activity className="w-4 h-4 mr-2 text-gray-400" /> {doc.exp}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-gray-400" /> {doc.clinic}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-cyan-50 text-cyan-700 hover:bg-cyan-100 py-3 rounded-xl font-bold transition-colors flex justify-center items-center">
                        <Video className="w-4 h-4 mr-1.5" /> Consult
                      </button>
                      <button className="flex-1 bg-gray-900 hover:bg-black text-white py-3 rounded-xl font-bold shadow-md transition-colors">
                        Book Clinic
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 2. VACCINATION TAB */}
          {activeTab === 'vaccination' && (
            <motion.div 
              key="vaccination"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -mt-20 -mr-20"></div>
                
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mr-4">
                      <Baby className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-gray-900">Aarav's Timeline</h2>
                      <p className="text-sm font-bold text-gray-500">Born: 14 Aug 2024</p>
                    </div>
                  </div>
                  <button className="bg-orange-50 text-orange-600 hover:bg-orange-100 px-4 py-2 rounded-xl font-bold transition-colors flex items-center">
                    <Calendar className="w-4 h-4 mr-2" /> Sync Calendar
                  </button>
                </div>

                <div className="space-y-8 relative z-10 before:absolute before:inset-0 before:ml-4 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-gray-200 before:via-gray-200 before:to-transparent">
                  
                  {vaccines.map((phase, idx) => (
                    <div key={idx} className="relative flex items-start gap-6">
                      <div className={`w-8 h-8 rounded-full border-4 border-white shadow-sm flex items-center justify-center flex-shrink-0 z-10 mt-1 ${phase.list.some(v => v.status === 'pending') ? 'bg-rose-500 animate-pulse' : phase.list.every(v => v.status === 'completed') ? 'bg-emerald-500' : 'bg-gray-200'}`}>
                        {phase.list.every(v => v.status === 'completed') && <span className="text-white text-xs font-bold">✓</span>}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-black text-gray-900 mb-4">{phase.age}</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {phase.list.map((vac, vIdx) => (
                            <div key={vIdx} className={`p-4 rounded-2xl border ${vac.status === 'completed' ? 'bg-emerald-50/50 border-emerald-100' : vac.status === 'pending' ? 'bg-rose-50 border-rose-200 shadow-sm' : 'bg-gray-50 border-gray-100'}`}>
                              <div className="flex justify-between items-start mb-2">
                                <h4 className={`font-bold ${vac.status === 'completed' ? 'text-emerald-800' : vac.status === 'pending' ? 'text-rose-800' : 'text-gray-700'}`}>{vac.name}</h4>
                                {vac.status === 'completed' && <ShieldCheck className="w-5 h-5 text-emerald-500" />}
                              </div>
                              {vac.status === 'pending' && <p className="text-xs font-bold text-rose-600 mb-3">{vac.due}</p>}
                              {vac.status === 'upcoming' && <p className="text-xs font-bold text-gray-500 mb-3">Due: {vac.due}</p>}
                              
                              {vac.status === 'pending' && (
                                <button className="w-full bg-rose-600 text-white text-xs font-bold py-2 rounded-lg hover:bg-rose-700 transition-colors">
                                  Book Vaccine
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                </div>
              </div>
            </motion.div>
          )}

          {/* 3. STORE TAB */}
          {activeTab === 'store' && (
            <motion.div 
              key="store"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="flex justify-between items-end mb-4 px-2">
                <h2 className="text-2xl font-black text-gray-900">Essentials for Baby</h2>
                <button className="text-purple-600 font-bold hover:underline">Go to Pharmacy</button>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {storeItems.map((item, idx) => {
                  const discount = Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100);
                  
                  return (
                    <div key={idx} className="bg-white rounded-[2rem] p-4 shadow-sm border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all group relative">
                      <div className="absolute top-4 left-4 z-10 bg-purple-500 text-white text-xs font-black px-2 py-1 rounded-lg shadow-md">
                        {discount}% OFF
                      </div>
                      
                      <div className="bg-gray-50 rounded-[1.5rem] h-48 mb-4 relative overflow-hidden flex items-center justify-center p-4">
                        <img src={item.image} alt={item.name} className="object-contain h-full mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      
                      <div className="px-2">
                        <div className="flex justify-between items-start mb-1">
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.category}</p>
                          <div className="flex items-center bg-amber-50 px-2 py-0.5 rounded-md">
                            <Star className="w-3 h-3 text-amber-500 fill-current mr-1" />
                            <span className="text-xs font-bold text-amber-700">{item.rating}</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-4 group-hover:text-purple-600 transition-colors">{item.name}</h3>
                        
                        <div className="flex items-center justify-between mt-auto">
                          <div>
                            <span className="text-2xl font-black text-gray-900">₹{item.price}</span>
                            <span className="text-sm text-gray-400 line-through ml-2 font-medium">₹{item.oldPrice}</span>
                          </div>
                          
                          <button className="bg-purple-50 text-purple-700 hover:bg-purple-600 hover:text-white px-4 py-2 rounded-xl font-bold transition-colors flex items-center">
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </div>
  );
};

export default ChildrensHealth;
