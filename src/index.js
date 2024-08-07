import { loadHomePage, loadBasePage } from "./home.js";
import { loadMenuPage } from "./menu.js";
import { loadContactPage } from "./contact.js";
import "./styles.css";

loadBasePage();
loadHomePage();

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const contactBtn = document.querySelector(".contact");

homeBtn.addEventListener("click", () => {
  const body = document.querySelector("body");
  const content = document.querySelector("#content");
  body.removeChild(content);
  loadHomePage();
});

menuBtn.addEventListener("click", () => {
  const body = document.querySelector("body");
  const content = document.querySelector("#content");
  body.removeChild(content);
  loadMenuPage();
});

contactBtn.addEventListener("click", () => {
  const body = document.querySelector("body");
  const content = document.querySelector("#content");
  body.removeChild(content);
  loadContactPage();
});
