export function loadMenuPage() {
  const body = document.querySelector("body");
  const content = document.createElement("div");

  content.setAttribute("id", "content");
  content.classList.add("menu");

  body.appendChild(content);
}
