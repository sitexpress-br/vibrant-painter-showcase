import { useState } from "react";
import { motion } from "framer-motion";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, beforeLabel = "Antes", afterLabel = "Depois" }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    handleMove(event.clientX, rect);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    handleMove(event.touches[0].clientX, rect);
  };

  return (
    <div
      className="relative w-full aspect-[3/2] overflow-hidden rounded-xl cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* After Image (Full) */}
      <div className="absolute inset-0">
        <img src={afterImage} alt={afterLabel} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={beforeImage} alt={beforeLabel} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4 bg-muted text-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {beforeLabel}
        </div>
      </div>

      {/* Slider */}
      <div
        className="absolute inset-y-0 w-1 bg-white cursor-col-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex gap-1">
            <div className="w-0.5 h-6 bg-primary"></div>
            <div className="w-0.5 h-6 bg-primary"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
