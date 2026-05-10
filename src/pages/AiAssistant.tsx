import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Send, AlertTriangle, Stethoscope, PhoneCall, Mic, Globe } from 'lucide-react';

const AiAssistant = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! I am MediSaathi, your personal health assistant. What symptoms are you experiencing today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [language, setLanguage] = useState('English');
  const languages = ['English', 'Hindi', 'Bengali'];

  // Update greeting when language changes
  useEffect(() => {
    let text = 'Hello! I am MediSaathi, your personal health assistant. What symptoms are you experiencing today?';
    if (language === 'Bengali') {
      text = 'নমস্কার! আমি MediSaathi, আপনার ব্যক্তিগত স্বাস্থ্য সহকারী। আজ আপনার কী কী উপসর্গ হচ্ছে?';
    } else if (language === 'Hindi') {
      text = 'नमस्ते! मैं MediSaathi हूँ, आपका व्यक्तिगत स्वास्थ्य सहायक। आज आपको क्या लक्षण महसूस हो रहे हैं?';
    }
    setMessages([{ type: 'bot', text }]);
  }, [language]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
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

**সম্ভাব্য রোগ:** ভাইরাল ইনফেকশন, মাইগ্রেন, বা সিজনাল ফ্লু।
**জরুরী অবস্থা:** নিম্ন থেকে মাঝারি। যদি তাপমাত্রা ১০৩°F এর উপরে যায় বা ঘাড় শক্ত হয়ে যায়, তবে অবিলম্বে চিকিৎসকের পরামর্শ নিন।

**ঘরোয়া প্রতিকার:**
• প্রচুর পরিমাণে তরল পান করুন
• একটি অন্ধকার এবং শান্ত ঘরে বিশ্রাম নিন
• আপনার কপালে একটি ঠান্ডা কম্প্রেস প্রয়োগ করুন

**পরামর্শ:** সঠিক রোগ নির্ণয়ের लिए একজন জেনারেল ফিজিশিয়ানের (General Physician) পরামর্শ নিন।`;
        } else {
          botResponse = `Based on your symptoms, here is an initial assessment:

**Possible conditions:** Viral infection, Migraine, or seasonal flu.
**Emergency Level:** Low to Moderate. If temperature exceeds 103°F or neck stiffness occurs, seek immediate care.

**Home Remedies:**
• Drink plenty of fluids
• Rest in a dark, quiet room
• Apply a cold compress to your forehead

**Suggested Action:** Consult a General Physician for a proper diagnosis.`;
        }
      } else {
        botResponse = language === 'Bengali' 
          ? "আমি আপনার উপসর্গগুলো লক্ষ্য করেছি। আরও নিখুঁত মূল্যায়নের জন্য, আপনি কি আমাকে বলতে পারবেন কতদিন ধরে আপনি এই সমস্যায় ভুগছেন?"
          : "I have noted your symptoms. For a more accurate assessment, could you tell me how long you've been experiencing this?";
      }
      
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen flex flex-col">
      {/* Disclaimer */}
      <div className="bg-amber-50 border-b border-amber-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center text-amber-800 text-sm font-medium">
          <AlertTriangle className="w-4 h-4 mr-2" />
          Disclaimer: This AI Assistant provides general information and is NOT a substitute for professional medical advice, diagnosis, or treatment.
        </div>
      </div>

      <div className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
        
        {/* Chat Area */}
        <div className="flex-1 bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col overflow-hidden h-[700px]">
          <div className="bg-primary-900 p-6 flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">MediSaathi</h2>
              <p className="text-primary-200 text-sm flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span> Online
              </p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/50">
            {messages.map((msg, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={idx} 
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${
                  msg.type === 'user' 
                    ? 'bg-primary-600 text-white rounded-tr-sm' 
                    : 'bg-white border border-gray-100 text-gray-800 rounded-tl-sm'
                }`}>
                  {msg.type === 'bot' && <div className="font-bold text-primary-700 mb-1 flex items-center"><Bot className="w-4 h-4 mr-1"/> AI Assistant</div>}
                  <div className="whitespace-pre-line leading-relaxed">{msg.text}</div>
                  
                  {/* Action Buttons for AI Response */}
                  {msg.type === 'bot' && (msg.text.includes('General Physician') || msg.text.includes('জেনারেল ফিজিশিয়ান')) && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      <button className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-blue-100 hover:bg-blue-100 flex items-center">
                        <Stethoscope className="w-3 h-3 mr-1" /> {language === 'Bengali' ? 'ডাক্তার খুঁজুন' : 'Find Physician'}
                      </button>
                      <button className="bg-red-50 text-red-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-red-100 hover:bg-red-100 flex items-center">
                        <PhoneCall className="w-3 h-3 mr-1" /> {language === 'Bengali' ? 'জরুরী এসওএস (SOS)' : 'Emergency SOS'}
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm p-4 shadow-sm flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-gray-100 flex flex-col space-y-4">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center space-x-2 text-sm text-gray-500 font-medium">
                <Globe className="w-4 h-4" />
                <span>Voice Language:</span>
                <select 
                  value={language} 
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-transparent border-none focus:ring-0 text-primary-600 font-bold cursor-pointer outline-none"
                >
                  {languages.map(lang => <option key={lang} value={lang}>{lang}</option>)}
                </select>
              </div>
              {isRecording && (
                <div className="flex items-center text-red-500 text-sm font-bold animate-pulse">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  Listening...
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setIsRecording(!isRecording)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-md flex-shrink-0 ${isRecording ? 'bg-red-500 text-white animate-pulse' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                <Mic className="w-5 h-5" />
              </button>
              <div className="flex-1 flex items-center bg-gray-100 rounded-full p-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={isRecording ? "Speak now..." : "Type your symptoms (e.g. Fever + headache)..."} 
                  className="flex-1 bg-transparent border-none focus:ring-0 px-4 text-gray-800 outline-none"
                />
                <button 
                  onClick={handleSend}
                  className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition-colors shadow-md"
                >
                  <Send className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="md:w-80 space-y-6 hidden lg:block">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center"><AlertTriangle className="w-5 h-5 text-amber-500 mr-2"/> {language === 'Bengali' ? 'সতর্কতা উপসর্গ (Red Flag)' : 'Red Flag Symptoms'}</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 mr-2"></div> {language === 'Bengali' ? 'বুকে ব্যথা বা চাপ' : 'Chest pain or pressure'}</li>
              <li className="flex items-start"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 mr-2"></div> {language === 'Bengali' ? 'শ্বাস নিতে কষ্ট হওয়া' : 'Difficulty breathing'}</li>
              <li className="flex items-start"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 mr-2"></div> {language === 'Bengali' ? 'হঠাৎ দুর্বলতা বা অসাড়তা' : 'Sudden weakness or numbness'}</li>
              <li className="flex items-start"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 mr-2"></div> {language === 'Bengali' ? 'তীব্র এবং হঠাৎ মাথা ব্যথা' : 'Severe, sudden headache'}</li>
            </ul>
            <div className="mt-6 p-4 bg-red-50 rounded-xl border border-red-100">
              <p className="text-red-800 text-sm font-bold mb-2">{language === 'Bengali' ? 'এই লক্ষণগুলো দেখা যাচ্ছে?' : 'Experiencing these?'}</p>
              <button className="w-full bg-red-600 text-white py-2 rounded-lg font-bold shadow-md hover:bg-red-700 transition-colors">{language === 'Bengali' ? 'অ্যাম্বুলেন্স ডাকুন' : 'Call Ambulance'}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAssistant;
