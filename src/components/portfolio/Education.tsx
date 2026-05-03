import { motion } from "framer-motion";
import university from "@/assets/university.jpg";

export const Education = () => (
  <section id="education" className="py-32 px-6">
    <div className="container mx-auto max-w-6xl">
      <div className="grid md:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="md:col-span-8"
        >
          <div className="frame-line rounded-[2.5rem] p-10 md:p-14 min-h-[26rem] flex flex-col">
            <h2 className="font-serif-display text-5xl md:text-7xl mb-12">My Education</h2>
            <div className="grid grid-cols-2 gap-10 flex-1 items-center">
              <div className="text-center border-r border-foreground/40 pr-4">
                <h3 className="text-xl md:text-2xl font-light tracking-wide">Bachelor Degree</h3>
                <p className="font-italic-display text-3xl mt-6">2027</p>
                <p className="text-muted-foreground mt-6 text-sm leading-relaxed">
                  Graduated from,<br />Qena National Univirsity
                </p>
              </div>
              <div className="text-center pl-4">
                <h3 className="text-xl md:text-2xl font-light tracking-wide">Senior High School</h3>
                <p className="font-italic-display text-3xl mt-6">2023</p>
                <p className="text-muted-foreground mt-6 text-sm leading-relaxed">
                  I finished high school from, luxor Secondary School.
                </p>
              </div>
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
          <div className="relative arch-full overflow-hidden aspect-[3/4] max-w-xs mx-auto" style={{ borderRadius: '50% 50% 1rem 1rem / 30% 30% 1rem 1rem' }}>
            <img src={university} alt="Qena National University" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
