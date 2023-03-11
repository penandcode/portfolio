import { Box, Grid, Typography } from "@mui/material";
import "./projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
      project: "Qkart",
      projectInfo: "It's a clone of an eCommerce Website",
      code: "Github.com",
      demo: "Netlify.app",
    },
    {
      image:
        "https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
      project: "Qkart",
      projectInfo: "It's a clone of an eCommerce Website",
      code: "Github.com",
      demo: "Netlify.app",
    },
    {
      image:
        "https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
      project: "Qkart",
      projectInfo: "It's a clone of an eCommerce Website",
      code: "Github.com",
      demo: "Netlify.app",
    },
    {
      image:
        "https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
      project: "Qkart",
      projectInfo: "It's a clone of an eCommerce Website",
      code: "Github.com",
      demo: "Netlify.app",
    },
    {
      image:
        "https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
      project: "Qkart",
      projectInfo: "It's a clone of an eCommerce Website",
      code: "Github.com",
      demo: "Netlify.app",
    },
    {
      image:
        "https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
      project: "Qkart",
      projectInfo: "It's a clone of an eCommerce Website",
      code: "Github.com",
      demo: "Netlify.app",
    },
    {
      image:
        "https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
      project: "Qkart",
      projectInfo: "It's a clone of an eCommerce Website",
      code: "Github.com",
      demo: "Netlify.app",
    },
    {
      image:
        "https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
      project: "Qkart",
      projectInfo: "It's a clone of an eCommerce Website",
      code: "Github.com",
      demo: "Netlify.app",
    },
  ];
  return (
    <Box className="projects">
      <Box>
        <Typography variant="h4" margin={5}>Projects</Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 16 }}
        paddingLeft={6}
      >
        {data.map((item) => (
          <Grid item xs={4} sm={4} md={4} key={item}>
            <ProjectCard
              image={item.image}
              project={item.project}
              projectInfo={item.projectInfo}
              code={item.code}
              demo={item.demo}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
