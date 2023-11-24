"use client";

import { usePathname } from "next/navigation";
import { MotionConfig, useReducedMotion } from "framer-motion";

import Header from "./Header";
import Footer from "./Footer";

const RootLayoutInner = ({ children }) => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <MotionConfig
      transition={prefersReducedMotion ? { duration: 0 } : undefined}
    >
      <Header />
      {children}
      <Footer />
    </MotionConfig>
  );
};

const RootLayout = ({ children }) => {
  const pathname = usePathname();
  return <RootLayoutInner key={pathname}>{children}</RootLayoutInner>;
};

export default RootLayout;
