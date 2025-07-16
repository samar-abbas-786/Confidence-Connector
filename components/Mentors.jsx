import RevealScroll from "./Reveal";

export default function Mentors() {
  const Mentors = [
    {
      name: "Dr. Mohd Yunus Khan",
      role: "Mentor & Advisor",
      company: "E&E Solutions Pvt. Ltd.",
      image: "./mr.yunus.jpg",
      description:
        "Founder of E&E Solutions Pvt. Ltd., guiding the team with visionary leadership and industry insight.",
    },
    {
      name: "Er. Mohammed Hamza",
      role: "Mentor & Advisor",
      company: "E&E Solutions Pvt. Ltd.",
      image: "./mr.hamza.jpg",
      description:
        "Co-founder of E&E Solutions Pvt. Ltd., providing strategic direction and technical expertise.",
    },
  ];

  return (
    <section
      id="mentors"
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealScroll delay={0.1}>
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200 rounded-full mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700">
                Expert Guidance
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Our Mentors
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Experienced professionals mentoring us with{" "}
              <span className="text-blue-600 font-semibold">insight</span> and{" "}
              <span className="text-indigo-600 font-semibold">direction</span>.
            </p>
          </div>
        </RevealScroll>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
          {Mentors.map((mentor, index) => (
            <RevealScroll key={index} delay={0.2 + index * 0.2}>
              <div className="group relative">
                {/* Card shadow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/90 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  {/* Image container - clean and compact */}
                  <div className="relative h-40 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {mentor.name}
                    </h3>

                    <div className="flex flex-col space-y-1 mb-4">
                      <p className="text-blue-600 text-sm font-semibold">
                        {mentor.role}
                      </p>
                      <p className="text-indigo-600 text-sm font-medium">
                        {mentor.company}
                      </p>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {mentor.description}
                    </p>

                    {/* Decorative bottom border */}
                    <div className="mt-4 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </RevealScroll>
          ))}
        </div>

        {/* Additional trust section */}
        <RevealScroll delay={0.6}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-6 text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-sm font-medium">Industry Leaders</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
                </div>
                <span className="text-sm font-medium">Expert Guidance</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                </div>
                <span className="text-sm font-medium">Strategic Vision</span>
              </div>
            </div>
          </div>
        </RevealScroll>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
