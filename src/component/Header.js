// Header.js
import React, { useContext, useState } from "react";
import { Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userData, signOut } = useContext(UserContext);

  return (
    <nav className="sticky top-0 w-full z-50 bg-gray-900/95 shadow-lg" style={{ backgroundColor: "#111827" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <a className="flex items-center" href="/">
            <Sun className="w-8 h-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-white">BPN Solutions</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["services", "companies", "benefits", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}

            <Link to="/CustomerService" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Customer Service
            </Link>

            {/* Profile and Sign Out Buttons */}
            {userData ? (
              <div className="relative">
                {/* Sign Out Button (behind the Profile button) */}
                <button
                  onClick={signOut}
                  className="bg-transparent hover:bg-red-500 text-white-700 font-semibold hover:text-white  border border-red-500 hover:border-transparent  mr-4" style={{padding:"0.75rem 1.5rem",borderRadius:"0.5rem"}}
                >
                  Sign Out
                </button>

                {/* Profile Button */}
                <Link to="/Profile" className="btn-primary relative z-10">
                  Profile
                </Link>
              </div>
            ) : (
              <Link to="/SolarForm" className="btn-primary">
                Get Started
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["services", "companies", "benefits", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
            <Link to="/CustomerService" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Customer Service
            </Link>
            {userData ? (
              <div>
                <Link to="/Profile" className="btn-primary mr-2">
                  Profile
                </Link>
                <button onClick={signOut} className="w-full mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">Sign Out</button>
                
              </div>
            ) : (
              
              <Link to="/SolarForm" className="btn-primary mr-2">
                Get Started
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;