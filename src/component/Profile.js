// Profile.js (with Edit Modal)
import React, { useContext, useState } from "react";
import { UserContext } from './UserContext';
import { Building, User, Mail, Target, MapPin, DollarSign, Calendar, Zap, FileText, Edit } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Profile = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const [formData, setFormData] = useState({ ...userData }); // Form data state

  // Dummy data for the chart
  const chartData = [
    { name: 'Jan', energy: 4000 },
    { name: 'Feb', energy: 3000 },
    { name: 'Mar', energy: 5000 },
    { name: 'Apr', energy: 4500 },
    { name: 'May', energy: 6000 },
    { name: 'Jun', energy: 7000 },
  ];

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(formData); // Update user data in context
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Organization Profile</h2>
          <button
            onClick={() => setIsModalOpen(true)} // Open modal on click
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Edit className="w-5 h-5" />
            <span>Edit Profile</span>
          </button>
        </div>

        {userData ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Organization Details */}
            <div className="col-span-1">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-900 flex items-center justify-center">
                    <Building className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{userData.orgName}</h3>
                    <p className="text-sm text-gray-400">Solar Energy Project</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <User className="w-6 h-6 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-400">Leader Name</p>
                      <p className="text-lg font-semibold text-white">{userData.leaderName}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-400">Organization Email</p>
                      <p className="text-lg font-semibold text-white">{userData.orgEmail}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-400">Leader Email</p>
                      <p className="text-lg font-semibold text-white">{userData.leaderEmail}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column: Project Details */}
            <div className="col-span-1 lg:col-span-2">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-white mb-6">Project Overview</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-4">
                    <Target className="w-6 h-6 text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-400">Target</p>
                      <p className="text-lg font-semibold text-white">{userData.target}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-lg font-semibold text-white">{userData.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <DollarSign className="w-6 h-6 text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-400">Budget</p>
                      <p className="text-lg font-semibold text-white">${userData.budget}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Calendar className="w-6 h-6 text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-400">Project Duration</p>
                      <p className="text-lg font-semibold text-white">{userData.projectDuration} Months</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Zap className="w-6 h-6 text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-400">Energy Consumption</p>
                      <p className="text-lg font-semibold text-white">{userData.energyConsumption} kWh</p>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="mt-8">
                  <div className="flex items-center space-x-4">
                    <FileText className="w-6 h-6 text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-400">Additional Notes</p>
                      <p className="text-lg font-semibold text-white">{userData.notes}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Energy Consumption Chart */}
            <div className="col-span-1 lg:col-span-3">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-white mb-6">Energy Consumption Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData}>
                    <XAxis dataKey="name" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "none" }} />
                    <Legend />
                    <Bar dataKey="energy" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-400">No data submitted yet.</p>
        )}

        {/* Edit Profile Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
              <h3 className="text-xl font-bold text-white mb-6">Edit Profile</h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400">Organization Name</label>
                    <input
                      type="text"
                      name="orgName"
                      value={formData.orgName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400">Leader Name</label>
                    <input
                      type="text"
                      name="leaderName"
                      value={formData.leaderName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400">Organization Email</label>
                    <input
                      type="email"
                      name="orgEmail"
                      value={formData.orgEmail}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400">Leader Email</label>
                    <input
                      type="email"
                      name="leaderEmail"
                      value={formData.leaderEmail}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  {/* Add more fields as needed */}
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;