import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Pill, UploadCloud, Search, Truck, Clock, ShieldCheck, Heart, ArrowRight, Percent, Package, Star, ShoppingCart, Plus, Minus, Tag, Activity } from 'lucide-react';

const Pharmacy = () => {
  const [cartItems, setCartItems] = useState<{id: number, quantity: number}[]>([]);

  const categories = [
    { name: 'Vitamins & Supplements', icon: Pill, color: 'text-orange-500', bg: 'bg-orange-50' },
    { name: 'Diabetes Care', icon: Activity, color: 'text-blue-500', bg: 'bg-blue-50' },
    { name: 'Heart Health', icon: Heart, color: 'text-red-500', bg: 'bg-red-50' },
    { name: 'Baby Care', icon: ShieldCheck, color: 'text-purple-500', bg: 'bg-purple-50' },
    { name: 'Personal Care', icon: Package, color: 'text-teal-500', bg: 'bg-teal-50' },
    { name: 'Ayurvedic', icon: Percent, color: 'text-green-500', bg: 'bg-green-50' },
  ];

  const popularMedicines = [
    { id: 1, name: "Paracetamol 500mg", type: "Tablet • 15 Strip", price: 25, oldPrice: 30, brand: "Crocin", rating: 4.8, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400" },
    { id: 2, name: "Vitamin D3 60K", type: "Softgel • 4 Capsules", price: 150, oldPrice: 180, brand: "Calcirol", rating: 4.9, image: "https://images.unsplash.com/photo-1550572017-edb964eb27bf?auto=format&fit=crop&q=80&w=400" },
    { id: 3, name: "Cough Relief Syrup", type: "Liquid • 150ml", price: 85, oldPrice: 95, brand: "Benadryl", rating: 4.5, image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400" },
    { id: 4, name: "Omega 3 Fish Oil", type: "Capsule • 60 Count", price: 450, oldPrice: 600, brand: "HealthKart", rating: 4.7, image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&q=80&w=400" },
  ];

  const handleAddToCart = (id: number) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing) {
        return prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { id, quantity: 1 }];
    });
  };

  const getQuantity = (id: number) => {
    return cartItems.find(item => item.id === id)?.quantity || 0;
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQ = item.quantity + delta;
        return newQ > 0 ? { ...item, quantity: newQ } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  return (
    <div className="pt-20 pb-24 bg-[#F8FAFC] min-h-screen font-sans">
      
      {/* Premium Hero Section */}
      <div className="relative bg-[#0B0F19] overflow-hidden rounded-b-[3rem] pb-24 shadow-2xl">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-teal-600/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            
            {/* Hero Content */}
            <div className="w-full md:w-1/2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-teal-900/50 border border-teal-500/30 text-teal-300 px-4 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-md"
              >
                <Tag className="w-4 h-4" />
                <span>Flat 15% OFF on Prescription Meds</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight"
              >
                Your Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-primary-400">Online Pharmacy</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-lg md:text-xl mb-8"
              >
                Order genuine medicines, health products, and devices. Get fast 2-hour delivery directly to your doorstep.
              </motion.p>

              {/* Main Search Bar */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white p-2 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row gap-2"
              >
                <div className="flex-1 flex items-center px-4 py-2">
                  <Search className="text-primary-500 w-6 h-6 mr-3 flex-shrink-0" />
                  <input 
                    type="text" 
                    placeholder="Search for medicines, vitamins, brands..." 
                    className="w-full bg-transparent text-gray-800 focus:outline-none placeholder-gray-400 font-medium text-lg"
                  />
                </div>
                <button className="bg-gradient-to-r from-teal-500 to-primary-600 hover:opacity-90 text-white px-8 py-4 rounded-xl md:rounded-full font-bold transition-all shadow-lg text-lg flex items-center justify-center">
                  Search
                </button>
              </motion.div>
            </div>

            {/* Hero Graphic / Upload Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="w-full md:w-5/12"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group cursor-pointer hover:bg-white/15 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full mix-blend-overlay filter blur-2xl group-hover:bg-teal-500/30 transition-all"></div>
                
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-primary-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform duration-300">
                    <UploadCloud className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-2xl font-black text-white mb-3">Order with Prescription</h2>
                  <p className="text-blue-100/70 mb-8 font-medium">Upload your doctor's prescription and we will arrange your medicines instantly.</p>
                  
                  <div className="w-full border-2 border-dashed border-white/30 rounded-2xl p-6 hover:border-teal-400 transition-colors bg-black/20">
                    <button className="bg-white text-gray-900 hover:bg-gray-50 px-8 py-3 rounded-xl font-bold shadow-md transition-colors w-full flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 mr-2" /> Upload File
                    </button>
                    <p className="text-xs text-gray-400 mt-4">JPG, PNG, PDF (Max 5MB)</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        
        {/* Trust Badges */}
        <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
          <div className="flex items-center space-x-4">
            <div className="bg-orange-50 p-4 rounded-2xl"><Truck className="w-8 h-8 text-orange-500"/></div>
            <div>
              <h3 className="font-black text-gray-900 text-lg">2-Hour Delivery</h3>
              <p className="text-sm text-gray-500 font-medium">Fast local delivery available</p>
            </div>
          </div>
          <div className="w-px h-12 bg-gray-100 hidden md:block"></div>
          <div className="flex items-center space-x-4">
            <div className="bg-green-50 p-4 rounded-2xl"><ShieldCheck className="w-8 h-8 text-green-500"/></div>
            <div>
              <h3 className="font-black text-gray-900 text-lg">100% Genuine</h3>
              <p className="text-sm text-gray-500 font-medium">Sourced from verified vendors</p>
            </div>
          </div>
          <div className="w-px h-12 bg-gray-100 hidden md:block"></div>
          <div className="flex items-center space-x-4">
            <div className="bg-purple-50 p-4 rounded-2xl"><Percent className="w-8 h-8 text-purple-500"/></div>
            <div>
              <h3 className="font-black text-gray-900 text-lg">Best Prices</h3>
              <p className="text-sm text-gray-500 font-medium">Up to 20% off with Prime</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 mb-16">
          
          {/* Main Content Area */}
          <div className="lg:w-2/3">
            
            {/* Categories */}
            <div className="mb-12">
              <div className="flex justify-between items-end mb-6">
                <h2 className="text-2xl font-black text-gray-900">Shop by Category</h2>
                <button className="text-primary-600 font-bold hover:underline text-sm">View All</button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {categories.map((cat, idx) => (
                  <motion.div 
                    whileHover={{ y: -4, scale: 1.02 }}
                    key={idx} 
                    className="bg-white rounded-2xl p-4 flex items-center space-x-4 shadow-sm border border-gray-100 hover:shadow-md cursor-pointer transition-all"
                  >
                    <div className={`w-12 h-12 ${cat.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <cat.icon className={`w-6 h-6 ${cat.color}`} />
                    </div>
                    <span className="font-bold text-gray-800 text-sm">{cat.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Trending Products */}
            <div>
              <div className="flex justify-between items-end mb-6">
                <h2 className="text-2xl font-black text-gray-900 flex items-center">
                  Trending Now <span className="ml-3 bg-rose-100 text-rose-600 px-2 py-0.5 rounded-md text-xs font-bold uppercase tracking-wide">Hot</span>
                </h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {popularMedicines.map((med) => {
                  const qty = getQuantity(med.id);
                  const discount = Math.round(((med.oldPrice - med.price) / med.oldPrice) * 100);
                  
                  return (
                    <motion.div 
                      whileHover={{ y: -4 }}
                      key={med.id} 
                      className="bg-white rounded-[2rem] p-4 shadow-sm border border-gray-100 hover:shadow-xl transition-all group relative"
                    >
                      {/* Discount Badge */}
                      <div className="absolute top-4 left-4 z-10 bg-rose-500 text-white text-xs font-black px-2 py-1 rounded-lg shadow-md">
                        {discount}% OFF
                      </div>
                      
                      <div className="bg-gray-50 rounded-[1.5rem] h-48 mb-4 relative overflow-hidden flex items-center justify-center p-4">
                        <img src={med.image} alt={med.name} className="object-contain h-full mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      
                      <div className="px-2">
                        <div className="flex justify-between items-start mb-1">
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{med.brand}</p>
                          <div className="flex items-center bg-amber-50 px-2 py-0.5 rounded-md">
                            <Star className="w-3 h-3 text-amber-500 fill-current mr-1" />
                            <span className="text-xs font-bold text-amber-700">{med.rating}</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">{med.name}</h3>
                        <p className="text-sm text-gray-500 font-medium mb-4">{med.type}</p>
                        
                        <div className="flex items-center justify-between mt-auto">
                          <div>
                            <span className="text-2xl font-black text-gray-900">₹{med.price}</span>
                            <span className="text-sm text-gray-400 line-through ml-2 font-medium">₹{med.oldPrice}</span>
                          </div>
                          
                          {qty === 0 ? (
                            <button 
                              onClick={() => handleAddToCart(med.id)}
                              className="bg-primary-50 text-primary-700 hover:bg-primary-600 hover:text-white px-4 py-2 rounded-xl font-bold transition-colors flex items-center"
                            >
                              Add <Plus className="w-4 h-4 ml-1" />
                            </button>
                          ) : (
                            <div className="flex items-center bg-primary-600 text-white rounded-xl shadow-md">
                              <button onClick={() => updateQuantity(med.id, -1)} className="p-2 hover:bg-primary-700 rounded-l-xl transition-colors">
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="font-bold px-3 min-w-[2rem] text-center">{qty}</span>
                              <button onClick={() => updateQuantity(med.id, 1)} className="p-2 hover:bg-primary-700 rounded-r-xl transition-colors">
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            
            {/* Live Order Tracking Widget */}
            <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full mix-blend-multiply filter blur-2xl -mt-10 -mr-10"></div>
              
              <div className="flex justify-between items-center mb-6 relative z-10">
                <h2 className="text-xl font-black text-gray-900 flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                  Live Tracking
                </h2>
                <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-md">#MED-84920</span>
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Estimated Arrival</p>
                    <p className="text-2xl font-black text-emerald-600">Today, 4:00 PM</p>
                  </div>
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                    <Truck className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>

                {/* Animated Vertical Timeline */}
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                  
                  {/* Step 1 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-white font-bold text-sm z-10">
                      ✓
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-gray-100 shadow-sm bg-white ml-4 md:ml-0 md:group-odd:mr-4 md:group-even:ml-4">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-gray-900 text-sm">Order Placed</h4>
                        <span className="text-xs text-gray-500">10:30 AM</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-white font-bold text-sm z-10">
                      ✓
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-gray-100 shadow-sm bg-white ml-4 md:ml-0 md:group-odd:mr-4 md:group-even:ml-4">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-gray-900 text-sm">Packed</h4>
                        <span className="text-xs text-gray-500">12:15 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 (Current) */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-emerald-200 bg-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 animate-pulse">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border-2 border-emerald-500 shadow-md bg-emerald-50/50 ml-4 md:ml-0 md:group-odd:mr-4 md:group-even:ml-4">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-emerald-700 text-sm">Out for Delivery</h4>
                      </div>
                      <p className="text-xs text-emerald-600 font-medium">Driver: Rajesh (OTP: 5821)</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Promo Banner */}
            <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-[2rem] p-8 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
              <Star className="w-10 h-10 text-amber-400 mb-4 fill-current" />
              <h3 className="text-2xl font-black mb-2">MediSaathi Prime</h3>
              <p className="text-indigo-200 mb-6 font-medium">Get flat 20% off on all medicine orders and free express delivery.</p>
              <button className="w-full bg-white text-indigo-900 hover:bg-gray-50 py-3 rounded-xl font-bold transition-colors shadow-lg">
                Join Now for ₹499/mo
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Pharmacy;
