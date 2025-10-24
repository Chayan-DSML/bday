import { motion } from 'framer-motion';
import { MapPin, Heart, Navigation } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface DistanceMapProps {
  onNext: () => void;
}

export function DistanceMap({ onNext }: DistanceMapProps) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="mb-4 text-gray-900">
          Though Miles Apart, Always Close at Heart
        </h2>
        <p className="text-gray-700">Our friendship knows no distance 💕</p>
      </motion.div>

      <Card className="max-w-4xl w-full p-8 shadow-2xl bg-white/90 backdrop-blur-sm">
        {/* Map Visualization */}
        <div className="relative h-96 mb-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg overflow-hidden">
          {/* Connection Line */}
          <svg className="absolute inset-0 w-full h-full">
            <motion.line
              x1="20%"
              y1="70%"
              x2="80%"
              y2="30%"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeDasharray="10,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Bangalore */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute left-[20%] top-[70%] transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-pink-500 rounded-full blur-xl opacity-50"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="relative bg-white p-4 rounded-full shadow-lg">
                <MapPin className="w-8 h-8 text-pink-600" />
              </div>
              <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <Badge className="bg-pink-500 text-white">Bangalore</Badge>
                <p className="text-xs text-gray-600 mt-1">Your Friend</p>
              </div>
            </div>
          </motion.div>

          {/* Nandurbar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="absolute left-[80%] top-[30%] transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-50"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <div className="relative bg-white p-4 rounded-full shadow-lg">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <Badge className="bg-purple-500 text-white">Nandurbar</Badge>
                <p className="text-xs text-gray-600 mt-1">Birthday Star ⭐</p>
              </div>
            </div>
          </motion.div>

          {/* Animated Heart in the middle */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, type: "spring" }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
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
              <Heart className="w-12 h-12 text-red-500 fill-red-500" />
            </motion.div>
          </motion.div>
        </div>

        {/* Distance Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Card className="p-6 text-center bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
            <Navigation className="w-8 h-8 text-pink-600 mx-auto mb-2" />
            <h3 className="text-gray-800 mb-1">Distance</h3>
            <p className="text-2xl text-pink-600">1,200 km</p>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <Heart className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <h3 className="text-gray-800 mb-1">Friendship</h3>
            <p className="text-2xl text-purple-600">Infinite</p>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-gray-800 mb-1">Connection</h3>
            <p className="text-2xl text-blue-600">Unbreakable</p>
          </Card>
        </motion.div>

        {/* Sweet Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 text-center p-6 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-lg"
        >
          <p className="text-gray-700 mb-2">
           To my favorite women cum friend, Happy Birthday! You mean the world to me.
          </p>
          <p className="text-gray-700">
           I'm sending you all the best wishes and the biggest virtual hug for a truly wonderful celebration. I'm so grateful to have you in my life 💝
          </p>
        </motion.div>
      </Card>
    </div>
  );
}
