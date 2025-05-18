import React from 'react';
import { YoutubeIcon } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-black/80 backdrop-blur-sm py-4 px-4 sm:px-6 lg:px-8 shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <YoutubeIcon className="w-8 h-8 text-red-600" />
          <h1 className="text-xl font-bold">
            <span className="text-red-600">YouTube</span>
            <span className="text-white">Downloader</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">
            About
          </a>
          <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;