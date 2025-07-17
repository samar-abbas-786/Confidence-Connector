import React from "react";
import RevealScroll from "../Reveal";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      {/* Floating medical icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <div className="w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float delay-1000">
          <div className="w-6 h-6 bg-indigo-500 rounded-full opacity-20"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float delay-2000">
          <div className="w-10 h-10 bg-cyan-500 rounded-full opacity-20"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <RevealScroll>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200 rounded-full mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700">
                Next Generation Healthcare
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                AI-Powered{" "}
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-800 to-blue-800 bg-clip-text text-transparent">
                Smart Healthcare
              </span>
            </h1>

            {/* Enhanced description */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl leading-relaxed">
              Revolutionary healthcare system combining{" "}
              <span className="text-blue-600 font-semibold">IoT sensors</span>,
              <span className="text-indigo-600 font-semibold">
                {" "}
                AI diagnostics
              </span>
              , and{" "}
              <span className="text-cyan-600 font-semibold">
                real-time monitoring
              </span>{" "}
              for early detection and continuous patient care.
            </p>

            {/* Enhanced buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-w-[200px]">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group relative px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-w-[200px]">
                <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">
                  Learn More
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Feature highlights */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
              <div className="group p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/60 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  IoT Integration
                </h3>
                <p className="text-gray-600">
                  Seamless sensor network for continuous monitoring
                </p>
              </div>

              <div className="group p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/60 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  AI Diagnostics
                </h3>
                <p className="text-gray-600">
                  Advanced machine learning for accurate predictions
                </p>
              </div>

              <div className="group p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/60 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Real-time Care
                </h3>
                <p className="text-gray-600">
                  Instant alerts and continuous patient monitoring
                </p>
              </div>
            </div>
          </RevealScroll>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Hero;
