import { Box, Typography } from "@mui/material";
import React from "react";
import { Slide } from "react-awesome-reveal";
import "react-multi-carousel/lib/styles.css";
import i1 from "../../assests/images/world/i1.jpg";
import i10 from "../../assests/images/world/i10.jpg";
import i11 from "../../assests/images/world/i11.jpg";
import i12 from "../../assests/images/world/i12.jpg";
import i13 from "../../assests/images/world/i13.jpg";
import i3 from "../../assests/images/world/i3.jpg";
import i6 from "../../assests/images/world/i6.jpg";
import i7 from "../../assests/images/world/i7.jpg";
import i8 from "../../assests/images/world/i8.jpg";

const World = () => {
  return (
    <Box>
      <Box px={{ xs: 4, md: 8 }} pt={{ xs: 4, md: 8 }}>
        <Slide duration={1500} triggerOnce>
          <Typography
            fontSize={{ xs: "32px", sm: "48px" }}
            fontWeight={700}
            mb={3}
            lineHeight={{ xs: "40px", sm: "65px" }}
            className="animate__animated animate__fadeInLeft"
          >
            A window to our world
          </Typography>
        </Slide>
      </Box>

      <Box display={{ xs: "block", md: "none" }}>
        <Box display="flex" flexWrap="wrap">
          <img src={i1} alt="i1" width="50%" />
          <img src={i3} alt="i1" width="50%" />
          <img src={i6} alt="i1" width="50%" />
          <img src={i7} alt="i1" width="50%" />
          <Box width="100%" bgcolor="#AB1833" p={2}>
            <Typography
              fontWeight={700}
              fontSize="18px"
              lineHeight="25px"
              color="white"
            >
              Meet our exceptional team...
            </Typography>
            <Typography
              mt={1}
              fontWeight={500}
              fontSize="15px"
              lineHeight="21px"
              color="white"
            >
              Embracing the collective process of an exceptional group of men
              and women, each weaving their distinctive skills, our operation
              flourishes.
            </Typography>
          </Box>
          <img src={i8} alt="i1" width="50%" />
          <img src={i10} alt="i1" width="50%" />
          <img src={i11} alt="i1" width="50%" />
          <img src={i12} alt="i1" width="50%" />
        </Box>
      </Box>
      <Box display={{ xs: "none", md: "block" }} position="relative">
        <Box display="flex" flexWrap="wrap">
          <img src={i1} alt="i1" width="20%" />
          <img src={i3} alt="i1" width="20%" />
          <img src={i6} alt="i1" width="20%" />
          <img src={i7} alt="i1" width="20%" />
          <img src={i8} alt="i1" width="20%" />
          <img src={i10} alt="i1" width="20%" />

          <Box
            width="37.86%"
            bgcolor="#AB1833"
            p={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Typography
              fontWeight={700}
              fontSize="18px"
              lineHeight="25px"
              color="white"
            >
              Meet our exceptional team...
            </Typography>
            <Typography
              mt={1}
              fontWeight={500}
              fontSize="15px"
              lineHeight="21px"
              color="white"
            >
              Embracing the collective process of an exceptional group of men
              and women, each weaving their distinctive skills, our operation
              flourishes.
            </Typography>
          </Box>

          <img src={i11} alt="i1" width="20%" />
          <img src={i13} alt="i1" width="20%" />
        </Box>
      </Box>
    </Box>
  );
};

export default World;
