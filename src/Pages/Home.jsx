import React, { Fragment, useEffect, useState } from "react";
import MetaData from "../Components/MetaData";
import Typewriter from "typewriter-effect";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IconButton, Skeleton, Tooltip, tooltipClasses } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import Heading from "../Components/Heading";
import Card from "../Components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../Actions/PhotoAction";
import { toast } from "react-hot-toast";
import { fetchCategories } from "../Actions/CategoryAction";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import axios from "axios";
import { server } from "../App";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const BannerComponent = () => {
  return (
    <main>
      <section className="relative mx-auto min-h-screen flex items-center justify-center">
        <motion.img
          src="/assets/img/HomeBg.jpg"
          alt="logo.png"
          className="absolute object-cover -z-10 top-0 right-0 w-full h-full object-right"
          initial={{ opacity: 1, width: 0, height: 0 }}
          animate={{ opacity: 1, width: "100%", height: "100%" }}
          transition={{ duration: 0.3 }}
        />
        <div className="w-90%">
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Hello !",
                  "WELCOME TO FEATHER STUDIO",
                  "I am Snehashis Ghorai",
                  "I am a Photographer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <h5 className="text-light tracking-wider">Makeover & Photoshoot</h5>
          <div className="flex space-x-4 text-xl py-8">
            <a href="www.facebook.com">
              <LightTooltip title="Facebook" placement="top-end" arrow>
                <IconButton>
                  <FaFacebook color="#D9D9D9" />
                </IconButton>
              </LightTooltip>
            </a>
            <a href="www.instagram.com">
              <LightTooltip title="Instagram" placement="top-end" arrow>
                <IconButton>
                  <BsInstagram color="#D9D9D9" />
                </IconButton>
              </LightTooltip>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export const AboutComponent = () => {
  return (
    <main>
      <Heading
        heading={"About Us"}
        subHeading={"Everything You Want To Know"}
      />
      <section className="w-90% min-h-screen mx-auto">
        <div className="flex py-16">
          <div className="w-1/2 flex justify-center items-center ">
            <div className="ms-20">
              <motion.img
                src="/assets/img/me.jpg"
                alt="about.jpg"
                className="object-cover border-10 border-main-m rounded-md"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </div>
          </div>
          <div className="w-1/2 py-4 px-8">
            <h4 className="text-main py-4">We believe in Quality.</h4>
            <p className="text-light xl:w-3/4">
              We are known to be best photo studio in Kolkata. We offer studio
              on rent in Kolkata at affordable cost are possess best
              infrastructure. Portfolio shoots, Indoor shoots or even outdoor
              shoots are specialization. Book Photo Studio in Kolkata
            </p>
          </div>
        </div>
        <div className="flex py-16">
          <div className="flex justify-center w-1/2">
            <img
              src="https://images.unsplash.com/photo-1690993660127-1a7cdd87ec9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt="me.jpg"
              className="rounded-md"
            />
          </div>
          <div className="w-1/2 py-4 px-8">
            <h4 className="text-main py-4">We believe in Quality.</h4>
            <p className="text-light xl:w-2/3">
              We are known to be best photo studio in Kolkata. We offer studio
              on rent in Kolkata at affordable cost are possess best
              infrastructure. Portfolio shoots, Indoor shoots or even outdoor
              shoots are specialization. Book Photo Studio in Kolkata
            </p>
          </div>
        </div>
        <div className="flex py-16">
          <div className="w-1/2 py-4 px-8 flex items-end flex-col text-end">
            <h4 className="text-main py-4">We believe in Quality.</h4>
            <p className="text-light xl:w-2/3">
              We are known to be best photo studio in Kolkata. We offer studio
              on rent in Kolkata at affordable cost are possess best
              infrastructure. Portfolio shoots, Indoor shoots or even outdoor
              shoots are specialization. Book Photo Studio in Kolkata
            </p>
          </div>
          <div className="flex justify-center w-1/2">
            <img
              src="https://images.unsplash.com/photo-1690993660127-1a7cdd87ec9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt="me.jpg"
              className="rounded-md"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

const SmallGallery = (props) => {
  return (
    <>
      {props ? (
        <main>
          <Heading heading={"Gallery"} subHeading={"Some Recent works"} />
          <div>
            <ul className="flex justify-center space-x-8 flex-wrap py-16">
              <Tooltip title="All Photos" arrow>
                <li
                  className={
                    props.category === "All"
                      ? "px-5 py-2 shadow-md shadow-main-m rounded-full bg-main-m text-light cursor-pointer duration-300"
                      : "px-5 py-2 shadow-md shadow-zinc-950 rounded-full text-light cursor-pointer duration-300"
                  }
                  onClick={() => {
                    props.setCategory("All");
                  }}
                >
                  All
                </li>
              </Tooltip>
              {props.categories &&
                props.categories.categories &&
                props.categories.categories.map((e, i) => {
                  return (
                    <Tooltip key={i} title={`${e.name} Photos`} arrow>
                      <li
                        className={
                          props.category === e.name
                            ? "px-5 py-2 shadow-md shadow-main-m rounded-full bg-main-m text-light cursor-pointer duration-300"
                            : "px-5 py-2 shadow-md shadow-zinc-950 rounded-full text-light cursor-pointer duration-300"
                        }
                        onClick={() => {
                          props.setCategory(e.name);
                        }}
                      >
                        {e.name}
                      </li>
                    </Tooltip>
                  );
                })}
            </ul>
          </div>
          {props.status === "loading" ? (
            <section className="w-90% mx-auto flex flex-wrap p-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => {
                return (
                  <div
                    key={e}
                    className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-full h-96 p-3"
                  >
                    <Skeleton width={"100%"} height={"24rem"} />
                  </div>
                );
              })}
            </section>
          ) : (
            <section className="min-h-screen w-90% mx-auto">
              <div className="flex flex-wrap pb-16">
                {props.photos &&
                  props.photos.photos &&
                  props.photos.photos.map((e, i) => {
                    return (
                      <Fragment key={i}>
                        <Link
                          className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-full p-5 cursor-pointer"
                          to={`/photo/${e._id}`}
                        >
                          <Card image={e.images && e.images[0].url} i={i} />
                        </Link>
                      </Fragment>
                    );
                  })}
              </div>
            </section>
          )}
        </main>
      ) : (
        <div className="min-h-screen flex justify-center items-start text-5xl text-light">
          "No Photos in Recent Activities"
        </div>
      )}
    </>
  );
};

export const ContactSection = (props) => {
  return (
    <section className="max-w-3xl mx-auto text-center">
      <Heading
        heading="Have any question"
        subHeading="It is a long established fact that a reader will be distracted content of a page when looking."
      />
      <div className="flex justify-between items-center space-x-4 py-16">
        <form className="w-full">
          <div className="flex md:space-x-4 max-md:flex-wrap">
            <input
              type="text"
              name="name"
              placeholder="name"
              required={true}
              className="px-3 py-2 rounded-md my-4 w-full outline-none bg-transparent shadow-sm text-main shadow-zinc-950 placeholder:text-slate-500"
              onChange={(e) => {
                props.setUsername(e.target.value);
              }}
              value={props.username}
            />
            <input
              type="email"
              name="email"
              placeholder="email or phone number"
              required={true}
              className="px-3 py-2 rounded-md my-4 w-full outline-none bg-transparent shadow-sm text-main shadow-zinc-950 placeholder:text-slate-500"
              onChange={(e) => {
                props.setUseremail(e.target.value);
              }}
              value={props.useremail}
            />
          </div>
          <input
            type="text"
            name="address"
            placeholder="address"
            required={true}
            className="px-3 py-2 rounded-md my-4 w-full outline-none bg-transparent shadow-sm text-main shadow-zinc-950 placeholder:text-slate-500"
            onChange={(e) => {
              props.setAddress(e.target.value);
            }}
            value={props.address}
          />
          <textarea
            type="text"
            name="message"
            placeholder="message"
            required={true}
            rows={8}
            className="px-3 py-2 rounded-md my-4 w-full outline-none bg-transparent shadow-sm text-main shadow-zinc-950 placeholder:text-slate-500"
            onChange={(e) => {
              props.setMessage(e.target.value);
            }}
            value={props.message}
          />
          <Button name={"Submit"} onClick={props.onClick} />
        </form>
      </div>
    </section>
  );
};

const Home = () => {
  const [category, setCategory] = useState("All");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPhotos(category));
  }, [dispatch, category]);
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const { error, photos, status } = useSelector((state) => state.photos);
  const categoryData = useSelector((state) => state.categories);
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
  if (error) {
    toast.error(error);
  }
  if (categoryData.error) {
    toast.error(categoryData.error);
  }
  return (
    <>
      <MetaData title={"Feather Studio"} />
      <BannerComponent />
      <AboutComponent />
      <SmallGallery
        categories={categoryData.categories}
        photos={photos}
        setCategory={setCategory}
        category={category}
        status={status}
      />
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
    </>
  );
};

export default Home;
