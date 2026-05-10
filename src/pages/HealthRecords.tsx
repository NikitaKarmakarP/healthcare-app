import React from 'react';
import { Folder, FileText, Cloud, Lock, Download, MoreVertical, Search, Plus } from 'lucide-react';

const HealthRecords = () => {
  const folders = [
    { name: "Prescriptions", count: 12, color: "bg-blue-500", icon: <FileText className="w-6 h-6 text-white"/> },
    { name: "Lab Reports", count: 8, color: "bg-green-500", icon: <Folder className="w-6 h-6 text-white"/> },
    { name: "X-Rays & Scans", count: 4, color: "bg-purple-500", icon: <Folder className="w-6 h-6 text-white"/> },
    { name: "Vaccinations", count: 6, color: "bg-orange-500", icon: <Folder className="w-6 h-6 text-white"/> },
  ];

  const recentFiles = [
    { name: "Blood_Test_Report_May_2026.pdf", date: "10 May, 2026", size: "2.4 MB", type: "Lab Report" },
    { name: "Prescription_Dr_Sharma.jpg", date: "05 May, 2026", size: "1.1 MB", type: "Prescription" },
    { name: "Chest_XRay.png", date: "15 Apr, 2026", size: "5.8 MB", type: "Scan" },
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
              Digital Health Records <Cloud className="ml-3 text-primary-500 w-8 h-8"/>
            </h1>
            <p className="text-gray-600 flex items-center">
              <Lock className="w-4 h-4 mr-1 text-green-500"/> Securely stored in the cloud. Access anywhere, anytime.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <div className="bg-white px-4 py-2 rounded-xl flex items-center border border-gray-200 shadow-sm">
              <Search className="w-5 h-5 text-gray-400 mr-2" />
              <input type="text" placeholder="Search records..." className="border-none outline-none text-sm w-48" />
            </div>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-md flex items-center">
              <Plus className="w-5 h-5 mr-1" /> Upload
            </button>
          </div>
        </div>

        {/* Folders */}
        <h2 className="text-xl font-bold text-gray-800 mb-6">Categories</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {folders.map((folder, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 ${folder.color} rounded-xl flex items-center justify-center shadow-sm`}>
                  {folder.icon}
                </div>
                <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded-lg">{folder.count} Files</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">{folder.name}</h3>
            </div>
          ))}
        </div>

        {/* Recent Files */}
        <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Uploads</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="py-4 px-6 font-semibold text-gray-600">File Name</th>
                <th className="py-4 px-6 font-semibold text-gray-600">Date Added</th>
                <th className="py-4 px-6 font-semibold text-gray-600">Size</th>
                <th className="py-4 px-6 font-semibold text-gray-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentFiles.map((file, idx) => (
                <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 flex items-center">
                    <FileText className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">{file.name}</p>
                      <p className="text-xs text-gray-500">{file.type}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-sm">{file.date}</td>
                  <td className="py-4 px-6 text-gray-600 text-sm">{file.size}</td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex justify-end space-x-2">
                      <button className="p-2 text-gray-400 hover:text-primary-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Download className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default HealthRecords;
