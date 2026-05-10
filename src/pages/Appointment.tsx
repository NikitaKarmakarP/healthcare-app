import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, User, Phone, CheckCircle } from 'lucide-react';

const Appointment = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('2026-05-12');
  const [selectedTime, setSelectedTime] = useState('');

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '04:00 PM', '05:00 PM', '06:30 PM'
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Progress Bar */}
        <div className="mb-10 flex justify-between items-center">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex flex-col items-center relative z-10 w-1/3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-2 transition-colors ${step >= s ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                {s}
              </div>
              <span className={`text-xs font-medium ${step >= s ? 'text-primary-600' : 'text-gray-400'}`}>
                {s === 1 ? 'Select Time' : s === 2 ? 'Patient Details' : 'Confirm'}
              </span>
            </div>
          ))}
          {/* Progress Line */}
          <div className="absolute top-[132px] left-0 right-0 h-1 bg-gray-200 max-w-2xl mx-auto -z-0">
            <div className="h-full bg-primary-600 transition-all duration-300" style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
          </div>
        </div>

        <motion.div 
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
        >
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CalendarIcon className="mr-3 text-primary-600" /> Select Date & Time
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Choose Date</label>
                  <input 
                    type="date" 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  />
                  <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-4">
                    <p className="text-sm text-blue-800 font-medium flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Real-time token system is active. Your exact wait time will be sent via SMS.
                    </p>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Available Slots</label>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map(time => (
                      <button 
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-3 rounded-xl border text-sm font-medium transition-all ${selectedTime === time ? 'bg-primary-600 text-white border-primary-600 shadow-md' : 'border-gray-200 text-gray-600 hover:border-primary-300 hover:bg-primary-50'}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-10 flex justify-end">
                <button 
                  onClick={() => setStep(2)}
                  disabled={!selectedTime}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <User className="mr-3 text-primary-600" /> Patient Details
              </h2>
              <div className="space-y-4 max-w-xl mx-auto">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500 outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number (For SMS Reminders)</label>
                  <input type="tel" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500 outline-none" placeholder="+91 9876543210" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Reason for Visit</label>
                  <textarea rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500 outline-none" placeholder="Briefly describe your symptoms..."></textarea>
                </div>
              </div>
              <div className="mt-10 flex justify-between">
                <button onClick={() => setStep(1)} className="text-gray-600 font-medium hover:text-gray-900 px-4 py-2">Back</button>
                <button onClick={() => setStep(3)} className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-bold shadow-md">Review & Book</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Appointment Confirmed!</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">Your appointment for <span className="font-bold text-gray-900">{selectedDate}</span> at <span className="font-bold text-gray-900">{selectedTime}</span> has been successfully booked.</p>
              
              <div className="bg-gray-50 rounded-2xl p-6 max-w-md mx-auto text-left mb-8 border border-gray-100 shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Token Number</p>
                <p className="text-2xl font-bold text-primary-600 mb-4">#42</p>
                <p className="text-sm text-gray-600 flex items-center"><Phone className="w-4 h-4 mr-2" /> We've sent an SMS confirmation and reminder.</p>
              </div>
              
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-bold shadow-md">
                Go to Dashboard
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Appointment;
