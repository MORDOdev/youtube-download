import React from 'react';
import { Clock, Music, Video } from 'lucide-react';
import { motion } from 'framer-motion';
import { useVideoContext } from '../context/VideoContext';

const VideoPreview: React.FC = () => {
  const { videoInfo } = useVideoContext();

  if (!videoInfo) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-700"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-2/5 flex-shrink-0">
          <div className="relative rounded-lg overflow-hidden shadow-lg aspect-video">
            <img 
              src={videoInfo.thumbnail} 
              alt={videoInfo.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-3 w-full">
                <div className="flex items-center text-xs text-white/90 gap-2">
                  <Clock className="w-3 h-3" />
                  <span>{videoInfo.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:w-3/5">
          <h3 className="text-xl font-bold line-clamp-2 mb-2">
            {videoInfo.title}
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-300">
              <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
                <img 
                  src={videoInfo.channelThumbnail} 
                  alt={videoInfo.channelName}
                  className="w-full h-full object-cover"
                />
              </div>
              <span>{videoInfo.channelName}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-1.5">
                <Video className="w-4 h-4 text-blue-400" />
                <span>{videoInfo.views}</span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <Music className="w-4 h-4 text-red-400" />
                <span>{videoInfo.audioQuality}</span>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm line-clamp-3">
              {videoInfo.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoPreview;