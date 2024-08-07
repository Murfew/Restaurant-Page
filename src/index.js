import { loadHomePage, loadBasePage } from "./home.js";
import { loadMenuPage } from "./menu.js";
import { loadContactPage } from "./contact.js";
import "./styles.css";

loadBasePage();
loadHomePage();

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const contactBtn = document.querySelector(".contact");

homeBtn.classList.add("active");

homeBtn.addEventListener("click", () => {
  homeBtn.classList.add("active");
  if (menuBtn.classList.contains("active")) {
    menuBtn.classList.remove("active");
  }
  if (contactBtn.classList.contains("active")) {
    contactBtn.classList.remove("active");
  }
  const body = document.querySelector("body");
  const content = document.querySelector("#content");
  body.removeChild(content);
  loadHomePage();
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.add("active");
  if (homeBtn.classList.contains("active")) {
    homeBtn.classList.remove("active");
  }
  if (contactBtn.classList.contains("active")) {
    contactBtn.classList.remove("active");
  }
  const body = document.querySelector("body");
  const content = document.querySelector("#content");
  body.removeChild(content);
  loadMenuPage();
});

contactBtn.addEventListener("click", () => {
  contactBtn.classList.add("active");
  if (menuBtn.classList.contains("active")) {
    menuBtn.classList.remove("active");
  }
  if (homeBtn.classList.contains("active")) {
    homeBtn.classList.remove("active");
  }
  const body = document.querySelector("body");
  const content = document.querySelector("#content");
  body.removeChild(content);
  loadContactPage();
});
