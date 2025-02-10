"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Music2, Play, Pause, SkipBack, SkipForward, X,
  Volume2, VolumeX, Shuffle, Repeat, Heart, ImageIcon
} from "lucide-react";
import { cn } from "@/app/lib/utils";
import Image from "next/image";

const genres = [
  "Lofi",
  "Jazz",
  "Classical",
  "Electronic",
  "Ambient",
] as const;

export function MusicPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(80);
  const [selectedGenre, setSelectedGenre] = useState<typeof genres[number]>("Lofi");
  const [imageError, setImageError] = useState(false);
  const [progress, setProgress] = useState(45); // For waveform visualization

  const imageUrl = "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&q=80&w=600";

  // Simulated waveform data
  const waveformData = Array.from({ length: 40 }, () => Math.random());

  return (
    <div className="fixed bottom-[6rem] right-4 z-50 md:bottom-6 md:right-6">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className={cn(
              "flex h-10 w-10 items-center justify-center md:h-12 md:w-12",
              "rounded-full border bg-background/60",
              "shadow-lg shadow-black/5 backdrop-blur-xl",
              "hover:bg-background/80 transition-colors"
            )}
          >
            <Music2 className="h-4 w-4 text-primary md:h-5 md:w-5" />
          </motion.button>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className={cn(
              "absolute bottom-0 right-0",
              "w-[280px] rounded-3xl border border-white/10",
              "bg-gradient-to-b from-gray-900/95 to-black/95",
              "shadow-lg shadow-purple-500/5 backdrop-blur-xl",
              "overflow-hidden transform origin-bottom-right"
            )}
          >
            {/* Gradient Spots */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 -left-1/2 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl" />
              <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-1/4 left-1/4 w-1/2 h-1/2 bg-pink-500/20 rounded-full blur-3xl" />
            </div>

            {/* Content Container */}
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-md bg-gradient-to-br from-purple-500 to-blue-500" />
                  <span className="text-xs font-medium text-white/80">Now Playing</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1.5 hover:bg-white/10"
                >
                  <X className="h-4 w-4 text-white/60" />
                </button>
              </div>

           {/* Album Art */}
           <div className="px-4 pb-6">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl group">
                  {imageError ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/5">
                      <ImageIcon className="h-12 w-12 text-white/20" />
                    </div>
                  ) : (
                    <Image
                      src={imageUrl}
                      alt="Album art - Music visualization"
                      fill
                      className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-105 shadow-lg shadow-white/10"
                      priority
                      sizes="(max-width: 768px) 256px, 320px"
                      onError={() => setImageError(true)}
                      quality={85}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <button 
                    className={cn(
                      "absolute top-3 right-3 rounded-full p-2",
                      "bg-black/20 backdrop-blur-sm",
                      "opacity-0 group-hover:opacity-100 transition-opacity",
                      "hover:bg-black/40"
                    )}
                  >
                    <Heart className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Song Info */}
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-white">Raataan Lambiyan</h3>
                <p className="text-sm text-white/60">Tanishk Bagchi</p>
              </div>

              {/* Waveform Visualization */}
              <div className="px-4 pb-6">
                <div className="flex items-end h-12 gap-[2px]">
                  {waveformData.map((height, i) => (
                    <div
                      key={i}
                      className={cn(
                        "w-1.5 rounded-full transition-all duration-300",
                        i / waveformData.length * 100 < progress
                          ? "bg-purple-500"
                          : "bg-white/20"
                      )}
                      style={{
                        height: `${height * 100}%`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between px-6 pb-6">
                <button className="text-white/60 hover:text-white">
                  <SkipBack className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={cn(
                    "flex h-12 w-12 items-center justify-center",
                    "rounded-full bg-purple-500",
                    "hover:bg-purple-600 transition-colors"
                  )}
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5 text-white" />
                  ) : (
                    <Play className="h-5 w-5 text-white translate-x-0.5" />
                  )}
                </button>
                <button className="text-white/60 hover:text-white">
                  <SkipForward className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 