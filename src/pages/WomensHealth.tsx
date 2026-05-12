import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Calendar as CalendarIcon, UserPlus, Info, Activity, 
  ChevronRight, Sparkles, ShieldCheck, MessageCircle, 
  Baby, ArrowRight, Star, Clock, Droplets
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const WomensHealth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const searchParams = new URLSearchParams(location.search);
  const initialTab = searchParams.get('tab') || 'period';
  
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) {
      setActiveTab(tab);
    }
  }, [location.search]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    navigate(`/womens-health?tab=${tab}`, { replace: true });
  };

  return (
    <div className="pt-20 pb-24 bg-[#FDF8FA] min-h-screen font-sans">
      
      {/* Premium Dark Hero */}
      <div className="relative bg-[#1A0B12] overflow-hidden rounded-b-[4rem] pb-32 shadow-2xl">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="text-center lg:text-left space-y-6 lg:w-2/3">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="inline-flex items-center px-4 py-2 rounded-full bg-pink-500/10 border border-pink-400/20 text-pink-300 text-xs font-black uppercase tracking-widest backdrop-blur-md mb-2"
               >
                 <Sparkles className="w-4 h-4 mr-2 text-pink-400" />
                 Personalized Women's Care
               </motion.div>
               <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
                 Empowering Your <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400">Health Journey</span>
               </h1>
               <p className="text-gray-400 text-lg md:text-xl max-w-xl font-medium">
                 A professional, secure ecosystem for pregnancy tracking, cycle management, and connecting with elite female specialists.
               </p>
               
               <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                 <button 
                   onClick={() => handleTabChange('period')}
                   className={`px-8 py-4 rounded-2xl font-black transition-all flex items-center ${activeTab === 'period' ? 'bg-pink-600 text-white shadow-xl shadow-pink-500/30' : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'}`}
                 >
                   <Droplets className="w-5 h-5 mr-2" /> Period Tracker
                 </button>
                 <button 
                   onClick={() => handleTabChange('pregnancy')}
                   className={`px-8 py-4 rounded-2xl font-black transition-all flex items-center ${activeTab === 'pregnancy' ? 'bg-purple-600 text-white shadow-xl shadow-purple-500/30' : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'}`}
                 >
                   <Baby className="w-5 h-5 mr-2" /> Pregnancy Hub
                 </button>
               </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/3 hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-[80px] animate-pulse"></div>
                <img src="https://images.unsplash.com/photo-1571175302309-97534aa9965d?q=80&w=400&auto=format&fit=crop" className="relative z-10 w-full h-[400px] object-cover rounded-[3rem] border-4 border-white/10 shadow-2xl" alt="Wellness" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-10">
            <AnimatePresence mode="wait">
              {activeTab === 'period' ? (
                <motion.div 
                  key="period"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-2xl border border-pink-50 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-pink-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
                  
                  <div className="flex justify-between items-center mb-12 relative z-10">
                    <div>
                      <h2 className="text-3xl font-black text-gray-900 tracking-tight flex items-center">
                        <Droplets className="w-8 h-8 text-pink-500 mr-3" /> Cycle Insights
                      </h2>
                      <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mt-1">Real-time health monitoring</p>
                    </div>
                    <div className="bg-pink-50 text-pink-600 px-6 py-2.5 rounded-2xl text-sm font-black border border-pink-100 shadow-sm">
                      Luteal Phase • Day 14
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center py-10 relative z-10">
                    <div className="w-72 h-72 rounded-full border-[12px] border-gray-50 flex items-center justify-center relative shadow-inner group">
                       <svg className="absolute inset-0 w-full h-full -rotate-90">
                         <circle cx="144" cy="144" r="132" fill="none" stroke="currentColor" strokeWidth="12" className="text-pink-100" />
                         <motion.circle 
                           cx="144" cy="144" r="132" fill="none" stroke="currentColor" strokeWidth="12" strokeDasharray="829" initial={{ strokeDashoffset: 829 }} animate={{ strokeDashoffset: 400 }} transition={{ duration: 1.5, ease: "easeOut" }}
                           className="text-pink-500" 
                         />
                       </svg>
                       <div className="text-center bg-white w-56 h-56 rounded-full flex flex-col justify-center items-center shadow-2xl border border-pink-50 transform group-hover:scale-105 transition-transform duration-500">
                          <p className="text-gray-400 font-black uppercase text-[10px] tracking-[0.2em] mb-1">Ovulation in</p>
                          <p className="text-5xl font-black text-gray-900 my-2">2 <span className="text-2xl text-pink-500">Days</span></p>
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-wider">
                            High Fertility
                          </div>
                       </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 relative z-10">
                     {[
                       { label: 'Log Flow', emoji: '🩸' },
                       { label: 'Moods', emoji: '😌' },
                       { label: 'Symptoms', emoji: '💊' },
                       { label: 'Activity', emoji: '🧘' }
                     ].map((item, idx) => (
                       <button key={idx} className="bg-white p-5 rounded-[2rem] text-center border border-gray-100 shadow-sm hover:shadow-xl hover:border-pink-200 transition-all group">
                         <div className="text-3xl mb-2 group-hover:scale-125 transition-transform">{item.emoji}</div>
                         <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{item.label}</p>
                       </button>
                     ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="pregnancy"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-2xl border border-purple-50"
                >
                  <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight flex items-center">
                      <Baby className="w-8 h-8 text-purple-500 mr-3" /> Pregnancy Hub
                    </h2>
                    <span className="bg-purple-50 text-purple-600 px-6 py-2.5 rounded-2xl text-sm font-black border border-purple-100 shadow-sm">Week 24</span>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-10 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="w-40 h-40 bg-white/10 backdrop-blur-xl rounded-[2rem] flex items-center justify-center shadow-2xl p-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-700">
                      <img src="https://cdn-icons-png.flaticon.com/512/3233/3233860.png" alt="Baby Size" className="w-full brightness-0 invert opacity-90" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl font-black tracking-tight leading-tight">Baby is the size of an <span className="text-yellow-400">Ear of Corn 🌽</span></h3>
                      <p className="text-indigo-100 font-medium opacity-80 text-lg leading-relaxed">Your baby is about 11.8 inches long and weighs about 1.3 pounds. Their brain is growing rapidly!</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-black uppercase tracking-widest text-indigo-300">
                          <span>Progress</span>
                          <span>60% Complete</span>
                        </div>
                        <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: '60%' }} transition={{ duration: 1.5, delay: 0.5 }} className="bg-gradient-to-r from-pink-400 to-purple-400 h-full rounded-full"></motion.div>
                        </div>
                      </div>
                      <div className="flex items-center text-xs font-black uppercase tracking-widest text-pink-300 pt-2">
                        <Clock className="w-4 h-4 mr-2" /> 112 Days until Due Date
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Premium Insight Grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              <motion.div whileHover={{ y: -5 }} className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100 group">
                <div className="w-14 h-14 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-600 group-hover:text-white transition-all duration-500">
                  <Activity className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight">Vitals Monitor</h3>
                <p className="text-gray-500 font-medium mb-6 leading-relaxed">AI-driven analysis of your activity, sleep, and heart rate during your cycle.</p>
                <button className="flex items-center text-pink-600 font-black text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Full Analytics <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </motion.div>
              
              <motion.div whileHover={{ y: -5 }} className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100 group">
                <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight">Expert Q&A</h3>
                <p className="text-gray-500 font-medium mb-6 leading-relaxed">Direct message line to top obstetricians for non-emergency health queries.</p>
                <button className="flex items-center text-purple-600 font-black text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Ask Specialist <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </motion.div>
            </div>
          </div>

          {/* Premium Specialist Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-[3rem] p-8 shadow-2xl border border-gray-100 sticky top-24">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center">
                  <UserPlus className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-black text-gray-900 tracking-tight">Top Specialists</h2>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: "Dr. Ananya Roy", spec: "Gynecologist", rating: 4.9, img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&auto=format&fit=crop" },
                  { name: "Dr. Sunita Sen", spec: "Obstetrician", rating: 4.8, img: "https://images.unsplash.com/photo-1594824416175-9273b75494f1?q=80&w=150&auto=format&fit=crop" },
                  { name: "Dr. Meera Patel", spec: "Endocrinologist", rating: 4.7, img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=150&auto=format&fit=crop" }
                ].map((doc, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ x: 5 }}
                    className="flex items-center p-4 border border-gray-50 rounded-[2rem] bg-gray-50/50 hover:bg-white hover:border-pink-200 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <img src={doc.img} alt={doc.name} className="w-14 h-14 rounded-2xl object-cover mr-4 border-2 border-white shadow-md" />
                    <div className="flex-1">
                      <h3 className="font-black text-gray-900 text-sm tracking-tight">{doc.name}</h3>
                      <div className="flex items-center text-[10px] font-black uppercase text-pink-600 tracking-widest">
                        {doc.spec}
                      </div>
                      <div className="flex items-center text-[10px] text-amber-500 font-bold mt-0.5">
                        <Star className="w-3 h-3 fill-current mr-1" /> {doc.rating}
                      </div>
                    </div>
                    <button className="bg-white p-2 rounded-xl text-pink-600 shadow-sm border border-pink-100 hover:bg-pink-600 hover:text-white transition-all">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>
              
              <button 
                onClick={() => navigate('/doctors')}
                className="w-full mt-8 bg-gray-900 hover:bg-black text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl"
              >
                Explore All Experts
              </button>
            </div>

            {/* Premium Community Widget */}
            <div className="bg-gradient-to-br from-purple-700 to-indigo-800 rounded-[3rem] p-8 shadow-2xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-xl font-black mb-2 relative z-10 tracking-tight">Support Circles</h3>
              <p className="text-indigo-200 text-xs font-medium mb-8 relative z-10 opacity-80">Connect with women sharing similar life journeys.</p>
              
              <div className="space-y-4 relative z-10">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center justify-between hover:bg-white/20 transition-all cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center font-black">M</div>
                    <div>
                      <h4 className="font-black text-xs">New Moms</h4>
                      <p className="text-[10px] text-indigo-300 font-bold">12.4k Members</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-indigo-300" />
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center justify-between hover:bg-white/20 transition-all cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center font-black">P</div>
                    <div>
                      <h4 className="font-black text-xs">PCOS Warriors</h4>
                      <p className="text-[10px] text-indigo-300 font-bold">8.1k Members</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-indigo-300" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WomensHealth;
