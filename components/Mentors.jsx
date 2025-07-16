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
export default function Mentors() {
  return (
    <section id="mentors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Mentors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry leaders and healthcare experts guiding our innovation
            journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Dr. James Wilson",
              role: "Chief Medical Officer",
              company: "HealthTech Solutions",
              image:
                "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
              description:
                "30+ years in healthcare innovation and digital transformation",
            },
            {
              name: "Prof. Lisa Anderson",
              role: "AI Research Director",
              company: "Stanford Medical School",
              image:
                "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face",
              description:
                "Leading researcher in AI applications for medical diagnosis",
            },
            {
              name: "Dr. Robert Taylor",
              role: "Digital Health Consultant",
              company: "MedTech Innovations",
              image:
                "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
              description:
                "Pioneer in IoT healthcare solutions and telemedicine",
            },
          ].map((mentor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {mentor.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-1">
                  {mentor.role}
                </p>
                <p className="text-purple-600 text-sm mb-3">{mentor.company}</p>
                <p className="text-gray-600">{mentor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
