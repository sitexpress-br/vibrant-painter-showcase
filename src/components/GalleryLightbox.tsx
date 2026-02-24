import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface GalleryLightboxProps {
  images: string[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const GalleryLightbox = ({ images, isOpen, currentIndex, onClose, onNavigate }: GalleryLightboxProps) => {
  const handlePrevious = () => {
    onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
          onClick={onClose}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
            onClick={onClose}
          >
            <X size={32} />
          </Button>

          {/* Image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-7xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex]}
              alt={`Projeto ${currentIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 w-12 h-12"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
              >
                <ChevronLeft size={32} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 w-12 h-12"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              >
                <ChevronRight size={32} />
              </Button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GalleryLightbox;
