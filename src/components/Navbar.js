import React from "react";
import { Box } from "@mui/material";
import Social from "./Social";
import "./navbar.css";
import Diversity2Icon from "@mui/icons-material/Diversity2";

const Navbar = () => {
  return (
    <Box className="navbar">
      Portfolio
      <Diversity2Icon className="rotate-center" />
      <Social />
    </Box>
  );
};

export default Navbar;
