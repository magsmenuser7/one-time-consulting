import React from 'react';
import { Search, AlertTriangle, Lightbulb } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "We Study Your Brand",
      description: "We audit your current perception, messaging, and position."
    },
    {
      number: "02",
      icon: AlertTriangle,
      title: "We Find the Blockers",
      description: "We diagnose what's holding you back inside and outside."
    },
    {
      number: "03",
      icon: Lightbulb,
      title: "We Give You the Solution",
      description: "You walk away with a clear action plan and direction."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            One-Time Consulting.
            <span className="text-[#7641c8] block">Zero Guesswork.</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-xl p-8 shadow-lg text-center group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-[#000] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="w-16 h-16 bg-[#7641c8]/20 rounded-full flex items-center justify-center mx-auto mb-6 mt-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-[#7641c8]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center bg-blue-50 rounded-xl p-8">
          <p className="text-lg text-gray-700 font-medium">
            This is not a retainer. Not a course. Just a one-time, high value consulting format.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;