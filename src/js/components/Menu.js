import "../../styles/menu.scss";
import { imagePaths, iconPaths } from "../images";
import { renderCard } from "../components/Card.js";
import products from "../../products.json";

export function renderMenu() {
  const menu = document.createElement("section");
  menu.classList = "section";
  menu.id = "menu";

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
    </div>
  `;

  const coffee = products.filter((product) => product.category === "coffee");
  const grid = menu.querySelector(".grid");

  coffee.forEach((x, i) => {
    grid.append(renderCard(x, i + 1));
  });

  return menu;
}
