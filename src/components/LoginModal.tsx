import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Smartphone, Loader2, Mail, Lock, ShieldCheck, HeartPulse, ArrowRight, CheckCircle2 } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (provider: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (provider: string, e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoadingProvider(provider);
    
    // Simulate network request
    setTimeout(() => {
      setLoadingProvider(null);
      onLoginSuccess(provider);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0B0F19]/60 backdrop-blur-md z-[60]"
          />

          {/* Modal Content Wrapper */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-4xl pointer-events-auto flex"
            >
              <div className="bg-white rounded-[2rem] w-full flex flex-col md:flex-row overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-white/20">
              
              {/* Left Side - Brand / Info (Hidden on very small screens) */}
              <div className="hidden md:flex md:w-5/12 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-10 flex-col justify-between relative overflow-hidden text-white">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute top-[-20%] left-[-20%] w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-[80px]"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 mb-12">
                    <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/20">
                      <HeartPulse className="h-6 w-6 text-blue-300" />
                    </div>
                    <span className="text-xl font-black tracking-tight">Medi<span className="text-blue-400">Saathi</span></span>
                  </div>

                  <h2 className="text-4xl font-black mb-6 leading-tight">
                    Your Health.<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Our Priority.</span>
                  </h2>
                  <p className="text-blue-100/80 text-sm font-medium leading-relaxed mb-8">
                    Join India's most secure and advanced healthcare network. Book doctors, order medicine, and access AI diagnostics all in one place.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center text-sm font-bold text-blue-100">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-blue-400" /> Bank-grade 256-bit Encryption
                    </div>
                    <div className="flex items-center text-sm font-bold text-blue-100">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-blue-400" /> HIPAA Compliant Servers
                    </div>
                    <div className="flex items-center text-sm font-bold text-blue-100">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-blue-400" /> 100% Data Privacy Guarantee
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="relative z-10 mt-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center shadow-2xl">
                  <div className="bg-green-500/20 p-2 rounded-full mr-3">
                    <ShieldCheck className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200 font-bold uppercase tracking-wider">Secure Login</p>
                    <p className="text-sm font-bold text-white">Verified Platform</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Login Form */}
              <div className="w-full md:w-7/12 p-8 md:p-12 relative bg-white">
                <button 
                  onClick={onClose}
                  className="absolute top-6 right-6 p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="max-w-md mx-auto">
                  <div className="mb-8 text-center md:text-left mt-4 md:mt-0">
                    <h2 className="text-3xl font-black text-gray-900 mb-2">Welcome Back</h2>
                    <p className="text-gray-500 font-medium">Please enter your details to sign in.</p>
                  </div>

                  {/* Social Login Buttons */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <button 
                      onClick={() => handleLogin('Google')}
                      disabled={loadingProvider !== null}
                      className="flex justify-center items-center py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-bold text-gray-700 text-sm shadow-sm"
                    >
                      {loadingProvider === 'Google' ? <Loader2 className="w-5 h-5 text-gray-500 animate-spin" /> : (
                        <>
                          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                          </svg>
                          Google
                        </>
                      )}
                    </button>
                    <button 
                      onClick={() => handleLogin('Apple')}
                      disabled={loadingProvider !== null}
                      className="flex justify-center items-center py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-bold text-gray-700 text-sm shadow-sm"
                    >
                      {loadingProvider === 'Apple' ? <Loader2 className="w-5 h-5 text-gray-500 animate-spin" /> : (
                        <>
                          <svg className="w-5 h-5 text-black mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.58-.74 2.15.11 3.48 1.14 4.3 2.14-1.89 1.16-1.57 3.58.26 4.49-.62 1.83-1.63 3.65-3.22 5.28zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.31-1.95 4.35-3.74 4.25z"/>
                          </svg>
                          Apple
                        </>
                      )}
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-400 font-bold uppercase text-xs">Or continue with email</span>
                    </div>
                  </div>

                  {/* Email/Password Form */}
                  <form onSubmit={(e) => handleLogin('Email', e)} className="space-y-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Email Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors bg-gray-50/50 focus:bg-white"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-sm font-bold text-gray-700">Password</label>
                        <a href="#" className="text-xs font-bold text-blue-600 hover:text-blue-500">Forgot password?</a>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors bg-gray-50/50 focus:bg-white"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loadingProvider !== null}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center transition-all shadow-lg shadow-blue-500/30 group disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                    >
                      {loadingProvider === 'Email' ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          Sign In <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>

                  {/* Alternative OTP Login */}
                  <div className="mt-6 text-center">
                    <button 
                      onClick={() => handleLogin('OTP')}
                      disabled={loadingProvider !== null}
                      className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      <Smartphone className="w-4 h-4 mr-2" />
                      Login with Phone OTP instead
                    </button>
                  </div>

                  <p className="text-center text-sm text-gray-500 mt-8 font-medium">
                    Don't have an account? <a href="#" className="font-bold text-blue-600 hover:underline">Sign up for free</a>
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
