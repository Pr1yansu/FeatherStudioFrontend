import React, { Fragment, useEffect, useState } from "react";
import Heading from "../Components/Heading";
import {
  IconButton,
  Pagination,
  Rating,
  Skeleton,
  Slider,
  Tooltip,
} from "@mui/material";
import { MdFilterList, MdFilterListOff } from "react-icons/md";
import { Masonry } from "@mui/lab";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotosAll } from "../Actions/PhotoAction";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { fetchCategories } from "../Actions/CategoryAction";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [cat, setCat] = useState("All");
  const [rating, setRating] = useState(0);
  const [price, setPrice] = useState([500, 5000]);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  useEffect(() => {
    const filters = [cat, rating, price, page];
    dispatch(fetchPhotosAll(filters));
  }, [dispatch, cat, rating, price, page]);
  const { photos, status, error } = useSelector((state) => state.photos);
  const categoryData = useSelector((state) => state.categories);
  if (error) {
    toast.error(error.message);
  }
  const handleSlider = (e, newValue) => {
    setPrice(newValue);
  };

  return (
    <>
      <main
        onClick={() => {
          if (open === true) {
            setOpen(false);
          }
        }}
      >
        <Heading heading="Portfolio" subHeading="This is my Photo Gallery" />
        <Tooltip
          title={open ? "Close Filter" : "Choose From Filter"}
          placement="right-start"
          arrow
        >
          <IconButton
            onClick={() => {
              setOpen(!open);
            }}
            sx={{
              bgcolor: "#d4af37",
              ":hover": { bgcolor: "#ffd700" },
              position: "fixed",
              top: "100px",
              left: "2.5%",
            }}
          >
            {open ? (
              <MdFilterListOff className="text-dark" />
            ) : (
              <MdFilterList className="text-dark" />
            )}
          </IconButton>
        </Tooltip>
        <section className="w-90% mx-auto min-h-screen py-16">
          <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
            {status === "loading" ? (
              <Fragment>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((e, i) => {
                  return (
                    <Fragment key={i}>
                      <Skeleton height={450} />
                    </Fragment>
                  );
                })}
              </Fragment>
            ) : (
              <Fragment>
                {photos &&
                  photos.photos &&
                  photos.photos.map((e, i) => {
                    return (
                      <Fragment key={i}>
                        <Link className="cursor-pointer" to={`/photo/${e._id}`}>
                          <motion.div
                            className="shadow-lg shadow-zinc-950"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.2 * i }}
                          >
                            <motion.img
                              src={e.images && e.images[0].url}
                              alt="img.jpg"
                              className="rounded-md"
                            />
                          </motion.div>
                        </Link>
                      </Fragment>
                    );
                  })}
              </Fragment>
            )}
          </Masonry>
          <div className="flex justify-center items-center">
            {
              <Pagination
                count={
                  (photos && photos.resultPerPage && photos.resultPerPage) <
                    (photos && photos.photoCount && photos.photoCount) &&
                  (photos && photos.filteredPhotosCount) > 11
                    ? Math.ceil(
                        (photos && photos.photoCount && photos.photoCount) /
                          (photos &&
                            photos.resultPerPage &&
                            photos.resultPerPage)
                      )
                    : 1
                }
                onChange={(e, v) => {
                  setPage(v);
                }}
              />
            }
            <div />
          </div>
        </section>
      </main>
      <AnimatePresence>
        {open && (
          <motion.section
            className="w-80 bg-dark shadow-md bg-opacity-80 p-5 fixed top-[140px] left-[6%] z-20"
            initial={{ width: 0, minHeight: 0, padding: 0 }}
            exit={{ width: 0, minHeight: 0, padding: 0 }}
            animate={{
              width: "20rem",
              minHeight: "24rem",
              padding: "1.125rem",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <h5 className="text-main">Category :</h5>
              <ul className="pt-2">
                <li
                  className="text-light text-base py-0.5 px-2 cursor-pointer"
                  onClick={() => {
                    setCat("All");
                  }}
                >
                  All
                </li>
                {categoryData &&
                  categoryData.categories &&
                  categoryData.categories.categories &&
                  categoryData.categories.categories.map((e, i) => {
                    return (
                      <li
                        key={i}
                        className="text-light text-base py-0.5 px-2 cursor-pointer"
                        onClick={() => {
                          setCat(e.name);
                        }}
                      >
                        {e.name}
                      </li>
                    );
                  })}
              </ul>
              <h5 className="text-main">Rating :</h5>
              <ul className="pt-2">
                <li className="ratings">
                  <Tooltip title={`${rating} rating`} placement="top">
                    <Rating
                      value={rating}
                      onChange={(event, newValue) => {
                        setRating(newValue);
                      }}
                    />
                  </Tooltip>
                </li>
              </ul>
              <h5 className="text-main">Price :</h5>
              <p className="text-light">
                Range :<span className="px-2">{price[0]}</span>-
                <span className="px-2">{price[1]}</span>
              </p>
              <ul className="pt-2">
                <li className="ratings">
                  <Slider
                    value={price}
                    onChange={handleSlider}
                    valueLabelDisplay="auto"
                    size="small"
                    sx={{ color: "white" }}
                    min={500}
                    max={20000}
                    step={500}
                  />
                </li>
              </ul>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
