
import React, { useState, useEffect, useCallback, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { activities } from "../data/mockData";
import { motion, AnimatePresence } from "framer-motion";

const ActivityDetail = () => {
  const { id } = useParams();
  const activity = activities.find((a) => a.id === Number(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Use images array if available, otherwise fallback to single image
  const images = activity?.images || (activity?.image ? [activity.image] : []);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (images.length <= 1) return;

    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 10000); // 10 seconds
  }, [images.length]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Activity Not Found</h2>
          <Link to="/activities" className="text-primary hover:underline">
            Back to List
          </Link>
        </div>
      </div>
    );
  }

  const handleManualChange = (newIndex: number) => {
    setDirection(newIndex > currentImageIndex ? 1 : -1);
    setCurrentImageIndex(newIndex);
    startTimer(); // Reset timer on manual interaction
  };

  const nextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    startTimer(); // Reset timer on manual interaction
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    startTimer(); // Reset timer on manual interaction
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  // Split content by newline to render paragraphs
  const renderContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      // Remove leading/trailing whitespace
      const trimmed = paragraph.trim();
      if (!trimmed) return null;
      
      return (
        <p key={index} className="mb-4 leading-relaxed">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/activities"
          className="inline-flex items-center text-gray-600 hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to List
        </Link>

        <article className="bg-white rounded-2xl overflow-hidden shadow-lg">
          {/* Image Gallery */}
          <div className="relative h-96 w-full bg-gray-100 overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    nextImage();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevImage();
                  }
                }}
                alt={activity.title}
                className="w-full h-full object-cover absolute inset-0"
              />
            </AnimatePresence>

            {/* Navigation Buttons (Only if multiple images) */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Top Indicators (Dots) - as requested "上方自行点击切换" */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleManualChange(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-white scale-125"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          
          <div className="p-8 md:p-12">
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              {activity.date}
            </div>
            
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 leading-tight">
              {activity.title}
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl text-gray-600 mb-8 border-l-4 border-primary pl-4 italic">
                {activity.summary}
              </p>
              
              <div className="mt-8">
                {activity.content ? renderContent(activity.content) : (
                  <p className="text-gray-500 italic">No detailed content available.</p>
                )}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ActivityDetail;
