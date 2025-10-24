import { motion, AnimatePresence } from 'motion/react';
import { Cake, Sparkles, Gift } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import specialImage from 'figma:asset/7b04c646033c1233320d1dcd02a4662f818ed910.png';

interface BirthdayLandingProps {
  onNext: () => void;
}

export function BirthdayLanding({ onNext }: BirthdayLandingProps) {
  const [showSpecialImage, setShowSpecialImage] = useState(false);

  useEffect(() => {
    // Show the special image 10 seconds after the initial animation
    const timer = setTimeout(() => {
      setShowSpecialImage(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1760954525386-cd1c15032c04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsb29ucyUyMGNvbG9yZnVsJTIwcGFydHl8ZW58MXx8fHwxNzYxMzI0NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Birthday celebration"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Floating Icons */}
        <motion.div
          className="absolute top-10 left-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Cake className="w-12 h-12 text-pink-500" />
        </motion.div>

        <motion.div
          className="absolute top-20 right-20"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Sparkles className="w-10 h-10 text-purple-500" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-20"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Gift className="w-10 h-10 text-blue-500" />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 1, delay: 0.2 }}
        >
          <h1 className="text-7xl mb-4">🎉</h1>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6 text-gray-900"
        >
          Happy 32nd Birthday!
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8 text-gray-800 space-y-2"
        >
          <p>Today is YOUR special day!</p>
          <p>Get ready for an amazing journey through</p>
          <p>this special birthday experience made just for you ✨</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="space-y-4"
        >
          <div className="inline-block bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg">
            <p className="text-gray-700">Age is just a number, but</p>
            <p className="text-gray-900">
              32 looks absolutely wonderful on you!
            </p>
          </div>

          <div className="mt-8">
            <Button
              onClick={onNext}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-6 rounded-full shadow-xl transform hover:scale-105 transition-all"
            >
              Let's Celebrate! 🎊
            </Button>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-6 text-sm text-gray-700"
        >
          (This will take about 2 minutes - every second worth it!)
        </motion.p>
      </div>

      {/* Special Image Overlay */}
      <AnimatePresence>
        {showSpecialImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setShowSpecialImage(false)}
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="relative max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <img
                  src={specialImage}
                  alt="Special birthday message"
                  className="w-full h-auto rounded-lg"
                />
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  onClick={() => setShowSpecialImage(false)}
                  className="mt-6 w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-3 rounded-full shadow-lg transition-all hover:scale-105"
                >
                  Close ✨
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
