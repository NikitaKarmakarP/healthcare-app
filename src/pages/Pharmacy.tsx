import React from 'react';
import { motion } from 'framer-motion';
import { Pill, UploadCloud, Search, Truck, Clock, ShieldCheck } from 'lucide-react';

const Pharmacy = () => {
  const medicines = [
    { name: "Paracetamol 500mg", type: "Tablet", price: "₹25", brand: "Crocin" },
    { name: "Amoxicillin 250mg", type: "Capsule", price: "₹120", brand: "Mox" },
    { name: "Cough Syrup", type: "Syrup", price: "₹85", brand: "Benadryl" },
    { name: "Vitamin D3", type: "Softgel", price: "₹150", brand: "Calcirol" },
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Online Pharmacy</h1>
          <p className="text-gray-600 text-lg">Order genuine medicines from trusted local pharmacies. Delivered to your doorstep.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Upload Prescription */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center border-dashed border-2 hover:border-primary-400 transition-colors group cursor-pointer">
            <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <UploadCloud className="w-10 h-10 text-primary-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload Prescription</h2>
            <p className="text-gray-500 mb-6 max-w-sm">Have a doctor's prescription? Upload it here and we will arrange your medicines.</p>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-bold shadow-md transition-colors">
              Choose File
            </button>
            <p className="text-xs text-gray-400 mt-4">Supported formats: JPG, PNG, PDF</p>
          </div>

          {/* Search Medicine */}
          <div className="bg-gradient-to-br from-blue-900 to-primary-900 rounded-3xl p-8 shadow-xl text-white">
            <h2 className="text-2xl font-bold mb-2">Search Medicines</h2>
            <p className="text-blue-200 mb-8">Search our vast catalog of medicines and health products.</p>
            
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl flex items-center border border-white/20 mb-8">
              <Search className="w-6 h-6 text-white/70 ml-3" />
              <input 
                type="text" 
                placeholder="Type medicine name..." 
                className="w-full bg-transparent border-none text-white placeholder-white/50 px-4 py-3 outline-none focus:ring-0"
              />
              <button className="bg-white text-primary-900 px-6 py-2 rounded-xl font-bold shadow-md">
                Find
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-blue-300 mr-3" />
                <div>
                  <h4 className="font-bold">Monthly Refill Reminder</h4>
                  <p className="text-xs text-blue-200">Never run out of regular medicines</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-500 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-400"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Features Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center space-x-4">
            <div className="bg-orange-50 p-3 rounded-full"><Truck className="w-6 h-6 text-orange-600"/></div>
            <div><h3 className="font-bold text-gray-900">Fast Delivery</h3><p className="text-sm text-gray-500">Same day delivery available</p></div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center space-x-4">
            <div className="bg-green-50 p-3 rounded-full"><ShieldCheck className="w-6 h-6 text-green-600"/></div>
            <div><h3 className="font-bold text-gray-900">Genuine Medicines</h3><p className="text-sm text-gray-500">Sourced from verified pharmacies</p></div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center space-x-4">
            <div className="bg-purple-50 p-3 rounded-full"><Pill className="w-6 h-6 text-purple-600"/></div>
            <div><h3 className="font-bold text-gray-900">Wide Range</h3><p className="text-sm text-gray-500">Allopath, Homeopath & Ayurveda</p></div>
          </div>
        </div>

        {/* Track Delivery Section */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Truck className="w-6 h-6 text-primary-600 mr-2" /> Track Active Order
              </h2>
              <p className="text-gray-500">Order #MED-84920 • Placed today, 10:30 AM</p>
            </div>
            <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-lg font-bold text-sm">
              Arriving at 4:00 PM
            </span>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 w-2/3 h-1 bg-green-500 -translate-y-1/2 transition-all duration-1000"></div>
            
            <div className="relative flex justify-between">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center border-4 border-white shadow-sm z-10 text-white font-bold">✓</div>
                <p className="text-xs font-bold text-gray-900 mt-2">Order Placed</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center border-4 border-white shadow-sm z-10 text-white font-bold">✓</div>
                <p className="text-xs font-bold text-gray-900 mt-2">Packed</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-white border-4 border-green-500 rounded-full flex items-center justify-center shadow-sm z-10 animate-pulse">
                  <Truck className="w-4 h-4 text-green-500" />
                </div>
                <p className="text-xs font-bold text-primary-600 mt-2">Out for Delivery</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center shadow-sm z-10"></div>
                <p className="text-xs font-bold text-gray-400 mt-2">Delivered</p>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Medicines List */}
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Commonly Ordered</h3>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="py-4 px-6 font-semibold text-gray-600">Medicine</th>
                <th className="py-4 px-6 font-semibold text-gray-600">Brand</th>
                <th className="py-4 px-6 font-semibold text-gray-600">Price</th>
                <th className="py-4 px-6 font-semibold text-gray-600 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((med, idx) => (
                <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                        <Pill className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{med.name}</p>
                        <p className="text-xs text-gray-500">{med.type}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{med.brand}</td>
                  <td className="py-4 px-6 font-bold text-primary-600">{med.price}</td>
                  <td className="py-4 px-6 text-right">
                    <button className="bg-white border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-sm">
                      Add to Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Pharmacy;
