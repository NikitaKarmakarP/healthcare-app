import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, AlertCircle, Navigation, ShieldAlert, HeartPulse } from 'lucide-react';

const Emergency = () => {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="bg-red-600 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-black mb-2 flex items-center justify-center md:justify-start">
              <ShieldAlert className="w-12 h-12 mr-4" /> EMERGENCY SOS
            </h1>
            <p className="text-red-100 text-lg">One tap to save a life. Quick response system.</p>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-40 h-40 bg-white rounded-full flex flex-col items-center justify-center text-red-600 font-black shadow-[0_0_50px_rgba(255,255,255,0.4)] border-4 border-red-200"
          >
            <Phone className="w-12 h-12 mb-2 animate-bounce" />
            <span className="text-xl">CALL 108</span>
          </motion.button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Action Area */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-red-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="text-red-500 mr-2" /> Live Location Tracking
              </h2>
              <div className="bg-gray-200 w-full h-80 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
                
                {/* Mock Map Marker */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center animate-ping absolute"></div>
                  <div className="w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  <div className="bg-white px-4 py-2 rounded-lg shadow-md mt-2 font-bold text-sm text-gray-800">Your Location</div>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <p className="text-gray-600 text-sm">Location shared with nearby hospitals & emergency contacts.</p>
                <button className="bg-red-50 text-red-600 px-6 py-2 rounded-xl font-bold hover:bg-red-100 transition-colors flex items-center border border-red-200">
                  <Navigation className="w-4 h-4 mr-2" /> Update Location
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergency Services</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-gray-50 border border-gray-200 p-4 rounded-2xl text-center hover:shadow-md transition-shadow cursor-pointer">
                  <div className="bg-red-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3">
                    <HeartPulse className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">Ambulance</h3>
                  <p className="text-xs text-gray-500 mt-1">Book private/govt</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-4 rounded-2xl text-center hover:shadow-md transition-shadow cursor-pointer">
                  <div className="bg-blue-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3">
                    <AlertCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">Police</h3>
                  <p className="text-xs text-gray-500 mt-1">Dial 100</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-4 rounded-2xl text-center hover:shadow-md transition-shadow cursor-pointer">
                  <div className="bg-orange-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">Contact Family</h3>
                  <p className="text-xs text-gray-500 mt-1">Notify via SMS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Nearby Hospitals */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Nearby Hospitals</h2>
              
              <div className="space-y-4">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="border border-gray-100 rounded-xl p-4 hover:border-red-200 transition-colors">
                    <h3 className="font-bold text-gray-900 mb-1">{num === 1 ? 'City Hospital' : num === 2 ? 'Fortis Healthcare' : 'Apollo Clinic'}</h3>
                    <p className="text-xs text-gray-500 flex items-center mb-3">
                      <MapPin className="w-3 h-3 mr-1" /> {num * 1.5} km away
                    </p>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-xs font-bold transition-colors">
                        Call Now
                      </button>
                      <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg text-xs font-bold transition-colors">
                        Directions
                      </button>
                    </div>
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

export default Emergency;
