import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Users, Calendar, Settings, Database, Edit, Plus, CheckCircle, Bed, Phone, MapPin } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-900 rounded-3xl p-8 mb-8 text-white shadow-xl flex justify-between items-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full mix-blend-overlay filter blur-3xl"></div>
           <div className="relative z-10">
             <h1 className="text-3xl font-bold mb-2">Hospital Admin Portal</h1>
             <p className="text-slate-400">Manage facilities, doctors, beds, and appointments across your branches.</p>
           </div>
           <div className="hidden md:flex items-center space-x-4 bg-slate-800 p-2 rounded-xl border border-slate-700 relative z-10">
             <img src="https://images.unsplash.com/photo-1582750433449-648ed127c09e?q=80&w=100&auto=format&fit=crop" className="w-12 h-12 rounded-lg object-cover" alt="Hospital Logo" />
             <div className="pr-4">
               <h3 className="font-bold">Apollo Central</h3>
               <p className="text-xs text-green-400">● Live & Active</p>
             </div>
           </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-2">
            {[
              { id: 'overview', icon: Activity, label: 'Live Overview' },
              { id: 'facilities', icon: Database, label: 'Manage Facilities' },
              { id: 'beds', icon: Bed, label: 'Bed Availability' },
              { id: 'doctors', icon: Users, label: 'Our Doctors' },
              { id: 'appointments', icon: Calendar, label: 'Appointments' },
              { id: 'settings', icon: Settings, label: 'Profile Settings' },
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === tab.id ? 'bg-primary-600 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-100'}`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4"><Bed className="w-6 h-6"/></div>
                    <h3 className="text-gray-500 font-medium mb-1">Available ICU Beds</h3>
                    <div className="flex items-end space-x-2">
                      <span className="text-4xl font-black text-gray-900">12</span>
                      <span className="text-sm font-bold text-gray-400 mb-1">/ 50 Total</span>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4"><Calendar className="w-6 h-6"/></div>
                    <h3 className="text-gray-500 font-medium mb-1">Today's Appointments</h3>
                    <div className="flex items-end space-x-2">
                      <span className="text-4xl font-black text-gray-900">148</span>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4"><Users className="w-6 h-6"/></div>
                    <h3 className="text-gray-500 font-medium mb-1">Active Doctors</h3>
                    <div className="flex items-end space-x-2">
                      <span className="text-4xl font-black text-gray-900">34</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Bed Management</h3>
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
                     <div>
                       <h4 className="font-bold text-gray-800">General Ward Beds</h4>
                       <p className="text-sm text-gray-500">Update current availability</p>
                     </div>
                     <div className="flex items-center space-x-4">
                       <button className="w-10 h-10 rounded-full bg-white border border-gray-300 font-bold text-xl hover:bg-gray-100">-</button>
                       <span className="text-2xl font-black">105</span>
                       <button className="w-10 h-10 rounded-full bg-white border border-gray-300 font-bold text-xl hover:bg-gray-100">+</button>
                       <button className="bg-primary-600 text-white px-4 py-2 rounded-lg font-bold ml-4">Update</button>
                     </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-4 bg-red-50 rounded-xl border border-red-100 mt-4">
                     <div>
                       <h4 className="font-bold text-red-800">ICU & Critical Care</h4>
                       <p className="text-sm text-red-500">Update current availability</p>
                     </div>
                     <div className="flex items-center space-x-4">
                       <button className="w-10 h-10 rounded-full bg-white border border-red-200 text-red-600 font-bold text-xl hover:bg-red-100">-</button>
                       <span className="text-2xl font-black text-red-700">12</span>
                       <button className="w-10 h-10 rounded-full bg-white border border-red-200 text-red-600 font-bold text-xl hover:bg-red-100">+</button>
                       <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold ml-4">Update</button>
                     </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'facilities' && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Manage Facilities</h3>
                  <button className="bg-primary-50 text-primary-600 px-4 py-2 rounded-lg font-bold text-sm flex items-center">
                    <Plus className="w-4 h-4 mr-1" /> Add New
                  </button>
                </div>
                <div className="space-y-4">
                  {['24/7 Emergency Ward', 'MRI & CT Scan', 'In-house Blood Bank', 'Pharmacy', 'Neonatal ICU', 'Advanced Surgery Theatre'].map(facility => (
                    <div key={facility} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl bg-gray-50">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="font-bold text-gray-700">{facility}</span>
                      </div>
                      <div className="flex space-x-2">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Active</span>
                        <button className="text-gray-400 hover:text-primary-600"><Edit className="w-4 h-4"/></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(activeTab !== 'overview' && activeTab !== 'facilities') && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center">
                <Database className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Module Active</h3>
                <p className="text-gray-500">The {activeTab} management module is connected to the database.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
