import { useState, useEffect } from 'react';
import { BirthdayLanding } from './components/BirthdayLanding';
import { WishesGallery } from './components/WishesGallery';
import { DistanceMap } from './components/DistanceMap';
import { ReasonsGrid } from './components/ReasonsGrid';
import { FinalMessage } from './components/FinalMessage';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from './components/ui/button';

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const sections = [
    { component: BirthdayLanding, name: 'landing' },
    { component: WishesGallery, name: 'wishes' },
    { component: DistanceMap, name: 'distance' },
    { component: ReasonsGrid, name: 'reasons' },
    { component: FinalMessage, name: 'final' }
  ];

  useEffect(() => {
    if (currentSection === 0) {
      setShowConfetti(true);
    }
  }, [currentSection]);

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const CurrentComponent = sections[currentSection].component;

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {showConfetti && <Confetti />}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full min-h-screen"
        >
          <CurrentComponent onNext={nextSection} />
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4">
        <Button
          onClick={prevSection}
          disabled={currentSection === 0}
          variant="outline"
          size="icon"
          className="rounded-full bg-white/90 backdrop-blur-sm shadow-lg"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex gap-2">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSection(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSection
                  ? 'w-8 bg-pink-500'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <Button
          onClick={nextSection}
          disabled={currentSection === sections.length - 1}
          variant="outline"
          size="icon"
          className="rounded-full bg-white/90 backdrop-blur-sm shadow-lg"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

// Confetti Component
function Confetti() {
  const confettiPieces = Array.from({ length: 50 });
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confettiPieces.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            backgroundColor: ['#ff6b9d', '#c44569', '#ffc048', '#f8b500', '#48dbfb', '#0abde3'][Math.floor(Math.random() * 6)],
          }}
          initial={{ y: -20, opacity: 1, rotate: 0 }}
          animate={{
            y: window.innerHeight + 20,
            opacity: 0,
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            delay: Math.random() * 0.5,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
