import React from "react";
import RevealScroll from "./Reveal";

const Hero = () => {
  return (
    <div>
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <RevealScroll delay={0.3}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI-Powered{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Smart Healthcare
                </span>
              </h1>
            </RevealScroll>
            <RevealScroll delay={0.35}>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Revolutionary healthcare system combining IoT sensors, AI
                diagnostics, and real-time monitoring for early detection and
                continuous patient care.
              </p>
            </RevealScroll>
            <RevealScroll delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  Get Started
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200">
                  Learn More
                </button>
              </div>
            </RevealScroll>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
