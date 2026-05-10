import React from 'react';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Users, CalendarCheck, ShieldCheck, ArrowRight, Activity } from 'lucide-react';

const Clinics = () => {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-900/30 skew-x-12 transform origin-top"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black mb-6">Partner with MediSaathi</h1>
            <p className="text-xl text-gray-300 mb-8">Empower your hospital or clinic with our AI-driven ecosystem. Digitize appointments, manage live ICU beds, and reach 10x more patients.</p>
            <div className="flex gap-4">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-bold transition-all text-lg shadow-lg">
                Register Facility
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all text-lg backdrop-blur-sm">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
          <p className="text-gray-600">Join 500+ healthcare facilities already using our smart platform.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-primary-200 transition-colors">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Increased Footfall</h3>
            <p className="text-gray-600">Get discovered by millions of patients searching for specialists and emergency care in your city.</p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-primary-200 transition-colors">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <Activity className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Live Bed Management</h3>
            <p className="text-gray-600">Update ICU and general bed availability in real-time, reducing chaotic emergency room walk-ins.</p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-primary-200 transition-colors">
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <CalendarCheck className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Scheduling</h3>
            <p className="text-gray-600">Completely automate doctor appointments. Eliminate no-shows with automated WhatsApp reminders.</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-primary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Trusted by Leading Facilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <p className="text-gray-700 italic mb-6">"Since partnering with MediSaathi, our ICU bed utilization is perfectly optimized, and we no longer have patients waiting for hours without knowing bed availability."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-700 mr-4">DM</div>
                <div>
                  <h4 className="font-bold text-gray-900">Dr. Manish</h4>
                  <p className="text-xs text-gray-500">Chief Medical Officer, CarePlus Hospital</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <p className="text-gray-700 italic mb-6">"The automated scheduling system reduced our clinic's no-show rate by 40%. The WhatsApp reminders are a game changer for our patients."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700 mr-4">SK</div>
                <div>
                  <h4 className="font-bold text-gray-900">Dr. Sanya Kapoor</h4>
                  <p className="text-xs text-gray-500">Founder, City Smile Dental</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Clinics;
