"use client";
import { useState } from "react";
import {
  Heart,
  Activity,
  Stethoscope,
  Brain,
  Shield,
  Users,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Monitor,
  MessageCircle,
  Database,
  UserCheck,
  Thermometer,
  BarChart3,
  Zap,
} from "lucide-react";
import Image from "next/image";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Confidence Connector
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#home"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  About
                </a>
                <a
                  href="#features"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Features
                </a>
                <a
                  href="#team"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Team
                </a>
                <a
                  href="#mentors"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Mentors
                </a>
                <a
                  href="#contact"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a
                href="#home"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
              >
                About
              </a>
              <a
                href="#features"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
              >
                Features
              </a>
              <a
                href="#team"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
              >
                Team
              </a>
              <a
                href="#mentors"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
              >
                Mentors
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
