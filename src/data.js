// Importing hero image
import HeroImage from "./assets/hero-img.webp";
import logo from "../public/V.png"

const Image = {
  HeroImage,
  logo,
};

export default Image;

// Importing tool icons
import ToolVSCode from "./assets/tools/vscode.png";
import ToolReact from "./assets/tools/reactjs.png";
import ToolNext from "./assets/tools/nextjs.png";
import ToolTailwind from "./assets/tools/tailwind.png";
import ToolBootstrap from "./assets/tools/bootstrap.png";
import ToolJS from "./assets/tools/js.png";
import ToolNode from "./assets/tools/nodejs.png";
import ToolGitHub from "./assets/tools/github.png";
import ToolAI from "./assets/tools/ai.png";
import ToolCanva from "./assets/tools/canva.png";
import ToolFigma from "./assets/tools/figma.png";

// Tools list
export const toolList = [
  {
    id: 1,
    image: ToolVSCode,
    name: "Visual Studio Code",
    category: "Code Editor",
    order: "100",
  },
  {
    id: 2,
    image: ToolReact,
    name: "React JS",
    category: "Framework",
    order: "200",
  },
  {
    id: 3,
    image: ToolNext,
    name: "Next JS",
    category: "Framework",
    order: "300",
  },
  {
    id: 4,
    image: ToolTailwind,
    name: "Tailwind CSS",
    category: "Framework",
    order: "400",
  },
  {
    id: 5,
    image: ToolBootstrap,
    name: "Bootstrap",
    category: "Framework",
    order: "500",
  },
  {
    id: 6,
    image: ToolJS,
    name: "JavaScript",
    category: "Language",
    order: "600",
  },
  {
    id: 7,
    image: ToolNode,
    name: "Node JS",
    category: "JavaScript Runtime",
    order: "700",
  },
  {
    id: 8,
    image: ToolGitHub,
    name: "GitHub",
    category: "Repository",
    order: "800",
  },
  {
    id: 9,
    image: ToolAI,
    name: "Adobe Illustrator",
    category: "Design App",
    order: "900",
  },
  {
    id: 10,
    image: ToolCanva,
    name: "Canva",
    category: "Design App",
    order: "1000",
  },
  {
    id: 11,
    image: ToolFigma,
    name: "Figma",
    category: "Design App",
    order: "1100",
  },
];

// Project image imports
import Project1 from "./assets/proyek/proyek1.webp";
import Project2 from "./assets/proyek/proyek2.webp";
import Project3 from "./assets/proyek/proyek3.webp";
import Project4 from "./assets/proyek/proyek4.webp";
import Project5 from "./assets/proyek/proyek5.webp";
import Project6 from "./assets/proyek/proyek6.webp";

// Project list
export const projectList = [
  {
    id: 1,
    image: Project1,
    name: "School Website",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "JavaScript", "AOS"],
    order: "200",
  },
  {
    id: 2,
    image: Project2,
    name: "Company Profile",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "JavaScript", "AOS", "Swiper", "Lightbox Gallery"],
    order: "300",
  },
  {
    id: 3,
    image: Project3,
    name: "Wedding Website 2.0",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
    order: "400",
  },
  {
    id: 4,
    image: Project4,
    name: "Course Website",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
    order: "500",
  },
  {
    id: 5,
    image: Project5,
    name: "Portfolio Website",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    order: "600",
  },
  {
    id: 6,
    image: Project6,
    name: "Company Profile 2.0",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["NextJS", "TailwindCSS", "Framer Motion"],
    order: "700",
  },
];
