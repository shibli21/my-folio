import { motion, useAnimation } from "framer-motion";
import React, { FunctionComponent, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface ScrollViewZoomProps {
  children: React.ReactNode;
}

const ScrollViewZoom: FunctionComponent<ScrollViewZoomProps> = ({
  children,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hidden: { opacity: 0, scale: 0.9, transition: { duration: 0.6 } },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (!inView) {
      controls.start("hidden");
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="square"
    >
      {children}
    </motion.div>
  );
};

export default ScrollViewZoom;
