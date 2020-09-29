import {
  faMobileAlt,
  faDesktop,
  faCode,
  faServer,
  faDatabase,
  faRobot,
} from "@fortawesome/free-solid-svg-icons"

const skillData = [
  {
    id: 1,
    icon: faMobileAlt,
    title: "Mobile Applications",
    categories: ["Dart/Flutter", "Native Script", "React Native", "Vue Native"],
  },
  {
    id: 2,
    icon: faDesktop,
    title: "Front-End Development",
    categories: ["HTML/CSS", "Gatsby", "React", "Javascript", "Vue"],
  },
  {
    id: 3,
    icon: faServer,
    title: "Server-Side Development",
    categories: ["Python/Django", "Express/NodeJS", "ASP.NET"],
  },
  {
    id: 4,
    icon: faCode,
    title: "Data Structures & Algorithms",
    categories: ["C/C++", "Java", "Python", "Haskell"],
  },
  {
    id: 5,
    icon: faDatabase,
    title: "Database & Cloud Architecture",
    categories: ["MySQL", "MongoDB", "Firebase", "Docker", "Jenkins"],
  },
  {
    id: 6,
    icon: faRobot,
    title: "Machine Learning",
    categories: ["Scikit-learn", "TensorFlow"],
  },
]

export default skillData
