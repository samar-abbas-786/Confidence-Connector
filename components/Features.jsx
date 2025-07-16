import React from "react";
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
const Features = () => {
  return (
    <div>
      <section
        id="features"
        className="py-20 bg-gradient-to-r from-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare solutions powered by cutting-edge AI and
              IoT technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg w-fit mb-4">
                <Monitor className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Real-time Monitoring
              </h3>
              <p className="text-gray-600">
                Continuous monitoring of vital signs including temperature, BPM,
                and SPO2 levels
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-3 rounded-lg w-fit mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI Assistant
              </h3>
              <p className="text-gray-600">
                Intelligent chatbot for symptom logging and preliminary
                diagnosis recommendations
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg w-fit mb-4">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Patient Records
              </h3>
              <p className="text-gray-600">
                Centralized patient history management with secure data storage
                and retrieval
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-3 rounded-lg w-fit mb-4">
                <UserCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Doctor Consultation
              </h3>
              <p className="text-gray-600">
                Smart consultation recommendations based on symptoms and health
                data analysis
              </p>
            </div>
          </div>

          {/* Technical Features */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Thermometer className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                IoT Integration
              </h4>
              <p className="text-gray-600">
                Seamless integration with wearable and non-invasive monitoring
                devices
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                REST APIs
              </h4>
              <p className="text-gray-600">
                Robust backend with comprehensive APIs for data management
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Real-time Analytics
              </h4>
              <p className="text-gray-600">
                Advanced analytics for early detection and health insights
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
