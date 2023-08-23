import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IconButton, Tooltip, tooltipClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

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
const Footer = () => {
  return (
    <main>
      <section className="h-60 flex justify-center items-center bg-dark flex-col gap-3">
        <div className="flex space-x-4 text-xl py-3">
          <a href="www.facebook.com">
            <LightTooltip title="Facebook" placement="top-end" arrow>
              <IconButton>
                <FaFacebook
                  color="#D9D9D9"
                  className="hover:!text-main duration-300"
                />
              </IconButton>
            </LightTooltip>
          </a>
          <a href="www.instagram.com">
            <LightTooltip title="Instagram" placement="top-end" arrow>
              <IconButton>
                <BsInstagram
                  color="#D9D9D9"
                  className="hover:!text-main duration-300"
                />
              </IconButton>
            </LightTooltip>
          </a>
        </div>
        <div>
          <span className="text-light text-sm">
            &copy; COPYRIGHTS FEATHER STUDIOS. ALL RIGHTS RESERVED.
          </span>
        </div>
        <div>
          <span className="text-light text-sm">Designed by</span>
          <span className="text-white px-3 text-lg">Snehashis Ghorai</span>
        </div>
      </section>
    </main>
  );
};

export default Footer;
