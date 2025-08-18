import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            {/* <h3 className="text-2xl font-bold text-white mb-4">Magsmen</h3> */}
            <img src="./otc-black.png" alt="otc-black" style={{ width: "150px", height: "auto", maxHeight: "100px" }}/>
            <p className="text-gray-400 max-w-md">
              Brand consulting that fixes what's underneath, so your brand grows strong and stands tall.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Terms of Use
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Contact
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              Copyright © 2025 <a 
    href="https://magsmen.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-white hover:underline"
  >
    Magsmen
  </a>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;