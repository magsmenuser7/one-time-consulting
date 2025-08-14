import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Fix the Brand.
              <span className="text-orange-500 block">Unlock the Growth.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A one-time consulting experience that helps you understand what's holding your brand back — and gives you a clear path forward.
            </p>
            <div className="space-y-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg inline-flex items-center">
                 Book One-Time Consulting
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <div className="text-sm text-gray-500">
                <a
                  href="https://wa.me/919044910449"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  <MessageCircle className="w-4 h-4 mr-1" />
                  Talk to Our Team on WhatsApp → +91 9044910449
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">😵‍💫</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Before</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Confused messaging</li>
                    <li>• Inconsistent sales</li>
                    <li>• Brand chaos</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">After</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Clear roadmap</li>
                    <li>• Brand clarity</li>
                    <li>• Growth path</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;