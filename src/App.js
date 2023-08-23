import React, { useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import PhotoDetails from "./Pages/PhotoDetails";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import { useDispatch, useSelector } from "react-redux";
import { googleLogin } from "./Actions/UserAction";
import Login from "./Pages/Auth";
import Profile from "./Pages/Profile";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(googleLogin());
  }, [dispatch]);
  const { user, status, error, isAuthenticated } = useSelector(
    (state) => state.Authuser
  );
  if (status === "loading") {
    toast.loading("Logging in", { duration: 800 });
  }
  if (status === "succeeded") {
    toast.success("Logged in");
  }
  if (status === "failed") {
    toast.error("Not Logged in");
  }
  if (error) {
    toast.error(error);
  }
  return (
    <>
      <BrowserRouter>
        <Header isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photo/:id" element={<PhotoDetails />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          {isAuthenticated && (
            <Route path="/Profile" element={<Profile user={user.user} />} />
          )}
        </Routes>
        <Footer />
        <Toaster position="bottom-left" />
      </BrowserRouter>
    </>
  );
};
export const server = "https://featherserver.onrender.com/api/v1";

export default App;
