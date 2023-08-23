import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPhotoDetails } from "../Actions/PhotoAction";
import { toast } from "react-hot-toast";
import { Modal, Rating, Skeleton, Tooltip } from "@mui/material";
import Heading from "../Components/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillCloseCircle } from "react-icons/ai";
import "swiper/css";

const PhotoDetails = () => {
  const params = useParams();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPhotoDetails(params.id));
  }, [dispatch, params.id]);
  const { photoDetail, error, status } = useSelector((state) => state.photos);
  if (error) {
    toast.error(error.message);
  }
  return (
    <>
      {status === "loading" ? (
        <Skeleton />
      ) : (
        <main>
          <Heading
            heading={
              photoDetail && photoDetail.photo && photoDetail.photo.category
            }
            subHeading={
              photoDetail && photoDetail.photo && photoDetail.photo.title
            }
          />
          <section className="w-90% mx-auto min-h-screen" id="photodetails">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              className="mb-4 relative"
            >
              {photoDetail &&
                photoDetail.photo &&
                photoDetail.photo.images &&
                photoDetail.photo.images.map((e, i) => {
                  console.log(photoDetail.photo.images.length);
                  return (
                    <Fragment key={i}>
                      <SwiperSlide className="p-3">
                        <div className="flex justify-center">
                          <Tooltip
                            title={
                              photoDetail.photo.images.length > 1
                                ? "Scroll to see more"
                                : "No image to scroll"
                            }
                          >
                            <img
                              src={e.url}
                              alt="img.jpg"
                              className={"p-5 cursor-pointer rounded-md"}
                              onClick={() => {
                                setOpen(true);
                              }}
                            />
                          </Tooltip>
                          <Modal
                            open={open}
                            onClose={() => {
                              setOpen(false);
                            }}
                          >
                            <div className="relative flex justify-center items-center min-h-screen">
                              <img
                                src={e.url}
                                alt="img.jpg"
                                className={"p-5 cursor-pointer rounded-md"}
                              />
                              <AiFillCloseCircle
                                className="absolute text-light text-3xl top-[5%] right-[5%] cursor-pointer"
                                onClick={() => {
                                  setOpen(false);
                                }}
                              />
                            </div>
                          </Modal>
                        </div>
                      </SwiperSlide>
                    </Fragment>
                  );
                })}
              <span className="w-3/4 h-0.5 bg-main-m block mx-auto absolute bottom-2 left-1/2 -translate-x-1/2 rounded-md"></span>
              <span className="w-4/5 h-0.5 bg-main-m block mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 rounded-md"></span>
            </Swiper>
            <div className="flex py-8">
              <div className="w-4/5">
                <h3 className="text-main py-2">Description :</h3>
                <p className="text-light text-base py-1">
                  {photoDetail &&
                    photoDetail.photo &&
                    photoDetail.photo.description}
                </p>
              </div>
              <div className="w-1/5">
                <h3 className="text-main py-2">Category :</h3>
                <p className="text-light text-base py-1">
                  {photoDetail &&
                    photoDetail.photo &&
                    photoDetail.photo.category}
                </p>
                <h3 className="text-main py-2">Price Range :</h3>
                <p className="text-light text-base py-1">
                  {photoDetail && photoDetail.photo && photoDetail.photo.price}
                </p>
                <h3 className="text-main py-2">Rating :</h3>
                <p className="text-light text-base py-1">
                  <Rating
                    value={
                      photoDetail &&
                      photoDetail.photo &&
                      photoDetail.photo.rating
                    }
                    readOnly
                  />
                </p>
                <h3 className="text-main py-2">Created At :</h3>
                <p className="text-light text-base py-1">
                  {photoDetail &&
                    photoDetail.photo &&
                    photoDetail.photo.createdAt}
                </p>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default PhotoDetails;
