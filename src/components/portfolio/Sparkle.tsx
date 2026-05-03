import { motion } from "framer-motion";

interface SparkleProps {
  className?: string;
  size?: number;
  delay?: number;
  spin?: boolean;
}

/** Four-pointed sparkle ornament matching the Canva style. */
export const Sparkle = ({ className = "", size = 80, delay = 0, spin = true }: SparkleProps) => (
  <motion.svg
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 1, ease: "easeOut" }}
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    style={{ filter: "drop-shadow(0 0 20px hsl(0 0% 100% / 0.3))" }}
  >
    <motion.path
      d="M50 0 C 52 35, 65 48, 100 50 C 65 52, 52 65, 50 100 C 48 65, 35 52, 0 50 C 35 48, 48 35, 50 0 Z"
      fill="hsl(0 0% 98%)"
      animate={spin ? { rotate: 360 } : {}}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      style={{ originX: "50%", originY: "50%", transformBox: "fill-box" }}
    />
  </motion.svg>
);
