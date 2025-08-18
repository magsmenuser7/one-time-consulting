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
              <span className="text-[#7641c8] block">Trusted Across India</span>
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
                    <div className="w-8 h-8 bg-[#7641c8]/20 rounded-full flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-[#7641c8]" />
                    </div>
                    <span className="text-gray-700 font-medium">✨ {highlight.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
<div className="relative w-100 h-[70%] rounded-2xl overflow-hidden shadow-lg">
  <video
    className="w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src={`${import.meta.env.BASE_URL}otc-video.mp4`} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
        </div>
      </div>
    </section>
  );
};

export default WhyMagsmen;