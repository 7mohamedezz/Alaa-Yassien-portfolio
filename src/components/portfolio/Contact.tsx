import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react";

const channels = [
  { icon: Mail, label: "Email", value: "Alaamt33@gmail.com", href: "mailto:Alaamt33@gmail.com" },
  { icon: Phone, label: "Phone", value: "010 3002 7769", href: "tel:+201030027769" },
  { icon: Linkedin, label: "LinkedIn", value: "alaayassien1", href: "https://linkedin.com/in/alaayassien1" },
  { icon: MapPin, label: "Location", value: "Luxor, Egypt", href: "#" },
];

export const Contact = () => (
  <section id="contact" className="py-32 relative">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-[2rem] glass p-10 md:p-16 overflow-hidden"
      >
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />

        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">// Let's collaborate</div>
            <h2 className="text-4xl md:text-6xl font-bold leading-[1.05]">
              Have a project in mind?
              <br />
              <span className="text-gradient">Let's build it.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Open to freelance Flutter development, UI/UX design and presentation work. Replies usually within 24 hours.
            </p>
            <a
              href="mailto:Alaamt33@gmail.com"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-medium glow-amber hover:scale-105 transition-transform"
            >
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {channels.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl bg-card/60 border border-border p-5 hover:border-primary/40 transition-colors"
              >
                <c.icon className="h-5 w-5 text-primary mb-3" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                <div className="font-medium mt-1 break-all group-hover:text-primary transition-colors">
                  {c.value}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Alaa Yassien. Crafted with Flutter-grade attention to detail.</div>
        <div>Flutter Developer & UI/UX Designer</div>
      </footer>
    </div>
  </section>
);
