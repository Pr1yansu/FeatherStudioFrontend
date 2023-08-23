import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Heading = (props) => {
  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col gap-4 justify-center items-center mt-16"
        initial={{ opacity: 0, y: "-100%" }}
        exit={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-main">{props.heading}</h3>
        <p className="text-light">{props.subHeading}</p>
        <motion.span
          className="w-96 h-1 bg-main-m rounded-md"
          initial={{ opacity: 0, width: 0 }}
          exit={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "24rem" }}
          transition={{ duration: 0.5 }}
        ></motion.span>
      </motion.div>
    </AnimatePresence>
  );
};

export default Heading;
