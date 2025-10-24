import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';

interface ReasonsGridProps {
  onNext: () => void;
}

const reasons = [
  { number: 1, text: "Your infectious smile brightens everyone's day" },
  { number: 2, text: "You're incredibly kind and thoughtful" },
  { number: 3, text: "Your strength inspires those around you" },
  { number: 4, text: "You have an amazing sense of humor" },
  { number: 5, text: "You're a wonderful friend who's always there" },
  { number: 6, text: "Your positive energy is contagious" },
  { number: 7, text: "You make the world a better place" },
  { number: 8, text: "Your creativity knows no bounds" },
  { number: 9, text: "You're genuinely caring and compassionate" },
  { number: 10, text: "Your determination is admirable" },
  { number: 11, text: "You bring joy wherever you go" },
  { number: 12, text: "You're authentic and true to yourself" },
  { number: 13, text: "Your wisdom helps guide others" },
  { number: 14, text: "You have a beautiful heart" },
  { number: 15, text: "Your loyalty is unwavering" },
  { number: 16, text: "You're incredibly talented" },
  { number: 17, text: "Your generosity touches lives" },
  { number: 18, text: "You're brave and courageous" },
  { number: 19, text: "Your optimism lifts spirits" },
  { number: 20, text: "You're supportive and encouraging" },
  { number: 21, text: "Your laughter is music to the ears" },
  { number: 22, text: "You're trustworthy and reliable" },
  { number: 23, text: "Your presence makes everything better" },
  { number: 24, text: "You're uniquely wonderful" },
  { number: 25, text: "Your dreams inspire others to dream too" },
  { number: 26, text: "You're patient and understanding" },
  { number: 27, text: "Your intelligence shines through" },
  { number: 28, text: "You're graceful under pressure" },
  { number: 29, text: "Your friendship is a precious gift" },
  { number: 30, text: "You're absolutely irreplaceable" },
  { number: 31, text: "Your spirit is unbreakable" },
  { number: 32, text: "You make 32 look absolutely fabulous!" }
];

const colors = [
  'bg-gradient-to-br from-pink-500 to-rose-500',
  'bg-gradient-to-br from-purple-500 to-pink-500',
  'bg-gradient-to-br from-blue-500 to-cyan-500',
  'bg-gradient-to-br from-green-500 to-emerald-500',
  'bg-gradient-to-br from-yellow-500 to-orange-500',
  'bg-gradient-to-br from-red-500 to-pink-500',
];

export function ReasonsGrid({ onNext }: ReasonsGridProps) {
  const [revealedReasons, setRevealedReasons] = useState<Set<number>>(new Set());
  const [autoReveal, setAutoReveal] = useState(false);

  useEffect(() => {
    if (autoReveal) {
      reasons.forEach((_, index) => {
        setTimeout(() => {
          setRevealedReasons(prev => new Set([...prev, index]));
        }, index * 100);
      });
    }
  }, [autoReveal]);

  const handleReasonClick = (index: number) => {
    setRevealedReasons(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="mb-4 text-gray-900">
          32 Reasons Why You're Amazing
        </h2>
        <p className="text-gray-700 mb-4">Click on each number to reveal why you're special!</p>
        <Button
          onClick={() => setAutoReveal(true)}
          variant="outline"
          className="border-pink-300 text-pink-600 hover:bg-pink-50"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Reveal All
        </Button>
      </motion.div>

      <div className="grid grid-cols-4 md:grid-cols-8 gap-3 max-w-4xl mx-auto mb-8">
        {reasons.map((reason, index) => {
          const isRevealed = revealedReasons.has(index);
          const colorClass = colors[index % colors.length];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.02 }}
            >
              <motion.div
                className="relative cursor-pointer h-16 md:h-20"
                onClick={() => handleReasonClick(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {!isRevealed ? (
                    <motion.div
                      key="number"
                      initial={{ rotateY: 0 }}
                      exit={{ rotateY: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute inset-0 flex items-center justify-center rounded-lg shadow-lg ${colorClass}`}
                    >
                      <span className="text-white">{reason.number}</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="text"
                      initial={{ rotateY: -90, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute inset-0 flex items-center justify-center text-white text-xs rounded-lg shadow-lg ${colorClass}`}
                    >
                      {reason.number}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Display revealed reasons as text */}
      <div className="max-w-2xl mx-auto space-y-3">
        <AnimatePresence>
          {Array.from(revealedReasons)
            .sort((a, b) => a - b)
            .map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md"
              >
                <span className={`inline-block px-3 py-1 rounded-full text-white text-sm mr-3 ${colors[index % colors.length]}`}>
                  #{reasons[index].number}
                </span>
                <span className="text-gray-700">{reasons[index].text}</span>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {revealedReasons.size === 32 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-800 mb-2">🎉 You've discovered all 32 reasons! 🎉</p>
          <p className="text-sm text-gray-700">And there are countless more...</p>
        </motion.div>
      )}
    </div>
  );
}
