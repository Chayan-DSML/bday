import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
    image: "https://images.unsplash.com/photo-1601676852981-9e04461ddc35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNlbGVicmF0aW9uJTIwY29uZmV0dGl8ZW58MXx8fHwxNzYxMjU2NzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Star,
    title: "Shine Bright",
    message: "You're a star! May you continue to shine brightly and inspire everyone around you with your amazing spirit!",
    bgClass: "bg-gradient-to-br from-yellow-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1563061772-b031ab4645c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjEzMjQ1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Smile,
    title: "Keep Smiling",
    message: "Your smile lights up the world! Here's to another year of laughter, love, and unforgettable moments!",
    bgClass: "bg-gradient-to-br from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1664312572933-0563f14484a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjEyMjE1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Sparkles,
    title: "Make Magic",
    message: "May your 32nd year be filled with magical moments, beautiful surprises, and dreams coming true!",
    bgClass: "bg-gradient-to-br from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1616964524979-c08f6d87c7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNha2UlMjBjYW5kbGVzfGVufDF8fHx8MTc2MTI1ODk1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: PartyPopper,
    title: "Celebrate You",
    message: "Today we celebrate YOU - your kindness, your strength, your beautiful soul. You're truly one of a kind!",
    bgClass: "bg-gradient-to-br from-green-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzaGlwJTIwd29tZW4lMjBoYXBweXxlbnwxfHx8fDE3NjEzMjQ1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Sun,
    title: "Bright Future",
    message: "Here's to 32 years of being absolutely amazing and to many more years of success, love, and happiness ahead!",
    bgClass: "bg-gradient-to-br from-amber-500 to-red-500",
    image: "https://images.unsplash.com/photo-1760954525386-cd1c15032c04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsb29ucyUyMGNvbG9yZnVsJTIwcGFydHl8ZW58MXx8fHwxNzYxMzI0NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
                className="relative h-80 w-full cursor-pointer"
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
                        <div className="h-32 overflow-hidden">
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
