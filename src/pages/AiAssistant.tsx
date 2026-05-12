import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, Send, AlertTriangle, Stethoscope, PhoneCall, Mic, Globe, 
  Sparkles, ShieldCheck, MessageSquare, Trash2, Maximize2, 
  ChevronRight, ArrowRight, Zap, Info
} from 'lucide-react';

const AiAssistant = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! I am MediSaathi AI. I can help you understand your symptoms and provide preliminary health guidance. How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [language, setLanguage] = useState('English');
  const chatEndRef = useRef<HTMLDivElement>(null);
  
  const languages = ['English', 'Hindi', 'Bengali'];

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Update greeting when language changes
  useEffect(() => {
    let text = 'Hello! I am MediSaathi AI. I can help you understand your symptoms and provide preliminary health guidance. How can I assist you today?';
    if (language === 'Bengali') {
      text = 'নমস্কার! আমি MediSaathi AI। আমি আপনার লক্ষণগুলি বুঝতে এবং প্রাথমিক স্বাস্থ্য নির্দেশনা দিতে সাহায্য করতে পারি। আজ আপনাকে কীভাবে সাহায্য করতে পারি?';
    } else if (language === 'Hindi') {
      text = 'नमस्ते! मैं MediSaathi AI हूँ। मैं आपके लक्षणों को समझने और प्राथमिक स्वास्थ्य मार्गदर्शन प्रदान करने में मदद कर सकता हूँ। आज मैं आपकी कैसे सहायता कर सकता हूँ?';
    }
    setMessages([{ type: 'bot', text }]);
  }, [language]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { type: 'user', text: input }]);
    const userInput = input;
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let botResponse = '';
      if (userInput.toLowerCase().includes('fever') || userInput.toLowerCase().includes('headache') || userInput.includes('জ্বর') || userInput.includes('মাথা ব্যথা')) {
        if (language === 'Bengali') {
          botResponse = `আপনার উপসর্গের ভিত্তিতে একটি প্রাথমিক মূল্যায়ন নিচে দেওয়া হলো:

**সম্ভাব্য রোগ:** ভাইরাল ইনফেকশন বা সিজনাল ফ্লু।
**জরুরী অবস্থা:** নিম্ন থেকে মাঝারি।

**ঘরোয়া প্রতিকার:**
• প্রচুর পরিমাণে তরল পান করুন
• বিশ্রাম নিন
• আপনার কপালে একটি ঠান্ডা কম্প্রেস প্রয়োগ করুন

**পরামর্শ:** সঠিক রোগ নির্ণয়ের জন্য একজন জেনারেল ফিজিশিয়ানের পরামর্শ নিন।`;
        } else {
          botResponse = `Based on your symptoms, here is a preliminary AI assessment:

**Possible conditions:** Viral infection, Migraine, or seasonal flu.
**Emergency Level:** Low to Moderate. 

**Home Care:**
• Maintain hydration with fluids
• Prioritize rest in a quiet space
• Apply a cold compress to your forehead

**Next Step:** I recommend consulting a General Physician for a professional diagnosis.`;
        }
      } else {
        botResponse = language === 'Bengali' 
          ? "আমি আপনার উপসর্গগুলো লক্ষ্য করেছি। আরও নিখুঁত মূল্যায়নের জন্য, আপনি কি আমাকে বলতে পারবেন কতদিন ধরে আপনি এই সমস্যায় ভুগছেন?"
          : "I have noted your symptoms. To provide better guidance, could you specify the duration and severity of these symptoms?";
      }
      
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1800);
  };

  return (
    <div className="pt-20 bg-[#0B0F19] min-h-screen flex flex-col font-sans">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-10 relative z-10">
        
        {/* Left Info Panel */}
        <div className="lg:w-80 space-y-6 hidden lg:block">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl"
           >
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-black text-white mb-4 tracking-tight">Clinical Safety</h3>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">Our AI is trained on verified medical data, but it is not a doctor. Always seek professional advice for serious conditions.</p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.1 }}
             className="bg-gradient-to-br from-rose-900/40 to-red-900/40 border border-red-500/20 p-8 rounded-[2.5rem] shadow-2xl"
           >
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-black text-white mb-4 tracking-tight">Emergency?</h3>
              <ul className="space-y-3 text-xs text-gray-300 font-medium mb-8">
                <li className="flex items-center"><Zap className="w-3 h-3 mr-2 text-amber-400" /> Severe chest pain</li>
                <li className="flex items-center"><Zap className="w-3 h-3 mr-2 text-amber-400" /> Sudden paralysis</li>
                <li className="flex items-center"><Zap className="w-3 h-3 mr-2 text-amber-400" /> Heavy bleeding</li>
              </ul>
              <button className="w-full bg-red-600 hover:bg-red-500 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-red-500/20">
                Call SOS Now
              </button>
           </motion.div>
        </div>

        {/* Main Chat Interface */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-2xl flex flex-col overflow-hidden h-[750px]"
        >
          {/* Chat Header */}
          <div className="bg-white/5 p-6 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Bot className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#0B0F19] rounded-full"></div>
              </div>
              <div>
                <h2 className="text-xl font-black text-white tracking-tight">MediSaathi AI</h2>
                <div className="flex items-center space-x-3 mt-1">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Advanced Diagnostics</span>
                  <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                  <div className="flex items-center text-[10px] text-gray-400 font-bold">
                    <Globe className="w-3 h-3 mr-1" /> {language}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                <Maximize2 className="w-5 h-5" />
              </button>
              <button onClick={() => setMessages([{ type: 'bot', text: 'How can I help you today?' }])} className="p-3 text-gray-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
            <AnimatePresence>
              {messages.map((msg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={idx} 
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'} max-w-[85%]`}>
                    <div className={`rounded-[2rem] p-6 shadow-2xl relative ${
                      msg.type === 'user' 
                        ? 'bg-blue-600 text-white rounded-tr-sm' 
                        : 'bg-white/10 border border-white/10 text-gray-100 rounded-tl-sm backdrop-blur-md'
                    }`}>
                      {msg.type === 'bot' && (
                        <div className="flex items-center space-x-2 mb-3">
                           <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center">
                             <Sparkles className="w-3.5 h-3.5 text-white" />
                           </div>
                           <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">AI Guidance</span>
                        </div>
                      )}
                      <div className="whitespace-pre-line leading-relaxed font-medium">{msg.text}</div>
                      
                      {/* Integrated Action Buttons */}
                      {msg.type === 'bot' && (msg.text.includes('Physician') || msg.text.includes('ফিজিশিয়ান')) && (
                        <div className="mt-8 flex flex-wrap gap-3">
                          <button className="bg-blue-500 hover:bg-blue-400 text-white px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-500/20 flex items-center">
                            <Stethoscope className="w-4 h-4 mr-2" /> Book Doctor
                          </button>
                          <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all flex items-center">
                            <Info className="w-4 h-4 mr-2" /> Emergency SOS
                          </button>
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 mt-2 px-2 uppercase tracking-tighter">
                      {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 rounded-[1.5rem] rounded-tl-sm p-4 flex items-center space-x-2">
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-2 h-2 bg-blue-400 rounded-full"></motion.div>
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 bg-blue-400 rounded-full"></motion.div>
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 bg-blue-400 rounded-full"></motion.div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input */}
          <div className="p-6 bg-white/5 border-t border-white/10">
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex items-center space-x-2 bg-black/20 p-1 rounded-xl">
                {languages.map(lang => (
                  <button 
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${language === lang ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              {isRecording && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center text-red-400 text-[10px] font-black uppercase tracking-widest">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                  Listening...
                </motion.div>
              )}
            </div>
            
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setIsRecording(!isRecording)}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-xl flex-shrink-0 ${isRecording ? 'bg-red-500 text-white shadow-red-500/20' : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'}`}
              >
                <Mic className="w-6 h-6" />
              </button>
              <div className="flex-1 flex items-center bg-white/5 border border-white/10 rounded-[1.5rem] p-1.5 shadow-inner backdrop-blur-xl group focus-within:border-blue-500/50 transition-all">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={isRecording ? "Speak clearly..." : "Describe symptoms or ask health questions..."} 
                  className="flex-1 bg-transparent border-none focus:ring-0 px-6 text-white placeholder-gray-500 font-medium outline-none"
                />
                <button 
                  onClick={handleSend}
                  className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 active:scale-95"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Info Overlay / Disclaimer */}
        <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-2xl flex items-start space-x-3 lg:hidden">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-200 font-medium">MediSaathi AI provides health insights for information only. It is not a clinical diagnosis tool. In case of emergency, call local authorities.</p>
        </div>

      </div>
    </div>
  );
};

export default AiAssistant;
