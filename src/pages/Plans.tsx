import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Star, Zap, Shield, HeartPulse, Sparkles, ChevronDown } from 'lucide-react';

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
    <div className="pt-24 pb-24 bg-[#F8FAFC] min-h-screen relative overflow-hidden font-sans">
      {/* Background Elements */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-primary-50/50 to-transparent pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-400/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-bold text-sm mb-6 border border-blue-100"
          >
            <Sparkles className="w-4 h-4" />
            <span>Premium Healthcare Packages</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
          >
            Invest in Your Family's <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-500">Health & Wellbeing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-xl"
          >
            Affordable, premium healthcare starting at just ₹499/month. Get unlimited AI consultations and priority doctor bookings.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex items-center justify-center space-x-4"
          >
            <span className={`font-bold ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-20 h-10 bg-primary-100 rounded-full p-1 transition-colors focus:outline-none"
            >
              <motion.div 
                animate={{ x: isAnnual ? 40 : 0 }}
                className="w-8 h-8 bg-primary-600 rounded-full shadow-md"
              />
            </button>
            <span className={`font-bold flex items-center ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annually 
              <span className="ml-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md">Save 20%</span>
            </span>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          
          {/* Basic Plan */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-[2.5rem] p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative z-10"
          >
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 border border-gray-100">
              <Shield className="w-7 h-7 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Care</h3>
            <p className="text-gray-500 text-sm mb-6 h-10">Perfect for occasional health needs and single users.</p>
            <div className="mb-8 flex items-end">
              <span className="text-5xl font-black text-gray-900">Free</span>
              <span className="text-gray-500 font-medium ml-2 mb-1">/forever</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Access to Hospital Search",
                "Basic AI Symptom Checker",
                "Standard Appointment Booking",
                "Digital Health Vault (50MB)",
                "Community Forum Access"
              ].map((feature, i) => (
                <li key={i} className="flex items-start text-sm text-gray-600 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" /> 
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-900 py-4 rounded-2xl font-bold transition-colors border border-gray-200">
              Current Plan
            </button>
          </motion.div>

          {/* Prime Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative z-20 group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary-400 to-blue-600 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="bg-[#0B0F19] rounded-[2.5rem] p-8 shadow-2xl border border-gray-800 relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-500 to-blue-500 text-white px-6 py-1.5 rounded-full text-sm font-bold flex items-center shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                <Star className="w-4 h-4 mr-1.5" /> MOST POPULAR
              </div>
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30">
                <HeartPulse className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">MediSaathi Prime</h3>
              <p className="text-gray-400 text-sm mb-6 h-10">Complete proactive health protection for the entire family (up to 4).</p>
              <div className="mb-8 flex items-end">
                <span className="text-5xl font-black text-white">₹{isAnnual ? '399' : '499'}</span>
                <span className="text-gray-400 font-medium ml-2 mb-1">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Everything in Basic",
                  "Unlimited AI Report Analyzer",
                  "2 Free Teleconsultations/mo",
                  "15% off Pharmacy Orders",
                  "Priority Ambulance Dispatch",
                  "Cover up to 4 family members"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-200 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" /> 
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary-500 to-blue-500 hover:from-primary-400 hover:to-blue-400 text-white py-4 rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" /> Upgrade to Prime
              </motion.button>
            </div>
          </motion.div>

          {/* Platinum Plan */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-[2.5rem] p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative z-10"
          >
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 border border-purple-100">
              <Zap className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Platinum Care</h3>
            <p className="text-gray-500 text-sm mb-6 h-10">Premium care for chronic conditions & senior citizens.</p>
            <div className="mb-8 flex items-end">
              <span className="text-5xl font-black text-gray-900">₹{isAnnual ? '1,199' : '1,499'}</span>
              <span className="text-gray-500 font-medium ml-2 mb-1">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Everything in Prime",
                "Unlimited Teleconsultations",
                "Free Monthly Blood Test (Home)",
                "Dedicated Care Manager",
                "Diet & Fitness Planner",
                "Post-Op Recovery Assistance"
              ].map((feature, i) => (
                <li key={i} className="flex items-start text-sm text-gray-600 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" /> 
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-purple-50 hover:bg-purple-100 text-purple-700 py-4 rounded-2xl font-bold transition-colors border border-purple-200">
              Choose Platinum
            </button>
          </motion.div>

        </div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500">Everything you need to know about the product and billing.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl border transition-all duration-300 ${activeFaq === idx ? 'border-primary-200 shadow-md' : 'border-gray-100 shadow-sm hover:border-gray-200'}`}
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-bold ${activeFaq === idx ? 'text-primary-600' : 'text-gray-900'}`}>{faq.q}</span>
                  <motion.div
                    animate={{ rotate: activeFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className={`w-5 h-5 ${activeFaq === idx ? 'text-primary-500' : 'text-gray-400'}`} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-50 mt-2 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Plans;
