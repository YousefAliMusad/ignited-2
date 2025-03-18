import React, { useContext, useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { UserContext } from './UserContext';
import { useNavigate } from "react-router-dom";

const SolarForm = () => {
  const [formData, setFormData] = useState({
    numPanels: "",
    orgName: "",
    leaderName: "",
    orgEmail: "",
    leaderEmail: "",
    target: "",
    location: "",
    projectDuration: "",
    energyConsumption: "",
    notes: "",
  });

  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "solarRequests"), formData);
      alert("Form submitted successfully!");
      setUserData(formData); // Set user data in context
      navigate("/Profile"); // Navigate to profile page
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 mt-40 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-white">Solar Panel Request Form</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Number of Solar Panels */}
        <div>
          <label className="block text-gray-300">Number of Solar Panels</label>
          <input
            type="number"
            name="numPanels"
            value={formData.numPanels}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Organization Name */}
        <div>
          <label className="block text-gray-300">Organization Name</label>
          <input
            type="text"
            name="orgName"
            value={formData.orgName}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Leader Name */}
        <div>
          <label className="block text-gray-300">Leader Name</label>
          <input
            type="text"
            name="leaderName"
            value={formData.leaderName}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Organization Email */}
        <div>
          <label className="block text-gray-300">Organization Email</label>
          <input
            type="email"
            name="orgEmail"
            value={formData.orgEmail}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Leader Email */}
        <div>
          <label className="block text-gray-300">Leader Email</label>
          <input
            type="email"
            name="leaderEmail"
            value={formData.leaderEmail}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Target */}
        <div>
          <label className="block text-gray-300">Target</label>
          <input
            type="text"
            name="target"
            value={formData.target}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-300">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>


        {/* Project Duration */}
        <div>
          <label className="block text-gray-300">Project Duration (Months)</label>
          <input
            type="number"
            name="projectDuration"
            value={formData.projectDuration}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Energy Consumption */}
        <div>
          <label className="block text-gray-300">Energy Consumption (kWh)</label>
          <input
            type="number"
            name="energyConsumption"
            value={formData.energyConsumption}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Notes */}
        <div className="md:col-span-2">
          <label className="block text-gray-300">Additional Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default SolarForm;