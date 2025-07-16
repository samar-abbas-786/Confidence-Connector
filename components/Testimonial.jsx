"use client";
import RevealScroll from "./Reveal";

const Testimonial = () => {
  return (
    <div>
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <RevealScroll delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What People Say
              </h2>
            </RevealScroll>
            <RevealScroll delay={0.3}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from healthcare professionals and patients who have
                experienced the difference
              </p>
            </RevealScroll>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Amanda Foster",
                role: "Cardiologist",
                hospital: "City General Hospital",
                testimonial:
                  "The AI diagnostic capabilities have significantly improved our ability to detect early signs of cardiac issues. The real-time monitoring has been a game-changer for our patients.",
                image:
                  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
              },
              {
                name: "Maria Gonzalez",
                role: "Patient",
                hospital: "Diabetes Management",
                testimonial:
                  "Having my health monitored 24/7 gives me peace of mind. The AI chatbot helps me understand my symptoms and when to seek medical attention.",
                image:
                  "https://images.unsplash.com/photo-1494790108755-2616b9d9c87f?w=400&h=400&fit=crop&crop=face",
              },
              {
                name: "Dr. Kevin Park",
                role: "Emergency Medicine",
                hospital: "Metro Emergency Center",
                testimonial:
                  "The emergency detection system has helped us respond faster to critical situations. The integration with our existing systems was seamless.",
                image:
                  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
              },
            ].map((testimonial, index) => (
              <RevealScroll key={index} delay={0.4 + index * 0.2}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-blue-600">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm">
                        {testimonial.hospital}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "{testimonial.testimonial}"
                  </p>
                </div>
              </RevealScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
