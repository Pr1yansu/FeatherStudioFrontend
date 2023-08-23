import { Button } from "@mui/material";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { server } from "../App";

const Login = () => {
  const googleLogin = () => {
    window.open(`${server}/google`, "_self");
  };

  return (
    <main>
      <section className="w-90% mx-auto min-h-screen flex justify-center items-center">
        <ul className="text-center text-lg w-96">
          <Button
            className="w-full"
            variant="contained"
            color="info"
            sx={{
              fontSize: "18px",
            }}
          >
            Sign UP
          </Button>
          <p className="text-light px-3 py-2 rounded-lg my-4">
            If already have an account
          </p>
          <Button
            className="w-full"
            variant="outlined"
            sx={{
              color: "white",
              ":hover": { background: "rgba(255, 215, 0, 0.10)" },
              fontSize: "18px",
            }}
          >
            Sign IN
          </Button>
          <Button
            className="w-full"
            variant="contained"
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: "16px",
              fontSize: "18px",
            }}
            color="info"
            onClick={googleLogin}
          >
            Google Login
            <FcGoogle />
          </Button>
        </ul>
      </section>
    </main>
  );
};

export default Login;
