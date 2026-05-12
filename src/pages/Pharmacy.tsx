import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Pill, UploadCloud, Search, Truck, Clock, ShieldCheck, Heart, 
  ArrowRight, Percent, Package, Star, ShoppingCart, Plus, Minus, 
  Tag, Activity, ChevronRight, Zap, Droplets, Leaf, CheckCircle2, Crown
} from 'lucide-react';

const Pharmacy = () => {
  const [cartItems, setCartItems] = useState<{id: number, quantity: number}[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Vitamins & Supplements', icon: Pill, color: 'orange', bg: 'bg-orange-50' },
    { name: 'Diabetes Care', icon: Activity, color: 'blue', bg: 'bg-blue-50' },
    { name: 'Heart Health', icon: Heart, color: 'rose', bg: 'bg-rose-50' },
    { name: 'Baby Care', icon: Leaf, color: 'purple', bg: 'bg-purple-50' },
    { name: 'Personal Care', icon: Package, color: 'teal', bg: 'bg-teal-50' },
    { name: 'Ayurvedic', icon: Leaf, color: 'emerald', bg: 'bg-emerald-50' },
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
    <div className="pt-20 bg-[#F8FBFF] min-h-screen font-sans">
      
      {/* Premium Dark Hero Section */}
      <div className="relative bg-[#0B0F19] overflow-hidden rounded-b-[4rem] pb-24 shadow-2xl">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-teal-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
            
            {/* Hero Content */}
            <div className="w-full lg:w-3/5">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center space-x-3 bg-teal-500/10 border border-teal-500/30 text-teal-400 px-5 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest mb-8 backdrop-blur-md"
              >
                <Tag className="w-4 h-4" />
                <span>Save 15% on first prescription order</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight"
              >
                Bharat's Smart <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400">
                  Digital Pharmacy
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 text-lg md:text-xl mb-12 font-medium max-w-xl"
              >
                Order authentic medicines, supplements, and wellness essentials with 2-hour express delivery.
              </motion.p>

              {/* Advanced Search */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur-3xl p-2 rounded-[2.5rem] border border-white/20 shadow-2xl flex flex-col md:flex-row gap-2"
              >
                <div className="flex-1 flex items-center px-6 py-4">
                  <Search className="text-teal-400 w-6 h-6 mr-4" />
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search medicines, vitamins or brands..." 
                    className="w-full bg-transparent text-white focus:outline-none placeholder-gray-500 font-bold"
                  />
                </div>
                <button className="bg-teal-600 hover:bg-teal-500 text-white px-10 py-5 rounded-[2rem] font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-teal-600/20">
                  Search
                </button>
              </motion.div>
            </div>

            {/* Prescription Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full lg:w-2/5"
            >
              <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] p-10 shadow-2xl relative overflow-hidden group cursor-pointer hover:bg-white/10 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-[2.5rem] flex items-center justify-center mb-8 shadow-2xl shadow-teal-500/30">
                    <UploadCloud className="w-12 h-12 text-white" />
                  </div>
                  <h2 className="text-3xl font-black text-white mb-4 tracking-tight">Prescription Portal</h2>
                  <p className="text-gray-400 mb-10 font-medium leading-relaxed">Instantly upload and let our AI verify your medicine list.</p>
                  
                  <div className="w-full bg-black/40 rounded-[2.5rem] p-8 border-2 border-dashed border-white/10 hover:border-teal-500 transition-all group-hover:bg-black/60">
                    <button className="bg-white text-gray-900 px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl w-full flex items-center justify-center group/btn">
                      Upload File <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-[10px] font-black text-gray-500 mt-6 uppercase tracking-widest">Supports PDF, JPG & Mobile Scans</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-20">
        
        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Truck, title: "2hr Delivery", desc: "Across 25+ major cities", color: "orange" },
            { icon: ShieldCheck, title: "100% Genuine", desc: "Direct from manufacturers", color: "emerald" },
            { icon: Zap, title: "Price Lock", desc: "Best prices guaranteed", color: "blue" }
          ].map((badge, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100 flex items-center space-x-6 group">
               <div className={`w-16 h-16 bg-${badge.color}-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <badge.icon className={`w-8 h-8 text-${badge.color}-500`} />
               </div>
               <div>
                  <h3 className="font-black text-gray-900 text-lg tracking-tight">{badge.title}</h3>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest mt-1">{badge.desc}</p>
               </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Store */}
          <div className="lg:w-2/3">
            
            {/* Categories Hub */}
            <div className="mb-20">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">Browse Wellness</h2>
                <button className="text-teal-600 font-black text-[10px] uppercase tracking-widest hover:underline flex items-center">
                  View Catalog <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {categories.map((cat, idx) => (
                  <motion.div 
                    whileHover={{ y: -8 }}
                    key={idx} 
                    className="bg-white rounded-[2.5rem] p-6 flex flex-col items-center shadow-sm border border-gray-100 hover:shadow-2xl hover:border-teal-100 cursor-pointer transition-all text-center"
                  >
                    <div className={`w-16 h-16 ${cat.bg} rounded-2xl flex items-center justify-center mb-6`}>
                      <cat.icon className={`w-8 h-8 text-${cat.color}-600`} />
                    </div>
                    <span className="font-black text-gray-900 text-sm tracking-tight">{cat.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Product Shelf */}
            <div className="mb-20">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-black text-gray-900 tracking-tight flex items-center">
                  Trending Health <span className="ml-4 bg-rose-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">Top Picks</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {popularMedicines.map((med) => {
                  const qty = getQuantity(med.id);
                  const discount = Math.round(((med.oldPrice - med.price) / med.oldPrice) * 100);
                  
                  return (
                    <motion.div 
                      whileHover={{ y: -10 }}
                      key={med.id} 
                      className="bg-white rounded-[3rem] p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all group relative overflow-hidden"
                    >
                      <div className="absolute top-6 left-6 z-10 bg-rose-600 text-white text-[10px] font-black px-3 py-1.5 rounded-xl shadow-lg">
                        -{discount}%
                      </div>
                      
                      <div className="bg-gray-50 rounded-[2rem] h-56 mb-6 relative overflow-hidden flex items-center justify-center p-6 group-hover:bg-white transition-colors">
                        <img src={med.image} alt={med.name} className="object-contain h-full mix-blend-multiply group-hover:scale-110 transition-transform duration-700" />
                      </div>
                      
                      <div className="px-2">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{med.brand}</span>
                          <div className="flex items-center bg-amber-50 px-3 py-1 rounded-xl">
                            <Star className="w-3.5 h-3.5 text-amber-500 fill-current mr-1.5" />
                            <span className="text-xs font-black text-amber-700">{med.rating}</span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 tracking-tight mb-2 leading-tight">{med.name}</h3>
                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-8">{med.type}</p>
                        
                        <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                          <div>
                            <span className="text-3xl font-black text-gray-900 tracking-tighter">₹{med.price}</span>
                            <span className="text-sm text-gray-300 line-through ml-3 font-black">₹{med.oldPrice}</span>
                          </div>
                          
                          {qty === 0 ? (
                            <button 
                              onClick={() => handleAddToCart(med.id)}
                              className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-teal-600 transition-all shadow-xl"
                            >
                              Add To Cart
                            </button>
                          ) : (
                            <div className="flex items-center bg-teal-600 text-white rounded-2xl shadow-xl p-1">
                              <button onClick={() => updateQuantity(med.id, -1)} className="p-3 hover:bg-teal-700 rounded-xl transition-colors">
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="font-black px-4 text-sm min-w-[2.5rem] text-center">{qty}</span>
                              <button onClick={() => updateQuantity(med.id, 1)} className="p-3 hover:bg-teal-700 rounded-xl transition-colors">
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

          {/* Logistics Panel */}
          <div className="lg:w-1/3 space-y-10">
            
            {/* Live Tracking Hub */}
            <div className="bg-white rounded-[3.5rem] p-10 shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              
              <div className="flex justify-between items-center mb-10 relative z-10">
                <h2 className="text-2xl font-black text-gray-900 tracking-tight flex items-center">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  Live Delivery
                </h2>
                <span className="text-[10px] font-black text-gray-400 bg-gray-100 px-3 py-1.5 rounded-xl uppercase tracking-widest">MS-92840</span>
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-12">
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">ETA Arrival</p>
                    <p className="text-3xl font-black text-emerald-600 tracking-tighter">Today, 4:00 PM</p>
                  </div>
                  <div className="w-16 h-16 bg-emerald-50 rounded-[1.5rem] flex items-center justify-center shadow-lg shadow-emerald-500/5">
                    <Truck className="w-8 h-8 text-emerald-600" />
                  </div>
                </div>

                {/* Tactical Vertical Timeline */}
                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:h-full before:w-1 before:bg-gray-100">
                  {[
                    { title: "Order Verified", time: "10:30 AM", status: "complete" },
                    { title: "Packaging Complete", time: "12:15 PM", status: "complete" },
                    { title: "Out for Delivery", time: "On Way", status: "active", desc: "Rajesh (OTP: 5821)" }
                  ].map((step, i) => (
                    <div key={i} className="relative flex items-start group">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-2xl border-4 border-white shadow-xl shrink-0 z-10 transition-all ${step.status === 'complete' ? 'bg-emerald-500 text-white' : 'bg-emerald-50 text-emerald-500 animate-pulse'}`}>
                        {step.status === 'complete' ? <CheckCircle2 className="w-6 h-6" /> : <Droplets className="w-6 h-6" />}
                      </div>
                      <div className={`ml-6 p-6 rounded-[2rem] border transition-all flex-1 ${step.status === 'active' ? 'bg-emerald-500 border-emerald-500 text-white shadow-2xl shadow-emerald-600/20' : 'bg-white border-gray-100 text-gray-900'}`}>
                        <div className="flex justify-between items-center mb-2">
                           <h4 className="font-black text-xs uppercase tracking-widest">{step.title}</h4>
                           <span className={`text-[10px] font-black ${step.status === 'active' ? 'text-emerald-100' : 'text-gray-400'}`}>{step.time}</span>
                        </div>
                        {step.desc && <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mt-2">{step.desc}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Prime Banner */}
            <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 rounded-[3.5rem] p-12 shadow-2xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-24 -mt-24 group-hover:scale-125 transition-transform duration-700"></div>
              <Crown className="w-16 h-16 text-amber-400 mb-8 drop-shadow-2xl" />
              <h3 className="text-4xl font-black mb-4 tracking-tight">MediSaathi Prime</h3>
              <p className="text-indigo-100 text-lg mb-10 font-medium leading-relaxed">Save up to 20% on all orders. Priority 1-hour express delivery included.</p>
              <button className="w-full bg-white text-indigo-900 hover:bg-gray-100 py-6 rounded-[2rem] font-black text-[10px] uppercase tracking-widest transition-all shadow-2xl flex items-center justify-center">
                Join Revolution <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Pharmacy;
