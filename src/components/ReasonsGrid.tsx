import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// --- Data ---
// The 32 reasons that will be revealed in the boxes.
const REASONS: string[] = [
    "Your infectious smile 😊 makes everyone's day.",
    "You're incredibly kind and thoughtful.",
    "You have an amazing energy ✨ people enjoy being around.",
    "You make time for the people you care about.",
    "You're a brilliant problem-solver.",
    "Your laugh is truly unforgettable.",
    "You always show up for your friends.",
    "You have a great sense of humor.",
    "You inspire others with your determination.",
    "Your curiosity for the world is endless.",
    "You're always willing to learn new things.",
    "Your unique perspective makes you so valuable.",
    "You manage to stay positive, even when things are tough.",
    "Your creativity is a source of amazement.",
    "You have impeccable taste (in everything!).",
    "You know how to tell a great story.",
    "You find the fun in every situation.",
    "Your ability to forgive is truly admirable.",
    "You always see the best in people.",
    "Your genuine compassion for others.",
    "You set ambitious goals for yourself.",
    "Your resilience helps you bounce back.",
    "Your quiet strength speaks volumes.",
    "You know how to dream big 🌠.",
    "Your passion is contagious.",
    "You possess a great sense of style.",
    "Your thoughtful gestures mean everything.",
    "You're an exceptional listener.",
    "Your heart is full of generosity.",
    "You are authentic and true to yourself.",
    "You make the world a better place just by being in it.",
    "You make me look like a genius for finding you! 😉",
];
// -----------------

/**
 * Renders a single reason box.
 */
interface ReasonBoxProps {
    id: number;
    reason: string;
    isRevealed: boolean;
    onToggle: (id: number) => void;
}

const ReasonBox: React.FC<ReasonBoxProps> = ({ id, reason, isRevealed, onToggle }) => {
    // Shared classes for layout/sizing
    const baseClasses = "flex flex-col items-center justify-center h-32 md:h-28 p-3 rounded-xl shadow-lg transition-all duration-300 transform active:scale-95 text-center select-none";

    // Dynamic classes based on state
    const revealedClasses = isRevealed
        ? "bg-white text-gray-800 border-2 border-gray-300 cursor-default text-base md:text-sm font-medium italic"
        : "bg-pink-50 text-pink-600 border-2 border-pink-400 cursor-pointer hover:shadow-xl hover:scale-[1.02]";

    // The content to display
    const content = isRevealed ? (
        <span className="reason-text text-sm leading-relaxed">{id + 1}. {reason}</span>
    ) : (
        <span className="box-number text-4xl font-bold">{id + 1}</span> // Show box number when hidden
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: id * 0.05 }}
            className={`${baseClasses} ${revealedClasses}`}
            onClick={() => onToggle(id)}
            aria-label={isRevealed ? `Reason ${id + 1}: ${reason}` : `Click to reveal reason ${id + 1}`}
            role="button"
            tabIndex={0}
        >
            {content}
        </motion.div>
    );
};

// -----------------

/**
 * Main application component.
 */
export function ReasonsGrid() {
    // State: A Map to track the reveal status of each reason (key is index 0-31)
    const [revealedStatus, setRevealedStatus] = useState<Map<number, boolean>>(() => new Map());

    // Toggle the revealed state for a single reason box
    const toggleReason = (id: number) => {
        // Prevent toggling if already revealed, only allow hiding via "Hide All"
        if (revealedStatus.get(id)) return;
        
        setRevealedStatus(prevStatus => {
            const newStatus = new Map(prevStatus);
            // Toggle the current state, if it exists, otherwise set to true
            newStatus.set(id, !prevStatus.get(id));
            return newStatus;
        });
    };

    // Determine if all reasons are currently revealed
    const isAllRevealed = useMemo(() => {
        return REASONS.every((_, index) => revealedStatus.get(index));
    }, [revealedStatus]);

    // Handle "Reveal All" or "Hide All" button click
    const handleRevealAll = () => {
        if (isAllRevealed) {
            // If all are revealed, hide all
            setRevealedStatus(new Map());
        } else {
            // If any are hidden, reveal all
            const allRevealed = new Map();
            REASONS.forEach((_, index) => allRevealed.set(index, true));
            setRevealedStatus(allRevealed);
        }
    };

    // Use a <style> block for the custom background gradient and font setup
    const customStyles = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        body {
            font-family: 'Inter', sans-serif;
        }
        .reasons-page-container {
            /* Mimics the soft, radiant background from the image */
            background: radial-gradient(circle at top, #fff0f5 0%, #f0f8ff 100%);
        }
    `;

    return (
        <>
            <style>{customStyles}</style>
            <div className="reasons-page-container flex flex-col items-center p-5 min-h-screen">
                <h1 className="text-4xl md:text-3xl font-extrabold text-gray-800 mt-10 mb-2">
                    32 Reasons Why You're Amazing
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Tap on a box to reveal a reason!
                </p>

                <button
                    className={`
                        py-3 px-8 mb-10 rounded-full font-bold shadow-xl transition-all duration-200 transform hover:scale-[1.03]
                        ${isAllRevealed
                            ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            : 'bg-pink-500 text-white shadow-pink-500/50 hover:bg-pink-600'
                        }
                    `}
                    onClick={handleRevealAll}
                >
                    <span role="img" aria-label="sparkle" className="mr-2">✨</span>
                    {isAllRevealed ? 'Hide All' : 'Reveal All'}
                </button>
                
                {/* The main responsive grid container */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-5xl">
                    {REASONS.map((reason, index) => (
                        <ReasonBox
                            key={index}
                            id={index}
                            reason={reason}
                            isRevealed={!!revealedStatus.get(index)}
                            onToggle={toggleReason}
                        />
                    ))}
                </div>

                <p className="text-gray-500 mt-12 mb-5 text-sm italic">
                    {REASONS.length} reasons. And there are so many more.
                </p>
            </div>
        </>
    );
};
