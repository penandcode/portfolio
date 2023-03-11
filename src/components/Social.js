import React from "react";
import { Stack, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Social = () => {
  return (
    <Stack direction={"row"} spacing={2}>
      <Link
        underline="none"
        color="inherit"
        href="https://www.linkedin.com/in/penandcode/"
        target="_blank"
      >
        <LinkedInIcon />
      </Link>
      <Link
        underline="none"
        color="inherit"
        href="https://instagram.com/pen.code/"
        target="_blank"
      >
        <InstagramIcon />
      </Link>
      <Link
        underline="none"
        color="inherit"
        href="https://github.com/penandcode/"
        target="_blank"
      >
        <GitHubIcon />
      </Link>
    </Stack>
  );
};

export default Social;
