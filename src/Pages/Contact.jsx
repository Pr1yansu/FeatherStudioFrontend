import React, { useState } from "react";
import Heading from "../Components/Heading";
import { Tooltip } from "@mui/material";
import data from "../Components/rawData";
import { motion } from "framer-motion";
import { ContactSection } from "./Home";
import { toast } from "react-hot-toast";
import { server } from "../App";
import axios from "axios";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  // Submit Massage
  const submitContactMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${server}/new/massage`, {
        name: username,
        email: useremail,
        address: address,
        massage: message,
      });
      toast.success("Data Submitted");
      setAddress("");
      setMessage("");
      setUsername("");
      setUseremail("");
    } catch (error) {
      if (error.response) {
        console.log("Error response:", error.response.data);
        toast.error(
          "Error submitting data: " + error.response.data.error.message
        );
      } else if (error.request) {
        console.log("Request error:", error.request);
        toast.error("Error submitting data: Request error");
      } else {
        console.log("General error:", error.message);
        toast.error("Error submitting data: General error");
      }
    }
  };

  return (
    <main>
      <Heading heading="Contact" subHeading="Get in touch" />
      <section className="max-w-6xl min-h-screen mx-auto py-16">
        <div className="w-full flex flex-wrap justify-center">
          {data.map((e, i) => (
            <motion.div
              className="xl:w-1/3 md:w-1/2 w-full h-96 p-5"
              key={e.id}
              initial={{ opacity: 0, y: "-200%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 * i, duration: 0.3, type: "spring" }}
            >
              <Tooltip title={e.heading} placement="top-start" arrow>
                <div className="text-light h-full w-full rounded-md shadow-zinc-950 shadow-lg bg-zinc-900 flex flex-col p-5 justify-center items-center text-center gap-4 px-16 cursor-pointer">
                  {e.icon}
                  <h3 className="text-main">{e.heading}</h3>
                  <hr className="bg-light block h-0.5 w-full" />
                  <p>{e.description}</p>
                </div>
              </Tooltip>
            </motion.div>
          ))}
        </div>
        <ContactSection
          onClick={submitContactMessage}
          setUsername={setUsername}
          setUseremail={setUseremail}
          setMessage={setMessage}
          setAddress={setAddress}
          username={username}
          useremail={useremail}
          address={address}
          message={message}
        />
      </section>
    </main>
  );
};

export default Contact;
