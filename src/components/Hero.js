import "./hero.css";
import { Box, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box className="hero">
      <img
        src={require("./assets/Myphoto.png")}
        className="img-responsive"
        alt="Lakshit"
      />
      <Box>
        <Typography variant="h4">Lakshit</Typography>
        <Box sx={{justifyContent:"center"}} className="flip-horizontal-bottom">
          <Typography variant="p">FullStack Developer</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
