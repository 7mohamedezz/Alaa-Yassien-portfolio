import { motion } from "framer-motion";
import zakerni from "@/assets/zakerni.jpg";
import { Sparkle } from "./Sparkle";

export const Project = () => (
  <section id="project" className="py-32 px-6 overflow-hidden">
    <div className="container mx-auto max-w-6xl">
      {/* Intro flag */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="text-center mb-24"
      >
        <p className="font-italic-display text-3xl text-muted-foreground">Let's See</p>
        <h2 className="font-serif-display text-7xl md:text-9xl mt-2">Project</h2>
      </motion.div>

      <div className="grid md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="md:col-span-7 relative"
        >
          <Sparkle size={70} className="absolute -top-6 -left-2" delay={0.3} />
          <div className="space-y-2">
            <h3 className="font-serif-display text-5xl md:text-6xl">My Latest</h3>
            <h3 className="font-serif-display text-6xl md:text-8xl tracking-tight">Zakerni App</h3>
            <div className="inline-flex items-center bg-foreground text-background rounded-full px-8 py-3 mt-4 font-serif-display text-lg italic">
              As Flutter Dev
            </div>
          </div>

          <div className="mt-10 space-y-4 text-muted-foreground leading-relaxed max-w-xl">
            <p className="text-foreground">🌙 Zakerni — Your Daily Islamic Companion</p>
            <p>
              Zakerni is a beautifully designed Islamic app that helps you stay spiritually connected
              throughout your day with ease, focus, and tranquility.
            </p>
            <p>
              Built with a modern, clean UI and a calming blue color system, Zakerni delivers a seamless
              experience in both Light and Dark modes — crafted to support your prayers anytime, anywhere.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          whileHover={{ y: -10 }}
          className="md:col-span-5"
        >
          <div className="relative max-w-sm mx-auto">
            <div className="arch-full overflow-hidden bg-card" style={{ borderRadius: '3rem 3rem 3rem 3rem' }}>
              <img src={zakerni} alt="Zakerni App screenshots" className="w-full h-auto" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
