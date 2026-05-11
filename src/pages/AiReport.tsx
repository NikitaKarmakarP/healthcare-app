import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, FileText, Shield, ArrowRight, Zap, Activity, Brain, Sparkles, HeartPulse, FileImage, Droplets, CheckCircle2, AlertCircle, X, Check } from 'lucide-react';

const AiReport = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedTest, setSelectedTest] = useState<any>(null);

  // Simulated AI Scanning Effect
  const handleSimulateUpload = () => {
    setIsScanning(true);
    setScanProgress(0);
    setShowResult(false);
    if(selectedTest) setSelectedTest(null);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsScanning(false);
            setShowResult(true);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  const supportedTypes = [
    { 
      name: 'Complete Blood Count (CBC)', 
      icon: Droplets, color: 'text-red-500', bg: 'bg-red-50',
      desc: 'Comprehensive analysis of red/white blood cells and platelets.',
      metrics: ['Hemoglobin', 'WBC Count', 'Platelets', 'Hematocrit']
    },
    { 
      name: 'Lipid Profile', 
      icon: HeartPulse, color: 'text-pink-500', bg: 'bg-pink-50',
      desc: 'Detailed breakdown of cholesterol levels and heart disease risk factors.',
      metrics: ['Total Cholesterol', 'HDL (Good)', 'LDL (Bad)', 'Triglycerides']
    },
    { 
      name: 'Thyroid (TSH, T3, T4)', 
      icon: Activity, color: 'text-blue-500', bg: 'bg-blue-50',
      desc: 'Evaluation of thyroid gland function and metabolic rate.',
      metrics: ['TSH', 'Free T3', 'Free T4', 'Thyroid Antibodies']
    },
    { 
      name: 'Liver Function Test', 
      icon: Activity, color: 'text-emerald-500', bg: 'bg-emerald-50',
      desc: 'Detection of liver inflammation, damage, or disease.',
      metrics: ['SGPT (ALT)', 'SGOT (AST)', 'Bilirubin', 'Alkaline Phosphatase']
    },
    { 
      name: 'MRI / CT Scan Reports', 
      icon: Brain, color: 'text-purple-500', bg: 'bg-purple-50',
      desc: 'Natural language processing of complex radiological text findings.',
      metrics: ['Impression Summary', 'Lesion Detection', 'Structural Anomalies']
    },
    { 
      name: 'X-Ray Reports', 
      icon: FileImage, color: 'text-orange-500', bg: 'bg-orange-50',
      desc: 'Extraction of key skeletal, pulmonary, or dental findings.',
      metrics: ['Fracture Alerts', 'Lung Opacities', 'Joint Space Analysis']
    }
  ];

  return (
    <div className="pt-16 pb-24 bg-[#F8FAFC] min-h-screen font-sans relative">
      
      {/* Test Details Modal */}
      <AnimatePresence>
        {selectedTest && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTest(null)}
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[2rem] shadow-2xl w-full max-w-lg relative z-10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -mt-10 -mr-10"></div>
              
              <div className="p-8 relative z-10">
                <button 
                  onClick={() => setSelectedTest(null)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 p-2 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className={`w-16 h-16 rounded-2xl ${selectedTest.bg} flex items-center justify-center mb-6`}>
                  <selectedTest.icon className={`w-8 h-8 ${selectedTest.color}`} />
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-2">{selectedTest.name}</h3>
                <p className="text-gray-500 text-sm font-medium mb-8 leading-relaxed">
                  {selectedTest.desc}
                </p>
                
                <div className="bg-gray-50 rounded-2xl p-5 mb-8 border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center text-sm uppercase tracking-wider">
                    <Brain className="w-4 h-4 mr-2 text-blue-500" /> AI Extracts & Analyzes:
                  </h4>
                  <ul className="grid grid-cols-2 gap-3">
                    {selectedTest.metrics.map((metric: string, idx: number) => (
                      <li key={idx} className="flex items-center text-sm font-bold text-gray-700">
                        <Check className={`w-4 h-4 mr-2 ${selectedTest.color}`} />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={handleSimulateUpload}
                  className="w-full bg-gray-900 hover:bg-black text-white py-4 rounded-xl font-bold shadow-lg flex items-center justify-center transition-colors group"
                >
                  <Upload className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
                  Upload {selectedTest.name.split('(')[0]}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Premium Dark Hero Section */}
      <div className="relative bg-[#0B0F19] overflow-hidden rounded-b-[3rem] pb-24 pt-12 shadow-2xl">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          {/* Animated floating particles */}
          <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }} 
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-20 right-1/4 text-blue-400"
          ><Sparkles className="w-6 h-6" /></motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }} 
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute bottom-20 left-1/4 text-purple-400"
          ><Sparkles className="w-8 h-8" /></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mx-auto flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30"
          >
            <Brain className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Decode Your Health with <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              AI Report Analyzer
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Upload complex medical reports. Get simple, human-readable insights in seconds. Powered by advanced clinical AI models.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Main Upload / Interaction Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl border border-gray-100 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

            <div className="mb-6 flex justify-between items-center relative z-10">
              <h2 className="text-2xl font-black text-gray-900">Upload Report</h2>
              <div className="bg-green-50 text-green-600 px-3 py-1 rounded-lg font-bold text-xs flex items-center border border-green-100">
                <Shield className="w-3 h-3 mr-1" /> HIPAA Compliant
              </div>
            </div>

            {/* Dynamic Upload Box */}
            <div 
              onClick={!isScanning ? handleSimulateUpload : undefined}
              className={`relative border-2 border-dashed rounded-[2rem] p-12 text-center transition-all cursor-pointer z-10 overflow-hidden
                ${isScanning ? 'border-blue-400 bg-blue-50/50' : showResult ? 'border-green-400 bg-green-50/30' : 'border-blue-200 bg-blue-50/30 hover:bg-blue-50 hover:border-blue-400'}
              `}
            >
              <AnimatePresence mode="wait">
                {!isScanning && !showResult && (
                  <motion.div key="upload" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Upload className="w-10 h-10 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">Drag & Drop PDF or Image</h3>
                    <p className="text-gray-500 font-medium mb-6">Supported: .pdf, .jpg, .png up to 10MB</p>
                    <span className="bg-gray-900 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all">
                      Browse Files
                    </span>
                  </motion.div>
                )}

                {isScanning && (
                  <motion.div key="scanning" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-4">
                    {/* Scanning Animation */}
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <motion.div 
                        animate={{ rotate: 360 }} 
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-4 border-gray-100 border-t-blue-600 rounded-full"
                      />
                      <Brain className="w-10 h-10 text-blue-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">Analyzing Medical Data...</h3>
                    <p className="text-blue-600 font-bold mb-4">{scanProgress}% Extracted</p>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        style={{ width: `${scanProgress}%` }}
                      />
                    </div>
                  </motion.div>
                )}

                {showResult && (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">Analysis Complete!</h3>
                    <p className="text-gray-500 font-medium mb-6">Your report has been successfully processed.</p>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setShowResult(false); }}
                      className="text-blue-600 font-bold hover:underline"
                    >
                      Upload Another Report
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <p className="text-center text-xs font-bold text-gray-400 mt-6 flex items-center justify-center">
              <Zap className="w-3 h-3 mr-1 text-yellow-500" /> Results are AI-generated and should not replace professional medical advice.
            </p>
          </motion.div>

          {/* AI Output / Explanation Area */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* The "How it Works" dynamic banner */}
            {!showResult ? (
              <div className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-6 flex items-center"><Sparkles className="w-6 h-6 mr-3 text-blue-300" /> How AI Analyzer Works</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-500/30 w-10 h-10 rounded-xl flex items-center justify-center font-black mr-4 flex-shrink-0 border border-blue-400/30">1</div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Optical Extraction</h4>
                        <p className="text-blue-200 text-sm">Upload a PDF or photo. Our AI reads the structured tables and clinical jargon instantly.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-500/30 w-10 h-10 rounded-xl flex items-center justify-center font-black mr-4 flex-shrink-0 border border-blue-400/30">2</div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Contextual Analysis</h4>
                        <p className="text-blue-200 text-sm">It compares your bio-markers against standard global medical reference ranges.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-500/30 w-10 h-10 rounded-xl flex items-center justify-center font-black mr-4 flex-shrink-0 border border-blue-400/30">3</div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Simplified Summary</h4>
                        <p className="text-blue-200 text-sm">Generates a simple summary of what is High, Low, or Normal in plain English.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Mock AI Result Dashboard */
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden"
              >
                <div className="bg-gray-50 border-b border-gray-100 p-6 flex justify-between items-center">
                  <div className="flex items-center">
                    <FileText className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="font-black text-gray-900 text-lg">AI Report Summary</h3>
                  </div>
                  <span className="bg-blue-100 text-blue-700 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">CBC Test</span>
                </div>
                
                <div className="p-6 space-y-4">
                  {/* Critical/High Alert */}
                  <div className="bg-red-50 border border-red-100 rounded-2xl p-4 flex items-start">
                    <AlertCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-black text-red-800 flex items-center gap-2">
                        Fasting Blood Sugar <span className="text-red-500 text-sm">(126 mg/dL)</span>
                      </h4>
                      <p className="text-red-700/80 text-sm mt-1 font-medium">Your blood sugar is elevated above the normal range (70-100 mg/dL). This indicates pre-diabetes. A consultation is recommended.</p>
                    </div>
                  </div>

                  {/* Normal Readings */}
                  <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-black text-emerald-800 flex items-center gap-2">
                        Hemoglobin <span className="text-emerald-500 text-sm">(14.2 g/dL)</span>
                      </h4>
                      <p className="text-emerald-700/80 text-sm mt-1 font-medium">Your iron levels are within the perfectly normal range. No action required.</p>
                    </div>
                  </div>

                  {/* AI Recommendation */}
                  <div className="bg-gray-900 rounded-2xl p-5 mt-6 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
                    <div className="relative z-10">
                      <h4 className="font-black flex items-center text-blue-400 mb-2"><Brain className="w-4 h-4 mr-2" /> Next Steps</h4>
                      <p className="text-gray-300 text-sm font-medium mb-4">Based on the elevated blood sugar, AI recommends booking a general physician consultation to discuss dietary changes.</p>
                      <button className="bg-white text-gray-900 px-5 py-2.5 rounded-xl font-black text-sm hover:bg-gray-100 transition-colors flex items-center w-full justify-center">
                        Book Doctor Consultation <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Supported Types Grid */}
        <div className="mt-24 mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Supported Diagnostics</h2>
            <p className="text-gray-500 font-medium text-lg">Click any test below to see exactly what our AI analyzes.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportedTypes.map((test, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                onClick={() => setSelectedTest(test)}
                className="bg-white p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all cursor-pointer group flex items-start text-left"
              >
                <div className={`w-14 h-14 rounded-2xl ${test.bg} flex items-center justify-center mr-5 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <test.icon className={`w-7 h-7 ${test.color}`} />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-lg leading-tight mb-2 group-hover:text-blue-600 transition-colors">{test.name}</h4>
                  <p className="text-sm font-medium text-gray-500 line-clamp-2">{test.desc}</p>
                  <div className="mt-4 flex items-center text-xs font-bold text-blue-600">
                    View Details <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
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

export default AiReport;
