import {
  faMobileAlt,
  faDesktop,
  faCode,
  faServer,
  faDatabase,
  faCogs,
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
    categories: [
      "HTML",
      "CSS/SASS",
      "Gatsby",
      "React",
      "Vue.js",
      "Bootstrap",
      "Tailwind",
    ],
  },
  {
    id: 3,
    icon: faServer,
    title: "Back-End Development",
    categories: ["Python/Django", "Express/Node.js", "Golang"],
  },
  {
    id: 4,
    icon: faCode,
    title: "Programming Languages",
    categories: ["C/C++", "Java", "Python", "Haskell", "Javascript", "Golang"],
  },
  {
    id: 5,
    icon: faDatabase,
    title: "Database & Cloud Architecture",
    categories: ["MySQL", "MongoDB", "Firebase", "Docker", "Jenkins"],
  },
  {
    id: 6,
    icon: faCogs,
    title: "Formal Methods",
    categories: ["TLA+", "VDM++", "COQ", "Alloy", "NuSMV"],
  },
]

export default skillData
