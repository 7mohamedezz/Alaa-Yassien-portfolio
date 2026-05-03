import { motion } from "framer-motion";
import { Smartphone, PenTool, Presentation, ArrowUpRight } from "lucide-react";

const projects = [
  {
    icon: Smartphone,
    tag: "Mobile Development",
    title: "Cross-Platform Flutter Applications",
    description:
      "Built multiple production-grade mobile applications targeting both iOS and Android from a single codebase. Focused on responsive layouts, smooth animations, and clean architecture patterns.",
    accent: "from-primary/20 to-primary/0",
  },
  {
    icon: PenTool,
    tag: "Product Design",
    title: "UI/UX Design Portfolio",
    description:
      "Delivered user-centered interface designs for various clients including wireframes, component systems, and interactive prototypes — from initial concept to final handoff.",
    accent: "from-secondary/25 to-secondary/0",
  },
  {
    icon: Presentation,
    tag: "Visual Communication",
    title: "Professional Presentation Design",
    description:
      "Designed visually polished PowerPoint presentations for academic, business, and client-facing purposes, emphasizing storytelling and visual hierarchy.",
    accent: "from-primary/20 to-secondary/0",
  },
];

export const Projects = () => (
  <section id="projects" className="py-32 relative">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-2xl"
      >
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">// Selected Work</div>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Projects that ship — <span className="text-gradient-amber">and stay polished.</span>
        </h2>
      </motion.div>

      <div className="space-y-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{ scale: 1.01 }}
            className="group relative grid md:grid-cols-12 gap-6 items-center rounded-3xl glass p-8 md:p-10 overflow-hidden cursor-pointer"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-50 group-hover:opacity-100 transition-opacity`} />

            <div className="relative md:col-span-2">
              <div className="h-20 w-20 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:border-primary/40 transition-colors">
                <p.icon className="h-9 w-9 text-primary" />
              </div>
            </div>

            <div className="relative md:col-span-8">
              <div className="text-xs uppercase tracking-widest text-primary mb-2">{p.tag}</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-gradient transition-all">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{p.description}</p>
            </div>

            <div className="relative md:col-span-2 flex md:justify-end">
              <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
