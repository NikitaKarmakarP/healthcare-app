import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Smartphone, Loader2 } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (provider: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

  const handleLogin = (provider: string) => {
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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[70] p-4"
          >
            <div className="bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-gray-100/50 hover:bg-gray-200 rounded-full text-gray-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-3xl">👋</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                <p className="text-gray-500 font-medium">Login securely to your health dashboard</p>
              </div>

              {/* Social Login Section */}
              <div className="space-y-4">
                
                {/* Google Button */}
                <button 
                  onClick={() => handleLogin('Google')}
                  disabled={loadingProvider !== null}
                  className="w-full flex items-center justify-center space-x-3 bg-white/80 hover:bg-white backdrop-blur-md border border-gray-200 py-3.5 px-6 rounded-full shadow-sm hover:shadow-md transition-all group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loadingProvider === 'Google' ? (
                    <Loader2 className="w-5 h-5 text-gray-500 animate-spin" />
                  ) : (
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  )}
                  <span className="font-bold text-gray-700">{loadingProvider === 'Google' ? 'Connecting...' : 'Continue with Google'}</span>
                </button>

                {/* Apple Button */}
                <button 
                  onClick={() => handleLogin('Apple')}
                  disabled={loadingProvider !== null}
                  className="w-full flex items-center justify-center space-x-3 bg-white/80 hover:bg-white backdrop-blur-md border border-gray-200 py-3.5 px-6 rounded-full shadow-sm hover:shadow-md transition-all group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loadingProvider === 'Apple' ? (
                    <Loader2 className="w-5 h-5 text-gray-500 animate-spin" />
                  ) : (
                    <svg className="w-5 h-5 text-black group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.58-.74 2.15.11 3.48 1.14 4.3 2.14-1.89 1.16-1.57 3.58.26 4.49-.62 1.83-1.63 3.65-3.22 5.28zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.31-1.95 4.35-3.74 4.25z"/>
                    </svg>
                  )}
                  <span className="font-bold text-gray-700">{loadingProvider === 'Apple' ? 'Connecting...' : 'Continue with Apple'}</span>
                </button>

                {/* Phone OTP Button */}
                <button 
                  onClick={() => handleLogin('OTP')}
                  disabled={loadingProvider !== null}
                  className="w-full flex items-center justify-center space-x-3 bg-white/80 hover:bg-white backdrop-blur-md border border-gray-200 py-3.5 px-6 rounded-full shadow-sm hover:shadow-md transition-all group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loadingProvider === 'OTP' ? (
                    <Loader2 className="w-5 h-5 text-primary-600 animate-spin" />
                  ) : (
                    <Smartphone className="w-5 h-5 text-primary-600 group-hover:scale-110 transition-transform" />
                  )}
                  <span className="font-bold text-gray-700">{loadingProvider === 'OTP' ? 'Sending OTP...' : 'Login with Phone OTP'}</span>
                </button>

              </div>

              <p className="text-center text-xs text-gray-400 mt-8">
                By logging in, you agree to our <a href="#" className="underline hover:text-primary-600">Terms of Service</a> and <a href="#" className="underline hover:text-primary-600">Privacy Policy</a>.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
