"use client";
import RevealScroll from "./Reveal";

export default function Team() {
  const Teammembers = [
    {
      name: "Mr. Saif Malik",
      role: "Director and Founder",
      image: "/saifmalik.jpg",
      description:
        "Director and Founder and a Mechanical Engineer known for his visionary leadership and strategic approach to innovation.",
    },
    {
      name: "Mr. Abdul Wahid",
      role: "Production Head",
      image: "/Abdul Wahid.jpg",
      description:
        "Production Head and a Mechanical Engineer, ensures efficient operations with a focus on precision and quality.",
    },
    {
      name: "Mr. Aman Khan",
      role: "Sales and Marketing Head",
      image: "/Mr.Aman Khan.jpg",
      description:
        "Sales and Marketing Head with a background in Electrical Engineering, drives growth through strategic outreach and innovative market solutions.",
    },
    {
      name: "Mr. Mohd Affan",
      role: "Quality Head",
      image: "/mohdaffan.webp",
      description:
        "Quality Head and Mechanical Engineer, ensures product excellence through rigorous quality standards and attention to detail.",
    },
    {
      name: "Mr. Amaan Ullah",
      role: "Senior Mechanical Engineer",
      image: "/amaanmultani.jpg",
      description:
        "Senior Mechanical Engineer, brings expertise and dedication to delivering high-precision engineering solutions.",
    },
    {
      name: "Mr. Arham Sajid",
      role: "Senior Mechanical Engineer",
      image: "/arhamsajid.jpg",
      description:
        "Senior Mechanical Engineer, specializes in advanced mechanical systems with a strong focus on innovation and reliability.",
    },
    {
      name: "Mr. Samar Abbas",
      role: "CS and IT Associate",
      image: "/samar.jpg",
      description:
        "Senior Mechanical Engineer, specializes in advanced mechanical systems with a strong focus on innovation and reliability.",
    },
    {
      name: "Mr. Mohd Athar",
      role: "CS and IT Associate",
      image: "/athar.jpg",
      description:
        "Senior Mechanical Engineer, specializes in advanced mechanical systems with a strong focus on innovation and reliability.",
    },
    {
      name: "Miss Daniya Parveen",
      role: "Web Developer and Technical HR",
      image: "/daniya.jpg",
      description:
        "Web Developer and Technical HR, combines technical skills with team coordination to support development and hiring.",
    },
    {
      name: "Miss Imanica Hussain",
      role: "Web Developer and CS HR",
      image: "/imanica.jpg",
      description:
        "Leverages her Computer Science background to support both technical development and team management.",
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
