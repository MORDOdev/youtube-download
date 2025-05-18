import React from 'react';
import { motion } from 'framer-motion';
import { Link, Clipboard, Settings, Download } from 'lucide-react';

const steps = [
  {
    title: "Paste YouTube URL",
    description: "Copy the YouTube video link and paste it into the search bar above.",
    icon: <Link className="w-8 h-8" />,
    color: "bg-blue-600"
  },
  {
    title: "Click Search",
    description: "Click the search button or press Enter to fetch the video information.",
    icon: <Clipboard className="w-8 h-8" />,
    color: "bg-indigo-600"
  },
  {
    title: "Select Format & Quality",
    description: "Choose your preferred format (MP4, MP3, FLAC) and select the quality option.",
    icon: <Settings className="w-8 h-8" />,
    color: "bg-purple-600"
  },
  {
    title: "Download Your File",
    description: "Click the download button and your file will be ready in seconds.",
    icon: <Download className="w-8 h-8" />,
    color: "bg-red-600"
  }
];

const TutorialSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-full max-w-4xl mx-auto mt-24 mb-16"
    >
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3" id="how-it-works">How It Works</h2>
        <p className="text-gray-400 max-w-xl mx-auto">Follow these simple steps to download your favorite YouTube videos in your preferred format.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 flex flex-col items-center text-center"
          >
            <motion.div 
              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg mb-4`}
            >
              {step.icon}
            </motion.div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TutorialSection;