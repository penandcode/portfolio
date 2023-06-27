import React from "react";
import {
  Box,
  Button,
  Typography
} from "@mui/material";
import "./ProductCard.css";

const ProjectCard = ({ image, project, projectInfo, code, demo }) => {
  return (
    <Box className="card">
      <Box className="cardImage"><img src={image} alt={project} /></Box>
      <Box>
        <Box>{project}</Box>
        <Box>
          <Typography variant="p">
            {projectInfo}
          </Typography>
        </Box>
        <Button href={demo} target="_blank">Check it here</Button>
      </Box>
    </Box >
  );
};

export default ProjectCard;
