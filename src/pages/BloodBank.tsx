import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplet, Heart, MapPin, Search, Activity, Calendar, ShieldCheck, ArrowRight, Clock, Plus, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BloodBank = () => {
  const navigate = useNavigate();
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const inventory = [
    { group: 'A+', units: 45, status: 'Stable' },
    { group: 'O+', units: 12, status: 'Critical' },
    { group: 'B+', units: 38, status: 'Stable' },
    { group: 'AB+', units: 8, status: 'Critical' },
    { group: 'A-', units: 15, status: 'Low' },
    { group: 'O-', units: 5, status: 'Critical' },
  ];

  const recentRequests = [
    { patient: "Rahul Sharma", hospital: "Apollo Hospital, Delhi", group: "O+", urgency: "High", time: "2 hours ago" },
    { patient: "Priya Patel", hospital: "Max Healthcare, Mumbai", group: "AB-", urgency: "Critical", time: "5 hours ago" },
    { patient: "Amit Kumar", hospital: "Fortis Escorts, Jaipur", group: "A+", urgency: "Medium", time: "1 day ago" },
  ];

  return (
    <div className="pt-20 pb-24 bg-[#F8FAFC] min-h-screen font-sans">
      
      {/* Hero Section */}
      <div className="relative bg-[#0B0F19] overflow-hidden rounded-b-[3rem] pb-24 shadow-2xl">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-rose-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-gradient-to-br from-red-500 to-rose-600 rounded-3xl mx-auto flex items-center justify-center mb-6 shadow-xl shadow-red-500/30"
          >
            <Droplet className="w-12 h-12 text-white fill-current" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight"
          >
            MediSaathi <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">Blood Bank</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Connect with donors, check live blood availability, and save lives instantly across our verified hospital network.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] flex items-center group">
              <Search className="w-5 h-5 mr-3" />
              Find Blood
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-2xl font-bold transition-all flex items-center group">
              <Heart className="w-5 h-5 mr-3 text-red-400 group-hover:scale-110 transition-transform" />
              Register as Donor
            </button>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        
        {/* Live Inventory Status */}
        <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -mt-20 -mr-20 pointer-events-none"></div>
          
          <div className="flex justify-between items-end mb-8 relative z-10">
            <div>
              <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-green-50 border border-green-100 text-green-600 font-bold text-xs uppercase tracking-widest mb-3">
                <span className="flex h-2 w-2 rounded-full bg-green-600 mr-2 animate-pulse"></span>
                Live Updates
              </div>
              <h2 className="text-2xl font-black text-gray-900">Current Blood Inventory</h2>
            </div>
            <button className="text-red-600 font-bold hover:underline hidden sm:block">View All Banks</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 relative z-10">
            {inventory.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className={`p-4 rounded-2xl border ${item.status === 'Critical' ? 'bg-red-50 border-red-200' : item.status === 'Low' ? 'bg-orange-50 border-orange-200' : 'bg-gray-50 border-gray-100'} flex flex-col items-center justify-center text-center`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${item.status === 'Critical' ? 'bg-red-100 text-red-600' : item.status === 'Low' ? 'bg-orange-100 text-orange-600' : 'bg-white text-gray-900 shadow-sm'}`}>
                  <Droplet className={`w-6 h-6 ${item.status === 'Critical' ? 'fill-current' : ''}`} />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-1">{item.group}</h3>
                <p className="text-sm font-bold text-gray-500 mb-2">{item.units} Units</p>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${item.status === 'Critical' ? 'bg-red-200 text-red-800' : item.status === 'Low' ? 'bg-orange-200 text-orange-800' : 'bg-green-100 text-green-800'}`}>
                  {item.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Blood Request Form */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100">
              <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                <Plus className="w-6 h-6 mr-2 text-red-500" /> Quick Blood Request
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Select Blood Group Needed</label>
                  <div className="flex flex-wrap gap-3">
                    {bloodGroups.map((group) => (
                      <button 
                        key={group}
                        onClick={() => setSelectedGroup(group)}
                        className={`w-14 h-14 rounded-xl font-bold transition-all flex items-center justify-center border-2 ${selectedGroup === group ? 'border-red-600 bg-red-50 text-red-600' : 'border-gray-200 text-gray-600 hover:border-red-300'}`}
                      >
                        {group}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Hospital Name</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input type="text" placeholder="Search hospital..." className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none font-medium" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Units Required</label>
                    <div className="relative">
                      <Activity className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input type="number" placeholder="e.g., 2" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none font-medium" />
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gray-900 hover:bg-black text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex justify-center items-center">
                  Submit Request <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>

            {/* Donation Process */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-red-50 rounded-2xl p-6 border border-red-100 text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-red-600 font-black">1</div>
                <h4 className="font-bold text-gray-900 mb-2">Register</h4>
                <p className="text-sm text-gray-600">Sign up and verify your health status.</p>
              </div>
              <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-orange-600 font-black">2</div>
                <h4 className="font-bold text-gray-900 mb-2">Find Drive</h4>
                <p className="text-sm text-gray-600">Locate a nearby verified hospital or camp.</p>
              </div>
              <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100 text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-rose-600 font-black">3</div>
                <h4 className="font-bold text-gray-900 mb-2">Save Life</h4>
                <p className="text-sm text-gray-600">Donate safely and earn MediCoins.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Urgent Requests */}
            <div className="bg-white rounded-[2rem] p-6 shadow-xl border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-black text-gray-900">Urgent Requests</h2>
                <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-md">Live</span>
              </div>

              <div className="space-y-4">
                {recentRequests.map((req, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-4 border border-gray-100 hover:border-red-200 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center font-black mr-3">
                          {req.group}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 leading-none mb-1">{req.patient}</p>
                          <p className="text-xs text-gray-500">{req.hospital}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center text-xs text-gray-500 font-medium">
                        <Clock className="w-3.5 h-3.5 mr-1" /> {req.time}
                      </div>
                      <button className="bg-white border border-gray-200 hover:border-red-600 text-gray-900 hover:text-red-600 text-xs font-bold px-4 py-2 rounded-lg transition-colors">
                        Donate
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-3 text-red-600 font-bold text-sm hover:bg-red-50 rounded-xl transition-colors">
                View All Requests
              </button>
            </div>

            {/* Donor Community */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-[2rem] p-8 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/20 rounded-full blur-2xl"></div>
              <Users className="w-10 h-10 text-red-500 mb-4 relative z-10" />
              <h3 className="text-2xl font-black mb-2 relative z-10">Join the Life Savers</h3>
              <p className="text-gray-400 text-sm mb-6 relative z-10">Over 50,000 active donors are ready to help. Become a hero today.</p>
              <button className="w-full bg-red-600 hover:bg-red-500 text-white py-3 rounded-xl font-bold transition-colors shadow-[0_0_15px_rgba(220,38,38,0.3)] relative z-10">
                Join Community
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default BloodBank;
