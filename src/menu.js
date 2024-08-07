export function loadMenuPage() {
  const body = document.querySelector("body");
  const content = document.createElement("div");

  content.setAttribute("id", "content");

  body.appendChild(content);
}
