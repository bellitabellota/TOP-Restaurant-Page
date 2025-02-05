import { assembleHomepage } from "./assemble-hompage.js";


export function pageLoad() {
  const content = document.getElementById("content");

  assembleHomepage(content);
}

