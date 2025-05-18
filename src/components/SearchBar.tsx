import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useVideoContext } from '../context/VideoContext';

const SearchBar: React.FC = () => {
  const [url, setUrl] = useState('');
  const { fetchVideoInfo, loading } = useVideoContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      fetchVideoInfo(url);
    }
  };

  const clearInput = () => {
    setUrl('');
  };

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <form
        onSubmit={handleSubmit}
        className="relative flex items-center w-full"
      >
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste YouTube URL here..."
          className="w-full px-5 py-4 pr-24 rounded-full bg-white/10 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none text-white placeholder-gray-400 shadow-lg transition-all duration-300"
        />

        {url && (
          <button
            type="button"
            onClick={clearInput}
            className="absolute right-[5.5rem] text-gray-400 hover:text-white p-1"
            aria-label="Clear input"
          >
            <X className="h-5 w-5" />
          </button>
        )}

        <motion.button
          type="submit"
          whileTap={{ scale: 0.95 }}
          disabled={loading || !url.trim()}
          className={`absolute right-2 bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-medium py-2 px-4 rounded-full flex items-center justify-center transition-all duration-300 ${
            loading || !url.trim() ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {loading ? (
            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <>
              <Search className="h-4 w-4 mr-1" />
              Go
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default SearchBar;