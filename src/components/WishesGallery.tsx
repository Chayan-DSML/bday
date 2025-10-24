import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Smile, Sparkles, PartyPopper, Sun } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface WishesGalleryProps {
  onNext: () => void;
}

const wishes = [
  {
    icon: Heart,
    title: "Warmest Wishes",
    message: "May this year bring you endless joy, countless adventures, and all the happiness your heart can hold!",
    bgClass: "bg-gradient-to-br from-pink-500 to-rose-500",
    image: "https://lh3.googleusercontent.com/d/1F0xYLUA1wxMrVrUBT60E9c1M8Kppmwnr"
  },
  {
    icon: Star,
    title: "Shine Bright",
    message: "You're a star! May you continue to shine brightly and inspire everyone around you with your amazing spirit!",
    bgClass: "bg-gradient-to-br from-yellow-500 to-orange-500",
    image: "https://lh3.googleusercontent.com/d/1Agw9ZxoEsaZwYT_hwYPaHtJWr2Ngj7Y5"
  },
  {
    icon: Smile,
    title: "Keep Smiling",
    message: "Your smile lights up the world! Here's to another year of laughter, love, and unforgettable moments!",
    bgClass: "bg-gradient-to-br from-purple-500 to-pink-500",
    image: "https://lh3.googleusercontent.com/d/1jv4xFmEKgRDuwC2tfpwA9mZXuZ7RQLHj"
  },
  {
    icon: Sparkles,
    title: "Make Magic",
    message: "May your 32nd year be filled with magical moments, beautiful surprises, and dreams coming true!",
    bgClass: "bg-gradient-to-br from-blue-500 to-cyan-500",
    image: "https://lh3.googleusercontent.com/d/1wfK7-Kn7vUkrsnzjhp1KgM9QPvMpoGw9"
  },
  {
    icon: PartyPopper,
    title: "Celebrate You",
    message: "Today we celebrate YOU - your kindness, your strength, your beautiful soul. You're truly one of a kind!",
    bgClass: "bg-gradient-to-br from-green-500 to-emerald-500",
    image: "https://lh3.googleusercontent.com/d/1k9d0SWTobMkWFU-uR8nOXrLOYUUwfynj"
  },
  {
    icon: Sun,
    title: "Bright Future",
    message: "Here's to 32 years of being absolutely amazing and to many more years of success, love, and happiness ahead!",
    bgClass: "bg-gradient-to-br from-amber-500 to-red-500",
    image: "https://lh3.googleusercontent.com/d/1Agw9ZxoEsaZwYT_hwYPaHtJWr2Ngj7Y5"
  }
];

export function WishesGallery({ onNext }: WishesGalleryProps) {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [allRevealed, setAllRevealed] = useState(false);

  const handleCardClick = (index: number) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(index)) {
      newFlipped.delete(index);
    } else {
      newFlipped.add(index);
    }
    setFlippedCards(newFlipped);

    if (newFlipped.size === wishes.length) {
      setTimeout(() => setAllRevealed(true), 500);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="mb-4 text-gray-900">
          Birthday Wishes Just for You
        </h2>
        <p className="text-gray-700">Click on each card to reveal a special message! 💝</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-8 px-4">
        {wishes.map((wish, index) => {
          const Icon = wish.icon;
          const isFlipped = flippedCards.has(index);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="perspective-1000 min-w-[280px]"
            >
              <motion.div
                className="relative h-96 w-full cursor-pointer"
                onClick={() => handleCardClick(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {!isFlipped ? (
                    <motion.div
                      key="front"
                      initial={{ rotateY: 0 }}
                      exit={{ rotateY: 90 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <div className={`h-full w-full flex flex-col items-center justify-center shadow-xl border-0 rounded-lg p-6 ${wish.bgClass}`}>
                        <Icon className="w-16 h-16 mb-4 text-white" />
                        <h3 className="text-white">{wish.title}</h3>
                        <p className="text-sm text-white/90 mt-2">Click to reveal</p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="back"
                      initial={{ rotateY: -90 }}
                      animate={{ rotateY: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Card className="h-full w-full flex flex-col overflow-hidden shadow-xl">
                        <div className="h-60 overflow-hidden">
                          <ImageWithFallback
                            src={wish.image}
                            alt={wish.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4 flex-1 flex flex-col justify-center">
                          <h3 className="mb-2 text-gray-800">{wish.title}</h3>
                          <p className="text-sm text-gray-600">{wish.message}</p>
                        </div>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {allRevealed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mt-8"
        >
          <p className="text-gray-800 mb-4">✨ You've unlocked all the wishes! ✨</p>
          <p className="text-sm text-gray-700">Continue to see something special...</p>
        </motion.div>
      )}
    </div>
  );
}
