"use client";
import React, { useState } from "react";
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
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Mentors from "@/components/Mentors";

const SmartHealthcareUI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <AboutUs />
      {/* Features Section */}
      <Features />

      {/* Team Section */}
      <Team />

      {/* Mentors Section */}
      <Mentors />

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming healthcare outcomes through intelligent technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl mb-4">
                <div className="text-4xl font-bold text-white">95%</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Accuracy Rate
              </h3>
              <p className="text-gray-600">
                AI diagnostic accuracy in preliminary assessments
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 rounded-xl mb-4">
                <div className="text-4xl font-bold text-white">24/7</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Monitoring
              </h3>
              <p className="text-gray-600">
                Continuous health parameter tracking
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-xl mb-4">
                <div className="text-4xl font-bold text-white">50K+</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Patients
              </h3>
              <p className="text-gray-600">
                Successfully monitored and diagnosed
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 rounded-xl mb-4">
                <div className="text-4xl font-bold text-white">80%</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Faster
              </h3>
              <p className="text-gray-600">
                Quicker diagnosis compared to traditional methods
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with cutting-edge technologies for reliability and
              scalability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg w-fit mb-4">
                <Monitor className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Next.js & React</li>
                <li>• Tailwind CSS</li>
                <li>• TypeScript</li>
                <li>• PWA Support</li>
                <li>• Responsive Design</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-3 rounded-lg w-fit mb-4">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Node.js & Express</li>
                <li>• MongoDB & Redis</li>
                <li>• REST APIs</li>
                <li>• WebSocket Support</li>
                <li>• Microservices</li>
              </ul>
            </div>

            {/* AI & IoT */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg w-fit mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI & IoT</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• TensorFlow & PyTorch</li>
                <li>• Arduino & Raspberry Pi</li>
                <li>• MQTT Protocol</li>
                <li>• Machine Learning</li>
                <li>• Computer Vision</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world applications transforming healthcare delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Remote Monitoring */}
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

            {/* Emergency Detection */}
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

            {/* Telemedicine */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-3 rounded-lg w-fit mb-4">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Telemedicine Support
              </h3>
              <p className="text-gray-600 mb-4">
                Enhanced virtual consultations with real-time health data and AI
                insights.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Virtual health assessments</li>
                <li>• Prescription management</li>
                <li>• Follow-up consultations</li>
                <li>• Specialist referrals</li>
              </ul>
            </div>

            {/* Preventive Care */}
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
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What People Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from healthcare professionals and patients who have
              experienced the difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Amanda Foster",
                role: "Cardiologist",
                hospital: "City General Hospital",
                testimonial:
                  "The AI diagnostic capabilities have significantly improved our ability to detect early signs of cardiac issues. The real-time monitoring has been a game-changer for our patients.",
                image:
                  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
              },
              {
                name: "Maria Gonzalez",
                role: "Patient",
                hospital: "Diabetes Management",
                testimonial:
                  "Having my health monitored 24/7 gives me peace of mind. The AI chatbot helps me understand my symptoms and when to seek medical attention.",
                image:
                  "https://images.unsplash.com/photo-1494790108755-2616b9d9c87f?w=400&h=400&fit=crop&crop=face",
              },
              {
                name: "Dr. Kevin Park",
                role: "Emergency Medicine",
                hospital: "Metro Emergency Center",
                testimonial:
                  "The emergency detection system has helped us respond faster to critical situations. The integration with our existing systems was seamless.",
                image:
                  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-blue-600">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">
                      {testimonial.hospital}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "{testimonial.testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us in revolutionizing healthcare with AI-powered monitoring and
            diagnostics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">SmartHealth AI</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming healthcare through intelligent monitoring and
                AI-powered diagnostics.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Users className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Activity className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Heart className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Team
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Health Monitoring
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    AI Diagnostics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Telemedicine
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Data Analytics
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">info@smarthealth.ai</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">Silicon Valley, CA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 SmartHealth AI. All rights reserved. | Privacy Policy |
              Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SmartHealthcareUI;
