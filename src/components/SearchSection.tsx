import React from 'react';
import { AlertCircleIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar';
import VideoPreview from './VideoPreview';
import DownloadOptions from './DownloadOptions';
import { useVideoContext } from '../context/VideoContext';

const SearchSection: React.FC = () => {
  const { videoInfo, error, downloadCount } = useVideoContext();
  
  return (
    <section className="w-full max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-red-600 text-transparent bg-clip-text">
          Download YouTube Videos
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Paste a YouTube link and download videos in MP4, MP3, or FLAC format with your preferred quality.
        </p>
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-2xl font-bold text-blue-400"
        >
          {downloadCount.toLocaleString()} Downloads
        </motion.div>
      </motion.div>

      <SearchBar />
      
      {error && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 p-3 bg-red-900/40 border border-red-800 rounded-lg flex items-center gap-2 text-red-200"
        >
          <AlertCircleIcon className="w-5 h-5 flex-shrink-0" />
          <span>{error}</span>
        </motion.div>
      )}

      {videoInfo && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <VideoPreview />
          <DownloadOptions />
        </motion.div>
      )}
    </section>
  );
};

export default SearchSection;