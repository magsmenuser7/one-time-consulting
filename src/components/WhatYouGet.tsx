import React from 'react';
import { CheckCircle, Brain, Megaphone, Search, ClipboardList, FileText } from 'lucide-react';

const WhatYouGet: React.FC = () => {
  const deliverables = [
    {
      icon: CheckCircle,
      title: "Full review of your brand's current perception",
      description: "Deep audit of how the market sees you today"
    },
    {
      icon: Brain,
      title: "Clarity on what's really blocking growth",
      description: "Identify the real barriers, not just symptoms"
    },
    {
      icon: Megaphone,
      title: "Right brand message and story",
      description: "Attract the right people with the right words"
    },
    {
      icon: Search,
      title: "Insights on where to grow and how to position",
      description: "Strategic positioning for competitive advantage"
    },
    // {
    //   icon: ClipboardList,
    //   title: "Simple 90-day action plan",
    //   description: "Tailored roadmap for your specific business"
    // },
    {
      icon: FileText,
      title: "Clear, founder-ready strategy deck",
      description: "Move forward with confidence and direction"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What You'll Walk Away With
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No fluff. Just answers, direction, and clarity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;