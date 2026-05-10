import React from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, CheckCircle, Shield, ArrowRight, Zap, RefreshCw } from 'lucide-react';

const AiReport = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">AI Report Analyzer</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Upload your lab reports, blood tests, or MRI scans. Our AI will translate complex medical jargon into simple, actionable insights in seconds.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Upload Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col justify-center"
          >
            <div className="border-2 border-dashed border-primary-300 bg-primary-50 rounded-2xl p-12 text-center hover:bg-primary-100 transition-colors cursor-pointer mb-6">
              <Upload className="w-16 h-16 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Upload Medical Report</h3>
              <p className="text-gray-500 text-sm mb-6">Drag and drop your PDF, JPG, or PNG here</p>
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-md">
                Browse Files
              </button>
            </div>
            
            <div className="flex items-center text-sm text-gray-500 justify-center">
              <Shield className="w-4 h-4 mr-1 text-green-500" /> HIPPA Compliant & Secure. We do not store your reports.
            </div>
          </motion.div>

          {/* How it works / Mock Result */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center"><Zap className="w-6 h-6 mr-2 text-yellow-400" /> How it Works</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">1</div>
                  <p>Upload your diagnostic report (PDF or Image).</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">2</div>
                  <p>Our AI scans and extracts complex bio-markers and readings.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">3</div>
                  <p>Get a simplified summary explaining what is high, low, or normal, and what you should ask your doctor.</p>
                </li>
              </ul>
            </div>

            {/* Example Analysis */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-primary-500" /> Example Output
              </h4>
              <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-700 space-y-3">
                <p><strong><span className="text-red-500">High:</span> Fasting Blood Sugar (126 mg/dL)</strong></p>
                <p>Your blood sugar is slightly elevated. This indicates pre-diabetes. Try reducing processed sugars and increasing daily walks.</p>
                <div className="border-t border-gray-200 my-2 pt-2"></div>
                <p><strong><span className="text-green-500">Normal:</span> Hemoglobin (14.2 g/dL)</strong></p>
                <p>Your iron levels are perfect. Keep maintaining your current diet!</p>
              </div>
            </div>
            
          </motion.div>

        </div>

        {/* Supported Types */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Supported Report Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Complete Blood Count (CBC)', 'Lipid Profile', 'Thyroid (TSH, T3, T4)', 'Liver Function Test', 'Kidney Function Test', 'Urine Routine', 'MRI/CT Scan Reports', 'X-Ray Reports'].map((test, idx) => (
               <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 font-medium text-gray-700 text-center hover:border-primary-300 transition-colors cursor-pointer">
                 {test}
               </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AiReport;
