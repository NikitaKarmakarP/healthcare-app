import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Navigation, Star, Phone, ShieldPlus, Bed, Clock, Filter, ChevronDown, Activity, Map, Droplets, Stethoscope, Scissors, Wind, ShieldAlert, HeartPulse } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const facilitiesList = [
  { name: 'ICU', icon: Activity, color: 'text-red-500', bg: 'bg-red-50' },
  { name: 'Oxygen', icon: Wind, color: 'text-blue-500', bg: 'bg-blue-50' },
  { name: 'MRI', icon: ShieldPlus, color: 'text-purple-500', bg: 'bg-purple-50' },
  { name: 'CT Scan', icon: ShieldPlus, color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { name: 'Ambulance', icon: Phone, color: 'text-green-500', bg: 'bg-green-50' },
  { name: 'Blood Bank', icon: Droplets, color: 'text-rose-500', bg: 'bg-rose-50' },
  { name: 'Pharmacy', icon: HeartPulse, color: 'text-teal-500', bg: 'bg-teal-50' },
  { name: 'Emergency', icon: ShieldAlert, color: 'text-orange-500', bg: 'bg-orange-50' },
  { name: 'OPD', icon: Stethoscope, color: 'text-cyan-500', bg: 'bg-cyan-50' },
  { name: 'Surgery', icon: Scissors, color: 'text-slate-500', bg: 'bg-slate-50' },
];

const mockHospitals = [
  {
    id: 1,
    name: "Apollo Multispeciality Hospitals",
    type: "Multispecialty Hospital",
    city: "Kolkata",
    state: "West Bengal",
    rating: 4.8,
    reviews: 3450,
    specialties: ["Cardiology", "Neurology", "Orthopedics"],
    emergency: true,
    icuBedsAvailable: 15,
    totalBeds: 700,
    ambulance: "1066",
    address: "Canal Circular Road, Salt Lake, Kolkata",
    facilities: ['ICU', 'Oxygen', 'MRI', 'CT Scan', 'Blood Bank', 'Surgery', 'OPD', 'Ambulance', 'Emergency', 'Pharmacy'],
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Narayana Superspeciality Hospital",
    type: "Super Specialty Hospital",
    city: "Howrah",
    state: "West Bengal",
    rating: 4.7,
    reviews: 2190,
    specialties: ["Oncology", "Cardiac Surgery", "Urology"],
    emergency: true,
    icuBedsAvailable: 8,
    totalBeds: 450,
    ambulance: "1800-309-0309",
    address: "Andul Road, Howrah",
    facilities: ['ICU', 'Oxygen', 'MRI', 'CT Scan', 'Surgery', 'OPD', 'Emergency', 'Pharmacy'],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Mission Hospital",
    type: "Super Specialty Hospital",
    city: "Durgapur",
    state: "West Bengal",
    rating: 4.6,
    reviews: 1820,
    specialties: ["Trauma Care", "Nephrology", "General Medicine"],
    emergency: true,
    icuBedsAvailable: 4,
    totalBeds: 350,
    ambulance: "102",
    address: "Sector 2C, Bidhannagar, Durgapur",
    facilities: ['ICU', 'Oxygen', 'Blood Bank', 'Surgery', 'OPD', 'Emergency'],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Neotia Getwel Healthcare",
    type: "Multispecialty Hospital",
    city: "Siliguri",
    state: "West Bengal",
    rating: 4.5,
    reviews: 1200,
    specialties: ["Pediatrics", "Gynecology", "Gastroenterology"],
    emergency: true,
    icuBedsAvailable: 0,
    totalBeds: 250,
    ambulance: "108",
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
    // If they select West Bengal, clear query to show all WB data. Otherwise set it so the list empties out to simulate "Coming Soon"
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
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search */}
        <div className="bg-gradient-to-r from-blue-900 to-primary-700 rounded-3xl p-8 md:p-12 text-white mb-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="relative z-10 max-w-3xl">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-4xl md:text-5xl font-black">Regional Coverage</h1>
              
              <div className="relative group">
                <button className="bg-white/20 hover:bg-white/30 border border-white/30 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-bold flex items-center transition-all">
                  <MapPin className="w-4 h-4 mr-2" />
                  {activeRegion} (Phase 1) <ChevronDown className="w-4 h-4 ml-2" />
                </button>
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden">
                  <div className="p-2 border-b border-gray-100">
                    <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1 px-2">Phase 1 (Live)</p>
                    <button 
                      onClick={() => handleRegionSelect('West Bengal')}
                      className="w-full text-left px-3 py-2 text-sm text-gray-800 font-bold bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg"
                    >
                      West Bengal (Kolkata, Howrah, Durgapur...)
                    </button>
                  </div>
                  <div className="p-2 border-b border-gray-100">
                    <p className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-1 px-2">Phase 2 (Coming Soon)</p>
                    <div className="flex flex-wrap gap-1 px-2">
                      {['Odisha', 'Bihar', 'Assam', 'Jharkhand'].map(state => (
                        <button key={state} onClick={() => handleRegionSelect(state)} className="text-xs bg-amber-50 hover:bg-amber-100 text-amber-700 px-2 py-1 rounded transition-colors">{state}</button>
                      ))}
                    </div>
                  </div>
                  <div className="p-2">
                    <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1 px-2">Phase 3 (Pan-India)</p>
                    <div className="flex flex-wrap gap-1 px-2">
                      {['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad'].map(city => (
                        <button key={city} onClick={() => handleRegionSelect(city)} className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-2 py-1 rounded transition-colors">{city}</button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-blue-100 text-lg mb-8">Currently serving verified hospitals, clinics, and diagnostic centers across our Phase 1 rollout zone. Check live ICU bed availability and book instant appointments.</p>
            
            <div className="flex flex-col md:flex-row gap-4 bg-white p-2 rounded-2xl md:rounded-full shadow-lg">
              <div className="flex-1 flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-gray-200">
                <MapPin className="text-gray-400 w-5 h-5 mr-3 flex-shrink-0" />
                <input 
                  type="text" 
                  placeholder="City, State, or Zip" 
                  className="w-full text-gray-800 focus:outline-none placeholder-gray-400"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                />
                <button className="text-primary-600 hover:bg-primary-50 p-2 rounded-full transition-colors flex items-center text-sm font-bold ml-2">
                  <Navigation className="w-4 h-4 mr-1" /> Near Me
                </button>
              </div>
              <div className="flex-[1.5] flex items-center px-4 py-2">
                <Search className="text-gray-400 w-5 h-5 mr-3 flex-shrink-0" />
                <input 
                  type="text" 
                  placeholder="Hospital name, Specialization, or Doctor..." 
                  className="w-full text-gray-800 focus:outline-none placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl md:rounded-full font-bold transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Quick Browse Facilities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <ShieldPlus className="w-6 h-6 mr-2 text-primary-600" /> Browse by Facility
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {facilitiesList.map((facility, idx) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={idx} 
                onClick={() => handleFacilityClick(facility.name)}
                className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-200 transition-all cursor-pointer group"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 ${facility.bg} group-hover:scale-110 transition-transform`}>
                  <facility.icon className={`w-7 h-7 ${facility.color}`} />
                </div>
                <span className="font-bold text-gray-700 text-sm">{facility.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900 flex items-center"><Filter className="w-5 h-5 mr-2 text-primary-600" /> Filters</h3>
                <button className="text-xs text-primary-600 font-bold hover:underline">Clear All</button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-sm text-gray-800 mb-3">Facility Type</h4>
                  <div className="space-y-2">
                    {['Hospitals', 'Clinics', 'Diagnostic Centers', 'Pharmacies'].map((type) => (
                      <label key={type} className="flex items-center cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-600 group-hover:text-primary-600">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-semibold text-sm text-gray-800 mb-3">Critical Care</h4>
                  <div className="space-y-2">
                    <label className="flex items-center cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 text-red-600 rounded border-gray-300 focus:ring-red-500" />
                      <span className="ml-2 text-sm text-gray-600 font-medium group-hover:text-red-600">Emergency (24/7)</span>
                    </label>
                    <label className="flex items-center cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600 font-medium group-hover:text-blue-600">ICU Beds Available</span>
                    </label>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-semibold text-sm text-gray-800 mb-3">Specializations</h4>
                  <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                    {displayedSpecializations.map((spec) => (
                      <label key={spec} className="flex items-center cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-600 group-hover:text-primary-600">{spec}</span>
                      </label>
                    ))}
                  </div>
                  <button 
                    onClick={() => setShowAllSpecs(!showAllSpecs)}
                    className="text-xs text-primary-600 font-bold mt-3 flex items-center hover:underline"
                  >
                    {showAllSpecs ? '- View Less' : '+ View All Specializations'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results List */}
          <div className="lg:w-3/4 space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-gray-800">{filteredHospitals.length} Healthcare Facilities Found</h2>
              <div className="flex items-center text-sm text-gray-500">
                <span>Sort by:</span>
                <button className="ml-2 font-bold text-gray-800 flex items-center hover:text-primary-600">
                  Recommended <ChevronDown className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            {filteredHospitals.map((hospital) => (
              <motion.div 
                whileHover={{ y: -2 }}
                key={hospital.id} 
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/3 relative h-48 md:h-auto">
                    <img src={hospital.image} alt={hospital.name} className="w-full h-full object-cover" />
                    {hospital.emergency && (
                      <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md flex items-center">
                        <Activity className="w-3 h-3 mr-1" /> 24/7 Emergency
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 md:w-2/3 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{hospital.name}</h3>
                          <p className="text-sm text-primary-600 font-medium">{hospital.type}</p>
                        </div>
                        <div className="flex items-center bg-green-50 px-2 py-1 rounded-md border border-green-100">
                          <Star className="w-4 h-4 text-green-600 fill-current" />
                          <span className="font-bold text-green-700 ml-1 text-sm">{hospital.rating}</span>
                          <span className="text-xs text-gray-500 ml-1">({hospital.reviews})</span>
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-500 mb-4 flex items-start">
                        <MapPin className="w-4 h-4 mr-1 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span>{hospital.address}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {hospital.specialties.map(spec => (
                          <span key={spec} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md font-medium">
                            {spec}
                          </span>
                        ))}
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md font-medium">+12 more</span>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 pt-4 flex flex-wrap items-center justify-between gap-4">
                      
                      {/* Live Beds Info */}
                      <div className="flex items-center space-x-4">
                        {hospital.icuBedsAvailable > 0 ? (
                          <div className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                            <span className="font-bold text-green-600">{hospital.icuBedsAvailable} ICU Beds</span>
                            <span className="text-gray-400 ml-1">Available</span>
                          </div>
                        ) : (
                          hospital.type.includes("Clinic") ? (
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="w-4 h-4 mr-1" /> General OPD
                            </div>
                          ) : (
                            <div className="flex items-center text-sm">
                              <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                              <span className="font-bold text-red-600">ICU Full</span>
                            </div>
                          )
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                        <a 
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospital.name + ' ' + hospital.city)}`} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex-1 sm:flex-none flex justify-center items-center px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-xl text-sm font-bold transition-colors"
                        >
                          <Map className="w-4 h-4 mr-1.5 text-blue-500" /> Map
                        </a>
                        {hospital.ambulance && (
                          <a href={`tel:${hospital.ambulance}`} className="flex-1 sm:flex-none flex justify-center items-center px-4 py-2 bg-red-50 text-red-700 hover:bg-red-100 border border-red-100 rounded-xl text-sm font-bold transition-colors">
                            <Phone className="w-4 h-4 mr-1.5" /> SOS
                          </a>
                        )}
                        <a 
                          href="/doctors"
                          className="flex-1 sm:flex-none flex justify-center items-center px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-xl text-sm font-bold shadow-md transition-colors"
                        >
                          Book Appointment
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospitals;
