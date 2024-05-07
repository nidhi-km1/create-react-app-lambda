import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import video2 from "../../assests/images/heroSection/v2.mp4";
import video from "../../assests/images/v1.mp4";
import Down from "../../assests/svg/Down";
import LogoBlackMobile from "../../assests/svg/LogoWhiteMobile";

const HeroSection = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight={{ xs: "90vh", md: "fit-content" }}
      position="relative"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        position="fixed"
        sx={{
          width: "-webkit-fill-available",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        p={{ xs: 4, md: 8 }}
        py={{ xs: 1, md: 2 }}
      >
        <LogoBlackMobile
          width={isMobile ? "80px" : "100px"}
          height={isMobile ? "80px" : "100px"}
        />
        {/* <Box display={{ xs: "none", sm: "block" }}>
          <LogoBlackMobile />
        </Box>
        <Box display={{ xs: "block", sm: "none" }}>
          <LogoBlackMobile />
        </Box> */}

        <ScrollLink
          to="contact"
          duration={500}
          smooth
          style={{
            textDecoration: "none",
            color: "white",
            cursor: "pointer",
            marginTop: "15px",
          }}
        >
          <Box display={{ xs: "none", sm: "block" }}>
            <Button
              width={{ xs: "auto", sm: "200px" }}
              sx={{
                backgroundColor: "#AB1833",
                borderRadius: "4px",
                padding: "12px 20px",
                width: "200px",
              }}
            >
              <Typography
                fontSize="16px"
                fontWeight={700}
                lineHeight="24px"
                color="white"
                className="text"
              >
                Contact Us
              </Typography>
            </Button>
          </Box>
          <Box display={{ xs: "block", sm: "none" }}>
            <Button
              sx={{
                backgroundColor: "#AB1833",
                borderRadius: "4px",
                padding: "12px 20px",
                width: "150px",
                height: "40px",
              }}
            >
              <Typography
                fontSize="16px"
                fontWeight={700}
                lineHeight="24px"
                color="white"
                className="text"
              >
                Contact Us
              </Typography>
            </Button>
          </Box>
        </ScrollLink>
      </Box>
      <Box width="100%" display={{ xs: "none", sm: "block" }}>
        <video
          width="100%"
          playsInline
          height="100%"
          autoPlay
          muted
          style={{ objectFit: "cover" }}
          preload={"true"}
          loop
        >
          <source src={video} type="video/mp4" />
        </video>
      </Box>
      <Box position="absolute" bottom={{ xs: "10%", sm: "14%" }} left="47%">
        <ScrollLink
          to="legacy"
          duration={500}
          smooth
          style={{
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <Down />
        </ScrollLink>
      </Box>
      <Box width="100%" display={{ xs: "block", sm: "none" }}>
        <video
          width="100%"
          playsInline
          height="100%"
          autoPlay
          muted
          style={{ objectFit: "cover" }}
          preload={"true"}
          loop
        >
          <source src={video2} type="video/mp4" />
        </video>
      </Box>
      {/* <Box
        display="flex"
        justifyContent="center"
        flex={1}
        alignItems="center"
        p={{ xs: 4, md: 8 }}
        pt={{ xs: 2, md: 2 }}
  
      >
        <Typography
          fontSize={{ xs: "55px", md: "100px" }}
          fontWeight={{ xs: 600, md: 500 }}
          lineHeight={{ xs: "70px", md: "136px" }}
          color="white"
          textAlign="center"
          width={{ xs: "100%", md: "70%" }}
          className="text"
        >
          Spin a Tale with Our Premium Yarns
        </Typography>
      </Box> */}
    </Box>
  );
};

export default HeroSection;
