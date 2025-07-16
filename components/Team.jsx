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
export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate developers and healthcare innovators working together to
            transform healthcare
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                "https://images.unsplash.com/photo-1494790108755-2616b9d9c87f?w=400&h=400&fit=crop&crop=face",
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
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
