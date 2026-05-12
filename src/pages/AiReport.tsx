import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Upload, FileText, Shield, ArrowRight, Zap, Activity, Brain, 
  Sparkles, HeartPulse, FileImage, Droplets, CheckCircle2, 
  AlertCircle, X, Check, Search, ShieldCheck, Cpu, Database
} from 'lucide-react';

const AiReport = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedTest, setSelectedTest] = useState<any>(null);

  const handleSimulateUpload = () => {
    setIsScanning(true);
    setScanProgress(0);
    setShowResult(false);
    if(selectedTest) setSelectedTest(null);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsScanning(false);
            setShowResult(true);
          }, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
  };

  const supportedTypes = [
    { 
      name: 'Complete Blood Count (CBC)', 
      icon: Droplets, color: 'emerald', 
      desc: 'Comprehensive analysis of red/white blood cells and platelets.',
      metrics: ['Hemoglobin', 'WBC Count', 'Platelets', 'Hematocrit']
    },
    { 
      name: 'Lipid Profile', 
      icon: HeartPulse, color: 'rose', 
      desc: 'Detailed breakdown of cholesterol levels and heart disease risk factors.',
      metrics: ['Total Cholesterol', 'HDL (Good)', 'LDL (Bad)', 'Triglycerides']
    },
    { 
      name: 'Thyroid (TSH, T3, T4)', 
      icon: Activity, color: 'blue', 
      desc: 'Evaluation of thyroid gland function and metabolic rate.',
      metrics: ['TSH', 'Free T3', 'Free T4', 'Thyroid Antibodies']
    },
    { 
      name: 'Liver Function Test', 
      icon: Activity, color: 'teal', 
      desc: 'Detection of liver inflammation, damage, or disease.',
      metrics: ['SGPT (ALT)', 'SGOT (AST)', 'Bilirubin', 'Alkaline Phosphatase']
    },
    { 
      name: 'MRI / CT Scan Reports', 
      icon: Brain, color: 'indigo', 
      desc: 'Natural language processing of complex radiological text findings.',
      metrics: ['Impression Summary', 'Lesion Detection', 'Structural Anomalies']
    },
    { 
      name: 'X-Ray Reports', 
      icon: FileImage, color: 'amber', 
      desc: 'Extraction of key skeletal, pulmonary, or dental findings.',
      metrics: ['Fracture Alerts', 'Lung Opacities', 'Joint Space Analysis']
    }
  ];

  return (
    <div className="pt-20 pb-24 bg-[#F8FBFF] min-h-screen font-sans relative">
      
      {/* Test Details Modal */}
      <AnimatePresence>
        {selectedTest && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTest(null)}
              className="absolute inset-0 bg-[#0B0F19]/60 backdrop-blur-md"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[3rem] shadow-2xl w-full max-w-lg relative z-10 overflow-hidden"
            >
              <div className="p-10 relative z-10">
                <button 
                  onClick={() => setSelectedTest(null)}
                  className="absolute top-8 right-8 text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 p-3 rounded-2xl transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className={`w-20 h-20 rounded-[2rem] bg-${selectedTest.color}-50 flex items-center justify-center mb-8`}>
                  <selectedTest.icon className={`w-10 h-10 text-${selectedTest.color}-600`} />
                </div>
                
                <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">{selectedTest.name}</h3>
                <p className="text-gray-500 text-lg font-medium mb-10 leading-relaxed">
                  {selectedTest.desc}
                </p>
                
                <div className="bg-gray-50 rounded-[2.5rem] p-8 mb-10 border border-gray-100">
                  <h4 className="font-black text-gray-900 mb-6 flex items-center text-xs uppercase tracking-[0.2em]">
                    <Brain className="w-4 h-4 mr-2 text-blue-600" /> AI Diagnostic Stack:
                  </h4>
                  <ul className="grid grid-cols-2 gap-4">
                    {selectedTest.metrics.map((metric: string, idx: number) => (
                      <li key={idx} className="flex items-center text-sm font-black text-gray-700">
                        <Check className={`w-4 h-4 mr-2 text-${selectedTest.color}-500`} />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={handleSimulateUpload}
                  className="w-full bg-gray-900 hover:bg-black text-white py-5 rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-2xl flex items-center justify-center transition-all group"
                >
                  <Upload className="w-5 h-5 mr-3 group-hover:-translate-y-1 transition-transform" />
                  Analyze {selectedTest.name.split('(')[0]}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Premium Dark Hero Section */}
      <div className="relative bg-[#0B0F19] overflow-hidden rounded-b-[4rem] pb-32 shadow-2xl">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-[2.5rem] mx-auto flex items-center justify-center mb-8 shadow-2xl shadow-blue-500/30 border-4 border-white/10"
          >
            <Cpu className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Clinical Insights, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Powered by AI.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium"
          >
            Instantly decode complex pathology reports, radiological text, and diagnostic data into clear, actionable health summaries.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Main Interaction Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[3rem] p-10 md:p-12 shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>

            <div className="mb-8 flex justify-between items-center relative z-10">
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">Diagnostic Portal</h2>
              <div className="bg-emerald-500/10 text-emerald-600 px-4 py-2 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center border border-emerald-500/20">
                <ShieldCheck className="w-4 h-4 mr-2" /> HIPAA Secure
              </div>
            </div>

            <div 
              onClick={!isScanning ? handleSimulateUpload : undefined}
              className={`relative border-2 border-dashed rounded-[3rem] p-16 text-center transition-all cursor-pointer z-10 overflow-hidden
                ${isScanning ? 'border-blue-400 bg-blue-50/50 shadow-inner' : showResult ? 'border-emerald-400 bg-emerald-50/30' : 'border-blue-100 bg-blue-50/30 hover:bg-blue-50 hover:border-blue-400 shadow-sm'}
              `}
            >
              <AnimatePresence mode="wait">
                {!isScanning && !showResult && (
                  <motion.div key="upload" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="w-24 h-24 bg-white rounded-[2rem] shadow-xl flex items-center justify-center mx-auto mb-8 text-blue-600">
                      <Upload className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">Drop Report Here</h3>
                    <p className="text-gray-500 font-medium mb-10">Accepting PDFs, Scans & Mobile Photos</p>
                    <button className="bg-gray-900 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-transform">
                      Select Files
                    </button>
                  </motion.div>
                )}

                {isScanning && (
                  <motion.div key="scanning" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-6">
                    <div className="relative w-32 h-32 mx-auto mb-8">
                       <div className="absolute inset-0 border-8 border-blue-100 rounded-full"></div>
                       <motion.div 
                        animate={{ rotate: 360 }} 
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-8 border-transparent border-t-blue-600 rounded-full"
                      />
                      <Database className="w-12 h-12 text-blue-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Analyzing Clinical Data...</h3>
                    <div className="max-w-xs mx-auto">
                       <div className="flex justify-between text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">
                          <span>Extraction</span>
                          <span>{scanProgress}%</span>
                       </div>
                       <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
                          style={{ width: `${scanProgress}%` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {showResult && (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-10">
                    <div className="w-24 h-24 bg-emerald-100 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 mb-3 tracking-tight">Analysis Complete</h3>
                    <p className="text-gray-500 font-medium mb-10">AI Summary generated for CBC Report</p>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setShowResult(false); }}
                      className="text-blue-600 font-black text-xs uppercase tracking-widest hover:underline"
                    >
                      New Scan
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="mt-8 flex items-center justify-center text-[10px] font-black text-gray-400 uppercase tracking-widest bg-gray-50 py-3 rounded-2xl border border-gray-100">
              <Zap className="w-4 h-4 mr-2 text-amber-500" /> AI Insights are for informational use only.
            </div>
          </motion.div>

          {/* AI Output Area */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {!showResult ? (
              <div className="bg-[#0B1A14] rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                 <div className="relative z-10 space-y-10">
                    <div className="flex items-center space-x-4">
                       <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center shadow-lg">
                          <Sparkles className="w-8 h-8 text-emerald-400" />
                       </div>
                       <h3 className="text-3xl font-black tracking-tight">AI Precision</h3>
                    </div>
                    <div className="space-y-8">
                       {[
                         { id: "01", title: "Instant Digitization", desc: "Convert blurry report photos into structured digital data." },
                         { id: "02", title: "Reference Mapping", desc: "Automatic comparison with WHO & clinical standards." },
                         { id: "03", title: "Simplified Summary", desc: "Get high/low alerts in plain language, no jargon." }
                       ].map(step => (
                         <div key={step.id} className="flex gap-6 items-start group">
                            <span className="text-4xl font-black text-emerald-500/30 group-hover:text-emerald-500 transition-colors">{step.id}</span>
                            <div>
                               <h4 className="text-xl font-black mb-2">{step.title}</h4>
                               <p className="text-emerald-100/60 font-medium leading-relaxed">{step.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden h-full"
              >
                <div className="bg-gray-50 border-b border-gray-100 p-8 flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-blue-600">
                       <FileText className="w-6 h-6" />
                    </div>
                    <div>
                       <h3 className="font-black text-gray-900 text-xl tracking-tight">AI Diagnostic Summary</h3>
                       <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-0.5">Report ID: MS-82941</p>
                    </div>
                  </div>
                  <span className="bg-blue-600 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg shadow-blue-500/20">CBC Analysis</span>
                </div>
                
                <div className="p-8 space-y-6">
                  <div className="bg-rose-50 border border-rose-100 rounded-[2rem] p-6 flex items-start group">
                    <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                       <AlertCircle className="w-6 h-6 text-rose-600" />
                    </div>
                    <div>
                      <h4 className="font-black text-rose-900 text-lg mb-1">Blood Sugar Alert</h4>
                      <p className="text-rose-700/80 text-sm font-medium leading-relaxed">Levels are at <span className="font-black">126 mg/dL</span> (High). Normal range is 70-100 mg/dL. This may indicate pre-diabetic tendencies.</p>
                    </div>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-100 rounded-[2rem] p-6 flex items-start group">
                    <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                       <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-black text-emerald-900 text-lg mb-1">Optimal Hemoglobin</h4>
                      <p className="text-emerald-700/80 text-sm font-medium leading-relaxed">Reading: <span className="font-black">14.2 g/dL</span>. Your iron levels are excellent and well within the safe clinical threshold.</p>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl mt-8">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center space-x-3 mb-4">
                         <Brain className="w-5 h-5 text-blue-400" />
                         <h4 className="font-black text-xs uppercase tracking-[0.2em] text-blue-400">AI Recommendations</h4>
                      </div>
                      <p className="text-gray-300 font-medium mb-8 leading-relaxed text-lg">Given the elevated glucose, we recommend a <span className="text-white font-black">Metabolic Panel</span> and a consultation with a General Physician to review your diet.</p>
                      <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center">
                        Consult Specialist <ArrowRight className="w-5 h-5 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Supported Types Grid */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Compatible Diagnostics</h2>
            <p className="text-gray-500 font-medium text-lg">Our clinical engine supports over 50+ types of medical reports.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportedTypes.map((test, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -10 }}
                onClick={() => setSelectedTest(test)}
                className="bg-white p-8 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all cursor-pointer group flex flex-col"
              >
                <div className={`w-16 h-16 rounded-2xl bg-${test.color}-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <test.icon className={`w-8 h-8 text-${test.color}-600`} />
                </div>
                <h4 className="font-black text-gray-900 text-2xl tracking-tight mb-4 group-hover:text-blue-600 transition-colors">{test.name}</h4>
                <p className="text-gray-500 font-medium leading-relaxed flex-1">{test.desc}</p>
                <div className="mt-8 pt-8 border-t border-gray-50 flex items-center text-[10px] font-black uppercase tracking-widest text-blue-600">
                  Analyze <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
