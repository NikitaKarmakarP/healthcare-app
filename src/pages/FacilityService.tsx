import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Wind, ShieldPlus, Droplets, Stethoscope, Scissors, ArrowLeft, MapPin, Star, Phone, Map, Navigation, Clock, ShieldAlert, HeartPulse, ShieldCheck, CheckCircle2 } from 'lucide-react';

const mockHospitals = [
  {
    id: 1,
    name: "Apollo Multispeciality Hospitals",
    type: "Premium Hospital",
    city: "Kolkata",
    rating: 4.8,
    reviews: 3450,
    emergency: true,
    icuBedsAvailable: 15,
    distance: "2.4 km",
    address: "Canal Circular Road, Salt Lake, Kolkata",
    facilities: ['icu-beds', 'oxygen', 'mri-&-ct', 'blood-bank', 'surgery', 'opd'],
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Narayana Superspeciality Hospital",
    type: "Super Specialty",
    city: "Howrah",
    rating: 4.7,
    reviews: 2190,
    emergency: true,
    icuBedsAvailable: 8,
    distance: "5.1 km",
    address: "Andul Road, Howrah",
    facilities: ['icu-beds', 'oxygen', 'mri-&-ct', 'surgery', 'opd'],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Mission Hospital",
    type: "General Hospital",
    city: "Durgapur",
    rating: 4.6,
    reviews: 1820,
    emergency: true,
    icuBedsAvailable: 4,
    distance: "12.8 km",
    address: "Sector 2C, Bidhannagar, Durgapur",
    facilities: ['icu-beds', 'oxygen', 'blood-bank', 'surgery'],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "AIIMS Kalyani",
    type: "Government Hospital",
    city: "Kalyani",
    rating: 4.9,
    reviews: 5400,
    emergency: true,
    icuBedsAvailable: 45,
    distance: "55.0 km",
    address: "NH-34 Connector, Basantapur, Kalyani",
    facilities: ['icu-beds', 'oxygen', 'mri-&-ct', 'blood-bank', 'surgery', 'opd'],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800"
  }
];

const getServiceMeta = (service: string) => {
  switch (service) {
    case 'icu-beds': return { 
      icon: Activity, color: 'text-rose-500', bg: 'bg-rose-50', gradient: 'from-rose-500 to-red-600', 
      title: 'ICU Bed Availability', desc: 'Real-time tracking of Intensive Care Unit beds for critical patients.',
      stats: [{ label: 'Total Available', val: '72' }, { label: 'Wait Time', val: '< 10 min' }, { label: 'Verified Partners', val: '24' }]
    };
    case 'oxygen': return { 
      icon: Wind, color: 'text-blue-500', bg: 'bg-blue-50', gradient: 'from-blue-400 to-blue-600',
      title: 'Oxygen Support', desc: 'Find hospitals equipped with centralized oxygen and available cylinders.',
      stats: [{ label: 'High-Flow Beds', val: '145' }, { label: 'Oxygen Plants', val: '8' }, { label: 'Emergency', val: '24/7' }]
    };
    case 'mri-&-ct': return { 
      icon: ShieldPlus, color: 'text-purple-500', bg: 'bg-purple-50', gradient: 'from-purple-400 to-indigo-600',
      title: 'Advanced Diagnostics', desc: 'Book instant MRI, CT Scans, and advanced radiological imaging.',
      stats: [{ label: 'Active Machines', val: '18' }, { label: 'Instant Reports', val: 'Yes' }, { label: 'Lowest Price', val: '₹1500' }]
    };
    case 'blood-bank': return { 
      icon: Droplets, color: 'text-red-500', bg: 'bg-red-50', gradient: 'from-red-500 to-rose-600',
      title: 'Blood Banks', desc: 'Locate nearby blood banks with live inventory of all blood groups.',
      stats: [{ label: 'Units Available', val: '840+' }, { label: 'Rare Groups', val: 'In Stock' }, { label: 'Donation Centers', val: '12' }]
    };
    default: return { 
      icon: Activity, color: 'text-primary-500', bg: 'bg-primary-50', gradient: 'from-primary-500 to-blue-600',
      title: 'Medical Service', desc: 'Top-rated healthcare facilities for your specific needs.',
      stats: [{ label: 'Available', val: 'Yes' }, { label: 'Rating', val: '4.5+' }, { label: 'Verified', val: '100%' }]
    };
  }
};

