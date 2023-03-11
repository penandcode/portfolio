import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Footer from "./Footer";

const Portfolio = () => {
  return (
    <Box>
        <Navbar/>
        <Hero/>
        <Projects/>
        <Footer/>
    </Box>
  )
};

export default Portfolio;
