"use client";
import {
  Monitor,
  MessageCircle,
  Database,
  UserCheck,
  Thermometer,
  BarChart3,
  Zap,
} from "lucide-react";
import RevealScroll from "../Reveal";

const Features = () => {
  return (
    <div>
      <section
        id="features"
        className="py-20 bg-gradient-to-r from-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <RevealScroll delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Key Features
              </h2>
            </RevealScroll>
            <RevealScroll delay={0.3}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive healthcare solutions powered by cutting-edge AI
                and IoT technology
              </p>
            </RevealScroll>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Real-time Monitoring",
                description:
                  "Continuous monitoring of vital signs including temperature, BPM, and SPO2 levels",
                icon: <Monitor className="h-8 w-8 text-white" />,
                gradient: "from-blue-600 to-purple-600",
              },
              {
                title: "AI Assistant",
                description:
                  "Intelligent chatbot for symptom logging and preliminary diagnosis recommendations",
                icon: <MessageCircle className="h-8 w-8 text-white" />,
                gradient: "from-blue-600 to-blue-600",
              },
              {
                title: "Patient Records",
                description:
                  "Centralized patient history management with secure data storage and retrieval",
                icon: <Database className="h-8 w-8 text-white" />,
                gradient: "from-purple-600 to-pink-600",
              },
              {
                title: "Doctor Consultation",
                description:
                  "Smart consultation recommendations based on symptoms and health data analysis",
                icon: <UserCheck className="h-8 w-8 text-white" />,
                gradient: "from-orange-600 to-red-600",
              },
            ].map((feature, index) => (
              <RevealScroll key={index} delay={0.1 * (index + 1)}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div
                    className={`bg-gradient-to-r ${feature.gradient} p-3 rounded-lg w-fit mb-4`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </RevealScroll>
            ))}
          </div>

          {/* Technical Features */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "IoT Integration",
                description:
                  "Seamless integration with wearable and non-invasive monitoring devices",
                icon: <Thermometer className="h-8 w-8 text-white" />,
                gradient: "from-blue-600 to-purple-600",
              },
              {
                title: "REST APIs",
                description:
                  "Robust backend with comprehensive APIs for data management",
                icon: <BarChart3 className="h-8 w-8 text-white" />,
                gradient: "from-blue-600 to-blue-600",
              },
              {
                title: "Real-time Analytics",
                description:
                  "Advanced analytics for early detection and health insights",
                icon: <Zap className="h-8 w-8 text-white" />,
                gradient: "from-purple-600 to-pink-600",
              },
            ].map((item, index) => (
              <RevealScroll key={index} delay={0.3 * (index + 1)}>
                <div className="text-center">
                  <div
                    className={`bg-gradient-to-r ${item.gradient} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}
                  >
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </RevealScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
