import { Box, Typography } from "@mui/material";
import React from "react";
import bg from "../../assests/images/certification/bg.png";
import i1 from "../../assests/images/certification/i1.png";
import i2 from "../../assests/images/certification/i2.png";
import i3 from "../../assests/images/certification/i3.png";
import i4 from "../../assests/images/certification/i4.png";
import i5 from "../../assests/images/certification/i5.png";
import i6 from "../../assests/images/certification/i6.png";
import { Zoom } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";

const Certification = () => {
  return (
    <Box>
      <Box p={{ xs: 4, md: 8 }}>
        <Slide duration={1500} triggerOnce>
          <Typography
            fontSize={{ xs: "32px", sm: "48px" }}
            fontWeight={700}
            lineHeight={{ xs: "40px", sm: "65px" }}
          >
            Certifications
          </Typography>
        </Slide>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <img className="mt3" src={i1} alt="certification" />
          <img className="mt3" src={i2} alt="certification" />
          <img className="mt3" src={i3} alt="certification" />
          <img className="mt3" src={i4} alt="certification" />
          <Box width={{ xs: "45%", sm: "auto" }}>
            <img
              style={{ maxWidth: "100%" }}
              className="mt3"
              src={i5}
              alt="certification1"
            />
          </Box>
          <Box width={{ xs: "45%", sm: "auto" }}>
            <img
              style={{ maxWidth: "100%" }}
              className="mt3"
              src={i6}
              alt="certification"
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        display="flex"
        flexDirection="column"
        p={{ xs: 4, md: 8 }}
      >
        <Zoom triggerOnce duration={3000}>
          <Box
            display="flex"
            alignItems="flex-end"
            justifyContent="center"
            flexWrap="wrap"
          >
            <Typography
              fontSize={{ xs: "24px", sm: "42px" }}
              fontWeight={500}
              lineHeight={{ xs: "32px", sm: "58px" }}
              color="white"
              mb={{ xs: 0, md: 6 }}
              mr={1}
            >
              We’re
            </Typography>
            <Typography
              fontSize={{ xs: "32px", sm: "90px" }}
              fontWeight={500}
              lineHeight={{ xs: "40px", sm: "100px" }}
              color="white"
              mr={1}
              mb={{ xs: 0, md: 5 }}
            >
              unique,
            </Typography>
            <Typography
              fontSize={{ xs: "24px", sm: "42px" }}
              fontWeight={500}
              lineHeight={{ xs: "32px", sm: "58px" }}
              color="white"
              mb={{ xs: 5, sm: 6 }}
              mr={1}
            >
              because we’re
            </Typography>
            <Box display="flex" flexDirection="column">
              <Typography
                fontSize={{ xs: "32px", sm: "90px" }}
                fontWeight={500}
                lineHeight={{ xs: "40px", sm: "100px" }}
                color="white"
                mb={5}
              >
                boutique
              </Typography>
            </Box>
          </Box>
        </Zoom>
        {/* <Box
          display={{ xs: "flex", sm: "none" }}
          alignItems="center"
          alignSelf={{ xs: "center", md: "flex-end" }}
          mt={2}
        >
          <PhoneInTalkIcon htmlColor="#fff" />
          <Box display="flex" flexWrap="wrap">
            <a
              style={{ color: "white" }}
              className="link"
              href="tel:+91-8130072988"
            >
              +91-8130072988
            </a>
            <a
              style={{ color: "white" }}
              className="link"
              href="tel:+91-7015575755"
            >
              +91-7015575755
            </a>
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Certification;
