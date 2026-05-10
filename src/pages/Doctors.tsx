import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Star, Filter, Calendar, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const Doctors = () => {
  const specialties = ['Cardiologist', 'Dentist', 'Dermatologist', 'Gynecologist', 'Neurologist', 'Pediatrician'];
  
  const doctors = [
    { id: 1, name: "Dr. Arvind Sharma", spec: "Cardiologist", exp: "15 years", rating: 4.9, reviews: 124, location: "Apollo Hospital, Delhi", fee: "₹1000", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=340&auto=format&fit=crop" },
    { id: 2, name: "Dr. Priya Patel", spec: "Dermatologist", exp: "8 years", rating: 4.8, reviews: 98, location: "SkinCare Clinic, Mumbai", fee: "₹800", img: "https://images.unsplash.com/photo-1594824416175-9273b75494f1?q=80&w=340&auto=format&fit=crop" },
    { id: 3, name: "Dr. Rajesh Reddy", spec: "Neurologist", exp: "20 years", rating: 4.9, reviews: 210, location: "NIMHANS, Bangalore", fee: "₹1500", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=340&auto=format&fit=crop" },
    { id: 4, name: "Dr. Sneha Kumar", spec: "Gynecologist", exp: "12 years", rating: 4.7, reviews: 156, location: "Motherhood Hospital, Pune", fee: "₹900", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=340&auto=format&fit=crop" },
    { id: 5, name: "Dr. Amit Singh", spec: "Dentist", exp: "10 years", rating: 4.6, reviews: 89, location: "Smile Dental, Noida", fee: "₹500", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=340&auto=format&fit=crop" },
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search */}
        <div className="bg-primary-900 rounded-3xl p-8 mb-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-700 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Find & Book Trusted Doctors</h1>
            <p className="text-primary-200 mb-8 max-w-2xl">Connect with the best healthcare professionals across India for clinic visits or video consultations.</p>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 bg-white rounded-xl p-2 flex items-center shadow-md">
                <Search className="h-5 w-5 text-gray-400 ml-2" />
                <input type="text" placeholder="Search by name, specialty, or symptoms..." className="w-full px-4 py-2 text-gray-800 outline-none" />
              </div>
              <div className="md:w-1/3 bg-white rounded-xl p-2 flex items-center shadow-md">
                <MapPin className="h-5 w-5 text-gray-400 ml-2" />
                <input type="text" placeholder="Location (e.g. Delhi)" className="w-full px-4 py-2 text-gray-800 outline-none" />
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-28">
              <div className="flex items-center space-x-2 mb-6">
                <Filter className="h-5 w-5 text-gray-500" />
                <h2 className="text-lg font-bold text-gray-900">Filters</h2>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">Specialty</h3>
                <div className="space-y-2">
                  {specialties.map(spec => (
                    <label key={spec} className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 w-4 h-4" />
                      <span className="text-gray-600">{spec}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">Consultation Type</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 w-4 h-4" defaultChecked />
                    <span className="text-gray-600">In-Clinic Visit</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 w-4 h-4" defaultChecked />
                    <span className="text-gray-600">Video Consult</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor List */}
          <div className="lg:col-span-3 space-y-6">
            {doctors.map((doc, idx) => (
              <motion.div 
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all flex flex-col md:flex-row gap-6"
              >
                <img src={doc.img} alt={doc.name} className="w-full md:w-40 h-40 object-cover rounded-xl" />
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{doc.name}</h3>
                      <p className="text-primary-600 font-medium mb-1">{doc.spec} • {doc.exp} exp</p>
                      <p className="text-gray-500 text-sm flex items-center mb-3">
                        <MapPin className="h-4 w-4 mr-1" /> {doc.location}
                      </p>
                    </div>
                    <div className="bg-green-50 text-green-700 px-3 py-1 rounded-lg flex items-center font-bold shadow-sm">
                      <Star className="h-4 w-4 mr-1 fill-current" />
                      {doc.rating} <span className="text-green-600/70 text-xs ml-1 font-normal">({doc.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                      <Calendar className="h-3 w-3 mr-1" /> Clinic Visit
                    </span>
                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                      <Video className="h-3 w-3 mr-1" /> Video Consult
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-100 pt-4 gap-4">
                    <div className="text-gray-900 font-bold">
                      Consultation Fee: <span className="text-primary-600 text-lg">{doc.fee}</span>
                    </div>
                    <Link to="/appointment" className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-xl font-medium transition-colors text-center shadow-md">
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
