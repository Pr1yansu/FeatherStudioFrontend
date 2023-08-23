import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Tooltip } from "@mui/material";

const Card = (props) => {
  return (
    <AnimatePresence>
      <Tooltip title="click to view" placement="top">
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          exit={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: props.i ? 0.2 * props.i : 0.3 }}
        >
          <div className="overflow-hidden h-96 w-full bg-dark rounded-md shadow-lg shadow-zinc-950 relative card">
            <img
              src={props.image}
              alt="img.jpg"
              className="bg-dark h-full rounded-md shadow-lg shadow-zinc-950 object-cover object-center w-full duration-300"
            />
            <div className="absolute h-0 w-0 left-0 top-0 bg-black bg-opacity-25 card-overlay"></div>
          </div>
        </motion.div>
      </Tooltip>
    </AnimatePresence>
  );
};

export default Card;
