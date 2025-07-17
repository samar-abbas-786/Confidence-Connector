import { useView } from "@/context/viewContext";
import CountUp from "react-countup";
const Statistics = () => {
  const { ref, isView } = useView();

  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming healthcare outcomes through intelligent technology
            </p>
          </div>

          <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl mb-4">
                <div className="text-4xl font-bold text-white">
                  {isView && (
                    <CountUp start={0} duration={3} end={95} suffix="%" />
                  )}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Accuracy Rate
              </h3>
              <p className="text-gray-600">
                AI diagnostic accuracy in preliminary assessments
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-600 p-6 rounded-xl mb-4">
                <div className="text-4xl font-bold text-white">24/7</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Monitoring
              </h3>
              <p className="text-gray-600">
                Continuous health parameter tracking
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-xl mb-4">
                <div className="text-4xl font-bold text-white">
                  {" "}
                  {isView && (
                    <CountUp start={0} duration={3} end={50} suffix="K+" />
                  )}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Patients
              </h3>
              <p className="text-gray-600">
                Successfully monitored and diagnosed
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 rounded-xl mb-4">
                <div className="text-4xl font-bold text-white">
                  {isView && (
                    <CountUp start={0} duration={3} end={80} suffix="%" />
                  )}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Faster
              </h3>
              <p className="text-gray-600">
                Quicker diagnosis compared to traditional methods
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Statistics;
