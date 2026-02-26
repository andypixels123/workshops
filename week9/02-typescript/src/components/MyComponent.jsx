"use client";
import { motion } from "motion/react";

export default function MyComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>Hello world</h1>
    </motion.div>
  );
}


