import { motion } from "framer-motion";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import alaaPhoto from "@/assets/alaa.png";

export const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
    <div className="absolute inset-0 grid-bg opacity-40" />
    <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl animate-pulse" />
    <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-pulse" />

    <div className="container mx-auto relative z-10 grid md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground mb-8"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Available for freelance work
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95]"
        >
          Alaa
          <br />
          <span className="text-gradient">Yassien.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
        >
          Freelance <span className="text-foreground font-medium">Flutter Developer</span> and{" "}
          <span className="text-foreground font-medium">UI/UX Designer</span> crafting cross-platform
          apps and intuitive interfaces from Luxor, Egypt.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground glow-amber hover:scale-[1.03] transition-transform"
          >
            View my work
            <ArrowDown className="inline-block ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </a>
          <a href="#contact" className="rounded-full border border-border px-7 py-3.5 font-medium hover:bg-card transition-colors">
            Get in touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <MapPin className="h-4 w-4 text-primary" /> Luxor, Egypt · Working remotely worldwide
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="md:col-span-5 relative"
      >
        <div className="relative aspect-square max-w-md mx-auto">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-primary/40"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-6 rounded-full border border-dashed border-secondary/40"
          />
          <div className="absolute inset-12 rounded-full glow-blue overflow-hidden">
            <img
              src={alaaPhoto}
              alt="Alaa Yassien portrait"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          {[
            { label: "Flutter", className: "top-0 left-1/2 -translate-x-1/2" },
            { label: "Dart", className: "top-1/2 right-0 -translate-y-1/2" },
            { label: "Figma", className: "bottom-0 left-1/2 -translate-x-1/2" },
            { label: "C++", className: "top-1/2 left-0 -translate-y-1/2" },
          ].map((tag, i) => (
            <motion.div
              key={tag.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
              className={`absolute ${tag.className} glass rounded-full px-4 py-1.5 text-xs font-medium`}
            >
              {tag.label}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
