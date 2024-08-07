import Icon from "./bg.jpg";

export function loadHomePage() {
  const body = document.querySelector("body");
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");
  const content = document.createElement("div");
  const headline = document.createElement("h1");
  const headlineContainer = document.createElement("div");

  body.appendChild(header);
  body.appendChild(content);
  body.setAttribute("background", Icon);
  content.setAttribute("id", "content");

  header.appendChild(nav);

  content.appendChild(headlineContainer);
  headlineContainer.appendChild(headline);
  headline.textContent = "A Slice of Heaven on Every Plate";

  nav.appendChild(homeBtn);
  homeBtn.textContent = "Home";
  nav.appendChild(menuBtn);
  menuBtn.textContent = "Menu";
  nav.appendChild(contactBtn);
  contactBtn.textContent = "Contact";
}
