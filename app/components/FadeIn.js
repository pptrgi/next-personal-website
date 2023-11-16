import { motion } from "framer-motion";

const FadeIn = ({ children }) => {
  const viewport = { once: true, margin: "0px 0px -200px" };
  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    transition: 0.5,
  };
  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      transition="transition"
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
