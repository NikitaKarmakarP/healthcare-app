import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, Star, Zap, Shield, HeartPulse, Sparkles, 
  ChevronDown, ShieldCheck, Award, Crown, ArrowRight, Info
} from 'lucide-react';

const Plans = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    { q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel or downgrade your subscription at any time from your account settings without any hidden fees. Your benefits will continue until the end of your billing cycle." },
    { q: "Are family members covered under Prime?", a: "Yes, MediSaathi Prime covers up to 4 family members under a single subscription plan, including free teleconsultations and pharmacy discounts." },
    { q: "How do the free teleconsultations work?", a: "You will receive credits every month that can be used to book instant video consultations with general physicians and specialists on our platform." },
    { q: "Is the AI Symptom Checker accurate?", a: "Our AI is trained on millions of clinical data points and verified by doctors. However, it is designed for triaging and information, not replacing professional medical diagnosis." }
  ];

  return (
    <div className="pt-20 pb-24 bg-[#F8FBFF] min-h-screen font-sans">
      
      {/* Premium Dark Hero */}
      <div className="relative bg-[#0B0F19] overflow-hidden rounded-b-[4rem] pb-32 shadow-2xl">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-[10px] font-black uppercase tracking-widest backdrop-blur-md mb-8"
          >
            <ShieldCheck className="w-4 h-4 mr-2 text-blue-400" />
            Bharat Health Assurance
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight"
          >
            Premium Care for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Your Loved Ones</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium"
          >
            Affordable subscription plans tailored for individual and family health needs. Get priority access to India's top medical network.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center space-x-6"
          >
            <span className={`text-xs font-black uppercase tracking-widest transition-colors ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-20 h-10 bg-white/5 backdrop-blur-md rounded-full p-1 border border-white/10 transition-all"
            >
              <motion.div 
                animate={{ x: isAnnual ? 40 : 0 }}
                className="w-8 h-8 bg-blue-500 rounded-full shadow-lg shadow-blue-500/30"
              />
            </button>
            <span className={`text-xs font-black uppercase tracking-widest transition-colors flex items-center ${isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Annual 
              <span className="ml-2 bg-emerald-500 text-white text-[8px] px-2 py-1 rounded-lg shadow-lg">Save 20%</span>
            </span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        
        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          
          {/* Basic Plan */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[3rem] p-10 shadow-xl border border-gray-100 flex flex-col group h-full"
          >
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 border border-gray-100 group-hover:scale-110 transition-transform">
              <Shield className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Basic Care</h3>
            <p className="text-gray-400 text-sm font-medium mb-10 leading-relaxed">Perfect for individuals starting their health journey.</p>
            <div className="mb-10">
              <span className="text-5xl font-black text-gray-900 tracking-tighter">Free</span>
              <span className="text-gray-400 font-black text-xs uppercase tracking-widest ml-2">/ Life</span>
            </div>
            <ul className="space-y-5 mb-12 flex-1">
              {["Basic AI Diagnostics", "Hospital Search", "Digital Health Vault", "Community Access"].map((f, i) => (
                <li key={i} className="flex items-center text-sm font-black text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-gray-300 mr-3" /> {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest border-2 border-gray-100 text-gray-400 hover:bg-gray-50 transition-all">
              Current Plan
            </button>
          </motion.div>

          {/* Prime Plan (Featured) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative group h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-indigo-700 rounded-[3.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="bg-[#0B0F19] rounded-[3.5rem] p-12 shadow-2xl border border-white/10 relative overflow-hidden transform lg:-translate-y-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest absolute top-8 right-8 shadow-xl">
                Best Value
              </div>
              
              <div className="w-20 h-20 bg-blue-500/10 rounded-[2rem] flex items-center justify-center mb-10 border border-blue-500/20">
                <Crown className="w-10 h-10 text-blue-400" />
              </div>
              
              <h3 className="text-3xl font-black text-white mb-3 tracking-tight">MediSaathi Prime</h3>
              <p className="text-gray-400 text-sm font-medium mb-10 leading-relaxed">Full coverage for your family with priority benefits.</p>
              
              <div className="mb-10 flex items-end">
                <span className="text-6xl font-black text-white tracking-tighter">₹{isAnnual ? '399' : '499'}</span>
                <span className="text-gray-500 font-black text-xs uppercase tracking-widest ml-3 mb-2">/ month</span>
              </div>
              
              <ul className="space-y-5 mb-12">
                {[
                  "Unlimited AI Report Analysis",
                  "2 Free Teleconsultations / mo",
                  "15% Pharmacy Discount",
                  "Priority Booking & Ambulance",
                  "Family Coverage (up to 4)"
                ].map((f, i) => (
                  <li key={i} className="flex items-center text-sm font-black text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mr-4" /> {f}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-6 rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-2xl shadow-blue-600/30 transition-all flex items-center justify-center group/btn">
                Upgrade to Prime <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Platinum Plan */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[3rem] p-10 shadow-xl border border-gray-100 flex flex-col group h-full"
          >
            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-8 border border-purple-100 group-hover:scale-110 transition-transform">
              <Zap className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Platinum Care</h3>
            <p className="text-gray-400 text-sm font-medium mb-10 leading-relaxed">Proactive management for chronic care and seniors.</p>
            <div className="mb-10">
              <span className="text-5xl font-black text-gray-900 tracking-tighter">₹{isAnnual ? '1199' : '1499'}</span>
              <span className="text-gray-400 font-black text-xs uppercase tracking-widest ml-2">/ month</span>
            </div>
            <ul className="space-y-5 mb-12 flex-1">
              {[
                "Unlimited Consultations",
                "Free Monthly Home Tests",
                "Personal Care Manager",
                "Advanced Health Tracking",
                "Priority Post-Op Support"
              ].map((f, i) => (
                <li key={i} className="flex items-center text-sm font-black text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 mr-3" /> {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest bg-purple-600 text-white shadow-xl shadow-purple-200 hover:bg-purple-700 transition-all">
              Choose Platinum
            </button>
          </motion.div>

        </div>

        {/* FAQ Section */}
        <div className="mt-40 max-w-4xl mx-auto">
           <div className="text-center mb-20">
              <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Got Questions?</h2>
              <p className="text-gray-500 font-medium text-lg">Everything you need to know about our health plans.</p>
           </div>
           
           <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div 
                  key={idx}
                  className={`bg-white rounded-3xl border transition-all ${activeFaq === idx ? 'border-blue-200 shadow-xl' : 'border-gray-100 shadow-sm hover:border-blue-100'}`}
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full p-8 flex items-center justify-between text-left outline-none"
                  >
                    <span className={`text-lg font-black tracking-tight ${activeFaq === idx ? 'text-blue-600' : 'text-gray-900'}`}>{faq.q}</span>
                    <motion.div animate={{ rotate: activeFaq === idx ? 180 : 0 }}>
                       <ChevronDown className={`w-6 h-6 ${activeFaq === idx ? 'text-blue-500' : 'text-gray-300'}`} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-8 pt-0 text-gray-500 font-medium leading-relaxed border-t border-gray-50">
                           {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Global Support Card */}
        <div className="mt-32 bg-gray-900 rounded-[4rem] p-16 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
           <div className="relative z-10 max-w-2xl mx-auto">
              <Award className="w-16 h-16 text-emerald-400 mx-auto mb-8" />
              <h3 className="text-3xl font-black text-white mb-6">Trusted by 1M+ Users in India</h3>
              <p className="text-gray-400 font-medium mb-10 leading-relaxed">Join the Bharat health revolution. Secure your family's future with the most advanced AI healthcare platform.</p>
              <div className="flex flex-wrap justify-center gap-6">
                 <div className="bg-white/5 px-6 py-4 rounded-2xl border border-white/10 flex items-center">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 mr-3" />
                    <span className="text-white font-black text-xs uppercase tracking-widest">ISO Certified</span>
                 </div>
                 <div className="bg-white/5 px-6 py-4 rounded-2xl border border-white/10 flex items-center">
                    <Star className="w-5 h-5 text-amber-400 mr-3" />
                    <span className="text-white font-black text-xs uppercase tracking-widest">4.9/5 Rating</span>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Plans;

