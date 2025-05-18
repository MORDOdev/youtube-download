import React from 'react';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import TutorialSection from './components/TutorialSection';
import Footer from './components/Footer';
import { VideoProvider } from './context/VideoContext';

function App() {
  return (
    <VideoProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black text-white">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 py-12 w-full max-w-7xl mx-auto">
          <SearchSection />
          <TutorialSection />
        </main>
        <Footer />
      </div>
    </VideoProvider>
  );
}

export default App;