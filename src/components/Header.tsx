import React from 'react';
import { MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            {/* <h1 className="text-2xl font-bold text-gray-900">Magsmen</h1> */}
            <img src="./otcc-white.jpg" alt="magsmen-new-version"  style={{ width: "150px", height: "auto", maxHeight: "60px" }}  />
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/919044910449"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4 mr-2 text-black" />
              WhatsApp
            </a>
            <button className="bg-[#000] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#7641c8] transition-colors duration-200">
              Book Consulting
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;