import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Languages } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    title: "Freelance Flutter Developer & UI/UX Designer",
    meta: "2022 — Present · Self-Employed · Remote",
    body: "End-to-end project delivery — from requirement gathering and wireframes to production-ready cross-platform Flutter apps for clients worldwide.",
  },
  {
    icon: GraduationCap,
    title: "B.Sc. in Information Technology",
    meta: "Senior Year · South Valley University, Qena",
    body: "Building a strong foundation in software engineering, modern design principles, and agile workflows.",
  },
  {
    icon: Languages,
    title: "Languages",
    meta: "Native & professional working proficiency",
    body: "Arabic — Native · English — Good (B1–B2). Comfortable communicating with international clients.",
  },
];

export const About = () => (
  <section id="about" className="py-32 relative">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mb-16"
      >
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">// Professional Summary</div>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Senior IT student turning ideas into <span className="text-gradient">refined mobile products.</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Hands-on experience building cross-platform mobile applications and crafting intuitive interfaces.
          Client-focused, design-led, and obsessed with clean architecture.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="glass rounded-2xl p-7 hover:border-primary/40 transition-colors"
          >
            <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-lg leading-snug">{item.title}</h3>
            <div className="text-xs text-primary mt-1 mb-3">{item.meta}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
