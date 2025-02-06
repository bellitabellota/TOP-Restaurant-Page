import { assembleHomepage } from "./assemble-hompage.js";
import { assembleMenu } from "./assembleMenu.js";
import { assembleAbout} from "./assembleAbout.js";

export function pageLoad() {
  const content = document.getElementById("content");

  /* assembleHomepage(content); */
  /* assembleMenu(content); */
  assembleAbout(content);
  
}


