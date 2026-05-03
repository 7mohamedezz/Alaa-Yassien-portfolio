import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";

export const About = () => (
  <section id="about" className="py-32 px-6">
    <div className="container mx-auto max-w-6xl">
      <div className="grid md:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="md:col-span-8 relative"
        >
          <div className="frame-line rounded-[2.5rem] p-10 md:p-14 relative">
            <h2 className="font-serif-display text-5xl md:text-7xl mb-8">About Me</h2>
            <div className="space-y-5 font-serif-display text-lg md:text-xl leading-relaxed text-foreground/90">
              <p>
                I'm a passionate Flutter developer and creative designer with a strong focus on building
                clean, user-friendly digital experiences. I specialize in developing mobile applications
                using Flutter, where I combine performance with elegant UI design to deliver smooth and
                responsive apps.
              </p>
              <p>
                Alongside development, I have a solid background in UI/UX design, allowing me to craft
                intuitive interfaces that prioritize user needs and usability. I pay close attention to
                detail, from layout and color harmony to user flow and interaction.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="md:col-span-4"
        >
          <div className="relative arch overflow-hidden ring-2 ring-foreground/90 aspect-[3/4] max-w-xs mx-auto">
            <img src={portrait} alt="Portrait of Alaa Yassien" className="w-full h-full object-cover grayscale" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
