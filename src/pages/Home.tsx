import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Phone, 
  Bot, 
  Video, 
  Calendar, 
  Pill, 
  FileText, 
  ChevronRight,
  Star
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    { icon: <Search className="w-6 h-6" />, title: "Find Doctors", desc: "Top specialists near you", color: "bg-blue-100 text-blue-600", path: "/doctors" },
    { icon: <Calendar className="w-6 h-6" />, title: "Book Appointment", desc: "Zero waiting time", color: "bg-purple-100 text-purple-600", path: "/hospitals" },
    { icon: <Bot className="w-6 h-6" />, title: "AI Assistant", desc: "Check symptoms instantly", color: "bg-emerald-100 text-emerald-600", path: "/ai-assistant" },
    { icon: <Pill className="w-6 h-6" />, title: "Pharmacy", desc: "Medicine at your doorstep", color: "bg-orange-100 text-orange-600", path: "/pharmacy" },
    { icon: <Video className="w-6 h-6" />, title: "Rural Telemedicine", desc: "Connect with city doctors", color: "bg-indigo-100 text-indigo-600", path: "/rural-telemedicine" },
    { icon: <FileText className="w-6 h-6" />, title: "AI Report Analyzer", desc: "Translate medical jargon", color: "bg-rose-100 text-rose-600", path: "/ai-report" },
    { icon: <Star className="w-6 h-6" />, title: "Health Plans", desc: "Affordable subscriptions", color: "bg-amber-100 text-amber-600", path: "/plans" },
    { icon: <Phone className="w-6 h-6" />, title: "Emergency SOS", desc: "24/7 Ambulance support", color: "bg-red-100 text-red-600", path: "/emergency" }
  ];

  const doctors = [
    { name: "Dr. Sharma", spec: "Cardiologist", rating: 4.9, img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=340&auto=format&fit=crop" },
    { name: "Dr. Patel", spec: "Dermatologist", rating: 4.8, img: "https://images.unsplash.com/photo-1594824416175-9273b75494f1?q=80&w=340&auto=format&fit=crop" },
    { name: "Dr. Reddy", spec: "Neurologist", rating: 4.9, img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=340&auto=format&fit=crop" },
    { name: "Dr. Kumar", spec: "Pediatrician", rating: 4.7, img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=340&auto=format&fit=crop" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-[#F8FAFC] py-20 lg:py-32 overflow-hidden">
        {/* Dynamic Background Gradients */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-tr from-teal-400/20 to-blue-400/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-blue-700 font-bold text-xs uppercase tracking-wider">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                India's #1 AI Healthcare Platform
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
                Your Health, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Powered by AI
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 max-w-xl leading-relaxed font-medium">
                Connect with top doctors, get AI-driven health insights, order medicines, and access emergency services—all in one intelligent ecosystem.
              </p>

              {/* Enhanced Search Bar */}
              <div className="bg-white/80 backdrop-blur-xl p-2 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white max-w-xl flex items-center transition-all focus-within:shadow-[0_8px_30px_rgba(37,99,235,0.15)] focus-within:border-blue-200">
                <div className="flex-grow flex items-center px-4">
                  <Search className="h-5 w-5 text-gray-400 mr-3" />
                  <input 
                    type="text" 
                    placeholder="Search doctors, specialties, symptoms..." 
                    className="w-full bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-400 font-medium outline-none py-3"
                  />
                </div>
                <button 
                  onClick={() => navigate('/hospitals')}
                  className="bg-gray-900 hover:bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-md hover:shadow-blue-500/30 flex items-center"
                >
                  Search
                </button>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => navigate('/emergency')}
                  className="group flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3.5 rounded-xl font-bold shadow-[0_8px_20px_rgba(239,68,68,0.3)] transition-all transform hover:-translate-y-1"
                >
                  <Phone className="h-5 w-5 group-hover:animate-bounce" />
                  <span>Emergency SOS</span>
                </button>
                <button 
                  onClick={() => navigate('/doctors')}
                  className="group flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-6 py-3.5 rounded-xl font-bold shadow-sm transition-all transform hover:-translate-y-1"
                >
                  <Video className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
                  <span>Online Consult</span>
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-[3rem] transform rotate-3 scale-105 filter blur-2xl animate-pulse"></div>
              
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-8 border-white/50 backdrop-blur-sm">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop" 
                  alt="AI Healthcare" 
                  className="w-full h-[550px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Card 1 */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 -left-12 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-2xl z-20 flex items-center space-x-4 border border-white"
              >
                <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-3 rounded-xl shadow-lg shadow-green-500/30">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">AI Analysis</p>
                  <p className="text-gray-900 font-black text-lg">99% Accurate</p>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 -right-12 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-2xl z-20 flex items-center space-x-4 border border-white"
              >
                <div className="bg-gradient-to-br from-blue-400 to-indigo-600 p-3 rounded-xl shadow-lg shadow-blue-500/30">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Top Rated</p>
                  <p className="text-gray-900 font-black text-lg">50k+ Doctors</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Brands */}
      <section className="border-b border-gray-100 bg-white py-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Trusted by Top Hospitals & Clinics Across India</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <h3 className="text-2xl font-black text-gray-900 tracking-tighter">Apollo<span className="text-blue-600">Care</span></h3>
            <h3 className="text-2xl font-black text-gray-900 tracking-tighter">Fortis<span className="font-light">Health</span></h3>
            <h3 className="text-2xl font-black text-gray-900 tracking-tighter">Max<span className="text-red-500 font-light">+</span></h3>
            <h3 className="text-2xl font-black text-gray-900 tracking-tighter">Manipal<span className="text-blue-400">Hospitals</span></h3>
            <h3 className="text-2xl font-black text-gray-900 tracking-tighter">AIIMS<span className="text-gray-500 text-sm">Network</span></h3>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-gray-100 bg-white py-12 relative z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
            <div className="text-center px-4">
              <p className="text-4xl md:text-5xl font-black text-blue-600 mb-2">50k+</p>
              <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">Active Patients</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl md:text-5xl font-black text-blue-600 mb-2">10k+</p>
              <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">Verified Doctors</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl md:text-5xl font-black text-blue-600 mb-2">99%</p>
              <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">AI Accuracy</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl md:text-5xl font-black text-blue-600 mb-2">24/7</p>
              <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Enterprise Professional Layout) */}
      <section className="relative py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col md:flex-row md:justify-between md:items-end border-b border-gray-100 pb-8">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">Platform Capabilities</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Our Ecosystem</h2>
              <p className="text-lg text-gray-500 font-medium leading-relaxed">Enterprise-grade tools beautifully integrated to manage every aspect of healthcare delivery.</p>
            </div>
            <button 
              onClick={() => navigate('/services')}
              className="mt-6 md:mt-0 text-blue-600 font-bold hover:text-blue-800 flex items-center transition-colors group"
            >
              Explore all capabilities 
              <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => navigate(feature.path)}
                className="group relative p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-600 shadow-sm hover:shadow-[0_8px_30px_rgba(37,99,235,0.12)] transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    {React.cloneElement(feature.icon as React.ReactElement, { className: "w-7 h-7" })}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-blue-100 group-hover:border-blue-200 group-hover:text-blue-600 transition-all duration-300 transform group-hover:-rotate-45">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{feature.desc}</p>
                
                {/* Minimalist animated bottom border line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent overflow-hidden rounded-b-2xl">
                  <div className="w-full h-full bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant Banner */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#0B0F19] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative"
          >
            {/* Dark Mode Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px]"></div>
            
            <div className="grid md:grid-cols-2 items-center relative z-10">
              <div className="p-12 md:p-16 lg:p-20 text-white space-y-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                  <Bot className="w-4 h-4 mr-2" />
                  Next-Gen Feature
                </div>
                <h2 className="text-4xl md:text-5xl font-black leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  Meet Your AI<br/>Health Assistant
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                  Describe your symptoms naturally. Our AI analyzes millions of medical data points to suggest conditions, home remedies, and the exact specialist you need.
                </p>
                <button 
                  onClick={() => navigate('/ai-assistant')}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center group"
                >
                  <Bot className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                  Try AI Symptom Checker
                </button>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">*Not a substitute for professional medical advice</p>
              </div>
              
              <div className="hidden md:flex justify-center items-center h-full min-h-[500px] relative p-8">
                 {/* Mock UI of Chatbot */}
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                   whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                   className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-6 shadow-2xl w-full max-w-sm relative z-20"
                 >
                    <div className="flex items-center space-x-3 mb-6 border-b border-white/10 pb-4">
                      <div className="bg-blue-500 p-2.5 rounded-xl shadow-lg shadow-blue-500/30">
                        <Bot className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-lg">MediSaathi AI</p>
                        <p className="text-xs text-green-400 font-bold flex items-center">
                          <span className="w-2 h-2 rounded-full bg-green-400 mr-1.5 animate-pulse"></span>
                          Online
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="bg-white/5 border border-white/10 rounded-2xl rounded-tr-sm p-4 text-sm text-gray-200 ml-auto w-5/6 shadow-sm"
                      >
                        I have a fever and a slight headache that started this morning.
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2 }}
                        className="bg-blue-600/20 border border-blue-500/30 rounded-2xl rounded-tl-sm p-4 text-sm text-blue-50 w-11/12 shadow-sm relative overflow-hidden"
                      >
                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                        Based on your symptoms, it could be a mild viral infection. Please ensure you stay hydrated. I recommend consulting a General Physician if symptoms persist for 48 hours.
                      </motion.div>
                    </div>
                 </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">Simple Process</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">How MediSaathi Works</h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">Get the care you need in four simple steps, designed for your convenience.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 z-0"></div>
            
            {[
              { step: "01", title: "Check Symptoms", desc: "Use our AI to instantly analyze your symptoms.", icon: <Bot className="w-6 h-6" /> },
              { step: "02", title: "Find Specialist", desc: "Get matched with the perfect verified doctor.", icon: <Search className="w-6 h-6" /> },
              { step: "03", title: "Book Consult", desc: "Schedule an online video or clinic visit.", icon: <Video className="w-6 h-6" /> },
              { step: "04", title: "Get Medication", desc: "Prescriptions delivered right to your door.", icon: <Pill className="w-6 h-6" /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative z-10 text-center group"
              >
                <div className="w-20 h-20 mx-auto bg-white border-4 border-gray-50 group-hover:border-blue-100 rounded-full flex items-center justify-center text-blue-600 shadow-xl mb-8 relative transition-colors">
                  {item.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-gray-50 shadow-sm">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Doctors Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')] opacity-[0.03] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 space-y-4 md:space-y-0">
            <div>
              <span className="text-blue-600 font-black tracking-widest uppercase text-xs mb-3 block">Expert Care</span>
              <h2 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">Top Rated Specialists</h2>
              <p className="text-gray-500 font-medium text-lg">Book appointments with India's most trusted doctors.</p>
            </div>
            <button 
              onClick={() => navigate('/doctors')}
              className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors group bg-blue-50 px-5 py-2.5 rounded-full"
            >
              View All Doctors <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doc, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] transition-all border border-gray-100 group cursor-pointer"
                onClick={() => navigate('/doctors')}
              >
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center text-sm font-black text-gray-900 shadow-lg z-20">
                    <Star className="w-4 h-4 text-yellow-500 mr-1.5 fill-current" />
                    {doc.rating}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-black text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{doc.name}</h3>
                  <p className="text-blue-600 text-sm font-bold uppercase tracking-wider mb-6">{doc.spec}</p>
                  
                  <button className="w-full bg-gray-50 hover:bg-blue-600 text-gray-900 hover:text-white border border-gray-100 hover:border-blue-600 py-3 rounded-xl font-bold transition-all flex justify-center items-center group-hover:shadow-lg group-hover:shadow-blue-500/30">
                    Book Consult
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">Patient Stories</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Loved by Thousands</h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">Don't just take our word for it. Here is what our users have to say about their MediSaathi experience.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rahul S.", role: "Patient", quote: "The AI symptom checker was incredibly accurate. It saved me a trip to the ER, and the online consultation was seamless.", rating: 5 },
              { name: "Priya M.", role: "Mother of two", quote: "Getting medicines delivered at 2 AM was a lifesaver for my child. MediSaathi is the only healthcare app I trust now.", rating: 5 },
              { name: "Dr. Vikram K.", role: "Cardiologist", quote: "As a doctor, this platform makes managing patient records and follow-ups incredibly efficient. Highly recommended.", rating: 5 }
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 relative hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300"
              >
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed font-medium mb-8">"{review.quote}"</p>
                <div className="flex items-center space-x-4 mt-auto">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-gray-500 font-medium">Everything you need to know about the platform.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "Is the AI Symptom Checker free to use?", a: "Yes, the basic AI symptom checker is completely free for all registered users. Premium features like detailed report analysis require a subscription." },
              { q: "How quickly can I get an online consultation?", a: "Most patients are connected to a general physician within 5-10 minutes. For specialists, you can usually book a same-day appointment." },
              { q: "Are the doctors on the platform verified?", a: "Absolutely. Every doctor on MediSaathi undergoes a rigorous multi-step verification process, including checking their medical license and credentials." },
              { q: "Can I use MediSaathi in rural areas?", a: "Yes! We have a dedicated 'Rural Telemedicine' module designed to work efficiently on low-bandwidth connections." }
            ].map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-blue-300 transition-colors cursor-pointer group"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors pr-8">{faq.q}</h3>
                  <div className="w-8 h-8 flex-shrink-0 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    <span className="font-bold text-xl leading-none">+</span>
                  </div>
                </div>
                {/* For demo purposes, we'll reveal the answer on hover. In a real app, this would use React state. */}
                <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-gray-600 mt-4 font-medium leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B0F19] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="grid md:grid-cols-2 items-center relative z-10">
              <div className="p-12 md:p-20 text-white space-y-8">
                <h2 className="text-4xl md:text-5xl font-black leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  Take your health<br/>in your hands.
                </h2>
                <p className="text-gray-400 text-lg font-medium max-w-md">
                  Download the MediSaathi app to access AI diagnostics, book doctors, and manage your health records on the go.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="flex items-center space-x-3 bg-white hover:bg-gray-100 text-gray-900 px-6 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-white/20 transform hover:-translate-y-1">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.58-.74 2.15.11 3.48 1.14 4.3 2.14-1.89 1.16-1.57 3.58.26 4.49-.62 1.83-1.63 3.65-3.22 5.28zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.31-1.95 4.35-3.74 4.25z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] uppercase tracking-wider font-bold text-gray-500">Download on the</div>
                      <div className="text-lg font-bold leading-none">App Store</div>
                    </div>
                  </button>
                  <button className="flex items-center space-x-3 bg-transparent hover:bg-white/10 text-white border border-white/20 px-6 py-3.5 rounded-xl transition-all transform hover:-translate-y-1">
                    <svg className="w-8 h-8" viewBox="0 0 24 24">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186c-.165-.152-.284-.366-.337-.626L3.25 21.5V2.5l.023-.06c.053-.26.172-.474.336-.626zM14.544 12.75l5.292 5.292c.31.31.5.736.5 1.208 0 .472-.19.898-.5 1.208-.41.41-1.002.585-1.564.49l-.143-.03-8.878-5.075L14.544 12.75zm0-1.5L9.25 6.175l8.878-5.076c.563-.094 1.154.08 1.565.49.31.31.5.737.5 1.208 0 .472-.19.898-.5 1.208l-5.15 5.145zM2.87 2.518c.038.03.08.058.125.083l6.236 3.564-5.63 5.63L2.87 2.518zm0 18.964l.732-9.277 5.63 5.63-6.236 3.564c-.046.025-.088.053-.126.083z" fill="currentColor"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] uppercase tracking-wider font-bold text-gray-400">GET IT ON</div>
                      <div className="text-lg font-bold leading-none">Google Play</div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="relative hidden md:block h-[500px]">
                <div className="absolute bottom-0 right-10 w-[300px] h-[400px] bg-white rounded-t-[3rem] border-[12px] border-gray-900 shadow-2xl transform rotate-12 translate-y-10 flex flex-col overflow-hidden">
                   {/* Phone mockup inside */}
                   <div className="bg-blue-600 w-full h-16 flex items-center justify-center text-white font-bold tracking-wider">MediSaathi</div>
                   <div className="p-5 space-y-4 bg-gray-50 flex-grow">
                     <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center space-x-4 border border-gray-100">
                       <div className="w-12 h-12 bg-blue-100 rounded-full flex-shrink-0"></div>
                       <div className="space-y-2 w-full">
                         <div className="w-24 h-2.5 bg-gray-200 rounded-full"></div>
                         <div className="w-16 h-2 bg-gray-100 rounded-full"></div>
                       </div>
                     </div>
                     <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center space-x-4 border border-gray-100">
                       <div className="w-12 h-12 bg-purple-100 rounded-full flex-shrink-0"></div>
                       <div className="space-y-2 w-full">
                         <div className="w-20 h-2.5 bg-gray-200 rounded-full"></div>
                         <div className="w-12 h-2 bg-gray-100 rounded-full"></div>
                       </div>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
