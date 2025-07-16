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
const AboutUs = () => {
  return (
    <div>
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About SmartHealth AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bridging the gap between patients and healthcare providers through
              intelligent technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                The Problem We Solve
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <X className="h-5 w-5 text-red-600" />
                  </div>
                  <p className="text-gray-700">
                    Limited real-time interaction between patients and medical
                    professionals
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <X className="h-5 w-5 text-red-600" />
                  </div>
                  <p className="text-gray-700">
                    Fragmented monitoring systems without AI integration
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <X className="h-5 w-5 text-red-600" />
                  </div>
                  <p className="text-gray-700">
                    Lack of early diagnosis support in remote areas
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Solution
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Activity className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-gray-700">
                    Real-time body parameter monitoring via IoT sensors
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Brain className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-gray-700">
                    AI-assisted chatbot for symptom logging and diagnosis
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-gray-700">
                    Secure patient history management and consultation
                    recommendations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