const FacilityService = () => {
  const { serviceName } = useParams<{ serviceName: string }>();
  const navigate = useNavigate();
  
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  useEffect(() => {
    // Simulate real-time data fetching
    setIsRefreshing(true);
    const timer = setTimeout(() => setIsRefreshing(false), 800);
    return () => clearTimeout(timer);
  }, [serviceName]);
  
  const meta = getServiceMeta(serviceName || '');
  const Icon = meta.icon;
  
  const formattedName = serviceName?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'Facility';
  const availableHospitals = mockHospitals.filter(h => h.facilities.includes(serviceName || ''));

  return (
    <div className="pt-20 pb-20 bg-[#F8FAFC] min-h-screen font-sans">
      
      {/* Dynamic Hero Section */}
      <div className="relative bg-[#0B0F19] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className={`absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 bg-gradient-to-br ${meta.gradient}`}></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 pb-24">
          
          <button 
            onClick={() => navigate('/hospitals')}
            className="flex items-center text-gray-400 hover:text-white font-bold mb-8 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to All Facilities
          </button>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`w-32 h-32 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-2xl relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${meta.gradient} opacity-20`}></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${meta.gradient} backdrop-blur-xl border border-white/10`}></div>
              <Icon className="w-16 h-16 text-white relative z-10" />
            </motion.div>
            
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div> Live Tracking Active
                </span>
                <span className="bg-white/10 text-gray-300 border border-white/10 px-3 py-1 rounded-full text-xs font-bold flex items-center">
                  <ShieldCheck className="w-3 h-3 mr-1" /> Verified Data
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">{meta.title}</h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                {meta.desc} We found <span className="text-white font-bold">{availableHospitals.length} facilities</span> matching your needs.
              </p>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mt-12 max-w-3xl">
            {meta.stats.map((stat, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                key={i} 
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 text-center md:text-left"
              >
                <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-white text-xl md:text-3xl font-black">{stat.val}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        
        {/* Results Header */}
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 mb-8 flex justify-between items-center">
          <div className="flex items-center">
            <h2 className="font-bold text-gray-900 ml-2">Real-Time Availability</h2>
            {isRefreshing && <span className="ml-4 text-xs font-bold text-primary-500 flex items-center"><Activity className="w-3 h-3 mr-1 animate-spin" /> Updating...</span>}
          </div>
          <button 
            onClick={() => setIsRefreshing(true)}
            className="text-sm font-bold text-gray-600 hover:text-primary-600 bg-gray-50 hover:bg-primary-50 px-4 py-2 rounded-xl transition-colors"
          >
            Refresh Data
          </button>
        </div>

        {/* Results List */}
        <div className="space-y-6">
          <AnimatePresence>
            {!isRefreshing && availableHospitals.map((hospital, idx) => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                key={hospital.id} 
                className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-primary-100 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image Section */}
                  <div className="md:w-1/3 relative h-56 md:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                    <img src={hospital.image} alt={hospital.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    
                    <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                      <div className="bg-white/90 backdrop-blur-md text-gray-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg flex items-center w-max">
                        <Navigation className="w-3 h-3 mr-1.5 text-blue-600" /> {hospital.distance}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 md:p-8 md:w-2/3 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-2 py-1 rounded-md">{hospital.type}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors leading-tight mb-1">{hospital.name}</h3>
                          <div className="text-sm text-gray-500 flex items-center mt-2">
                            <MapPin className="w-4 h-4 mr-1.5 text-gray-400 flex-shrink-0" />
                            <span>{hospital.address}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="flex items-center bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-100 shadow-sm">
                            <Star className="w-4 h-4 text-amber-500 fill-current" />
                            <span className="font-bold text-amber-600 ml-1.5">{hospital.rating}</span>
                          </div>
                          <span className="text-xs text-gray-500 mt-1 font-medium underline cursor-pointer hover:text-gray-700">{hospital.reviews} reviews</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-5 mb-5">
                        <span className={`bg-gray-50 border border-gray-200 text-gray-800 text-xs px-3 py-1.5 rounded-lg font-bold flex items-center`}>
                           <CheckCircle2 className={`w-3.5 h-3.5 mr-1 ${meta.color}`} /> {formattedName} Verified
                        </span>
                        {hospital.facilities.filter(f => f !== serviceName).slice(0, 3).map(facility => (
                          <span key={facility} className="bg-gray-50 border border-gray-100 text-gray-500 text-xs px-3 py-1.5 rounded-lg font-medium capitalize">
                            {facility.replace(/-/g, ' ')}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-gray-100 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      
                      {/* Dynamic Metric Info */}
                      <div className="flex items-center bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-100 w-full sm:w-auto">
                        {serviceName === 'icu-beds' ? (
                          <div className="flex items-center w-full">
                            <div className="relative flex h-3 w-3 mr-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </div>
                            <div className="flex flex-col flex-1">
                              <span className="font-black text-emerald-600 text-sm leading-none mb-1">{hospital.icuBedsAvailable} ICU Beds</span>
                              <span className="text-xs text-gray-500 font-medium leading-none">Available Right Now</span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center w-full">
                            <Icon className={`w-5 h-5 mr-3 ${meta.color}`} />
                            <div className="flex flex-col flex-1">
                              <span className={`font-black text-gray-800 text-sm leading-none mb-1 capitalize`}>{formattedName} Active</span>
                              <span className="text-xs text-gray-500 font-medium leading-none">Ready for intake</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 w-full sm:w-auto">
                        <a href="tel:108" className="flex-1 sm:flex-none flex justify-center items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold transition-colors border border-gray-200 group">
                          <Phone className="w-4 h-4" />
                        </a>
                        <button 
                          onClick={() => navigate('/appointment')}
                          className={`flex-1 sm:flex-none flex justify-center items-center px-8 py-3 bg-gradient-to-r ${meta.gradient} hover:opacity-90 text-white rounded-xl text-sm font-bold shadow-lg transition-all hover:scale-[1.02] active:scale-95`}
                        >
                          {serviceName === 'icu-beds' ? 'Book Bed Now' : 'Book Facility'}
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {availableHospitals.length === 0 && !isRefreshing && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[2rem] p-16 text-center border border-gray-100 shadow-sm"
            >
              <div className={`w-24 h-24 mx-auto mb-6 rounded-3xl ${meta.bg} flex items-center justify-center`}>
                <Icon className={`w-12 h-12 ${meta.color}`} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">No facilities currently available</h3>
              <p className="text-gray-500 max-w-md mx-auto">All verified partners offering {formattedName} are currently full or outside your primary zone. Please check back shortly or expand your search.</p>
              <button 
                onClick={() => navigate('/hospitals')}
                className="mt-8 bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-xl font-bold transition-colors"
              >
                View All Hospitals
              </button>
            </motion.div>
          )}
        </div>

      </div>
    </div>
  );
};

export default FacilityService;
