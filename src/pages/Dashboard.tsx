import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Flame, Footprints, Trophy, Target, Award, Activity, Heart, Calendar, FileText, ChevronRight, ActivitySquare, AlertCircle, TrendingUp, Sun, Moon, Plus } from 'lucide-react';

const Dashboard = () => {
  // Get current hour for greeting
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';
  const GreetingIcon = hour < 18 ? Sun : Moon;

  const vitals = [
    { label: 'Heart Rate', value: '72', unit: 'bpm', status: 'Normal', icon: Heart, color: 'text-rose-500', bg: 'bg-rose-50', gradient: 'from-rose-500 to-red-600' },
    { label: 'Blood Pressure', value: '120/80', unit: 'mmHg', status: 'Optimal', icon: ActivitySquare, color: 'text-blue-500', bg: 'bg-blue-50', gradient: 'from-blue-500 to-indigo-600' },
    { label: 'Oxygen SpO2', value: '98', unit: '%', status: 'Healthy', icon: Activity, color: 'text-emerald-500', bg: 'bg-emerald-50', gradient: 'from-emerald-400 to-green-600' },
  ];

  const appointments = [
    { doctor: 'Dr. Sarah Smith', type: 'Cardiologist', time: 'Today, 2:30 PM', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200' },
    { doctor: 'Dr. Rajesh Kumar', type: 'General Physician', time: 'Tomorrow, 10:00 AM', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200' },
  ];

  const recentReports = [
    { name: 'Complete Blood Count', date: 'Oct 12, 2023', status: 'Normal' },
    { name: 'Lipid Profile', date: 'Oct 12, 2023', status: 'Review Needed' },
  ];

  return (
    <div className="pt-20 pb-24 bg-[#F8FAFC] min-h-screen font-sans">
      
      {/* Premium Dark Hero Header */}
      <div className="relative bg-[#0B0F19] overflow-hidden rounded-b-[3rem] pb-24 shadow-2xl">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full border-2 border-primary-500 overflow-hidden shadow-lg shadow-primary-500/20">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-3xl font-black text-white flex items-center gap-2">
                  {greeting}, Rahul <GreetingIcon className="w-6 h-6 text-amber-400 fill-current" />
                </h1>
                <p className="text-primary-200 font-medium text-sm mt-1">Here is your daily health summary</p>
              </div>
            </div>

            <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl shadow-xl">
              <div className="w-10 h-10 bg-amber-400/20 rounded-xl flex items-center justify-center mr-3">
                <Trophy className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Health Level</p>
                <p className="font-black text-white">Level 5 Hero</p>
              </div>
            </div>
          </div>

          {/* Vitals Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vitals.map((vital, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={idx} 
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 relative overflow-hidden group hover:bg-white/15 transition-all cursor-pointer"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${vital.gradient} rounded-full mix-blend-overlay filter blur-2xl opacity-40 group-hover:opacity-60 transition-all`}></div>
                
                <div className="relative z-10 flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${vital.gradient} flex items-center justify-center shadow-lg`}>
                    <vital.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${vital.status === 'Normal' || vital.status === 'Healthy' || vital.status === 'Optimal' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'}`}>
                    {vital.status}
                  </span>
                </div>
                
                <div className="relative z-10">
                  <p className="text-gray-400 font-bold text-sm mb-1">{vital.label}</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-4xl font-black text-white tracking-tight">{vital.value}</h3>
                    <span className="text-white/60 font-medium">{vital.unit}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: Trackers */}
          <div className="lg:col-span-2 space-y-8">
            
            <h2 className="text-2xl font-black text-gray-900 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-primary-600" /> Daily Goals
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Daily Steps */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
                <div className="flex justify-between w-full items-start mb-4">
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center shadow-inner">
                    <Footprints className="w-7 h-7 text-green-500" />
                  </div>
                  <span className="bg-green-50 text-green-600 text-xs font-bold px-3 py-1 rounded-lg">Goal: 10k</span>
                </div>
                
                <div className="relative w-40 h-40 mb-6 mt-4">
                  <svg className="w-full h-full transform -rotate-90 drop-shadow-md" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#f0fdf4" strokeWidth="10" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#22c55e" strokeWidth="10" strokeDasharray="283" strokeDashoffset="80" strokeLinecap="round" className="drop-shadow-lg" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-black text-gray-900 tracking-tighter">7,240</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">steps</span>
                  </div>
                </div>
                
                <div className="w-full flex items-center justify-between mt-auto bg-gray-50 px-4 py-3 rounded-xl">
                  <span className="text-sm font-bold text-gray-600 flex items-center"><Flame className="w-4 h-4 mr-1 text-orange-500 fill-current"/> 5 Day Streak!</span>
                  <button className="text-green-600 hover:text-green-700 font-bold text-sm bg-green-100/50 hover:bg-green-100 px-3 py-1.5 rounded-lg transition-colors">Details</button>
                </div>
              </motion.div>

              {/* Water Tracker */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
                <div className="flex justify-between w-full items-start mb-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shadow-inner">
                    <Droplet className="w-7 h-7 text-blue-500 fill-blue-500/20" />
                  </div>
                  <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-lg">Goal: 8 Glasses</span>
                </div>
                
                <div className="flex justify-center gap-2 mb-8 w-full mt-4">
                  {[1,2,3,4,5].map(glass => (
                     <div key={glass} className="w-8 h-16 bg-blue-100 rounded-b-2xl border-t-4 border-blue-200 relative overflow-hidden shadow-inner">
                        <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-blue-600 to-blue-400">
                          {/* Water shine effect */}
                          <div className="absolute top-0 left-0 w-full h-1 bg-white/30"></div>
                        </div>
                     </div>
                  ))}
                  {[6,7,8].map(glass => (
                     <div key={glass} className="w-8 h-16 bg-gray-50 rounded-b-2xl border-t-4 border-gray-200 shadow-inner"></div>
                  ))}
                </div>
                
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:to-blue-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/30 w-full flex items-center justify-center">
                  <Plus className="w-5 h-5 mr-1" /> Log Water
                </button>
              </motion.div>

              {/* Workout Streak - Full Width */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 md:col-span-2 relative overflow-hidden flex flex-col md:flex-row items-center gap-8"
              >
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                
                <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left z-10">
                  <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-4 shadow-inner">
                    <Target className="w-7 h-7 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-black text-gray-900 mb-1">Workout</h2>
                  <p className="text-gray-500 font-medium text-sm mb-4">30 mins daily exercise</p>
                  <p className="text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg flex items-center w-max"><Award className="w-3 h-3 mr-1"/> Top 10% this week</p>
                </div>

                <div className="md:w-2/3 w-full z-10">
                  <div className="flex justify-between gap-2 mb-6 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm mb-2 transition-all ${idx < 4 ? 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-md shadow-purple-500/30' : idx === 4 ? 'bg-white border-2 border-purple-500 text-purple-600 shadow-sm' : 'bg-gray-200 text-gray-400'}`}>
                          {idx < 4 ? '✓' : day}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="bg-gray-900 hover:bg-black text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-md w-full flex items-center justify-center">
                    Log Today's Workout
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN: Appointments & Reports */}
          <div className="space-y-8">
            
            {/* Appointments */}
            <div>
              <div className="flex justify-between items-end mb-6">
                <h2 className="text-2xl font-black text-gray-900 flex items-center">
                  <Calendar className="w-6 h-6 mr-2 text-primary-600" /> Appointments
                </h2>
                <button className="text-primary-600 text-sm font-bold hover:underline">View All</button>
              </div>
              
              <div className="space-y-4">
                {appointments.map((apt, idx) => (
                  <motion.div 
                    whileHover={{ x: 4 }}
                    key={idx} 
                    className="bg-white p-5 rounded-[1.5rem] shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer hover:shadow-md hover:border-primary-100 transition-all group"
                  >
                    <div className="w-14 h-14 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
                      <img src={apt.image} alt={apt.doctor} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">{apt.doctor}</h4>
                      <p className="text-xs text-gray-500 font-medium mb-1">{apt.type}</p>
                      <span className="inline-block bg-primary-50 text-primary-700 text-xs font-bold px-2.5 py-1 rounded-md">
                        {apt.time}
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary-500" />
                  </motion.div>
                ))}

                <button className="w-full py-4 border-2 border-dashed border-gray-200 text-gray-500 font-bold rounded-[1.5rem] hover:border-primary-400 hover:text-primary-600 hover:bg-primary-50 transition-colors flex items-center justify-center">
                  <Plus className="w-5 h-5 mr-1" /> Book New Appointment
                </button>
              </div>
            </div>

            {/* Recent Reports */}
            <div>
              <div className="flex justify-between items-end mb-6 mt-8">
                <h2 className="text-2xl font-black text-gray-900 flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-primary-600" /> Recent Reports
                </h2>
                <button className="text-primary-600 text-sm font-bold hover:underline">Vault</button>
              </div>

              <div className="bg-white rounded-[1.5rem] shadow-sm border border-gray-100 overflow-hidden">
                {recentReports.map((report, idx) => (
                  <div key={idx} className={`p-5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors ${idx !== recentReports.length - 1 ? 'border-b border-gray-50' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${report.status === 'Normal' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                        {report.status === 'Normal' ? <FileText className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{report.name}</h4>
                        <p className="text-xs text-gray-400">{report.date}</p>
                      </div>
                    </div>
                    {report.status === 'Review Needed' ? (
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-300" />
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
