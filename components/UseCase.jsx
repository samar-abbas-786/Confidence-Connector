"use client";
import { Activity, Stethoscope, Shield, Zap } from "lucide-react";
import RevealScroll from "./Reveal";

const UseCase = () => {
  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <RevealScroll delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Use Cases
              </h2>
            </RevealScroll>
            <RevealScroll delay={0.3}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real-world applications transforming healthcare delivery
              </p>
            </RevealScroll>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <RevealScroll delay={0.4}>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg w-fit mb-4">
                  <Activity className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Remote Patient Monitoring
                </h3>
                <p className="text-gray-600 mb-4">
                  Continuous monitoring of patients with chronic conditions from
                  the comfort of their homes.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Diabetes management</li>
                  <li>• Heart disease monitoring</li>
                  <li>• Post-surgery recovery</li>
                  <li>• Elderly care support</li>
                </ul>
              </div>
            </RevealScroll>

            <RevealScroll delay={0.5}>
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl">
                <div className="bg-gradient-to-r from-red-600 to-orange-600 p-3 rounded-lg w-fit mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Emergency Detection
                </h3>
                <p className="text-gray-600 mb-4">
                  AI-powered early warning system for critical health events and
                  emergencies.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Cardiac arrest detection</li>
                  <li>• Stroke warning signs</li>
                  <li>• Severe allergic reactions</li>
                  <li>• Fall detection for elderly</li>
                </ul>
              </div>
            </RevealScroll>

            <RevealScroll delay={0.6}>
              <div className="bg-gradient-to-r from-blue-50 to-blue-50 p-8 rounded-xl">
                <div className="bg-gradient-to-r from-blue-600 to-blue-600 p-3 rounded-lg w-fit mb-4">
                  <Stethoscope className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Telemedicine Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Enhanced virtual consultations with real-time health data and
                  AI insights.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Virtual health assessments</li>
                  <li>• Prescription management</li>
                  <li>• Follow-up consultations</li>
                  <li>• Specialist referrals</li>
                </ul>
              </div>
            </RevealScroll>

            <RevealScroll delay={0.7}>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg w-fit mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Preventive Healthcare
                </h3>
                <p className="text-gray-600 mb-4">
                  Proactive health management through continuous monitoring and
                  early intervention.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Health trend analysis</li>
                  <li>• Lifestyle recommendations</li>
                  <li>• Medication adherence</li>
                  <li>• Wellness programs</li>
                </ul>
              </div>
            </RevealScroll>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCase;
