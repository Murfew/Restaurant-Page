export function loadMenuPage() {
  const body = document.querySelector("body");
  const content = document.createElement("div");
  const menuContainer = document.createElement("div");
  const menu = document.createElement("ul");
  const margherita = document.createElement("li");
  const pepperoni = document.createElement("li");
  const veggie = document.createElement("li");
  const chicken = document.createElement("li");
  const meat = document.createElement("li");

  content.setAttribute("id", "content");
  content.classList.add("menu");

  margherita.textContent = "Margherita - $10.99";
  pepperoni.textContent = "Pepperoni - $11.99";
  veggie.textContent = "Veggie Delight - $12.99";
  chicken.textContent = "BBQ Chicken - $13.99";
  meat.textContent = "Meat Lovers - $14.99";

  body.appendChild(content);
  content.appendChild(menuContainer);
  menuContainer.appendChild(menu);
  menu.appendChild(margherita);
  menu.appendChild(pepperoni);
  menu.appendChild(veggie);
  menu.appendChild(chicken);
  menu.appendChild(meat);
}
