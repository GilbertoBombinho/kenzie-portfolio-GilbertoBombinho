import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { SiTypescript } from "react-icons/si";
import { FaPython, FaGitAlt, FaAws, } from "react-icons/fa";
import {SiPostgresql} from "react-icons/si"

export const stackData = [
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  {
    title: "JS",
    img: imgJS,
  },
  {
    title: "React",
    img: imgReact,
  },
  {
    title: "Node JS",
    img: imgNode,
  },
  { title: "TypeScript", img: SiTypescript },
  { title: "Python", img: FaPython },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "Git ", img: FaGitAlt },
  { title: "AWS", img: FaAws },
];
