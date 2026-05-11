import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Users, Smartphone, HeartHandshake, ArrowRight, Languages } from 'lucide-react';

const RuralTelemedicine = () => {
  return (
    <div className="pt-24 pb-20 bg-green-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="bg-green-700 rounded-3xl p-8 md:p-16 text-white shadow-xl relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1593115057322-e94b77572f20?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
          <div className="relative z-10 max-w-2xl">
            <span className="bg-green-600 text-green-100 text-xs font-bold px-3 py-1 rounded-full border border-green-500 mb-4 inline-block">Bharat Initiative</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Connecting Villages to City Specialists</h1>
            <p className="text-green-100 text-lg mb-8">Bridging the healthcare divide in India. High-quality video consultations designed for low-bandwidth 3G networks, completely in local languages.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-xl font-bold transition-colors flex items-center justify-center">
                <Smartphone className="w-5 h-5 mr-2" /> Start Kiosk Session
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <Wifi className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Low Bandwidth Ready</h3>
            <p className="text-gray-600">Optimized video streaming that works flawlessly even on standard 3G/4G rural networks.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <Languages className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">12+ Local Languages</h3>
            <p className="text-gray-600">The interface and AI assistants auto-translate into Bengali, Hindi, Odia, Marathi, and more.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-rose-100 rounded-2xl flex items-center justify-center mb-6">
              <HeartHandshake className="w-7 h-7 text-rose-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Asha Worker Kiosks</h3>
            <p className="text-gray-600">Partnering with local health workers to provide assisted telemedicine sessions for the elderly.</p>
          </div>
        </div>

        {/* Impact Section */}
        <div className="mt-20 bg-green-900 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-10">Our Impact in Rural India</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-black text-amber-400 mb-2">500+</div>
              <div className="text-green-100 font-medium">Villages Reached</div>
            </div>
            <div>
              <div className="text-4xl font-black text-amber-400 mb-2">50k+</div>
              <div className="text-green-100 font-medium">Consultations Done</div>
            </div>
            <div>
              <div className="text-4xl font-black text-amber-400 mb-2">1,200</div>
              <div className="text-green-100 font-medium">Asha Workers Trained</div>
            </div>
            <div>
              <div className="text-4xl font-black text-amber-400 mb-2">12</div>
              <div className="text-green-100 font-medium">Regional Languages</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RuralTelemedicine;
