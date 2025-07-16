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
import Statistics from "@/components/Statistics";
import UseCase from "@/components/UseCase";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import Footer from "@/components/footer";

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
      <Statistics />

      {/* Use Cases Section */}
      <UseCase />
      {/* Testimonials Section */}
      <Testimonial />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SmartHealthcareUI;
