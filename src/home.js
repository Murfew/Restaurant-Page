import Icon from "./bg.jpg";

export function loadBasePage() {
  const body = document.querySelector("body");
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");

  body.appendChild(header);
  body.setAttribute("background", Icon);

  header.appendChild(nav);

  nav.appendChild(homeBtn);
  homeBtn.textContent = "Home";
  homeBtn.classList.add("home");
  nav.appendChild(menuBtn);
  menuBtn.textContent = "Menu";
  menuBtn.classList.add("menu");
  nav.appendChild(contactBtn);
  contactBtn.textContent = "Contact";
  contactBtn.classList.add("contact");
}

export function loadHomePage() {
  const body = document.querySelector("body");
  const content = document.createElement("div");
  const headline = document.createElement("h1");
  const headlineContainer = document.createElement("div");

  content.setAttribute("id", "content");

  body.appendChild(content);
  content.appendChild(headlineContainer);
  headlineContainer.appendChild(headline);

  headline.textContent = "A Slice of Heaven on Every Plate";
}
