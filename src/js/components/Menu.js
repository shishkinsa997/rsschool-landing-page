import "../../styles/menu.scss";
import { imagePaths, iconPaths } from "../images";
import { renderCard } from "../components/Card.js";
import products from "../../products.json";

export function renderMenu() {
  const menu = document.createElement("section");
  menu.classList = "section";
  menu.id = "menu";

  const refreshIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.8883 13.5C21.1645 18.3113 17.013 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C16.1006 2 19.6248 4.46819 21.1679 8" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 8H21.4C21.7314 8 22 7.73137 22 7.4V3" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  menu.innerHTML = `
    <div class="menu-inner">
      <div class="offer">
        <h1 class="h2">Behind each of our cups hides an <span>amazing surprise</span></h1>
        <div class="tabs">
          <button class="tab active">
            <img src="${iconPaths["coffee"]}" alt="coffee">
            <span class="tab-title">Coffee</span>
          </button>
          <button class="tab">
            <img src="${iconPaths["tea"]}" alt="tea">
            <span class="tab-title">Tea</span>
          </button>
          <button class="tab">
            <img src="${iconPaths["dessert"]}" alt="dessert">
            <span class="tab-title">Dessert</span>
          </button>
        </div>
      </div>

      <div class="grid">
      </div>

      <button class="refresh">${refreshIcon}</button>
    </div>
  `;

  const coffee = products.filter((product) => product.category === "coffee");
  const grid = menu.querySelector(".grid");

  coffee.forEach((x, i) => {
    grid.append(renderCard(x, i + 1));
  });

  return menu;
}
