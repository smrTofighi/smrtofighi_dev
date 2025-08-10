import React from "react";
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";

const NavbarLogo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center space-x-2"
    >
      <Code2 className="text-purple-600" />{" "}
      <span className={`text-lg ml-1 text-purple-600`}>smrTofighi</span>
    </motion.div>
  );
};

export default NavbarLogo;
