import React, { createContext, useContext, useState, ReactNode } from 'react';

interface VideoInfo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  channelName: string;
  channelThumbnail: string;
  duration: string;
  views: string;
  audioQuality: string;
}

interface VideoContextType {
  videoInfo: VideoInfo | null;
  loading: boolean;
  error: string | null;
  downloadCount: number;
  fetchVideoInfo: (url: string) => void;
  downloadMedia: (videoId: string, format: string, quality: string) => void;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

const mockFetchVideoInfo = async (url: string): Promise<VideoInfo> => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const videoId = url.includes('youtu.be') 
    ? url.split('/').pop() 
    : url.split('v=')[1]?.split('&')[0] || 'dQw4w9WgXcQ';
  
  return {
    id: videoId,
    title: "Sample YouTube Video - Never Gonna Give You Up",
    description: "This is a sample description for the video. In a real implementation, this would be fetched from the YouTube API.",
    thumbnail: "https://images.pexels.com/photos/2833833/pexels-photo-2833833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    channelName: "Sample Channel",
    channelThumbnail: "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "3:32",
    views: "1.2B views",
    audioQuality: "High",
  };
};

export const VideoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [downloadCount, setDownloadCount] = useState<number>(
    Math.floor(Math.random() * (999999 - 100000) + 100000)
  );

  const fetchVideoInfo = async (url: string) => {
    if (!url.includes('youtube.com') && !url.includes('youtu.be')) {
      setError('Please enter a valid YouTube URL');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const info = await mockFetchVideoInfo(url);
      setVideoInfo(info);
    } catch (err) {
      console.error('Error fetching video info:', err);
      setError('Failed to fetch video information. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const downloadMedia = (videoId: string, format: string, quality: string) => {
    setDownloadCount(prev => prev + 1);
    
    const fileName = `${videoInfo?.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_${quality}.${format}`;
    
    // In a real implementation, this would trigger the actual download
    const successMessage = `¡Descarga exitosa! 🎉\n\nArchivo: ${fileName}\nFormato: ${format.toUpperCase()}\nCalidad: ${quality}\n\nDescarga #${downloadCount}`;
    
    // Show a styled alert using a modal or toast in production
    alert(successMessage);
  };

  const value = {
    videoInfo,
    loading,
    error,
    downloadCount,
    fetchVideoInfo,
    downloadMedia,
  };

  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
};

export const useVideoContext = (): VideoContextType => {
  const context = useContext(VideoContext);
  if (context === undefined) {
    throw new Error('useVideoContext must be used within a VideoProvider');
  }
  return context;
};