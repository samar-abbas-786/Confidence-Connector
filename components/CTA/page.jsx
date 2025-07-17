"use client";
import RevealScroll from "../Reveal"; // Ensure this is correctly imported

const CTA = () => {
  return (
    <div>
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealScroll delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Healthcare?
            </h2>
          </RevealScroll>

          <RevealScroll delay={0.2}>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join us in revolutionizing healthcare with AI-powered monitoring
              and diagnostics
            </p>
          </RevealScroll>

          <RevealScroll delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Request Demo
              </button>
            </div>
          </RevealScroll>
        </div>
      </section>
    </div>
  );
};

export default CTA;
