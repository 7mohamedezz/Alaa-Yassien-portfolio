import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => (
  <motion.nav
    initial={{ y: -40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="fixed top-0 left-0 right-0 z-50 glass"
  >
    <div className="container mx-auto flex items-center justify-between py-4">
      <a href="#home" className="font-bold text-lg tracking-tight">
        <span className="text-gradient-amber">A</span>laa<span className="text-muted-foreground">.</span>
      </a>
      <ul className="hidden md:flex items-center gap-8 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="relative text-muted-foreground hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-glow transition-colors"
      >
        Hire me
      </a>
    </div>
  </motion.nav>
);
