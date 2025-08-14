import React from 'react';
import { Award, Users, Mic } from 'lucide-react';

const WhyMagsmen: React.FC = () => {
  const highlights = [
    {
      icon: Users,
      text: "Trusted by brands across India"
    },
    {
      icon: Award,
      text: "Featured in leading publications"
    },
    {
      icon: Mic,
      text: "Delivered 15+ speeches in the past year"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Magsmen is the Brand Consulting Partner
              <span className="text-blue-600 block">Trusted Across India</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We've helped IPL sponsors, D2C startups, celebrities, and Fortune 25 companies build brands that stand out and scale up.
            </p>
            
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">Founded by Sandeep N</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Consultant of the Year 2023.</strong> Magsmen is known for solving brand problems that others can't even see.
                <br /><br />
                No fluff. No noise. Just strategy, clarity, and growth.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-orange-600" />
                    </div>
                    <span className="text-gray-700 font-medium">✨ {highlight.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-orange-500 rounded-2xl p-8 text-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Consultant of the Year 2023</h3>
                <p className="text-blue-100">
                  Recognized for exceptional brand strategy and founder-focused consulting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMagsmen;