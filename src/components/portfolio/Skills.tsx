import { motion } from "framer-motion";
import { Code2, Layers, Palette, Cog, Heart } from "lucide-react";

const groups = [
  { icon: Code2, title: "Languages", items: ["Dart", "C++"] },
  { icon: Layers, title: "Frameworks", items: ["Flutter", "Cross-platform Development"] },
  { icon: Palette, title: "Design", items: ["UI/UX Design", "Wireframing", "Prototyping", "Figma"] },
  { icon: Cog, title: "Engineering", items: ["Software Development", "Agile Workflow", "Client Management"] },
  { icon: Heart, title: "Soft Skills", items: ["Communication", "Presentation", "Problem Solving", "Time Management"] },
];

export const Skills = () => (
  <section id="skills" className="py-32 relative">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-end justify-between flex-wrap gap-6 mb-14"
      >
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">// Technical Skills</div>
          <h2 className="text-4xl md:text-5xl font-bold">The toolkit.</h2>
        </div>
        <p className="text-muted-foreground max-w-md">
          A focused stack honed across years of freelance work — from low-level fundamentals to polished interfaces.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative rounded-2xl glass p-7 overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                  <g.icon className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="text-xs px-3 py-1.5 rounded-full bg-muted/50 border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
