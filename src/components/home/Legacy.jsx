import React from "react";
// import timeline from "../../assests/images/legacy/timeline.png";
import { Box, Typography } from "@mui/material";
import { legacy } from "./constants";
import Origin from "../../assests/svg/Origin";
// import m2 from "../../assests/images/legacy/m2.png";
// import m1 from "../../assests/images/legacy/m1.png";
import Growth from "../../assests/svg/Growth";
import Current from "../../assests/svg/Current";
import { Fade } from "react-awesome-reveal";
import i1 from "../../assests/images/legacy/i1.png";
import i2 from "../../assests/images/legacy/i2.png";
import i3 from "../../assests/images/legacy/i3.png";
import i4 from "../../assests/images/legacy/i4.png";
import i5 from "../../assests/images/legacy/i5.png";
import i6 from "../../assests/images/legacy/i6.png";
import i7 from "../../assests/images/legacy/i7.png";
import i8 from "../../assests/images/legacy/i8.png";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import { Slide } from "react-awesome-reveal";
import timeline from "../../assests/images/legacy/timeline.png";
import Map from "../../assests/svg/Map";
import Map2 from "../../assests/svg/Map2";
// import Timeline from "../../assests/svg/Timeline";

const Legacy = () => {
  return (
    <Box id="legacy">
      <Box p={{ xs: 4, md: 8 }} pb={{ xs: 4, md: 8 }}>
        <Slide duration={2000} triggerOnce>
          <Typography
            fontSize={{ xs: "32px", sm: "64px" }}
            fontWeight={600}
            lineHeight={{ xs: "40px", sm: "87px" }}
            textAlign="center"
            className="text"
          >
            A legacy in making
          </Typography>
        </Slide>
      </Box>
      {/* <Box display={{ xs: "none", sm: "block" }}>
        <img width="100%" src={map} alt="map" />
      </Box> */}
      <Box display={{ xs: "none", sm: "block" }}>
        <img src={timeline} alt="timeline" width="100%" />
        {/* <Timeline/> */}
      </Box>
      <Box display={{ xs: "block", sm: "none" }} px={{ xs: 4, md: 8 }}>
        {legacy.map((item, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              alignItems="center"
            >
              <Fade direction="up" duration={3000} triggerOnce>
                {index === 0 && <Origin />}
                {index === 1 && <Growth />}
                {index === 2 && <Current />}
              </Fade>
              <Box
                mt={2}
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                alignItems="center"
                ml={{ xs: 0, md: 2 }}
              >
                <Fade direction="up" duration={3000} triggerOnce>
                  <Typography
                    fontSize={"21px"}
                    fontWeight={700}
                    lineHeight={"29px"}
                    textAlign="center"
                    mb={1.5}
                  >
                    {item.title}
                  </Typography>
                </Fade>
                <Box>
                  <Fade direction="up" duration={3000} triggerOnce>
                    <Typography
                      fontSize={"15px"}
                      fontWeight={400}
                      lineHeight={"21px"}
                      textAlign="center"
                      mb={item.desc2 ? 0.5 : 1.5}
                      ml={{ xs: 0, md: 2 }}
                    >
                      {item.desc}
                    </Typography>
                  </Fade>
                  {item.desc2 && (
                    <Fade direction="up" duration={3000} triggerOnce>
                      <Typography
                        fontSize={"15px"}
                        fontWeight={400}
                        lineHeight={"21px"}
                        textAlign="center"
                        mb={1.5}
                        ml={{ xs: 0, md: 2 }}
                      >
                        {item.desc2}
                      </Typography>
                    </Fade>
                  )}
                </Box>
              </Box>
            </Box>
            {index !== 3 && (
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
                mt={4}
                mb={index !== 2 ? 4 : 0}
              >
                <Box
                  width="1px"
                  height="100px"
                  sx={{ borderLeft: "3px dashed #AB1833" }}
                ></Box>
                <Box
                  width="10px"
                  height="10px"
                  bgcolor="#AB1833"
                  sx={{ borderRadius: "50%" }}
                ></Box>
              </Box>
            )}
          </Box>
        ))}
      </Box>

      <Box display={{ xs: "none", sm: "block" }}>
        <Map />
      </Box>
      <Box display={{ xs: "block", sm: "none" }}>
        <Map2 />
      </Box>
      <Box p={{ xs: 4, md: 8 }} id="products">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography
            fontSize={{ xs: "32px", sm: "48px" }}
            fontWeight={600}
            lineHeight={{ xs: "40px", sm: "65px" }}
          >
            Our Product Lineup
          </Typography>
          {/* <Box
            display="flex"
            alignItems="center"
            flexDirection={{ xs: "column-reverse", sm: "row" }}
          >
            <a
              className="link"
              style={{ width: "max-content" }}
              href="tel:+91-7015575755"
            >
              +91-7015575755
            </a>
            <img style={{ paddingLeft: "8px" }} src={phone} alt="phone" />
          </Box> */}
        </Box>
        <Box mt={4}>
          <Box display="flex" flexWrap="wrap" justifyContent="space-between">
            <Box
              width={{ xs: "100%", md: "45%" }}
              display="flex"
              bgcolor="#B7BDA44D"
              alignItems="center"
              minHeight="150px"
              p={2}
              sx={{ borderLeft: "9px solid #B7BDA4" }}
              justifyContent="space-between"
              flexDirection={{ xs: "column-reverse", sm: "row" }}
              mb={{ xs: 2, md: 0 }}
            >
              <Box minWidth="70%">
                <Typography
                  fontSize="24px"
                  lineHeight="32px"
                  fontWeight={600}
                  mb={2}
                >
                  100% Cotton Yarn
                </Typography>
                <ul style={{ paddingLeft: "24px" }}>
                  <li>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      flexDirection={{ xs: "column", sm: "row" }}
                    >
                      <Typography
                        fontSize="15px"
                        lineHeight="21px"
                        fontWeight={400}
                      >
                        Ring Frame 100% Combed Cotton
                      </Typography>
                      <Typography
                        fontSize="15px"
                        lineHeight="21px"
                        flex="none"
                        fontWeight={800}
                      >
                        Ne 8 - 30
                      </Typography>
                    </Box>
                  </li>
                  <li>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      mt={1}
                      flexDirection={{ xs: "column", sm: "row" }}
                    >
                      <Typography
                        fontSize="15px"
                        lineHeight="21px"
                        fontWeight={400}
                      >
                        Ring Frame 100% Carded Cotton
                      </Typography>
                      <Typography
                        fontSize="15px"
                        lineHeight="21px"
                        fontWeight={800}
                        flex="none"
                      >
                        Ne 8 - 60
                      </Typography>
                    </Box>
                  </li>
                </ul>

                <Box display="flex" alignItems="center">
                  <StarOutlineRoundedIcon htmlColor="#AB1833" />
                  <Typography
                    fontSize="15px"
                    lineHeight="20px"
                    fontWeight={400}
                    ml={1}
                  >
                    Coarse count available on demand
                  </Typography>
                </Box>
                <ul style={{ paddingLeft: "24px" }}>
                  <li>
                    <Box
                      display="flex"
                      mt={1}
                      flexDirection={{ xs: "column", sm: "row" }}
                    >
                      <Typography
                        fontSize="15px"
                        lineHeight="21px"
                        fontWeight={400}
                        mr={3}
                      >
                        Open-end
                      </Typography>
                      <Typography
                        fontSize="15px"
                        lineHeight="21px"
                        fontWeight={800}
                      >
                        Ne 6 - 30
                      </Typography>
                    </Box>
                  </li>
                </ul>
              </Box>
              <Box
                width={{ xs: "100%", sm: "unset" }}
                display={{ xs: "none", sm: "flex" }}
                justifyContent={{ xs: "flex-start", sm: "flex-end" }}
                height={{ xs: "70px", sm: "auto" }}
              >
                <img src={i1} alt="i1" height="100%" />
              </Box>
            </Box>
            <Box
              width={{ xs: "100%", md: "45%" }}
              display="flex"
              bgcolor="#B7BDA44D"
              alignItems="center"
              minHeight="150px"
              p={2}
              sx={{ borderLeft: "9px solid #B7BDA4" }}
              justifyContent="space-between"
              flexDirection={{ xs: "column-reverse", sm: "row" }}
            >
              <Box minWidth="70%">
                <Typography
                  fontSize="24px"
                  lineHeight="32px"
                  fontWeight={600}
                  mb={2}
                >
                  Recycled Yarn
                </Typography>
                <Box>
                  <ul style={{ paddingLeft: "24px" }}>
                    <li>
                      <Typography
                        fontSize="15px"
                        lineHeight="21px"
                        fontWeight={400}
                      >
                        Dyed open-end
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        mt={1}
                        fontSize="15px"
                        lineHeight="21px"
                        fontWeight={400}
                      >
                        Dyed ringframe
                      </Typography>
                    </li>
                  </ul>
                  <Box display="flex" alignItems="center">
                    <StarOutlineRoundedIcon htmlColor="#AB1833" />
                    <Typography
                      fontSize="15px"
                      lineHeight="21px"
                      fontWeight={400}
                      ml={1}
                    >
                      Customised poly cotton blends available
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                width={{ xs: "100%", sm: "unset" }}
                display={{ xs: "none", sm: "flex" }}
                justifyContent={{ xs: "flex-start", sm: "flex-end" }}
                height={{ xs: "70px", sm: "auto" }}
              >
                <img src={i2} alt="i1" height="100%" />
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            mt={2}
          >
            <Box
              width={{ xs: "100%", md: "28%" }}
              display="flex"
              bgcolor="#B7BDA44D"
              alignItems="center"
              minHeight="150px"
              p={2}
              sx={{ borderLeft: "9px solid #B7BDA4" }}
              justifyContent="space-between"
              flexDirection={{ xs: "column-reverse", sm: "row" }}
              mb={{ xs: 2, md: 0 }}
            >
              <Box minWidth="70%">
                <Typography
                  fontSize="24px"
                  lineHeight="32px"
                  fontWeight={600}
                  mb={2}
                >
                  Value added speciality yarn
                </Typography>
                <Typography fontSize="15px" lineHeight="21px" fontWeight={400}>
                  Hemp, Tencel, Modal, Bamboo, Linen
                </Typography>
                <Typography
                  fontSize="15px"
                  lineHeight="21px"
                  fontWeight={400}
                  mt={1}
                >
                  Zero Twist Yarns
                </Typography>
                <ul style={{ paddingLeft: "24px", marginTop: "4px" }}>
                  <li>
                    <Typography
                      fontSize="15px"
                      lineHeight="21px"
                      fontWeight={400}
                    >
                      using PVA - 50s, 60s, 80s
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      fontSize="15px"
                      lineHeight="21px"
                      fontWeight={400}
                      mt={1}
                    >
                      using Solucel - 106s, 120s
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      fontSize="15px"
                      lineHeight="21px"
                      fontWeight={400}
                      mt={1}
                    >
                      using Mintval - 140s
                    </Typography>
                  </li>
                </ul>
              </Box>
              <Box
                width={{ xs: "100%", sm: "unset" }}
                display={{ xs: "none", sm: "flex" }}
                justifyContent={{ xs: "flex-start", sm: "flex-end" }}
                height={{ xs: "70px", sm: "auto" }}
              >
                <img src={i8} alt="i1" height="100%" />
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems={{ xs: "flex-start", sm: "center" }}
              width={{ xs: "100%", md: "28%" }}
              bgcolor="#B7BDA44D"
              minHeight="150px"
              p={2}
              sx={{ borderLeft: "9px solid #B7BDA4" }}
              mb={{ xs: 2, md: 0 }}
              justifyContent="space-between"
              flexDirection={{ xs: "column-reverse", sm: "row" }}
            >
              <Box>
                <Typography
                  fontSize="24px"
                  lineHeight="32px"
                  fontWeight={600}
                  mb={2}
                >
                  Compact Yarn
                </Typography>
                <ul style={{ paddingLeft: "24px" }}>
                  <li style={{ width: "100%" }}>
                    <Box
                      display="flex"
                      width="100%"
                      justifyContent="space-between"
                      flexDirection={{ xs: "column", sm: "row" }}
                    >
                      <Typography
                        fontSize="15px"
                        lineHeight="21px"
                        fontWeight={400}
                      >
                        100% Combed Cotton
                      </Typography>
                      <Typography
                        fontSize="15px"
                        lineHeight="21px"
                        fontWeight={800}
                        flex="none"
                      >
                        Ne 20 - 135
                      </Typography>
                    </Box>
                  </li>
                  <li style={{ width: "100%" }}>
                    <Box
                      display="flex"
                      width="100%"
                      justifyContent="space-between"
                      mt={1.5}
                      flexDirection={{ xs: "column", sm: "row" }}
                    >
                      <Typography
                        fontSize="15px"
                        lineHeight="21px"
                        fontWeight={400}
                      >
                        100% Carded Cotton
                      </Typography>
                      <Typography
                        fontSize="15px"
                        lineHeight="21px"
                        fontWeight={800}
                        flex="none"
                      >
                        Ne 20 - 135
                      </Typography>
                    </Box>
                  </li>
                </ul>
                <Box
                  display="flex"
                  alignItems={{ xs: "flex-start", sm: "center" }}
                  justifyContent="space-between"
                  flexDirection={{ xs: "column", sm: "row" }}
                >
                  <Box display="flex" alignItems="center">
                    <StarOutlineRoundedIcon htmlColor="#AB1833" />
                    <Typography
                      fontSize="15px"
                      lineHeight="21px"
                      fontWeight={400}
                      ml={1}
                    >
                      Also available
                    </Typography>
                  </Box>
                  <Typography
                    fontSize="15px"
                    lineHeight="21px"
                    flex="none"
                    fontWeight={700}
                    ml={{ xs: 4, sm: 0 }}
                  >
                    2/30 - 2/60 Eli Twist
                  </Typography>
                </Box>
              </Box>
              <Box
                width={{ xs: "100%", sm: "unset" }}
                display={{ xs: "none", sm: "flex" }}
                justifyContent={{ xs: "flex-start", sm: "flex-end" }}
                height={{ xs: "70px", sm: "auto" }}
              >
                <img src={i5} alt="i1" height="100%" />
              </Box>
            </Box>
            <Box
              width={{ xs: "100%", md: "28%" }}
              display="flex"
              bgcolor="#B7BDA44D"
              alignItems={{ xs: "flex-start", sm: "center" }}
              minHeight={{ xs: "100px", sm: "150px" }}
              p={2}
              sx={{ borderLeft: "9px solid #B7BDA4" }}
              justifyContent="space-between"
              flexDirection={{ xs: "column-reverse", sm: "row" }}
              mb={{ xs: 2, sm: 0 }}
            >
              <Box>
                <Typography
                  fontSize="24px"
                  lineHeight="32px"
                  fontWeight={600}
                  mb={2}
                >
                  Blended Yarn
                </Typography>
                <ul style={{ paddingLeft: "24px" }}>
                  <li>
                    <Typography
                      fontSize="15px"
                      lineHeight="21px"
                      fontWeight={400}
                    >
                      Cotton Blended with Polyester, Viscose, Bamboo, Soya &
                      Corn
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      fontSize="15px"
                      lineHeight="21px"
                      fontWeight={400}
                    >
                      Cotton/Tencel
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      fontSize="15px"
                      lineHeight="21px"
                      fontWeight={400}
                    >
                      Cotton/Modal
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      fontSize="15px"
                      lineHeight="21px"
                      fontWeight={400}
                    >
                      Cotton/Micro-modal
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      fontSize="15px"
                      lineHeight="21px"
                      fontWeight={400}
                    >
                      Cotton/Linen
                    </Typography>
                  </li>
                </ul>
              </Box>
              <Box
                height={{ xs: "70px", sm: "auto" }}
                display={{ xs: "none", sm: "flex" }}
              >
                <img src={i4} alt="i1" height="100%" />
              </Box>
            </Box>
            <Box
              width={{ xs: "100%", md: "28%" }}
              display="flex"
              bgcolor="#B7BDA44D"
              alignItems="center"
              minHeight={{ xs: "100px", sm: "150px" }}
              p={2}
              sx={{ borderLeft: "9px solid #B7BDA4" }}
              justifyContent="space-between"
              flexDirection={{ xs: "column-reverse", sm: "row" }}
              mt={{ xs: 0, sm: 2 }}
            >
              <Box minWidth="70%">
                <Typography
                  fontSize="24px"
                  lineHeight="32px"
                  fontWeight={600}
                  mb={2}
                >
                  100% Dyed Polyster Cotton Yarn
                </Typography>

                <Typography fontSize="15px" lineHeight="21px" fontWeight={400}>
                  available in 9s-30s
                </Typography>
              </Box>
              <Box
                width={{ xs: "100%", sm: "unset" }}
                display={{ xs: "none", sm: "flex" }}
                justifyContent={{ xs: "flex-start", sm: "flex-end" }}
                height={{ xs: "70px", sm: "auto" }}
              >
                <img src={i3} alt="i1" height="100%" />
              </Box>
            </Box>

            <Box
              width={{ xs: "100%", md: "28%" }}
              display="flex"
              bgcolor="#B7BDA44D"
              alignItems={{ xs: "flex-start", sm: "center" }}
              minHeight={{ xs: "100px", sm: "150px" }}
              p={2}
              sx={{ borderLeft: "9px solid #B7BDA4" }}
              justifyContent={{ xs: "center", sm: "space-between" }}
              flexDirection={{ xs: "column-reverse", sm: "row" }}
              mb={{ xs: 2, sm: 0 }}
              mt={2}
            >
              <Box>
                <Typography
                  fontSize="24px"
                  lineHeight="32px"
                  fontWeight={600}
                  mb={2}
                >
                  100% Dyed Cotton Yarn
                </Typography>
                <Typography fontSize="15px" lineHeight="21px" fontWeight={400}>
                  available in 9s-30s
                </Typography>
              </Box>
              <Box
                height={{ xs: "70px", sm: "auto" }}
                display={{ xs: "none", sm: "flex" }}
              >
                <img src={i6} alt="i1" height="100%" />
              </Box>
            </Box>
            <Box
              width={{ xs: "100%", md: "28%" }}
              display="flex"
              bgcolor="#B7BDA44D"
              alignItems={{ xs: "flex-start", sm: "center" }}
              minHeight={{ xs: "100px", sm: "150px" }}
              p={2}
              sx={{ borderLeft: "9px solid #B7BDA4" }}
              justifyContent={{ xs: "center", sm: "space-between" }}
              flexDirection={{ xs: "column-reverse", sm: "row" }}
              mb={{ xs: 2, sm: 0 }}
              mt={{ xs: 0, sm: 2 }}
            >
              <Box>
                <Typography
                  fontSize="24px"
                  lip={2}
                  Height="32px"
                  fontWeight={600}
                  mb={2}
                >
                  Melange Yarn
                </Typography>

                <Typography
                  display="inline"
                  fontSize="15px"
                  lineHeight="21px"
                  fontWeight={400}
                  mr={0.5}
                >
                  available in
                </Typography>
                <Typography
                  display="inline"
                  fontSize="15px"
                  lineHeight="21px"
                  fontWeight={700}
                  mr={0.5}
                >
                  10+
                </Typography>
                <Typography
                  display="inline"
                  fontSize="15px"
                  lineHeight="21px"
                  fontWeight={400}
                >
                  colors
                </Typography>
              </Box>
              <Box
                height={{ xs: "70px", sm: "auto" }}
                display={{ xs: "none", sm: "flex" }}
              >
                <img src={i7} alt="i1" height="100%" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Legacy;
