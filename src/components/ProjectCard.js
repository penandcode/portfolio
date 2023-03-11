import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const ProjectCard = ({image, project, projectInfo, code, demo}) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={project}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {projectInfo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={code}>Code</Button>
        <Button size="small" href={demo}>Demo</Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
