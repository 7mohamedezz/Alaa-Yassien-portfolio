import { motion } from "framer-motion";
import { Sparkle } from "./Sparkle";

export const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    {/* Decorative wireframe orbs - top right */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.5, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute -top-20 -right-20 w-[500px] h-[500px] pointer-events-none"
    >
      <WireframeOrb />
    </motion.div>
    {/* Decorative wireframe orbs - bottom left */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.4, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.3 }}
      className="absolute -bottom-32 -left-32 w-[600px] h-[600px] pointer-events-none"
    >
      <WireframeOrb />
    </motion.div>

    {/* Sparkles flanking the title */}
    <Sparkle size={140} className="absolute left-[18%] top-[58%] -translate-y-1/2" delay={0.6} />
    <Sparkle size={180} className="absolute right-[18%] top-[42%] -translate-y-1/2" delay={0.8} />

    <div className="relative z-10 text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="font-serif-display text-6xl md:text-8xl lg:text-9xl leading-none"
      >
        Alaa Yassien
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="font-serif-display text-3xl md:text-5xl mt-4 text-muted-foreground tracking-wide"
      >
        Portofolio
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mt-16 text-xs uppercase tracking-[0.5em] text-muted-foreground"
      >
        Flutter Developer · UI/UX Designer
      </motion.div>
    </div>

    {/* Scroll cue */}
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
    >
      Scroll
    </motion.div>
  </section>
);

const WireframeOrb = () => (
  <motion.svg
    viewBox="0 0 400 400"
    className="w-full h-full"
    animate={{ rotate: 360 }}
    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
  >
    <g fill="none" stroke="hsl(0 0% 90%)" strokeWidth="0.4" opacity="0.7">
      {Array.from({ length: 18 }).map((_, i) => (
        <ellipse
          key={i}
          cx="200"
          cy="200"
          rx="180"
          ry="60"
          transform={`rotate(${i * 10} 200 200)`}
        />
      ))}
      {Array.from({ length: 12 }).map((_, i) => (
        <ellipse
          key={`v${i}`}
          cx="200"
          cy="200"
          rx="60"
          ry="180"
          transform={`rotate(${i * 15} 200 200)`}
        />
      ))}
    </g>
  </motion.svg>
);
