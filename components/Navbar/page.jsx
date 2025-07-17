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
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const goToRegister = () => {
    router.push("/register");
  };

  return (
    <div>
      <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="relative bg-white rounded-xl p-2 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/Conf.jpg"
                    alt="Confidence Connector"
                    width={40}
                    height={40}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Confidence Connector
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    Innovative Engineering Solutions
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                <a
                  href="#home"
                  className="relative group px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-blue-50"
                >
                  Home
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a
                  href="#about"
                  className="relative group px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-blue-50"
                >
                  About
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a
                  href="#features"
                  className="relative group px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-blue-50"
                >
                  Features
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a
                  href="#team"
                  className="relative group px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-blue-50"
                >
                  Team
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a
                  href="#mentors"
                  className="relative group px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-blue-50"
                >
                  Mentors
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a
                  href="#contact"
                  className="relative group px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-blue-50"
                >
                  Contact
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </div>
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <button className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-100">
              <a
                href="#home"
                className="group flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
              >
                <span>Home</span>
                <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#about"
                className="group flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
              >
                <span>About</span>
                <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#features"
                className="group flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
              >
                <span>Features</span>
                <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>
              <a
                href="#team"
                className="group flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
              >
                <span>Team</span>
                <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>
              <a
                href="#mentors"
                className="group flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
              >
                <span>Mentors</span>
                <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>
              <a
                href="#contact"
                className="group flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
              >
                <span>Contact</span>
                <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>

              {/* Mobile CTA Button */}
              <div className="pt-4 pb-2 hover:cursor-pointer">
                <button
                  onClick={goToRegister}
                  className="w-full hover:cursor-pointer px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
