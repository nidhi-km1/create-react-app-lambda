import { Box } from "@mui/system";
import React from "react";
import { Typography } from "@mui/material";
import Facebook from "../assests/svg/fb";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../assests/svg/Logo";

const Footer = () => {
  return (
    <Box p={{ xs: 4, md: 8 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        alignItems={{ xs: "flex-start", sm: "center" }}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <Box>
          {/* <Box display={{ xs: "block", sm: "none" }}>
            <Logo />
          </Box>
          <Box display={{ xs: "none", sm: "block" }}>
            <Logo />
          </Box> */}
          <Box>
            <Logo />
          </Box>
          <Typography
            fontSize="15px"
            lineHeight="23px"
            fontWeight={500}
            mt={2}
            color="#AB1833"
          >
            Serving you since 3 decades
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          mt={{ xs: 1.5, sm: 0 }}
        >
          <ScrollLink
            to="products"
            duration={500}
            smooth
            style={{
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <Typography
              fontSize="15px"
              lineHeight="21px"
              fontWeight={600}
              mr={{ xs: 0, sm: 4 }}
              mb={{ xs: 1, sm: 0 }}
            >
              Our Products
            </Typography>
          </ScrollLink>
          <Link
            to="/privacy"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography
              fontSize="15px"
              lineHeight="21px"
              fontWeight={600}
              mr={{ xs: 0, sm: 4 }}
              mb={{ xs: 1, sm: 0 }}
            >
              Privacy Policy
            </Typography>
          </Link>
          <Link to="/terms" style={{ textDecoration: "none", color: "white" }}>
            <Typography fontSize="15px" lineHeight="21px" fontWeight={600}>
              Terms & Conditions
            </Typography>
          </Link>
        </Box>
        <Box display="none" alignItems="center" mt={{ xs: 4, sm: 0 }}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            style={{ cursor: "pointer", marginRight: "28px" }}
          >
            <Facebook htmlColor="black" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            style={{ cursor: "pointer" }}
          >
            <TwitterIcon htmlColor="black" />
          </a>
        </Box>
      </Box>
      <Typography
        fontSize="12px"
        lineHeight="15px"
        fontWeight={400}
        mt={{ xs: 3, sm: 6 }}
      >
        © Copyright 2023 - KK Spinners
      </Typography>
    </Box>
  );
};

export default Footer;
