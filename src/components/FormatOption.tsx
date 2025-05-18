import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FormatOptionProps {
  icon: ReactNode;
  label: string;
  isSelected: boolean;
  onClick: () => void;
  color: 'red' | 'blue' | 'green';
}

const FormatOption: React.FC<FormatOptionProps> = ({ 
  icon, 
  label, 
  isSelected, 
  onClick,
  color
}) => {
  const getGradient = () => {
    switch (color) {
      case 'red':
        return 'from-red-600 to-red-800';
      case 'blue':
        return 'from-blue-600 to-blue-800';
      case 'green':
        return 'from-green-600 to-green-800';
      default:
        return 'from-gray-600 to-gray-800';
    }
  };

  const getBorderColor = () => {
    switch (color) {
      case 'red':
        return isSelected ? 'border-red-500' : 'border-gray-700';
      case 'blue':
        return isSelected ? 'border-blue-500' : 'border-gray-700';
      case 'green':
        return isSelected ? 'border-green-500' : 'border-gray-700';
      default:
        return isSelected ? 'border-white' : 'border-gray-700';
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 ${getBorderColor()} ${
        isSelected 
          ? `bg-gradient-to-br ${getGradient()} text-white shadow-lg` 
          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70'
      } transition-all duration-200`}
    >
      <div className={`w-8 h-8 flex items-center justify-center mb-2 ${isSelected ? 'text-white' : 'text-gray-400'}`}>
        {icon}
      </div>
      <span className="text-sm font-medium">{label}</span>
    </motion.button>
  );
};

export default FormatOption;