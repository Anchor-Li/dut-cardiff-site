
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2">
              About Us
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The DUT-Cardiff Joint Research Center is dedicated to deep cooperation in scientific research, talent cultivation, and international exchange between the two universities across multiple disciplines.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2">
              Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="https://www.dlut.edu.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Dalian University of Technology
                </a>
              </li>
              <li>
                <a
                  href="https://www.cardiff.ac.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Cardiff University
                </a>
              </li>
              
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                <span>Location</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                <span>email</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                <span>phone number</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Dalian University of Technology - Cardiff University Joint Research Center. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
