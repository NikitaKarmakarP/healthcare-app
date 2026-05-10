import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Flame, Footprints, Trophy, Target, Award } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Health Dashboard</h1>
            <p className="text-gray-600">Track your daily streaks and stay healthy!</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center bg-yellow-100 px-4 py-2 rounded-full border border-yellow-200">
            <Trophy className="w-5 h-5 text-yellow-600 mr-2" />
            <span className="font-bold text-yellow-800">Level 5 Health Hero</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Water Tracker */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <Droplet className="w-10 h-10 text-blue-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Water Tracker</h2>
            <p className="text-gray-500 mb-6">Stay hydrated! Goal: 8 glasses</p>
            
            <div className="flex justify-center gap-2 mb-6 w-full">
              {[1,2,3,4,5].map(glass => (
                 <div key={glass} className="w-10 h-12 bg-blue-500 rounded-b-xl border-t-2 border-blue-200 relative overflow-hidden">
                    <div className="absolute bottom-0 w-full h-3/4 bg-blue-600"></div>
                 </div>
              ))}
              {[6,7,8].map(glass => (
                 <div key={glass} className="w-10 h-12 bg-gray-100 rounded-b-xl border-t-2 border-gray-200"></div>
              ))}
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-md w-full">
              + Add Glass
            </button>
            <p className="text-xs font-bold text-blue-600 mt-4 flex items-center"><Flame className="w-3 h-3 mr-1"/> 12 Day Streak!</p>
          </motion.div>

          {/* Daily Steps */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-4">
              <Footprints className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Daily Steps</h2>
            <p className="text-gray-500 mb-6">Goal: 10,000 steps</p>
            
            <div className="relative w-40 h-40 mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" strokeWidth="10" />
                <circle cx="50" cy="50" r="45" fill="none" stroke="#22c55e" strokeWidth="10" strokeDasharray="283" strokeDashoffset="80" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-black text-gray-900">7,240</span>
                <span className="text-xs font-bold text-gray-500">steps</span>
              </div>
            </div>
            
            <p className="text-xs font-bold text-green-600 mt-4 flex items-center"><Flame className="w-3 h-3 mr-1"/> 5 Day Streak!</p>
          </motion.div>

          {/* Exercise Streaks */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
            <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-4">
              <Target className="w-10 h-10 text-purple-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Workout Streak</h2>
            <p className="text-gray-500 mb-6">30 mins daily exercise</p>
            
            <div className="flex gap-2 mb-8">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-1 ${idx < 4 ? 'bg-purple-600 text-white shadow-md' : idx === 4 ? 'bg-white border-2 border-purple-500 text-purple-600' : 'bg-gray-100 text-gray-400'}`}>
                    {idx < 4 ? '✓' : day}
                  </div>
                </div>
              ))}
            </div>
            
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-md w-full">
              Log Workout
            </button>
            <p className="text-xs font-bold text-purple-600 mt-4 flex items-center"><Award className="w-3 h-3 mr-1"/> Top 10% this week!</p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
