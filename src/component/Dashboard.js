import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // For navigation

const Dashboard = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("orgName"); // Default sorting by organization name
  const [currentPage, setCurrentPage] = useState(1);
  const [requestsPerPage] = useState(5); // Number of requests per page
  const navigate = useNavigate(); // For navigation

  // Fetch requests from Firestore
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "solarRequests"));
        const requestsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRequests(requestsData);
      } catch (error) {
        console.error("Error fetching requests: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  // Filter requests based on search query
  const filteredRequests = requests.filter((request) =>
    request.orgName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort requests
  const sortedRequests = filteredRequests.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  });

  // Pagination logic
  const indexOfLastRequest = currentPage * requestsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
  const currentRequests = sortedRequests.slice(indexOfFirstRequest, indexOfLastRequest);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Navigate to details page
  const handleViewDetails = (id) => {
    navigate(`/company/${id}`); // Navigate to the company details page
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Developer Dashboard</h2>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by organization name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Sorting Dropdown */}
      <div className="mb-6">
        <label className="text-gray-300 mr-2">Sort by:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="orgName">Organization Name</option>
          <option value="leaderName">Leader Name</option>
          <option value="numPanels">Number of Panels</option>
          <option value="location">Location</option>
          <option value="budget">Budget</option>
        </select>
      </div>

      {/* Loading State */}
      {loading ? (
        <p className="text-gray-300">Loading...</p>
      ) : (
        <>
          {/* Requests Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-800 rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gray-700">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Organization Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Leader Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Panels
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Org Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Leader Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Target
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Budget
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Energy (kWh)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Notes
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {currentRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300">{request.orgName}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{request.leaderName}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{request.numPanels}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{request.orgEmail}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{request.leaderEmail}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{request.target}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{request.location}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{request.budget}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{request.projectDuration}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{request.energyConsumption}</td>
                    <td className="px-6 py-4 text-sm text-gray-300 max-w-xs truncate">{request.notes}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      <button
                        onClick={() => handleViewDetails(request.id)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-center space-x-2">
            {Array.from({ length: Math.ceil(sortedRequests.length / requestsPerPage) }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;