"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const RevealScroll = ({
  children,
  delay = 0.25,
  duration = 0.6,
  direction = "up", // up, down, left, right
  threshold = 0.2, // how much element should be visible before animating
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px", amount: threshold });
  const controls = useAnimation();

  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: 50, x: 0 };
      case "down":
        return { y: -50, x: 0 };
      case "left":
        return { x: 50, y: 0 };
      case "right":
        return { x: -50, y: 0 };
      default:
        return { y: 50, x: 0 };
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          ...getDirectionOffset(),
          scale: 0.95,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
        },
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.8, 0.25, 1],
        type: "spring",
        stiffness: 80,
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default RevealScroll;
