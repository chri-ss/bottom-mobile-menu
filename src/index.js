import "./style.css";
import "./reset.css";

import home from "./images/home_black_24dp.svg";
import favorite from "./images/favorite_black_24dp.svg";
import accountCircle from "./images/account_circle_black_24dp.svg";
import logout from "./images/logout_black_24dp.svg";
import shoppingCart from "./images/shopping_cart_black_24dp.svg";

const makeMenu = () => {
  const content = document.querySelector("#content");
  const nav = document.createElement("ul");
  nav.classList.add("nav");
  const navItems = [home, accountCircle, favorite, shoppingCart, logout];

  navItems.forEach((item) => {
    const newTab = document.createElement("li");
    newTab.classList.add("new-tab");

    const newLink = document.createElement("a");
    newLink.href = "#";

    const newImage = new Image();
    newImage.classList.add("new-image");
    newImage.src = item;

    newLink.appendChild(newImage);
    newTab.appendChild(newLink);
    nav.appendChild(newTab);
  });
  content.appendChild(nav);

  nav.addEventListener("click", (e) => {
    if (e.target.className === "new-image" || e.target.className === 'new-tab') {
      const others = Array.from(document.querySelectorAll(".nav > li"));
      others.forEach((otherTab) => {
        if (otherTab.classList.contains("color")) {
          otherTab.classList.remove("color");
        }
      });

      const tab = e.target.className === 'new-image' ? e.target.parentElement.parentElement : e.target;
      tab.classList.toggle("color");
    }
  });
};

makeMenu();
