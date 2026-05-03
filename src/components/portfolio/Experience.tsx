import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";
import { Sparkle } from "./Sparkle";

const items = [
  {
    title: "We Training",
    period: "2026",
    bullets: [
      "Successfully completed the Flutter Mobile Application Diploma (120 hours), where I built modern, responsive mobile applications using Flutter and Dart.",
      "Completed the UI/UX Design Diploma (120 hours), gaining strong skills in user research, wireframing, prototyping, and creating intuitive user experiences.",
      "Developed multiple mobile app projects focusing on performance, clean UI, and user-centered design.",
    ],
  },
  {
    title: "Freelancing",
    period: "2024-Present",
    bullets: [
      "Worked as a freelance Flutter Developer and UI/UX Designer, delivering mobile applications and user-centered designs for different clients.",
      "Designed and developed responsive mobile apps with a focus on performance, usability, and clean UI.",
      "Created wireframes, prototypes, and high-fidelity designs based on client requirements and business goals.",
    ],
  },
];

export const Experience = () => (
  <section id="experience" className="py-32 px-6 overflow-hidden">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative flex flex-col items-center mb-16"
      >
        <div className="relative">
          <Sparkle size={100} className="absolute -left-32 top-1/2 -translate-y-1/2 hidden md:block" />
          <Sparkle size={100} className="absolute -right-32 top-1/2 -translate-y-1/2 hidden md:block" />
          <div className="arch-full overflow-hidden ring-2 ring-foreground/90 w-56 h-72" style={{ borderRadius: '50% 50% 50% 50% / 40% 40% 40% 40%' }}>
            <img src={portrait} alt="Alaa Yassien" className="w-full h-full object-cover grayscale" />
          </div>
        </div>
        <h2 className="font-serif-display text-5xl md:text-7xl mt-6">My Experience</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className={`relative ${i === 0 ? 'md:border-r md:border-foreground/40 md:pr-10' : 'md:pl-6'}`}
          >
            <div className="flex items-baseline justify-center gap-4 mb-8">
              <h3 className="text-2xl tracking-wide font-light">{it.title}</h3>
              <span className="font-italic-display text-2xl">{it.period}</span>
            </div>
            <ul className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
              {it.bullets.map((b, j) => (
                <li key={j} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
