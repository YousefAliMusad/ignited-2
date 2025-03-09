import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";

const CompanyDetails = () => {
  const { id } = useParams(); // Get the company ID from the URL
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch company details
  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const docRef = doc(db, "solarRequests", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCompany(docSnap.data());
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching company details: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCompany();
  }, [id]);

  if (loading) {
    return <p className="text-gray-300">Loading...</p>;
  }

  if (!company) {
    return <p className="text-gray-300">Company not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Company Details</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-white">{company.orgName}</h3>
        <div className="mt-4 space-y-2">
          <p className="text-gray-300">Leader: {company.leaderName}</p>
          <p className="text-gray-300">Panels: {company.numPanels}</p>
          <p className="text-gray-300">Org Email: {company.orgEmail}</p>
          <p className="text-gray-300">Leader Email: {company.leaderEmail}</p>
          <p className="text-gray-300">Target: {company.target}</p>
          <p className="text-gray-300">Location: {company.location}</p>
          <p className="text-gray-300">Budget: {company.budget}</p>
          <p className="text-gray-300">Duration: {company.projectDuration}</p>
          <p className="text-gray-300">Energy Consumption: {company.energyConsumption}</p>
          <p className="text-gray-300">Notes: {company.notes}</p>
        </div>
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default CompanyDetails;