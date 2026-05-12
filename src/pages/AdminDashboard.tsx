import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Users, Calendar, Settings, Database, Edit, Plus, 
  CheckCircle, Bed, Phone, MapPin, ChevronRight, Bell, 
  Search, TrendingUp, AlertTriangle, ShieldCheck, HeartPulse
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Available ICU Beds', value: '12', total: '50', icon: Bed, color: 'blue', trend: '+2 from yesterday' },
    { label: "Today's Appointments", value: '148', total: '200', icon: Calendar, color: 'green', trend: '12 pending' },
    { label: 'Active Doctors', value: '34', total: '40', icon: Users, color: 'purple', trend: '4 on leave' },
  ];

  return (
    <div className="pt-24 pb-20 bg-[#F8FAFC] min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Premium Header */}
        <div className="relative bg-[#0B0F19] rounded-[2.5rem] p-8 lg:p-12 mb-10 text-white shadow-2xl overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[80px]"></div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center relative z-10 gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-[10px] font-black uppercase tracking-widest backdrop-blur-md">
                <ShieldCheck className="w-3 h-3 mr-2" />
                Verified Administrator Access
              </div>
              <h1 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Hospital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Admin Portal</span>
              </h1>
              <p className="text-gray-400 font-medium max-w-xl text-lg">
                Orchestrate healthcare delivery across your ecosystem with real-time intelligence and facility management.
              </p>
            </div>
            
            <div className="flex items-center space-x-6 bg-white/5 backdrop-blur-xl p-4 rounded-[2rem] border border-white/10 shadow-2xl">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1582750433449-648ed127c09e?q=80&w=100&auto=format&fit=crop" className="w-16 h-16 rounded-2xl object-cover border-2 border-blue-500/50 shadow-lg" alt="Hospital Logo" />
                <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-4 border-[#0B0F19] rounded-full"></span>
              </div>
              <div>
                <h3 className="text-xl font-black text-white leading-tight">Apollo Central</h3>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1 flex items-center">
                  <Activity className="w-3 h-3 mr-1.5 text-green-400 animate-pulse" />
                  Kolkata, WB ● Active
                </p>
              </div>
              <div className="pl-4 ml-4 border-l border-white/10 hidden sm:block">
                <button className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all relative">
                  <Bell className="w-5 h-5 text-gray-400" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#1A1F2B]"></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-10">
          
          {/* Enhanced Sidebar */}
          <div className="lg:col-span-1 space-y-3">
            <div className="bg-white rounded-3xl p-3 shadow-xl border border-gray-100 mb-6">
              {[
                { id: 'overview', icon: Activity, label: 'Live Overview', color: 'blue' },
                { id: 'facilities', icon: Database, label: 'Manage Facilities', color: 'indigo' },
                { id: 'beds', icon: Bed, label: 'Bed Availability', color: 'red' },
                { id: 'doctors', icon: Users, label: 'Medical Staff', color: 'purple' },
                { id: 'appointments', icon: Calendar, label: 'Appointments', color: 'emerald' },
                { id: 'settings', icon: Settings, label: 'Portal Config', color: 'gray' },
              ].map(tab => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center justify-between group px-5 py-4 rounded-2xl font-black transition-all duration-300 ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/30' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                  <div className="flex items-center space-x-4">
                    <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-white' : 'text-gray-400 group-hover:text-blue-600 transition-colors'}`} />
                    <span className="text-sm tracking-tight">{tab.label}</span>
                  </div>
                  {activeTab === tab.id && <ChevronRight className="w-4 h-4" />}
                </button>
              ))}
            </div>

            {/* Quick Status Card */}
            <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-6 shadow-xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mt-16 -mr-16 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <TrendingUp className="w-8 h-8 text-blue-200 mb-4" />
              <h4 className="text-lg font-black mb-2 leading-tight text-white">Monthly Analytics</h4>
              <p className="text-xs text-blue-100 font-medium mb-4 opacity-80">Healthcare delivery efficiency up by 12% this month.</p>
              <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 py-2.5 rounded-xl text-xs font-bold transition-all">
                Download Report
              </button>
            </div>
          </div>

          {/* Main Content Area with Animations */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div 
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  {/* Real-time Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, idx) => (
                      <motion.div 
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl relative overflow-hidden group"
                      >
                        <div className={`absolute -right-4 -top-4 w-24 h-24 bg-${stat.color}-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>
                        <div className={`w-14 h-14 bg-${stat.color}-50 text-${stat.color}-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-${stat.color}-100`}>
                          <stat.icon className="w-7 h-7"/>
                        </div>
                        <h3 className="text-gray-500 font-bold text-xs uppercase tracking-widest mb-2">{stat.label}</h3>
                        <div className="flex items-baseline space-x-2">
                          <span className="text-4xl font-black text-gray-900 tracking-tighter">{stat.value}</span>
                          {stat.total && <span className="text-sm font-bold text-gray-400">/ {stat.total}</span>}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-50 flex items-center text-[10px] font-black text-blue-600 uppercase tracking-widest">
                          <TrendingUp className="w-3 h-3 mr-1.5" />
                          {stat.trend}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Operational Management Section */}
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100 overflow-hidden relative">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-red-50 rounded-full blur-[60px] -mr-20 -mt-20 opacity-50"></div>
                      <div className="flex justify-between items-center mb-8">
                        <div>
                          <h3 className="text-2xl font-black text-gray-900 tracking-tight">Critical Care</h3>
                          <p className="text-sm text-gray-400 font-medium">Emergency bed allocation system</p>
                        </div>
                        <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center border border-red-100">
                          <AlertTriangle className="w-6 h-6" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="p-5 bg-red-50/50 rounded-3xl border border-red-100 flex items-center justify-between">
                          <div>
                            <h4 className="font-black text-red-900">ICU Units</h4>
                            <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest">High Urgency</p>
                          </div>
                          <div className="flex items-center space-x-4 bg-white p-1.5 rounded-2xl border border-red-100">
                            <button className="w-8 h-8 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 font-black transition-colors">-</button>
                            <span className="text-xl font-black text-gray-900 w-8 text-center">12</span>
                            <button className="w-8 h-8 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black transition-colors shadow-lg shadow-red-200">+</button>
                          </div>
                        </div>

                        <div className="p-5 bg-blue-50/50 rounded-3xl border border-blue-100 flex items-center justify-between">
                          <div>
                            <h4 className="font-black text-blue-900">General Ward</h4>
                            <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Normal Status</p>
                          </div>
                          <div className="flex items-center space-x-4 bg-white p-1.5 rounded-2xl border border-blue-100">
                            <button className="w-8 h-8 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-600 font-black transition-colors">-</button>
                            <span className="text-xl font-black text-gray-900 w-8 text-center">105</span>
                            <button className="w-8 h-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black transition-colors shadow-lg shadow-blue-200">+</button>
                          </div>
                        </div>
                      </div>

                      <button className="w-full mt-8 bg-gray-900 hover:bg-black text-white py-4 rounded-2xl font-black transition-all shadow-xl flex justify-center items-center group">
                        Update All Repositories <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100 overflow-hidden relative">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-50 rounded-full blur-[60px] -mr-20 -mt-20 opacity-50"></div>
                      <h3 className="text-2xl font-black text-gray-900 tracking-tight mb-2">Facility Pulse</h3>
                      <p className="text-sm text-gray-400 font-medium mb-8">Recent infrastructure updates</p>
                      
                      <div className="space-y-6">
                        {[
                          { title: 'Emergency Ward', status: 'Optimal', time: '10 mins ago', color: 'green' },
                          { title: 'Main Pharmacy', status: 'Stocking', time: '1 hour ago', color: 'amber' },
                          { title: 'Pathology Lab', status: 'Maintenance', time: '3 hours ago', color: 'red' },
                        ].map((pulse, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className={`w-3 h-3 rounded-full bg-${pulse.color}-500 shadow-[0_0_10px_rgba(34,197,94,0.3)] animate-pulse`}></div>
                              <div>
                                <h4 className="font-bold text-gray-900 text-sm leading-none mb-1">{pulse.title}</h4>
                                <p className="text-[10px] font-bold text-gray-400 uppercase">{pulse.time}</p>
                              </div>
                            </div>
                            <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest bg-${pulse.color}-50 text-${pulse.color}-700 border border-${pulse.color}-100`}>
                              {pulse.status}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 p-6 bg-indigo-900 rounded-[2rem] text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                        <h4 className="text-sm font-black mb-1 relative z-10">Systems Integrity</h4>
                        <p className="text-[10px] text-indigo-300 font-bold mb-4 relative z-10 uppercase tracking-widest">99.9% Server Uptime</p>
                        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden relative z-10">
                          <motion.div initial={{ width: 0 }} animate={{ width: '99.9%' }} transition={{ duration: 1.5, delay: 0.5 }} className="bg-white h-full"></motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {activeTab === 'facilities' && (
                <motion.div 
                  key="facilities"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-xl border border-gray-100"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
                    <div>
                      <h2 className="text-3xl font-black text-gray-900 tracking-tight">Ecosystem Management</h2>
                      <p className="text-gray-500 font-medium">Inventory and status of all medical facilities</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-2xl font-black text-sm flex items-center shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-1">
                      <Plus className="w-5 h-5 mr-2" /> Register New Facility
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {['24/7 Emergency Ward', 'MRI & CT Scan Lab', 'Central Blood Bank', 'Digital Pharmacy', 'Neonatal ICU', 'Cardiology Theatre'].map((facility, i) => (
                      <motion.div 
                        key={facility}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center justify-between p-6 border border-gray-100 rounded-3xl bg-[#F8FAFC] hover:bg-white hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group"
                      >
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mr-5 shadow-sm border border-gray-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                            <HeartPulse className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-black text-gray-900 group-hover:text-blue-600 transition-colors">{facility}</h4>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">Connected & Live</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="bg-green-100 text-green-700 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest">Active</span>
                          <button className="p-2.5 text-gray-300 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                            <Edit className="w-5 h-5"/>
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {(activeTab !== 'overview' && activeTab !== 'facilities') && (
                <motion.div 
                  key="other"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-[2.5rem] p-24 text-center shadow-xl border border-gray-100"
                >
                  <div className="w-24 h-24 bg-blue-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 border border-blue-100">
                    <Database className="w-10 h-10 text-blue-600 animate-bounce" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Module Integrated</h3>
                  <p className="text-gray-500 font-medium max-w-sm mx-auto mb-8 text-lg">
                    The <span className="text-blue-600 font-bold uppercase">{activeTab}</span> management module is securely connected to the core health database.
                  </p>
                  <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-black text-sm hover:shadow-2xl transition-all">
                    Launch Data Manager
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

