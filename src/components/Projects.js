import { Box, Typography } from "@mui/material";
import "./projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const data = [
    {
      image:
        `${require("./assets/Qtripstatic.png")}`,
      project: "QtripStatic",
      projectInfo: "Travel website with basic functionality",

      demo: "https://lakshit-qtrip-static.netlify.app/",
    },
    {
      image:
        `${require("./assets/Qtripdynamic.png")}`,
      project: "QtripDynamic",
      projectInfo: "Travel website made dynamic using JS",

      demo: "https://lakshit-qtrip-dynamic.netlify.app/",
    },
    {
      image:
        `${require("./assets/Xboard.png")}`,
      project: "XBoard",
      projectInfo:
        "XBoard is News Feed website that will feature latest news for topics.",

      demo: "https://lakshit-xboard.netlify.app/",
    },
    {
      image:
        `${require("./assets/Qkart.png")}`,
      project: "Qkart",
      projectInfo: "It's a clone of an eCommerce Website",

      demo: "https://lakshit-qkart-frontend.netlify.app/",
    },
    {
      image:
        "https://crio-directus-assets.s3.ap-south-1.amazonaws.com/e6fb82a2-423d-4f62-9962-f19f2f81fa8c.png",
      project: "Qkart Backend",
      projectInfo: "It's a clone of an eCommerce Website",

      demo: "https://lakshit-qkart-backend.netlify.app/",
    },
    {
      image:
        `${require("./assets/XFlix.png")}`,
      project: "XFlix Frontend",
      projectInfo: "It's a clone of an eCommerce Website",

      demo: "https://lakshit-xflix.netlify.app/",
    },
    {
      image:
        `${require("./assets/Admin UI.png")}`,
      project: "Admin UI",
      projectInfo: "Geektrust Challenge for Admin Dashboard",

      demo: "https://admin-ui-lakshit.netlify.app/",
    },
  ];
  return (
    <Box className="projects">
      <Box>
        <Typography variant="h4" margin={5}>
          Projects
        </Typography>
      </Box>
      {data.map((item) => (
        <ProjectCard
          image={item.image}
          project={item.project}
          projectInfo={item.projectInfo}
          code={item.code}
          demo={item.demo}
        />
      ))}
    </Box>
  );
};

export default Projects;
