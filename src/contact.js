export function loadContactPage() {
  const body = document.querySelector("body");
  const content = document.createElement("div");
  const contactContainer = document.createElement("div");
  const hoursContainer = document.createElement("div");
  const communicationContainer = document.createElement("div");
  const hours = document.createElement("ul");
  const weekdays = document.createElement("li");
  const weekends = document.createElement("li");
  const call = document.createElement("p");
  const email = document.createElement("p");

  content.setAttribute("id", "content");
  content.classList.add("contact");
  contactContainer.classList.add("contact");
  hoursContainer.classList.add("hours");
  communicationContainer.classList.add("communication");

  weekdays.textContent = "Mon - Fri: 3pm - 10pm";
  weekends.textContent = "Sat - Sun: 1pm - 11pm";
  call.textContent = "Call us: (111) 111-1111";
  email.textContent = "Send us an email: email@example.com";

  body.appendChild(content);
  content.appendChild(contactContainer);
  contactContainer.appendChild(hoursContainer);
  contactContainer.appendChild(communicationContainer);
  hoursContainer.appendChild(hours);
  hours.appendChild(weekdays);
  hours.appendChild(weekends);
  communicationContainer.appendChild(call);
  communicationContainer.appendChild(email);
}
