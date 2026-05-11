import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Navigation, Star, Phone, ShieldPlus, Clock, Filter, ChevronDown, Activity, Map, Droplets, Stethoscope, Scissors, Wind, ShieldAlert, HeartPulse, Building2, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const facilitiesList = [
  { name: 'ICU Beds', icon: Activity, color: 'text-rose-500', bg: 'bg-rose-50', gradient: 'from-rose-500 to-red-500' },
  { name: 'Oxygen', icon: Wind, color: 'text-blue-500', bg: 'bg-blue-50', gradient: 'from-blue-400 to-blue-600' },
  { name: 'MRI & CT', icon: ShieldPlus, color: 'text-indigo-500', bg: 'bg-indigo-50', gradient: 'from-indigo-400 to-purple-500' },
  { name: 'Ambulance', icon: Phone, color: 'text-emerald-500', bg: 'bg-emerald-50', gradient: 'from-emerald-400 to-green-500' },
  { name: 'Blood Bank', icon: Droplets, color: 'text-red-500', bg: 'bg-red-50', gradient: 'from-red-400 to-rose-600' },
  { name: 'Pharmacy', icon: HeartPulse, color: 'text-teal-500', bg: 'bg-teal-50', gradient: 'from-teal-400 to-emerald-500' },
  { name: 'Emergency', icon: ShieldAlert, color: 'text-orange-500', bg: 'bg-orange-50', gradient: 'from-orange-400 to-amber-500' },
  { name: 'Surgery', icon: Scissors, color: 'text-slate-600', bg: 'bg-slate-100', gradient: 'from-slate-400 to-gray-600' },
];

const mockHospitals = [
  {
    id: 1,
    name: "Apollo Multispeciality Hospitals",
    type: "Premium Hospital",
    city: "Kolkata",
    state: "West Bengal",
    rating: 4.8,
    reviews: 3450,
    specialties: ["Cardiology", "Neurology", "Orthopedics", "Oncology"],
    emergency: true,
    icuBedsAvailable: 15,
    totalBeds: 700,
    ambulance: "1066",
    distance: "2.4 km",
    address: "Canal Circular Road, Salt Lake, Kolkata",
    facilities: ['ICU', 'Oxygen', 'MRI', 'CT Scan', 'Blood Bank', 'Surgery', 'OPD', 'Ambulance', 'Emergency', 'Pharmacy'],
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Narayana Superspeciality Hospital",
    type: "Super Specialty",
    city: "Howrah",
    state: "West Bengal",
    rating: 4.7,
    reviews: 2190,
    specialties: ["Oncology", "Cardiac Surgery", "Urology"],
    emergency: true,
    icuBedsAvailable: 8,
    totalBeds: 450,
    ambulance: "1800-309-0309",
    distance: "5.1 km",
    address: "Andul Road, Howrah",
    facilities: ['ICU', 'Oxygen', 'MRI', 'CT Scan', 'Surgery', 'OPD', 'Emergency', 'Pharmacy'],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Mission Hospital",
    type: "General Hospital",
    city: "Durgapur",
    state: "West Bengal",
    rating: 4.6,
    reviews: 1820,
    specialties: ["Trauma Care", "Nephrology", "General Medicine"],
    emergency: true,
    icuBedsAvailable: 4,
    totalBeds: 350,
    ambulance: "102",
    distance: "12.8 km",
    address: "Sector 2C, Bidhannagar, Durgapur",
    facilities: ['ICU', 'Oxygen', 'Blood Bank', 'Surgery', 'OPD', 'Emergency'],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Neotia Getwel Healthcare",
    type: "Multispecialty",
    city: "Siliguri",
    state: "West Bengal",
    rating: 4.5,
    reviews: 1200,
    specialties: ["Pediatrics", "Gynecology", "Gastroenterology"],
    emergency: true,
    icuBedsAvailable: 0,
    totalBeds: 250,
    ambulance: "108",
    distance: "45.2 km",
    address: "Uttorayon, Matigara, Siliguri",
    facilities: ['Oxygen', 'CT Scan', 'Blood Bank', 'OPD', 'Emergency', 'Pharmacy'],
    image: "https://images.unsplash.com/photo-1538108149393-cebb92afe674?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "AIIMS Kalyani",
    type: "Government Hospital",
    city: "Kalyani",
    state: "West Bengal",
    rating: 4.9,
    reviews: 5400,
    specialties: ["Research", "Advanced Surgery", "All Specialties"],
    emergency: true,
    icuBedsAvailable: 45,
    totalBeds: 1000,
    ambulance: "108",
    distance: "55.0 km",
    address: "NH-34 Connector, Basantapur, Kalyani",
    facilities: ['ICU', 'Oxygen', 'MRI', 'CT Scan', 'Blood Bank', 'Surgery', 'OPD', 'Ambulance', 'Emergency', 'Pharmacy'],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800"
  }
];

