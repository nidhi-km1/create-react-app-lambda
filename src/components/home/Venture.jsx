import { Box, Typography } from "@mui/material";
import React from "react";
import i1 from "../../assests/images/venture/i1.jpg";
import i2 from "../../assests/images/venture/i2.jpg";
const Venture = () => {
  return (
    <Box bgcolor="#FAF4F2">
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={{ xs: "column", md: "column" }}
        p={{ xs: 4, md: 8 }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Typography
            fontSize={{ xs: "32px", sm: "36px" }}
            fontWeight={500}
            lineHeight={{ xs: "40px", sm: "40px" }}
            textAlign={{ xs: "center", sm: "initial" }}
            mb={2}
          >
            ~ Weaving Magic Overtime ~
          </Typography>
          <Typography
            fontSize="16px"
            fontWeight={500}
            lineHeight="20px"
            color="#AB1833"
          >
            coming soon
          </Typography>
        </Box>
        {/* <Box
          display={{ xs: "flex", sm: "none" }}
          justifyContent="center"
          mt={1.5}
        >
          <img style={{ maxWidth: "100%" }} src={placeholder} alt="venture" />
        </Box> */}
        <Box
          display="flex"
          sx={{ border: "1px solid #BDC4CB", borderRadius: "10px" }}
          p={2}
          flex={1}
          alignItems="flex-end"
          mt={{ xs: 3, md: 0 }}
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="space-between"
          >
            <Box mb={{ xs: 3, md: 0 }}>
              <Typography
                fontWeight={400}
                fontSize={{ xs: "21px", sm: "21px" }}
                lineHeight={{ xs: "32px", sm: "32px" }}
                mt={2}
              >
                <Typography
                  fontWeight={700}
                  fontSize={{ xs: "21px", sm: "21px" }}
                  lineHeight={{ xs: "32px", sm: "32px" }}
                  display="inline"
                >
                  Join us
                </Typography>
                , as we stand on the threshold of a new venture, characterised
                by -
              </Typography>
              <Box mt={1}>
                <Typography
                  fontWeight={700}
                  fontSize={{ xs: "21px", sm: "21px" }}
                  lineHeight={{ xs: "32px", sm: "32px" }}
                  display="inline"
                  color="#B7BDA4"
                  mr={0.6}
                >
                  Sustainability -
                </Typography>
                <Typography
                  fontWeight={400}
                  fontSize={{ xs: "21px", sm: "21px" }}
                  lineHeight={{ xs: "32px", sm: "32px" }}
                  display="inline"
                >
                  Driven by an unwavering commitment to zero-waste, we have
                  proudly upheld a practice of recycling and reusing all our
                  waste for years
                </Typography>
              </Box>
              <Box mt={1}>
                <Typography
                  fontWeight={700}
                  fontSize={{ xs: "21px", sm: "21px" }}
                  lineHeight={{ xs: "32px", sm: "32px" }}
                  display="inline"
                  color="#AB1833"
                  mr={0.6}
                >
                  Equality -
                </Typography>
                <Typography
                  fontWeight={400}
                  fontSize={{ xs: "21px", sm: "21px" }}
                  lineHeight={{ xs: "32px", sm: "32px" }}
                  display="inline"
                >
                  Guided by a strong belief in gender equality, we have
                  maintained an equal representation of men and women in our
                  workforce for years.
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* <Box display={{ xs: "none", sm: "block" }}>
            <img
              style={{ maxWidth: "100%" }}
              src={placeholder}
              alt="venture"
              height="100px"
            />
          </Box> */}
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        flexDirection={{ xs: "column", sm: "row" }}
        bgcolor={{ xs: "white", sm: "#FAF4F2" }}
      >
        <Box
          display={{ xs: "none", sm: "block" }}
          width={{ xs: "100%", sm: "49%" }}
        >
          <img style={{ maxWidth: "100%" }} height="100%" src={i1} alt="img1" />
        </Box>
        <Box
          display={{ xs: "none", sm: "block" }}
          width={{ xs: "100%", sm: "49%" }}
          mt={{ xs: -0.5, sm: 0 }}
        >
          <img style={{ maxWidth: "100%" }} height="100%" src={i2} alt="img2" />
        </Box>
        <Box
          display={{ xs: "block", sm: "none" }}
          width={{ xs: "100%", sm: "49%" }}
        >
          <img style={{ maxWidth: "100%" }} src={i1} alt="img1" />
        </Box>
        <Box
          display={{ xs: "block", sm: "none" }}
          width={{ xs: "100%", sm: "49%" }}
          mt={{ xs: -0.8, sm: 0 }}
        >
          <img style={{ maxWidth: "100%" }} src={i2} alt="img2" />
        </Box>
      </Box>
    </Box>
  );
};

export default Venture;
