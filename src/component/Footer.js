import React, { useState } from "react";
// import { Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { Sun, Battery, Building2, ArrowRight, CheckCircle2, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Calculator, Shield, Clock, Users, ChevronRight, Globe, Zap, LineChart } from 'lucide-react';

function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <footer className="bg-gray-900 border-t mt-10 border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <Sun className="w-8 h-8 text-blue-500" />
                <span className="ml-2 text-xl font-bold text-white">BPN Solutions</span>
              </div>
              <p className="text-gray-400">
                Connecting you with the best solar solutions for a sustainable future.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                {['services', 'companies', 'benefits', 'contact'].map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <Phone className="w-5 h-5 mr-2" />
                  1-800-SOLAR-HELP
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 mr-2" />
                  contact@bpnsolutions.com
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 BPN Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