const Hospitals = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [activeRegion, setActiveRegion] = useState('West Bengal');

  const allSpecializations = ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Oncology', 'Gastroenterology', 'Urology', 'Cardiac Surgery', 'Nephrology', 'General Medicine', 'Gynecology'];
  const [showAllSpecs, setShowAllSpecs] = useState(false);
  const displayedSpecializations = showAllSpecs ? allSpecializations : allSpecializations.slice(0, 5);

  const handleRegionSelect = (region: string) => {
    setActiveRegion(region);
    setLocationQuery(region === 'West Bengal' ? '' : region);
  };

  const handleFacilityClick = (facilityName: string) => {
    if (facilityName === 'Pharmacy') {
      navigate('/pharmacy');
    } else if (facilityName === 'Ambulance' || facilityName === 'Emergency') {
      navigate('/emergency');
    } else {
      navigate(`/facility/${facilityName.toLowerCase().replace(/\s+/g, '-')}`);
    }
  };

  const filteredHospitals = mockHospitals.filter(hospital => {
    const matchesSearch = hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          hospital.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLoc = hospital.city.toLowerCase().includes(locationQuery.toLowerCase()) || hospital.state.toLowerCase().includes(locationQuery.toLowerCase());
    return matchesSearch && matchesLoc;
  });
  
  return (
    <div className="pt-20 pb-20 bg-[#F8FAFC] min-h-screen font-sans">
      
      {/* Hero Section */}
      <div className="relative bg-[#0B0F19] overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary-600/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-32">
          
          <div className="flex justify-between items-start mb-8">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-primary-900/50 border border-primary-500/30 text-primary-200 px-4 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-md"
              >
                <Building2 className="w-4 h-4" />
                <span>Verified Healthcare Partners</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight"
              >
                Find the Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">Hospitals & Clinics</span> Near You
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-lg md:text-xl max-w-xl"
              >
                Book instant appointments, check live ICU bed availability, and navigate to top-rated medical centers instantly.
              </motion.p>
            </div>

            {/* Region Selector */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden md:block relative group"
            >
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md px-5 py-3 rounded-2xl text-sm font-bold text-white flex items-center transition-all shadow-lg">
                <MapPin className="w-4 h-4 mr-2 text-primary-400" />
                {activeRegion} (Phase 1) <ChevronDown className="w-4 h-4 ml-3 opacity-70 group-hover:opacity-100 transition-opacity" />
              </button>
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden transform origin-top-right group-hover:scale-100 scale-95">
                <div className="p-3 border-b border-gray-100 bg-gray-50/50">
                  <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2 px-2 flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span> Phase 1 (Live)</p>
                  <button 
                    onClick={() => handleRegionSelect('West Bengal')}
                    className="w-full text-left px-3 py-2 text-sm text-gray-800 font-bold bg-white hover:bg-emerald-50 hover:text-emerald-700 transition-colors rounded-xl shadow-sm border border-gray-100"
                  >
                    West Bengal (Kolkata, Howrah...)
                  </button>
                </div>
                <div className="p-3 border-b border-gray-100">
                  <p className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2 px-2">Phase 2 (Coming Soon)</p>
                  <div className="flex flex-wrap gap-2 px-2">
                    {['Odisha', 'Bihar', 'Assam'].map(state => (
                      <button key={state} onClick={() => handleRegionSelect(state)} className="text-xs bg-gray-100 hover:bg-amber-50 text-gray-600 hover:text-amber-700 font-medium px-3 py-1.5 rounded-lg transition-colors border border-transparent hover:border-amber-200">{state}</button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Floating Search Bar */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-16 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-3 rounded-2xl md:rounded-[2rem] shadow-2xl shadow-blue-900/10 border border-gray-100 flex flex-col md:flex-row gap-3"
        >
          <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded-xl md:rounded-l-[1.5rem] md:rounded-r-none border border-gray-100 hover:border-primary-300 transition-colors focus-within:bg-white focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-100">
            <MapPin className="text-primary-500 w-5 h-5 mr-3 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="City, Locality, or Zip" 
              className="w-full bg-transparent text-gray-800 focus:outline-none placeholder-gray-400 font-medium"
              value={locationQuery}
              onChange={(e) => setLocationQuery(e.target.value)}
            />
            <button className="text-primary-600 hover:bg-primary-100 p-2 rounded-full transition-colors flex items-center text-sm font-bold ml-2">
              <Navigation className="w-4 h-4 mr-1" /> Near Me
            </button>
          </div>
          <div className="w-px bg-gray-200 hidden md:block my-2"></div>
          <div className="flex-[1.5] flex items-center px-4 py-3 bg-gray-50 rounded-xl md:rounded-none border border-gray-100 hover:border-primary-300 transition-colors focus-within:bg-white focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-100">
            <Search className="text-primary-500 w-5 h-5 mr-3 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Search hospitals, specialties, or doctors..." 
              className="w-full bg-transparent text-gray-800 focus:outline-none placeholder-gray-400 font-medium"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-500 hover:to-blue-500 text-white px-8 py-4 rounded-xl md:rounded-[1.5rem] font-bold transition-all shadow-lg hover:shadow-primary-500/30 flex items-center justify-center transform active:scale-95">
            Search
          </button>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quick Browse Facilities */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              Browse by Facility
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {facilitiesList.map((facility, idx) => (
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                key={idx} 
                onClick={() => handleFacilityClick(facility.name)}
                className="bg-white rounded-[1.5rem] p-4 flex flex-col items-center justify-center shadow-sm border border-gray-100 hover:shadow-xl hover:border-transparent transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${facility.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 ${facility.bg} group-hover:bg-transparent group-hover:scale-110 transition-all duration-300 relative z-10`}>
                  <facility.icon className={`w-7 h-7 ${facility.color}`} />
                </div>
                <span className="font-bold text-gray-700 text-sm text-center relative z-10 group-hover:text-gray-900">{facility.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 sticky top-28">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-900 flex items-center text-lg"><Filter className="w-5 h-5 mr-2 text-primary-600" /> Filters</h3>
                <button className="text-xs text-gray-500 font-bold hover:text-primary-600 hover:bg-primary-50 px-3 py-1.5 rounded-lg transition-colors">Clear</button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">Facility Type</h4>
                  <div className="space-y-3">
                    {['Hospitals', 'Clinics', 'Diagnostic Centers', 'Pharmacies'].map((type) => (
                      <label key={type} className="flex items-center cursor-pointer group">
                        <div className="relative flex items-center justify-center w-5 h-5 mr-3">
                          <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md checked:border-primary-500 checked:bg-primary-500 transition-all cursor-pointer" />
                          <CheckCircle2 className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                        </div>
                        <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <h4 className="font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">Critical Care</h4>
                  <div className="space-y-3">
                    <label className="flex items-center cursor-pointer group">
                      <div className="relative flex items-center justify-center w-5 h-5 mr-3">
                        <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md checked:border-rose-500 checked:bg-rose-500 transition-all cursor-pointer" />
                        <CheckCircle2 className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                      </div>
                      <span className="text-sm font-medium text-gray-600 group-hover:text-rose-600 transition-colors flex items-center"><ShieldAlert className="w-4 h-4 mr-1.5 opacity-50" /> Emergency (24/7)</span>
                    </label>
                    <label className="flex items-center cursor-pointer group">
                      <div className="relative flex items-center justify-center w-5 h-5 mr-3">
                        <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md checked:border-blue-500 checked:bg-blue-500 transition-all cursor-pointer" />
                        <CheckCircle2 className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                      </div>
                      <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors flex items-center"><Activity className="w-4 h-4 mr-1.5 opacity-50" /> ICU Beds Available</span>
                    </label>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <h4 className="font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">Specializations</h4>
                  <div className="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                    {displayedSpecializations.map((spec) => (
                      <label key={spec} className="flex items-center cursor-pointer group">
                        <div className="relative flex items-center justify-center w-5 h-5 mr-3">
                          <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md checked:border-primary-500 checked:bg-primary-500 transition-all cursor-pointer" />
                          <CheckCircle2 className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                        </div>
                        <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">{spec}</span>
                      </label>
                    ))}
                  </div>
                  <button 
                    onClick={() => setShowAllSpecs(!showAllSpecs)}
                    className="text-xs text-primary-600 font-bold mt-4 flex items-center hover:bg-primary-50 px-3 py-2 rounded-lg transition-colors w-full justify-center border border-primary-100"
                  >
                    {showAllSpecs ? 'View Less' : 'View All Specializations'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results List */}
          <div className="lg:w-3/4 space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-black text-xl text-gray-900">{filteredHospitals.length} Healthcare Facilities</h2>
              <div className="flex items-center bg-white border border-gray-200 rounded-xl px-3 py-1.5 shadow-sm">
                <span className="text-sm text-gray-500 font-medium">Sort:</span>
                <select className="ml-2 bg-transparent text-sm font-bold text-gray-900 focus:outline-none cursor-pointer">
                  <option>Recommended</option>
                  <option>Distance</option>
                  <option>Rating</option>
                </select>
              </div>
            </div>

            <AnimatePresence>
              {filteredHospitals.map((hospital, idx) => (
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
                        {hospital.emergency && (
                          <div className="bg-rose-500/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg flex items-center border border-rose-400/50">
                            <Activity className="w-3 h-3 mr-1.5" /> 24/7 Emergency
                          </div>
                        )}
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
                          {hospital.specialties.map(spec => (
                            <span key={spec} className="bg-gray-50 border border-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-default">
                              {spec}
                            </span>
                          ))}
                          <span className="bg-gray-50 border border-gray-100 text-gray-500 text-xs px-3 py-1.5 rounded-lg font-semibold">
                            +more
                          </span>
                        </div>
                      </div>

                      <div className="border-t border-gray-100 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        
                        {/* Live Beds Info */}
                        <div className="flex items-center bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-100">
                          {hospital.icuBedsAvailable > 0 ? (
                            <div className="flex items-center">
                              <div className="relative flex h-3 w-3 mr-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                              </div>
                              <div className="flex flex-col">
                                <span className="font-black text-emerald-600 text-sm leading-none mb-1">{hospital.icuBedsAvailable} ICU Beds</span>
                                <span className="text-xs text-gray-500 font-medium leading-none">Available Now</span>
                              </div>
                            </div>
                          ) : (
                            hospital.type.includes("Clinic") ? (
                              <div className="flex items-center">
                                <Clock className="w-5 h-5 mr-2 text-blue-500" />
                                <div className="flex flex-col">
                                  <span className="font-bold text-gray-800 text-sm leading-none mb-1">General OPD</span>
                                  <span className="text-xs text-gray-500 font-medium leading-none">Walk-in</span>
                                </div>
                              </div>
                            ) : (
                              <div className="flex items-center">
                                <div className="w-3 h-3 bg-rose-500 rounded-full mr-3 shadow-[0_0_8px_rgba(244,63,94,0.5)]"></div>
                                <div className="flex flex-col">
                                  <span className="font-black text-rose-600 text-sm leading-none mb-1">ICU Full</span>
                                  <span className="text-xs text-gray-500 font-medium leading-none">Check Alternatives</span>
                                </div>
                              </div>
                            )
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 w-full sm:w-auto">
                          {hospital.ambulance && (
                            <a href={`tel:${hospital.ambulance}`} className="flex-1 sm:flex-none flex justify-center items-center px-4 py-3 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl font-bold transition-colors border border-rose-100 group">
                              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            </a>
                          )}
                          <a 
                            href="/appointment"
                            className="flex-1 sm:flex-none flex justify-center items-center px-8 py-3 bg-gray-900 hover:bg-black text-white rounded-xl text-sm font-bold shadow-lg shadow-gray-900/20 transition-all hover:scale-[1.02] active:scale-95"
                          >
                            Book Visit
                          </a>
                        </div>
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

export default Hospitals;
