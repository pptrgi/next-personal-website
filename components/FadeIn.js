"use client";

import { useReducedMotion, motion } from "framer-motion";

const FadeIn = (props) => {
  const prefersReducedMotion = useReducedMotion();

  const viewport = { once: true, margin: "0px 0px -100px" };
  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 32,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      {...props}
    />
  );
};

export default FadeIn;

// "use client";

// import { useContext, createContext } from "react";
// import { useReducedMotion, motion } from "framer-motion";
// const FadeInStaggerContext = createContext();

// const viewport = { once: true, margin: "0px 0px -200px" };

// const FadeIn = (props) => {
//   const prefersReducedMotion = useReducedMotion();
//   const inStaggerContext = useContext(FadeInStaggerContext);

//   const fadeInVariants = {
//     hidden: {
//       opacity: 0,
//       y: prefersReducedMotion ? 0 : 24,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//     },
//   };
//   return (
//     <motion.div
//       variants={fadeInVariants}
//       {...(inStaggerContext
//         ? {}
//         : { initial: "hidden", whileInView: "visible", viewport })}
//       transition={0.5}
//       {...props}
//     />
//   );
// };

// export const FadeInStagger = ({ faster = false, ...props }) => {
//   return (
//     <FadeInStaggerContext.Provider value={true}>
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={viewport}
//         transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
//         {...props}
//       />
//     </FadeInStaggerContext.Provider>
//   );
// };

// export default FadeIn;
