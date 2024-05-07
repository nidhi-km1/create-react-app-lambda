import { Box, Typography } from "@mui/material";
import React from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import { Slide } from "react-awesome-reveal";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contact = () => {
  return (
    <Box
      bgcolor="#FAF4F2"
      p={{ xs: 4, md: 8 }}
      display="flex"
      justifyContent="space-between"
      id="contact"
    >
      <Box width={{ xs: "100%", md: "100%" }}>
        <Slide duration={1500} triggerOnce>
          <Typography
            className="animate__animated animate__fadeInLeft"
            fontSize={{ xs: "32px", sm: "48px" }}
            fontWeight={700}
            lineHeight={{ xs: "40px", sm: "65px" }}
          >
            Get in touch with us
          </Typography>
        </Slide>
        <Box
          mt={4}
          alignItems="center"
          display="flex"
          justifyContent="space-between"
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Box>
            <Box display="flex" alignItems="center">
              <PhoneInTalkIcon htmlColor="#AB1833" />
              <Box display="flex" flexWrap="wrap">
                <a className="link" href="tel:+91-8130072988">
                  +91-8130072988
                </a>
              </Box>
            </Box>
            <Box display="flex" mt={4}>
              <WhatsAppIcon htmlColor="#AB1833" />
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href="https://web.whatsapp.com/send?phone=+918130072988&text=Hello"
              >
                +91-8130072988
              </a>
            </Box>
            <Box display="flex" mt={4} alignItems="center">
              <EmailIcon htmlColor="#AB1833" />
              <a className="link" href="mailto:sales@kkspinners.in">
                sales@kkspinners.in
              </a>
            </Box>
            <Box display="flex" mt={4} alignItems="center">
              <PlaceIcon htmlColor="#AB1833" />
              <Typography
                ml={1.5}
                fontSize="16px"
                fontWeight={500}
                lineHeight="22px"
              >
                K.K. Spinners Pvt. Ltd.Village Ganjbarh,
                <br /> Panipat, Haryana 132103
              </Typography>
            </Box>
          </Box>
          <Box
            width={{ xs: "100%", sm: "50%", md: "600px" }}
            height={{ xs: "260px", sm: "50%", md: "300px" }}
            mt={{ xs: 3, sm: 0 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.391751026668!2d76.97115917541326!3d29.475766775215007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dd851979782bf%3A0x44a448614c617361!2sK.K.%20Spinners%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1685530597215!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              title="map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
