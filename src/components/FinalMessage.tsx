import { motion } from 'motion/react';
import { Heart, Cake, Gift, Sparkles, Star } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FinalMessageProps {
  onNext: () => void;
}

export function FinalMessage({ onNext }: FinalMessageProps) {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Cake className="w-24 h-24 text-pink-500 mx-auto" />
            </motion.div>
            
            {/* Floating icons around cake */}
            <motion.div
              className="absolute -top-4 -left-4"
              animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-8 h-8 text-yellow-500" />
            </motion.div>
            
            <motion.div
              className="absolute -top-4 -right-4"
              animate={{ y: [0, -10, 0], rotate: [0, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <Star className="w-8 h-8 text-purple-500" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 left-0"
              animate={{ x: [0, -10, 0], rotate: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Gift className="w-8 h-8 text-blue-500" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 right-0"
              animate={{ x: [0, 10, 0], rotate: [0, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            >
              <Heart className="w-8 h-8 text-red-500" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 text-gray-900"
        >
          The Best is Yet to Come!
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-2xl mb-8">
            <div className="mb-6 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1616964524979-c08f6d87c7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNha2UlMjBjYW5kbGVzfGVufDF8fHx8MTc2MTI1ODk1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Birthday celebration"
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="space-y-4 text-gray-800">
              <p>
                As you turn 32 today, I want you to know how incredibly special you are.
                Despite the 1,200 kilometers between us, our friendship remains one of the
                most precious things in my life.
              </p>
              
              <p>
                You've touched so many lives with your kindness, your strength, and your
                beautiful soul. This year is going to bring you so much joy, success, and
                all the happiness you deserve.
              </p>
              
              <p>
                May your 32nd year be filled with:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="flex items-start gap-3 p-4 bg-pink-50 rounded-lg">
                  <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                  <span className="text-sm">Love that fills your heart</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                  <Sparkles className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                  <span className="text-sm">Dreams that come true</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <Star className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="text-sm">Moments that take your breath away</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <Gift className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-sm">Blessings beyond measure</span>
                </div>
              </div>
              
              <p className="text-lg">
                Thank you for being such an amazing friend. Here's to you, to us, and to
                many more years of beautiful friendship! 🎉
              </p>
              
              <div className="pt-6 border-t border-gray-200">
                <p className="text-xl text-gray-900">
                  Happy 32nd Birthday! 🎂✨
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  With love from Bangalore to Nandurbar 💝
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="space-y-2"
        >
          <p className="text-gray-800">
            Make a wish and blow out those candles! 🕯️
          </p>
          <p className="text-sm text-gray-700">
            (You can navigate back through the sections using the arrows below)
          </p>
        </motion.div>
      </div>
    </div>
  );
}
