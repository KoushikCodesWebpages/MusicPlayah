import React from "react";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-indigo-700 text-white py-4 fixed top-0 left-0 w-full z-10 shadow-md"
    >
      <div className="container mx-auto flex justify-center items-center">
        <img src="/android-chrome-512x512.png" alt="MusicPlayah Logo" className="h-9 w-10" />
        <h1 className="text-3xl font-bold ml-4">MusicPlayah</h1>
      </div>
    </motion.nav>
  );
};

export default Nav;