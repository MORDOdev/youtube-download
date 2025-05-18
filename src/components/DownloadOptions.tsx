import React, { useState } from 'react';
import { Download, Film, Music, FileAudio } from 'lucide-react';
import { motion } from 'framer-motion';
import { useVideoContext } from '../context/VideoContext';
import FormatOption from './FormatOption';

const DownloadOptions: React.FC = () => {
  const [selectedFormat, setSelectedFormat] = useState<'mp4'|'mp3'|'flac'>('mp4');
  const { videoInfo, downloadMedia } = useVideoContext();

  if (!videoInfo) return null;

  const handleFormatSelect = (format: 'mp4'|'mp3'|'flac') => {
    setSelectedFormat(format);
  };

  const handleDownload = (quality: string) => {
    if (videoInfo) {
      downloadMedia(videoInfo.id, selectedFormat, quality);
    }
  };

  const getQualityOptions = () => {
    switch (selectedFormat) {
      case 'mp4':
        return [
          { label: '1080p HD', value: '1080' },
          { label: '720p HD', value: '720' },
          { label: '480p', value: '480' },
          { label: '360p', value: '360' },
          { label: '240p', value: '240' },
        ];
      case 'mp3':
        return [
          { label: '320 kbps', value: '320' },
          { label: '256 kbps', value: '256' },
          { label: '192 kbps', value: '192' },
          { label: '128 kbps', value: '128' },
        ];
      case 'flac':
        return [
          { label: 'CD Quality (16-bit)', value: '16bit' },
          { label: 'Hi-Res (24-bit)', value: '24bit' },
        ];
      default:
        return [];
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-6 bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700"
    >
      <h3 className="text-xl font-semibold mb-4">Download Options</h3>
      
      <div className="grid grid-cols-3 gap-3 mb-6">
        <FormatOption 
          icon={<Film />}
          label="MP4 Video"
          isSelected={selectedFormat === 'mp4'}
          onClick={() => handleFormatSelect('mp4')}
          color="blue"
        />
        <FormatOption 
          icon={<Music />}
          label="MP3 Audio"
          isSelected={selectedFormat === 'mp3'}
          onClick={() => handleFormatSelect('mp3')}
          color="red"
        />
        <FormatOption 
          icon={<FileAudio />}
          label="FLAC Audio"
          isSelected={selectedFormat === 'flac'}
          onClick={() => handleFormatSelect('flac')}
          color="green"
        />
      </div>
      
      <div className="space-y-3">
        <h4 className="text-lg font-medium mb-2">Select Quality</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {getQualityOptions().map((option) => (
            <motion.button
              key={option.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleDownload(option.value)}
              className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-700/50 hover:bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all duration-200"
            >
              <span className="text-sm font-medium">{option.label}</span>
              <Download className="w-4 h-4 mt-1 text-gray-300" />
            </motion.button>
          ))}
        </div>
      </div>
      
      <div className="mt-6 text-sm text-gray-400">
        <p>By using our service, you agree to our Terms of Service and Privacy Policy.</p>
      </div>
    </motion.div>
  );
};

export default DownloadOptions;