import { CheckCircle, Target, TrendingUp, ShieldCheck } from "lucide-react"; // Lucide icons
import React from "react";

const BcsWhy = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Why Choose <span className="text-blue-600">BusyAge</span> for Investment Opportunities?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-10">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition flex gap-4">
            <CheckCircle className="text-blue-600 w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold mb-1">Structured Clarity</h3>
              <p className="text-gray-600">Transparent investment frameworks and processes.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition flex gap-4">
            <Target className="text-green-600 w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold mb-1">Strategic Alignment</h3>
              <p className="text-gray-600">Investments matched to investor profiles and objectives.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition flex gap-4">
            <TrendingUp className="text-yellow-500 w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold mb-1">Scalable Ecosystems</h3>
              <p className="text-gray-600">Ventures ready for sustainable growth and scalability.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition flex gap-4">
            <ShieldCheck className="text-purple-600 w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold mb-1">Operational Excellence</h3>
              <p className="text-gray-600">Proven systems ensuring consistent execution and returns.</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center mt-12 gap-4">
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full transition font-medium">
            Explore Investment Opportunities
          </button>
          <button className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full transition font-medium">
            Request Investor Briefing
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-full transition font-medium">
            Access Investment Reports
          </button>
        </div>
      </div>
    </section>
  );
};

export default BcsWhy;
