import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

interface MouseFollowCaptionProps {
  src: string;
  caption: string;
}

export const MouseFollowCaption: React.FC<MouseFollowCaptionProps> = ({ src, caption }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const ref = useRef<HTMLDivElement>(null);
  const [lastY, setLastY] = useState(0);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const div = ref.current;
    const rect = div.getBoundingClientRect();

    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -14;
    const rotationY = (offsetX / (rect.width / 2)) * 14;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  };

  function handleMouseEnter() {
    scale.set(1.1);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);

    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative flex rounded-sm w-full flex-col items-center justify-center overflow-hidden"
      style={{ perspective: "800px" }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.img
        src={src}
        alt="random"
        style={{ rotateX, rotateY, scale }}
        className=" object-cover will-change-transform"
      />
      <motion.figcaption
        className="pointer-events-none absolute left-0 top-0 hidden rounded-[4px] bg-white px-[10px] py-0.5 text-[10px] text-[#2d2d2d] opacity-0 sm:flex"
        style={{ x, y, opacity, rotate: rotateFigcaption }}
      >
        {caption}
      </motion.figcaption>
    </figure>
  );
};
