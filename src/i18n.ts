import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: {
            home: "Home",
            doctors: "Find Doctors",
            hospitals: "Hospitals",
            pharmacy: "Pharmacy",
            bloodBank: "Blood Bank",
            dashboard: "Dashboard",
            emergency: "Emergency SOS"
          },
          hero: {
            title: "Your Health, Powered by AI",
            subtitle: "Connect with top doctors, get AI-driven health insights, order medicines, and access emergency services—all in one intelligent ecosystem."
          }
        }
      },
      hi: {
        translation: {
          nav: {
            home: "होम",
            doctors: "डॉक्टर खोजें",
            hospitals: "अस्पताल",
            pharmacy: "फार्मेसी",
            bloodBank: "ब्लड बैंक",
            dashboard: "डैशबोर्ड",
            emergency: "आपातकालीन SOS"
          },
          hero: {
            title: "आपका स्वास्थ्य, AI द्वारा संचालित",
            subtitle: "शीर्ष डॉक्टरों से जुड़ें, AI-संचालित स्वास्थ्य जानकारी प्राप्त करें, दवाएं ऑर्डर करें और आपातकालीन सेवाओं तक पहुंचें—सब कुछ एक बुद्धिमान पारिस्थितिकी तंत्र में।"
          }
        }
      },
      bn: {
        translation: {
          nav: {
            home: "হোম",
            doctors: "ডাক্তার খুঁজুন",
            hospitals: "হাসপাতাল",
            pharmacy: "ফার্মাসি",
            bloodBank: "ব্লাড ব্যাঙ্ক",
            dashboard: "ড্যাশবোর্ড",
            emergency: "জরুরি SOS"
          },
          hero: {
            title: "আপনার স্বাস্থ্য, AI চালিত",
            subtitle: "সেরা ডাক্তারদের সাথে যোগাযোগ করুন, AI-চালিত স্বাস্থ্য তথ্য পান, ওষুধ অর্ডার করুন এবং জরুরি পরিষেবাগুলি অ্যাক্সেস করুন—সবই একটি বুদ্ধিমান ইকোসিস্টেমে।"
          }
        }
      }
    }
  });

export default i18n;
