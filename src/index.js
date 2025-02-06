import "./styles.css";
import { pageLoad } from "./modules/page-load.js"
import { assembleMenu } from "./modules/assemble-menu.js";
import { assembleAbout} from "./modules/assemble-about.js";
import { assembleHomepage } from "./modules/assemble-homepage.js";

const content = document.getElementById("content");
const homeButton = document.querySelector(".js-home-btn");
const menuButton = document.querySelector(".js-menu-btn");
const aboutButton = document.querySelector(".js-about-btn");

pageLoad();

homeButton.addEventListener("click", () => {
  clearContent();
  assembleHomepage();
});

menuButton.addEventListener("click", () => {
  clearContent();
  assembleMenu();
});

aboutButton.addEventListener("click", () => {
  clearContent();
  assembleAbout();
})

function clearContent() {
  content.textContent="";
}