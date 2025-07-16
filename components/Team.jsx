"use client";
import RevealScroll from "./Reveal";

export default function Team() {
  const Teammembers = [
    {
      name: "Mr. Saif Malik",
      role: "Director and Founder",
      image: "/saifmalik.jpg",
      description:
        "Visionary leader and Mechanical Engineer driving strategic innovation.",
    },
    {
      name: "Mr. Abdul Wahid",
      role: "Production Head",
      image: "/Abdul Wahid.jpg",
      description: "Leads efficient and quality-focused production operations.",
    },
    {
      name: "Mr. Aman Khan",
      role: "Sales and Marketing Head",
      image: "/Mr.Aman Khan.jpg",
      description: "Drives growth through strategic marketing and outreach.",
    },
    {
      name: "Mr. Mohd Affan",
      role: "Quality Head",
      image: "/mohdaffan.webp",
      description: "Ensures top-tier product quality through strict standards.",
    },
    {
      name: "Mr. Amaan Ullah",
      role: "Senior Mechanical Engineer",
      image: "/amaanmultani.jpg",
      description:
        "Expert in precision-driven mechanical engineering solutions.",
    },
    {
      name: "Mr. Arham Sajid",
      role: "Senior Mechanical Engineer",
      image: "/arhamsajid.jpg",
      description: "Innovates in advanced mechanical system development.",
    },
    {
      name: "Mr. Samar Abbas",
      role: "CS and IT Associate",
      image: "/samar.jpg",
      description:
        "Full Stack Developer focused on AI, automation, and scalable web solutions.",
    },
    {
      name: "Mr. Mohd Athar",
      role: "CS and IT Associate",
      image: "/athar.jpg",
      description:
        "Backend Developer specializing in secure, scalable systems.",
    },
    {
      name: "Miss Daniya Parveen",
      role: "Web Developer and Technical HR",
      image: "/daniya.jpg",
      description: "Blends web development with technical HR expertise.",
    },
    {
      name: "Miss Imanica Hussain",
      role: "Web Developer and CS HR",
      image: "/imanica.jpg",
      description: "Supports development and HR with a CS background.",
    },
  ];

  return (
    <section id="team" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <RevealScroll delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Meet Our Team
            </h2>
          </RevealScroll>
          <RevealScroll delay={0.3}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Passionate developers and healthcare innovators working together
              to transform healthcare
            </p>
          </RevealScroll>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Teammembers.map((member, index) => (
            <RevealScroll key={index} delay={0.18 * index}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </div>
              </div>
            </RevealScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
