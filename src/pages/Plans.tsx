import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Zap } from 'lucide-react';

const Plans = () => {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Health Subscriptions</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Affordable, premium healthcare for you and your family. Get unlimited AI consultations and priority physical bookings.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Basic Plan */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col relative mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Basic Care</h3>
            <p className="text-gray-500 text-sm mb-6">Perfect for occasional needs.</p>
            <div className="mb-6">
              <span className="text-4xl font-black text-gray-900">Free</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center text-sm text-gray-600"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" /> Access to Hospital Search</li>
              <li className="flex items-center text-sm text-gray-600"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" /> Basic AI Symptom Checker</li>
              <li className="flex items-center text-sm text-gray-600"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" /> Standard Appointment Booking</li>
            </ul>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-xl font-bold transition-colors">Current Plan</button>
          </div>

          {/* Pro Plan */}
          <div className="bg-primary-900 text-white rounded-3xl p-8 shadow-2xl border-2 border-primary-500 flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-400 to-primary-600 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center shadow-md">
              <Star className="w-3 h-3 mr-1" /> MOST POPULAR
            </div>
            <h3 className="text-xl font-bold mb-2">MediSaathi Prime</h3>
            <p className="text-blue-200 text-sm mb-6">Complete family protection.</p>
            <div className="mb-6">
              <span className="text-4xl font-black text-white">₹499</span>
              <span className="text-blue-200">/month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center text-sm text-blue-50"><CheckCircle2 className="w-5 h-5 text-primary-400 mr-2 flex-shrink-0" /> Everything in Basic</li>
              <li className="flex items-center text-sm text-blue-50"><CheckCircle2 className="w-5 h-5 text-primary-400 mr-2 flex-shrink-0" /> Unlimited AI Report Analyzer</li>
              <li className="flex items-center text-sm text-blue-50"><CheckCircle2 className="w-5 h-5 text-primary-400 mr-2 flex-shrink-0" /> 2 Free Teleconsultations/mo</li>
              <li className="flex items-center text-sm text-blue-50"><CheckCircle2 className="w-5 h-5 text-primary-400 mr-2 flex-shrink-0" /> 15% off Pharmacy Orders</li>
              <li className="flex items-center text-sm text-blue-50"><CheckCircle2 className="w-5 h-5 text-primary-400 mr-2 flex-shrink-0" /> Priority Ambulance Dispatch</li>
            </ul>
            <button className="w-full bg-gradient-to-r from-primary-400 to-primary-600 hover:from-primary-500 hover:to-primary-700 text-white py-3 rounded-xl font-bold transition-all shadow-lg">Upgrade Now</button>
          </div>

          {/* Platinum Plan */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col relative mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Platinum Care</h3>
            <p className="text-gray-500 text-sm mb-6">For chronic care & seniors.</p>
            <div className="mb-6">
              <span className="text-4xl font-black text-gray-900">₹1,499</span>
              <span className="text-gray-500">/month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center text-sm text-gray-600"><CheckCircle2 className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" /> Everything in Prime</li>
              <li className="flex items-center text-sm text-gray-600"><CheckCircle2 className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" /> Unlimited Teleconsultations</li>
              <li className="flex items-center text-sm text-gray-600"><CheckCircle2 className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" /> Free Monthly Blood Test</li>
              <li className="flex items-center text-sm text-gray-600"><CheckCircle2 className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" /> Dedicated Care Manager</li>
            </ul>
            <button className="w-full border-2 border-primary-600 text-primary-600 hover:bg-primary-50 py-3 rounded-xl font-bold transition-colors">Choose Platinum</button>
          </div>

        </div>

        {/* FAQ */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel or downgrade your subscription at any time from your account settings without any hidden fees." },
              { q: "Are family members covered under Prime?", a: "Yes, MediSaathi Prime covers up to 4 family members under a single subscription plan." },
              { q: "How do the free teleconsultations work?", a: "You will receive 2 credits every month that can be used to book instant video consultations with general physicians on our platform." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Plans;
