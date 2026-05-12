import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, MapPin, Star, Filter, Calendar, Video, 
  ChevronRight, ArrowRight, ShieldCheck, Clock, Award,
  Stethoscope, HeartPulse, CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Doctors = () => {
  const specialties = ['Cardiologist', 'Dentist', 'Dermatologist', 'Gynecologist', 'Neurologist', 'Pediatrician'];
  
  const doctors = [
    { id: 1, name: "Dr. Arvind Sharma", spec: "Cardiologist", exp: "15 years", rating: 4.9, reviews: 124, location: "Apollo Hospital, Delhi", fee: "₹1000", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=340&auto=format&fit=crop", verified: true },
    { id: 2, name: "Dr. Priya Patel", spec: "Dermatologist", exp: "8 years", rating: 4.8, reviews: 98, location: "SkinCare Clinic, Mumbai", fee: "₹800", img: "https://images.unsplash.com/photo-1594824416175-9273b75494f1?q=80&w=340&auto=format&fit=crop", verified: true },
    { id: 3, name: "Dr. Rajesh Reddy", spec: "Neurologist", exp: "20 years", rating: 4.9, reviews: 210, location: "NIMHANS, Bangalore", fee: "₹1500", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=340&auto=format&fit=crop", verified: true },
    { id: 4, name: "Dr. Sneha Kumar", spec: "Gynecologist", exp: "12 years", rating: 4.7, reviews: 156, location: "Motherhood Hospital, Pune", fee: "₹900", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=340&auto=format&fit=crop", verified: true },
    { id: 5, name: "Dr. Amit Singh", spec: "Dentist", exp: "10 years", rating: 4.6, reviews: 89, location: "Smile Dental, Noida", fee: "₹500", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=340&auto=format&fit=crop", verified: true },
  ];

  return (
    <div className="pt-20 pb-24 bg-[#F8FAFC] min-h-screen font-sans">
      
      {/* Premium Hero Section */}
      <div className="relative bg-[#0B0F19] overflow-hidden rounded-b-[4rem] pb-32 shadow-2xl">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="text-center mb-12 space-y-4">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-black uppercase tracking-widest backdrop-blur-md mb-4"
             >
               <Stethoscope className="w-4 h-4 mr-2 text-blue-400" />
               Expert Consultations
             </motion.div>
             <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
               Find & Book <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Trusted Doctors</span>
             </h1>
             <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
               Instant access to India's top specialists for in-clinic visits or high-definition video consultations.
             </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col md:flex-row gap-3"
          >
            <div className="flex-1 relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Name, specialty, or symptoms..." 
                className="w-full pl-14 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:bg-white/10 transition-all font-medium" 
              />
            </div>
            <div className="md:w-1/3 relative group">
              <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Location..." 
                className="w-full pl-14 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:bg-white/10 transition-all font-medium" 
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-black transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center group">
              Find Specialist
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid lg:grid-cols-4 gap-10">
          
          {/* Enhanced Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 sticky top-28">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <Filter className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-black text-gray-900 tracking-tight">Refine Results</h2>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-black text-gray-900 text-xs uppercase tracking-[0.2em] mb-4">Specialty</h3>
                  <div className="space-y-3">
                    {specialties.map(spec => (
                      <label key={spec} className="flex items-center space-x-3 cursor-pointer group">
                        <div className="relative flex items-center">
                          <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-gray-200 rounded-lg checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer" />
                          <CheckCircle2 className="absolute text-white w-5 h-5 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none p-0.5" />
                        </div>
                        <span className="text-gray-600 font-bold text-sm group-hover:text-blue-600 transition-colors">{spec}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-black text-gray-900 text-xs uppercase tracking-[0.2em] mb-4">Availability</h3>
                  <div className="space-y-3">
                    {['Available Today', 'Available in 48h', 'Instant Consult'].map(label => (
                      <label key={label} className="flex items-center space-x-3 cursor-pointer group">
                         <div className="relative flex items-center">
                          <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-gray-200 rounded-lg checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer" />
                          <CheckCircle2 className="absolute text-white w-5 h-5 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none p-0.5" />
                        </div>
                        <span className="text-gray-600 font-bold text-sm group-hover:text-blue-600 transition-colors">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Doctor Cards */}
          <div className="lg:col-span-3 space-y-8">
            <AnimatePresence>
              {doctors.map((doc, idx) => (
                <motion.div 
                  key={doc.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 md:p-8 rounded-[3rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all flex flex-col md:flex-row gap-8 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32 group-hover:bg-blue-100 transition-colors duration-700"></div>
                  
                  <div className="relative">
                    <img src={doc.img} alt={doc.name} className="w-full md:w-48 h-56 object-cover rounded-[2.5rem] shadow-lg border-4 border-white" />
                    {doc.verified && (
                      <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-2xl shadow-xl border-4 border-white">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 relative z-10">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-6">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-black text-gray-900 tracking-tight flex items-center">
                          {doc.name}
                          <Award className="w-5 h-5 ml-2 text-amber-500" />
                        </h3>
                        <div className="flex items-center space-x-2">
                           <span className="text-blue-600 font-black uppercase text-[10px] tracking-widest">{doc.spec}</span>
                           <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                           <span className="text-gray-500 font-bold text-xs uppercase tracking-wider">{doc.exp} experience</span>
                        </div>
                        <p className="text-gray-400 text-sm font-medium flex items-center pt-2">
                          <MapPin className="h-4 w-4 mr-2 text-gray-300" /> {doc.location}
                        </p>
                      </div>
                      
                      <div className="mt-4 sm:mt-0 flex flex-col items-end">
                        <div className="flex items-center space-x-1 bg-green-50 text-green-700 px-4 py-2 rounded-2xl font-black text-sm border border-green-100 shadow-sm">
                          <Star className="h-4 w-4 fill-current" />
                          <span>{doc.rating}</span>
                          <span className="text-green-600/50 text-[10px] ml-1">({doc.reviews} Reviews)</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                      <div className="bg-[#F8FAFC] p-3 rounded-2xl border border-gray-100 flex items-center space-x-3 group/item hover:border-blue-200 transition-colors">
                        <Calendar className="h-4 w-4 text-blue-500" />
                        <span className="text-xs font-black text-gray-700">Clinic Visit</span>
                      </div>
                      <div className="bg-[#F8FAFC] p-3 rounded-2xl border border-gray-100 flex items-center space-x-3 group/item hover:border-indigo-200 transition-colors">
                        <Video className="h-4 w-4 text-indigo-500" />
                        <span className="text-xs font-black text-gray-700">Video Consult</span>
                      </div>
                      <div className="bg-[#F8FAFC] p-3 rounded-2xl border border-gray-100 flex items-center space-x-3 group/item hover:border-emerald-200 transition-colors">
                        <Clock className="h-4 w-4 text-emerald-500" />
                        <span className="text-xs font-black text-gray-700">Available Today</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-gray-50 gap-6">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Consultation Fee</span>
                        <span className="text-2xl font-black text-gray-900">{doc.fee}</span>
                      </div>
                      <div className="flex w-full sm:w-auto space-x-3">
                        <button className="flex-1 sm:flex-none p-4 bg-gray-50 hover:bg-gray-100 text-gray-900 rounded-2xl transition-all border border-gray-200">
                          <HeartPulse className="w-6 h-6" />
                        </button>
                        <Link to="/appointment" className="flex-[3] sm:flex-none bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black transition-all text-center shadow-xl shadow-blue-200 group/btn flex items-center justify-center">
                          Book Now
                          <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
