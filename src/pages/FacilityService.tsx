import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, Wind, ShieldPlus, Droplets, Stethoscope, Scissors, ArrowLeft, MapPin, Star, Phone, Map } from 'lucide-react';

const mockHospitals = [
  {
    id: 1,
    name: "Apollo Multispeciality Hospitals",
    type: "Multispecialty Hospital",
    city: "Kolkata",
    rating: 4.8,
    reviews: 3450,
    emergency: true,
    address: "Canal Circular Road, Salt Lake, Kolkata",
    facilities: ['icu', 'oxygen', 'mri', 'ct-scan', 'blood-bank', 'surgery', 'opd'],
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Narayana Superspeciality Hospital",
    type: "Super Specialty Hospital",
    city: "Howrah",
    rating: 4.7,
    reviews: 2190,
    emergency: true,
    address: "Andul Road, Howrah",
    facilities: ['icu', 'oxygen', 'mri', 'ct-scan', 'surgery', 'opd'],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "AIIMS Kalyani",
    type: "Government Hospital",
    city: "Kalyani",
    rating: 4.9,
    reviews: 5400,
    emergency: true,
    address: "NH-34 Connector, Basantapur, Kalyani",
    facilities: ['icu', 'oxygen', 'mri', 'ct-scan', 'blood-bank', 'surgery', 'opd'],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800"
  }
];

const getIcon = (service: string) => {
  switch (service) {
    case 'icu': return <Activity className="w-12 h-12 text-red-500" />;
    case 'oxygen': return <Wind className="w-12 h-12 text-blue-500" />;
    case 'mri': return <ShieldPlus className="w-12 h-12 text-purple-500" />;
    case 'ct-scan': return <ShieldPlus className="w-12 h-12 text-indigo-500" />;
    case 'blood-bank': return <Droplets className="w-12 h-12 text-rose-500" />;
    case 'opd': return <Stethoscope className="w-12 h-12 text-cyan-500" />;
    case 'surgery': return <Scissors className="w-12 h-12 text-slate-500" />;
    default: return <Activity className="w-12 h-12 text-primary-500" />;
  }
};

const FacilityService = () => {
  const { serviceName } = useParams<{ serviceName: string }>();
  const navigate = useNavigate();
  
  const formattedName = serviceName?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'Facility';
  
  // Filter hospitals that provide this service
  const availableHospitals = mockHospitals.filter(h => h.facilities.includes(serviceName || ''));

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/hospitals')}
          className="flex items-center text-gray-600 hover:text-primary-600 font-bold mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Search
        </button>

        {/* Dynamic Header */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-10 flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          
          <div className="bg-gray-50 w-24 h-24 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner relative z-10 border border-gray-100">
            {getIcon(serviceName || '')}
          </div>
          
          <div className="relative z-10 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">{formattedName} Services</h1>
            <p className="text-gray-600 text-lg max-w-2xl">
              We have found {availableHospitals.length} top-rated healthcare facilities in your region currently offering specialized {formattedName} support.
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Facilities</h2>
          
          {availableHospitals.length > 0 ? availableHospitals.map((hospital) => (
            <motion.div 
              whileHover={{ y: -2 }}
              key={hospital.id} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 relative h-48 md:h-auto">
                  <img src={hospital.image} alt={hospital.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="p-6 md:w-3/4 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{hospital.name}</h3>
                        <p className="text-sm text-primary-600 font-medium">{hospital.type}</p>
                      </div>
                      <div className="flex items-center bg-green-50 px-2 py-1 rounded-md border border-green-100">
                        <Star className="w-4 h-4 text-green-600 fill-current" />
                        <span className="font-bold text-green-700 ml-1 text-sm">{hospital.rating}</span>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-500 mb-4 flex items-start">
                      <MapPin className="w-4 h-4 mr-1 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>{hospital.address}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4 flex flex-wrap items-center justify-between gap-4 mt-4">
                    <div className="flex items-center space-x-2">
                       <span className="bg-primary-50 text-primary-700 font-bold px-3 py-1 rounded-full text-xs flex items-center">
                         <Activity className="w-3 h-3 mr-1"/> {formattedName} Available
                       </span>
                    </div>

                    <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                      <button className="flex-1 sm:flex-none flex justify-center items-center px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-xl text-sm font-bold transition-colors">
                        <Phone className="w-4 h-4 mr-1.5" /> Contact
                      </button>
                      <button 
                        onClick={() => navigate('/doctors')}
                        className="flex-1 sm:flex-none flex justify-center items-center px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-xl text-sm font-bold shadow-md transition-colors"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
              <Activity className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No facilities found</h3>
              <p className="text-gray-500">We couldn't find any hospitals offering {formattedName} in the current phase.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default FacilityService;
