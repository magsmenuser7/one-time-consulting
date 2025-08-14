import React from 'react';
import { ArrowRight, MessageCircle, Mail, Phone, Globe } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
          Your Brand Deserves Clarity.
          <span className="block">Not Just More Marketing.</span>
        </h2>
        
        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          If you're ready to understand what's really holding your brand back, book your One-Time Consulting now.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg inline-flex items-center">
            ✅ Book One-Time Consulting for ₹50,000
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          
          <a
            href="https://wa.me/919044910449"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 inline-flex items-center"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Talk to Us First (WhatsApp)
          </a>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <a
            href="mailto:connect@itsnsandeep.com"
            className="flex items-center justify-center space-x-2 text-blue-100 hover:text-white transition-colors duration-200"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">connect@itsnsandeep.com</span>
          </a>
          
          <a
            href="tel:+919044910449"
            className="flex items-center justify-center space-x-2 text-blue-100 hover:text-white transition-colors duration-200"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm">+91 9044910449</span>
          </a>
          
          <a
            href="https://www.itsnsandeep.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 text-blue-100 hover:text-white transition-colors duration-200"
          >
            <Globe className="w-5 h-5" />
            <span className="text-sm">www.itsnsandeep.com</span>
          </a>
          
          <a
            href="https://wa.me/919044910449"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 text-blue-100 hover:text-white transition-colors duration-200"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;