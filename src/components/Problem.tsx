import React from 'react';
import { Users, MessageSquare, TrendingDown, Eye, HelpCircle } from 'lucide-react';

const Problem: React.FC = () => {
  const problems = [
    {
      icon: Users,
      text: "Customers don't remember you"
    },
    {
      icon: MessageSquare,
      text: "Story keeps changing every quarter"
    },
    {
      icon: TrendingDown,
      text: "Sales depend only on the founder"
    },
    {
      icon: Eye,
      text: "Your brand doesn't stand out in your category"
    },
    {
      icon: HelpCircle,
      text: "Everyone says \"do marketing,\" but you're still unclear"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Business Isn't the Problem.
            <span className="text-[#7641c8] block">Your Brand Clarity Is.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            You're working hard. The product is good.
            <br />
            But customers aren't sticking. Sales are inconsistent. Marketing feels random.
            <br />
            <strong>If that sounds familiar this is where clarity begins.</strong>
          </p>
        </div>
        
<div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
  {problems.map((problem, index) => {
    const IconComponent = problem.icon;
    return (
      <div
        key={index}
        className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors duration-200 border-l-4 border-[#7641c8] shadow-lg w-[320px]"
      >
        <div className="w-12 h-12 bg-[#7641c8]/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <IconComponent className="w-6 h-6 text-[#7641c8]" />
        </div>
        <p className="text-gray-800 font-medium">{problem.text}</p>
      </div>
    );
  })}
</div>

      </div>
    </section>
  );
};

export default Problem;