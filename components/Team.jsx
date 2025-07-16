// import React from "react";

// export default function Team() {
//   const teamMembers = [
//     {
//       name: "Dr. Sarah Johnson",
//       role: "Lead AI Researcher",
//       image:
//         "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
//       description: "Expert in machine learning and healthcare AI systems",
//     },
//     {
//       name: "Michael Chen",
//       role: "IoT Developer",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
//       description:
//         "Specialist in sensor integration and real-time data processing",
//     },
//     {
//       name: "Emily Rodriguez",
//       role: "Frontend Developer",
//       image:
//         "https://images.unsplash.com/photo-1494790108755-2616b9d9c87f?w=400&h=400&fit=crop&crop=face",
//       description: "UI/UX expert focused on healthcare user experience",
//     },
//     {
//       name: "David Kim",
//       role: "Backend Engineer",
//       image:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
//       description: "Database architect and API development specialist",
//     },
//     {
//       name: "Alex Thompson",
//       role: "Mobile Developer",
//       image:
//         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
//       description: "Cross-platform mobile app development specialist",
//     },
//     {
//       name: "Jessica Park",
//       role: "Data Scientist",
//       image:
//         "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
//       description: "Healthcare data analytics and machine learning expert",
//     },
//     {
//       name: "Robert Wilson",
//       role: "DevOps Engineer",
//       image:
//         "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
//       description: "Cloud infrastructure and deployment automation specialist",
//     },
//     {
//       name: "Maria Garcia",
//       role: "Quality Assurance",
//       image:
//         "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face",
//       description: "Healthcare software testing and quality assurance expert",
//     },
//   ];

//   // Duplicate the array to create seamless infinite scroll
//   const duplicatedMembers = [...teamMembers, ...teamMembers];

//   return (
//     <section id="team" className="py-20 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Meet Our Team
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Passionate developers and healthcare innovators working together to
//             transform healthcare
//           </p>
//         </div>

//         {/* Animated Team Row */}
//         <div className="relative">
//           {/* Gradient overlays for smooth fade effect */}
//           <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white via-white to-transparent z-10"></div>
//           <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white via-white to-transparent z-10"></div>

//           {/* Scrolling container */}
//           <div className="overflow-hidden">
//             <div className="flex animate-scroll">
//               {duplicatedMembers.map((member, index) => (
//                 <div
//                   key={index}
//                   className="flex-shrink-0 w-80 mx-4 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
//                 >
//                   <div className="relative">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

//                     {/* Overlay with name and role */}
//                     <div className="absolute bottom-4 left-4 text-white">
//                       <h3 className="text-xl font-bold mb-1">{member.name}</h3>
//                       <p className="text-blue-200 font-semibold">
//                         {member.role}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Card content */}
//                   <div className="p-6">
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       {member.description}
//                     </p>

//                     {/* Skill indicators */}
//                     <div className="flex flex-wrap gap-2 mt-4">
//                       <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
//                         Healthcare
//                       </span>
//                       <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
//                         AI/ML
//                       </span>
//                       <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
//                         Innovation
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Team Stats */}
//         <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
//             <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
//             <div className="text-gray-600">Team Members</div>
//           </div>
//           <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
//             <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
//             <div className="text-gray-600">Years Experience</div>
//           </div>
//           <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
//             <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
//             <div className="text-gray-600">Projects Completed</div>
//           </div>
//           <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
//             <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
//             <div className="text-gray-600">Support Available</div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         .animate-scroll {
//           animation: scroll 10s linear infinite;
//         }

//         .animate-scroll:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </section>
//   );
// }
export default function Team() {
  return (
    <section id="team" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Passionate developers and healthcare innovators working together to
            transform healthcare
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Dr. Sarah Johnson",
              role: "Lead AI Researcher",
              image:
                "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
              description:
                "Expert in machine learning and healthcare AI systems",
            },
            {
              name: "Michael Chen",
              role: "IoT Developer",
              image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
              description:
                "Specialist in sensor integration and real-time data processing",
            },
            {
              name: "Emily Rodriguez",
              role: "Frontend Developer",
              image:
                "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&crop=face",
              description: "UI/UX expert focused on healthcare user experience",
            },
            {
              name: "David Kim",
              role: "Backend Engineer",
              image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
              description: "Database architect and API development specialist",
            },
            {
              name: "Dr. Sarah Johnson",
              role: "Lead AI Researcher",
              image:
                "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
              description:
                "Expert in machine learning and healthcare AI systems",
            },
            {
              name: "Michael Chen",
              role: "IoT Developer",
              image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
              description:
                "Specialist in sensor integration and real-time data processing",
            },
            {
              name: "Emily Rodriguez",
              role: "Frontend Developer",
              image:
                "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&crop=face",
              description: "UI/UX expert focused on healthcare user experience",
            },
            {
              name: "David Kim",
              role: "Backend Engineer",
              image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
              description: "Database architect and API development specialist",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
