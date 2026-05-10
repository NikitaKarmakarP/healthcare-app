import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Appointment from './pages/Appointment';
import AiAssistant from './pages/AiAssistant';
import Pharmacy from './pages/Pharmacy';
import HealthRecords from './pages/HealthRecords';
import Emergency from './pages/Emergency';
import Dashboard from './pages/Dashboard';
import WomensHealth from './pages/WomensHealth';
import Hospitals from './pages/Hospitals';
import AdminDashboard from './pages/AdminDashboard';
import FacilityService from './pages/FacilityService';
import RuralTelemedicine from './pages/RuralTelemedicine';
import AiReport from './pages/AiReport';
import Plans from './pages/Plans';
import Clinics from './pages/Clinics';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/ai-assistant" element={<AiAssistant />} />
            <Route path="/pharmacy" element={<Pharmacy />} />
            <Route path="/records" element={<HealthRecords />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/womens-health" element={<WomensHealth />} />
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/facility/:serviceName" element={<FacilityService />} />
            <Route path="/rural-telemedicine" element={<RuralTelemedicine />} />
            <Route path="/ai-report" element={<AiReport />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/clinics" element={<Clinics />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
