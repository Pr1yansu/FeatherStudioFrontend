import React from "react";
import { motion } from "framer-motion";

const Button = (props) => {
  return (
    <motion.input
      className="w-full text-light bg-main-m p-2 rounded-md border border-main-m  text-center text-xl hover:text-main-m cursor-pointer outline-none hover:bg-transparent duration-75"
      type="submit"
      whileHover={{ scaleX: 1.01 }}
      whileTap={{ scaleX: 0.99 }}
      value={props.name}
      onClick={props.onClick}
    />
  );
};

export default Button;
