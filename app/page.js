"use client";

import Navbar from "@/components/Navbar/page";
import Hero from "@/components/Hero/page";
import AboutUs from "@/components/About/page";
import Features from "@/components/Features/page";
import Team from "@/components/Team/page";
import Mentors from "@/components/Mentors/page";
import Statistics from "@/components/Statistics/page";
import UseCase from "@/components/UseCase/page";
import Testimonial from "@/components/Testimonial/page";
import CTA from "@/components/CTA/page";
import Footer from "@/components/Footer/page";

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
