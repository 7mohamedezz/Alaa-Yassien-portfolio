import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#project", label: "Project" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => (
  <motion.nav
    initial={{ y: -40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-border/40"
  >
    <div className="container mx-auto flex items-center justify-between py-5 px-6">
      <a href="#home" className="font-serif-display text-2xl tracking-tight">
        Alaa <span className="font-italic-display text-muted-foreground">Yassien</span>
      </a>
      <ul className="hidden md:flex items-center gap-10 text-sm tracking-wide">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="hidden md:inline-flex items-center rounded-full border border-foreground/80 px-5 py-2 text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors"
      >
        Hire me
      </a>
    </div>
  </motion.nav>
);
