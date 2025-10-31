"use client";

import Banner from "@/components/Banner/Banner";
import BrandSection from "@/components/BrandSection/BrandSection";
import InfoSection from "@/components/InfoSection/InfoSection";
import QualityHighlight from "@/components/QualityHighlight/QualityHighlight";
import Services from "@/components/Services/Services";
import Welcome from "@/components/Welcome/Welcome";
import WhyTrustUs from "@/components/WhyTrustUs/WhyTrustUs";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div>
      {/* <h1>Welcome to Tyre pro</h1>  */}
      <motion.section
        // initial="hidden"
        // whileInView="visible"
        // viewport={{ once: false, amount: 0.5 }}
        // transition={{ duration: 0.6, ease: "easeOut" }}
        // variants={sectionVariants}
      >
        <Banner />
      </motion.section>

      <motion.section
         initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        variants={sectionVariants}
      >
        <Welcome />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        variants={sectionVariants}
      >
        <BrandSection />
      </motion.section>

      <motion.section
      initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        variants={sectionVariants}
      >
        <InfoSection />
      </motion.section>


      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        variants={sectionVariants}
      >
        <Services />
      </motion.section>


      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        variants={sectionVariants}
      >
        <QualityHighlight />
      </motion.section>

       <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        variants={sectionVariants}
      >
        <WhyTrustUs />
      </motion.section>

    </div>
  );
}
