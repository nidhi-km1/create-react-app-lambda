import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Contact from "./home/Contact";
import World from "./home/World";
import Certification from "./home/Certification";
import Venture from "./home/Venture";
import Legacy from "./home/Legacy";
import HeroSection from "./home/HeroSection";
import loader from "../assests/images/loader.png";
import Footer from "../components/Footer";

const Home = () => {
  const [show1, setShow1] = useState(true);

  const startLoader = () => {
    setTimeout(function () {
      setShow1(false);
    }, 2000);
  };

  useEffect(() => {
    startLoader();
  }, []);

  return show1 ? (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box className="loader">
        <img className="image" src={loader} alt="loader" height="200px" />
      </Box>
    </Box>
  ) : (
    <Box>
      <HeroSection />
      <Legacy />
      <Venture />
      <Certification />
      <World />
      <Contact />
      <Footer />
    </Box>
  );
};

export default Home;
