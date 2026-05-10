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
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-blue-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                India's #1 AI Healthcare Platform
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Your Health, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-400">
                  Powered by AI
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                Connect with top doctors, get AI-driven health insights, order medicines, and access emergency services—all in one place.
              </p>

              {/* Search Bar */}
              <div className="glassmorphism p-3 rounded-2xl shadow-lg max-w-xl flex items-center border border-white">
                <div className="flex-grow flex items-center px-4">
                  <Search className="h-5 w-5 text-gray-400 mr-3" />
                  <input 
                    type="text" 
                    placeholder="Search doctors, specialties, symptoms..." 
                    className="w-full bg-transparent border-none focus:ring-0 text-gray-700 placeholder-gray-400 outline-none py-2"
                  />
                </div>
                <button 
                  onClick={() => navigate('/hospitals')}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-md"
                >
                  Search
                </button>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => navigate('/emergency')}
                  className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg shadow-red-200 transition-all transform hover:-translate-y-1"
                >
                  <Phone className="h-5 w-5 animate-pulse" />
                  <span>Emergency SOS</span>
                </button>
                <button 
                  onClick={() => navigate('/doctors')}
                  className="flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-6 py-3 rounded-xl font-medium shadow-sm transition-all transform hover:-translate-y-1"
                >
                  <Video className="h-5 w-5 text-primary-600" />
                  <span>Online Consult</span>
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-200 to-blue-100 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop" 
                alt="AI Healthcare" 
                className="relative z-10 rounded-3xl shadow-2xl border-4 border-white object-cover h-[500px] w-full"
              />
              
              {/* Floating Card 1 */}
              <div className="absolute top-10 -left-10 glassmorphism p-4 rounded-2xl shadow-xl z-20 flex items-center space-x-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-green-100 p-3 rounded-full">
                  <Bot className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">AI Analysis</p>
                  <p className="text-gray-900 font-bold">99% Accurate</p>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute bottom-10 -right-10 glassmorphism p-4 rounded-2xl shadow-xl z-20 flex items-center space-x-4 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="bg-primary-100 p-3 rounded-full">
                  <Star className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Top Rated</p>
                  <p className="text-gray-900 font-bold">50k+ Doctors</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Healthcare Platform</h2>
            <p className="text-gray-600">Everything you need to manage your health, conveniently accessible from anywhere.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                onClick={() => navigate(feature.path)}
                className="p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all bg-white group cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.desc}</p>
                <div className="flex items-center text-primary-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant Banner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 to-primary-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-12 md:p-16 text-white space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-primary-200 text-sm font-medium border border-white/10">
                  <Bot className="w-4 h-4 mr-2" />
                  New Feature
                </div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Meet Your AI Health Assistant
                </h2>
                <p className="text-gray-300 text-lg">
                  Type your symptoms like "Fever + headache" and our AI will suggest possible conditions, home remedies, and the right specialist to consult.
                </p>
                <button 
                  onClick={() => navigate('/ai-assistant')}
                  className="bg-white text-primary-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg flex items-center mt-4"
                >
                  <Bot className="w-5 h-5 mr-2" />
                  Try AI Symptom Checker
                </button>
                <p className="text-xs text-gray-400 mt-4">*Disclaimer: This is not a substitute for professional medical advice.</p>
              </div>
              <div className="hidden md:block h-full min-h-[400px] relative p-8">
                 {/* Mock UI of Chatbot */}
                 <div className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-white rounded-2xl p-6 shadow-2xl w-80 rotate-2">
                    <div className="flex items-center space-x-3 mb-4 border-b pb-4">
                      <div className="bg-primary-100 p-2 rounded-full">
                        <Bot className="text-primary-600 w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">MediSaathi</p>
                        <p className="text-xs text-green-500">Online</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-gray-100 rounded-2xl rounded-tr-sm p-3 text-sm text-gray-800 ml-auto w-4/5 shadow-sm">
                        I have a fever and slight headache since morning.
                      </div>
                      <div className="bg-primary-50 border border-primary-100 rounded-2xl rounded-tl-sm p-3 text-sm text-primary-900 w-11/12 shadow-sm">
                        Based on your symptoms, it could be a viral infection. Drink plenty of fluids. I recommend consulting a General Physician if it persists.
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Doctors Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Rated Specialists</h2>
              <p className="text-gray-600">Book appointments with India's best doctors.</p>
            </div>
            <button 
              onClick={() => navigate('/doctors')}
              className="hidden sm:flex items-center text-primary-600 font-medium hover:text-primary-700"
            >
              View All Doctors <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doc, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group cursor-pointer"
                onClick={() => navigate('/doctors')}
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center text-sm font-bold text-gray-800 shadow-sm">
                    <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
                    {doc.rating}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900">{doc.name}</h3>
                  <p className="text-primary-600 text-sm font-medium mb-4">{doc.spec}</p>
                  <button className="w-full border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white py-2 rounded-xl font-medium transition-colors">
                    Book Consult
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
