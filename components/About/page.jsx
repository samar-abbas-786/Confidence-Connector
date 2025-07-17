"use client";
import { X, Activity, Brain, Shield } from "lucide-react";
import RevealScroll from "../Reveal"; // Optional if you're using animation

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <RevealScroll delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Confidence Connector
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bridging the gap between patients and healthcare providers through
              intelligent technology
            </p>
          </RevealScroll>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <RevealScroll delay={0.3}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                The Problem We Solve
              </h3>
              <div className="space-y-4">
                {[
                  "Limited real-time interaction between patients and medical professionals",
                  "Fragmented monitoring systems without AI integration",
                  "Lack of early diagnosis support in remote areas",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-red-100 p-2 rounded-lg">
                      <X className="h-5 w-5 text-red-600" />
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealScroll>

          <RevealScroll delay={0.4}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Solution
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: <Activity className="h-5 w-5 text-green-600" />,
                    text: "Real-time body parameter monitoring via IoT sensors",
                  },
                  {
                    icon: <Brain className="h-5 w-5 text-green-600" />,
                    text: "AI-assisted chatbot for symptom logging and diagnosis",
                  },
                  {
                    icon: <Shield className="h-5 w-5 text-green-600" />,
                    text: "Secure patient history management and consultation recommendations",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      {item.icon}
                    </div>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealScroll>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
