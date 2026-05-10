import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar as CalendarIcon, UserPlus, Info, Activity } from 'lucide-react';
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
    <div className="pt-24 pb-20 bg-pink-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bg-pink-600 rounded-3xl p-8 mb-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
          <div className="relative z-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-5xl font-black mb-4 flex items-center justify-center md:justify-start">
                <Heart className="w-10 h-10 mr-3 text-pink-200 fill-current" /> Women's Health
              </h1>
              <p className="text-pink-100 text-lg max-w-xl">A safe, dedicated space for pregnancy tracking, period management, and connecting with female specialists.</p>
            </div>
            <div className="mt-8 md:mt-0 flex space-x-2">
               <button 
                 onClick={() => handleTabChange('period')}
                 className={`px-6 py-3 rounded-xl font-bold transition-colors ${activeTab === 'period' ? 'bg-white text-pink-600 shadow-md' : 'bg-pink-700 hover:bg-pink-800 text-white'}`}
               >
                 Period Tracker
               </button>
               <button 
                 onClick={() => handleTabChange('pregnancy')}
                 className={`px-6 py-3 rounded-xl font-bold transition-colors ${activeTab === 'pregnancy' ? 'bg-white text-pink-600 shadow-md' : 'bg-pink-700 hover:bg-pink-800 text-white'}`}
               >
                 Pregnancy
               </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Tracker Area */}
          <div className="lg:col-span-2">
            {activeTab === 'period' ? (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-pink-100"
              >
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                    <CalendarIcon className="w-6 h-6 text-pink-500 mr-2" /> Cycle Overview
                  </h2>
                  <span className="bg-pink-50 text-pink-600 px-4 py-1 rounded-full text-sm font-bold border border-pink-100">Day 14</span>
                </div>
                
                <div className="flex flex-col items-center justify-center py-10 relative">
                  <div className="w-64 h-64 rounded-full border-8 border-gray-50 flex items-center justify-center relative shadow-inner">
                     <div className="absolute top-0 right-0 w-full h-full border-8 border-pink-500 rounded-full" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0, 20% 0)' }}></div>
                     <div className="text-center z-10 bg-white w-48 h-48 rounded-full flex flex-col justify-center items-center shadow-lg border border-pink-50">
                        <p className="text-gray-500 font-medium">Ovulation in</p>
                        <p className="text-4xl font-black text-pink-600 my-1">2 Days</p>
                        <p className="text-xs text-gray-400">High chance of pregnancy</p>
                     </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                   <div className="bg-pink-50 p-4 rounded-2xl text-center border border-pink-100 cursor-pointer hover:bg-pink-100 transition-colors">
                     <div className="text-2xl mb-1">🩸</div>
                     <p className="text-xs font-bold text-gray-700">Log Flow</p>
                   </div>
                   <div className="bg-pink-50 p-4 rounded-2xl text-center border border-pink-100 cursor-pointer hover:bg-pink-100 transition-colors">
                     <div className="text-2xl mb-1">😔</div>
                     <p className="text-xs font-bold text-gray-700">Mood</p>
                   </div>
                   <div className="bg-pink-50 p-4 rounded-2xl text-center border border-pink-100 cursor-pointer hover:bg-pink-100 transition-colors">
                     <div className="text-2xl mb-1">💊</div>
                     <p className="text-xs font-bold text-gray-700">Symptoms</p>
                   </div>
                   <div className="bg-pink-50 p-4 rounded-2xl text-center border border-pink-100 cursor-pointer hover:bg-pink-100 transition-colors">
                     <div className="text-2xl mb-1">📝</div>
                     <p className="text-xs font-bold text-gray-700">Notes</p>
                   </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-purple-100"
              >
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                    <Activity className="w-6 h-6 text-purple-500 mr-2" /> Pregnancy Timeline
                  </h2>
                  <span className="bg-purple-50 text-purple-600 px-4 py-1 rounded-full text-sm font-bold border border-purple-100">Week 24</span>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 border border-purple-100">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-md p-4 flex-shrink-0">
                    <img src="https://cdn-icons-png.flaticon.com/512/3233/3233860.png" alt="Baby Size" className="w-full opacity-80" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Baby is the size of an Ear of Corn 🌽</h3>
                    <p className="text-gray-600 text-sm mb-4">Your baby is about 11.8 inches long and weighs about 1.3 pounds. Their brain is growing rapidly!</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500 text-right mt-2">112 Days left until Due Date</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Daily Insights Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mt-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-6">
                <Info className="w-6 h-6 text-blue-500 mr-2" /> Daily Insights
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 hover:shadow-md transition-shadow cursor-pointer">
                  <h3 className="font-bold text-gray-900 mb-2">Nutrition & Hydration</h3>
                  <p className="text-sm text-gray-600 mb-4">Drink at least 8 glasses of water today. Iron-rich foods like spinach can help replenish your levels.</p>
                  <button className="text-blue-600 text-sm font-bold hover:underline">Read Article</button>
                </div>
                <div className="bg-green-50 rounded-2xl p-5 border border-green-100 hover:shadow-md transition-shadow cursor-pointer">
                  <h3 className="font-bold text-gray-900 mb-2">Yoga for Cramps</h3>
                  <p className="text-sm text-gray-600 mb-4">A quick 10-minute child's pose and cat-cow stretch can significantly reduce pelvic discomfort.</p>
                  <button className="text-green-600 text-sm font-bold hover:underline">Watch Video</button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Female Specialists Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <UserPlus className="w-5 h-5 text-pink-500 mr-2" /> Female Specialists
              </h2>
              
              <div className="space-y-4">
                {[
                  { name: "Dr. Ananya Roy", spec: "Gynecologist", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&auto=format&fit=crop" },
                  { name: "Dr. Sunita Sen", spec: "Obstetrician", img: "https://images.unsplash.com/photo-1594824416175-9273b75494f1?q=80&w=150&auto=format&fit=crop" },
                  { name: "Dr. Meera Patel", spec: "Endocrinologist", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=150&auto=format&fit=crop" }
                ].map((doc, idx) => (
                  <div key={idx} className="flex items-center p-3 border border-gray-100 rounded-xl hover:border-pink-200 hover:bg-pink-50 transition-colors cursor-pointer">
                    <img src={doc.img} alt={doc.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-sm">{doc.name}</h3>
                      <p className="text-xs text-pink-600 font-medium">{doc.spec}</p>
                    </div>
                    <button 
                      onClick={() => navigate('/doctors')}
                      className="bg-pink-100 text-pink-700 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-pink-200 transition-colors"
                    >
                      Book
                    </button>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => navigate('/doctors')}
                className="w-full mt-6 border-2 border-pink-600 text-pink-600 font-bold py-3 rounded-xl hover:bg-pink-600 hover:text-white transition-colors"
              >
                View All Specialists
              </button>
            </div>

            {/* Support Communities */}
            <div className="bg-gradient-to-b from-purple-50 to-white rounded-3xl p-6 shadow-sm border border-purple-100 mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Support Groups</h2>
              <p className="text-sm text-gray-600 mb-6">Connect with women sharing similar journeys.</p>
              
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">M</div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900">New Moms Network</h4>
                      <p className="text-xs text-gray-500">12k+ members</p>
                    </div>
                  </div>
                  <button className="text-purple-600 text-xs font-bold bg-purple-50 px-3 py-1.5 rounded-lg hover:bg-purple-100">Join</button>
                </div>
                
                <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-pink-100 text-pink-600 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">P</div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900">PCOS Warriors</h4>
                      <p className="text-xs text-gray-500">8k+ members</p>
                    </div>
                  </div>
                  <button className="text-pink-600 text-xs font-bold bg-pink-50 px-3 py-1.5 rounded-lg hover:bg-pink-100">Join</button>
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
