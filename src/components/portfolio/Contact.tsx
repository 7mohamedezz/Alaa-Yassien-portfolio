import { motion } from "framer-motion";
import { Phone, Mail, Globe } from "lucide-react";
import { Sparkle } from "./Sparkle";

const channels = [
  { icon: Phone, value: "01030027769", href: "tel:+201030027769" },
  { icon: Mail, value: "Alaamt33@gmail.com", href: "mailto:Alaamt33@gmail.com" },
  { icon: Globe, value: "www.AlaaYassienn.com", href: "#" },
];

export const Contact = () => (
  <section id="contact" className="py-32 px-6 overflow-hidden">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative frame-line rounded-[2.5rem] p-10 md:p-16"
      >
        <Sparkle size={90} className="absolute -top-8 -right-8" delay={0.2} />
        <Sparkle size={60} className="absolute -bottom-6 -left-6" delay={0.5} />

        <h2 className="font-serif-display text-5xl md:text-7xl text-center mb-16">Get In Touch!</h2>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-12">
          {channels.map((c, i) => (
            <motion.a
              key={c.value}
              href={c.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-3 rounded-full border border-foreground/40 bg-background/30 backdrop-blur-sm px-4 py-3 hover:bg-foreground hover:text-background transition-colors group"
            >
              <span className="h-9 w-9 rounded-full bg-foreground text-background flex items-center justify-center group-hover:bg-background group-hover:text-foreground transition-colors flex-shrink-0">
                <c.icon className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium truncate">{c.value}</span>
            </motion.a>
          ))}
        </div>

        <p className="text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          I'm always open to new opportunities, collaborations, and freelance projects in Flutter
          development, UI/UX design, and PowerPoint design.
          <br />
          If you have a project idea or a job opportunity, feel free to reach out — I'd love to connect
          and discuss how I can help bring your vision to life.
        </p>
      </motion.div>

      <footer className="mt-16 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Alaa Yassien · Flutter Developer & UI/UX Designer
      </footer>
    </div>
  </section>
);
