import Icon from "./image.jpg";

export function loadHomePage() {
  const body = document.querySelector("body");
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const abtBtn = document.createElement("button");
  const content = document.createElement("div");
  const image = new Image();
  const headline = document.createElement("h1");

  body.appendChild(header);
  body.appendChild(content);
  content.setAttribute("id", "content");

  header.appendChild(nav);

  content.appendChild(image);
  image.setAttribute("src", Icon);
  content.appendChild(headline);
  headline.textContent = "A Slice of Heaven on Every Plate";

  nav.appendChild(homeBtn);
  homeBtn.textContent = "Home";
  nav.appendChild(menuBtn);
  menuBtn.textContent = "Menu";
  nav.appendChild(abtBtn);
  abtBtn.textContent = "About";
}
