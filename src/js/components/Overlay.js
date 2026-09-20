import "../../styles/overlay.scss";
import { imagePaths } from "../images";

const overlay = document.createElement("div");

function initOverlay(data, index) {
  overlay.innerHTML = ``;

  const infoIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_145886_6466)">
<path d="M8 7.66669V11" stroke="#E1D4C9" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 5.00667L8.00667 4.99926" stroke="#E1D4C9" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.99967 14.6666C11.6816 14.6666 14.6663 11.6819 14.6663 7.99998C14.6663 4.31808 11.6816 1.33331 7.99967 1.33331C4.31778 1.33331 1.33301 4.31808 1.33301 7.99998C1.33301 11.6819 4.31778 14.6666 7.99967 14.6666Z" stroke="#E1D4C9" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_145886_6466">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
`;

  const modal = document.createElement("div");

  modal.innerHTML = `
  <div class="modal">
    <div class="modal-img">
      <img src="${imagePaths[data.category + "-" + index]}" alt=''/>
    </div>
    <div class="modal-content">
      <div class="modal-title">
        <h3 class="h3">${data.name}</h3>
        <p class="modal-desc">${data.description}</p>
      </div>
      <div class="modal-sizes">
        <p>Size</p>
        <div class="modal-tabs">
          <button class="modal-tab modal-size active" data-price=${data.sizes.s["add-price"]}>
            <span class="modal-size_icon">S</span>
            <span class="modal-size_text">${data.sizes.s.size}</span>
          </button>
          <button class="modal-tab modal-size" data-price=${data.sizes.m["add-price"]}>
            <span class="modal-size_icon">M</span>
            <span class="modal-size_text">${data.sizes.m.size}</span>
          </button>
          <button class="modal-tab modal-size" data-price=${data.sizes.l["add-price"]}>
            <span class="modal-size_icon">L</span>
            <span class="modal-size_text">${data.sizes.l.size}</span>
          </button>
        </div>
      </div>
      <div class="modal-adds">
        <p>Additives</p>
        <div class="modal-tabs">
          <button class="modal-tab modal-add" data-price=${data.additives[0]["add-price"]}>
            <span class="modal-add_icon">1</span>
            <span class="modal-add_text">Sugar</span>
          </button>
          <button class="modal-tab modal-add" data-price=${data.additives[1]["add-price"]}>
            <span class="modal-add_icon">2</span>
            <span class="modal-add_text">Cinnamon</span>
          </button>
          <button class="modal-tab modal-add" data-price=${data.additives[2]["add-price"]}>
            <span class="modal-add_icon">3</span>
            <span class="modal-add_text">Syrup</span>
          </button>
        </div>
      </div>
      <div class="modal-total">
        <span>Total:</span>
        <span class="price-total">$${data.price}</span>
      </div>
      <p class="modal-banner">
        <span class="info-icon">${infoIcon}</span>
        The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.
      </p>
      <button class="close-btn">Close</button>
    </div>
  </div>
  `;

  let price = +data.price;
  let sizePrise = 0;
  const close = modal.querySelector(".close-btn");
  const sizeTabs = modal.querySelectorAll(".modal-size");
  const addTabs = modal.querySelectorAll(".modal-add");
  const priceTotal = modal.querySelector(".price-total");

  console.log(sizeTabs);

  overlay.id = "overlay";

  modal.style.opacity = "0.5";
  overlay.style.opacity = "0";

  setTimeout(() => {
    modal.style.opacity = "1";
    overlay.style.opacity = "1";
  }, 0);

  overlay.append(modal);

  sizeTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      sizePrise = +tab.getAttribute("data-price");
      sizeTabs.forEach((tab) => tab.classList.remove("active"));
      tab.classList.add("active");
      priceTotal.textContent = `$${(price + sizePrise).toFixed(2)}`;
    });
  });
  addTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.classList.contains("active")) {
        price -= +tab.getAttribute("data-price");
        tab.classList.remove("active");
      } else {
        price += +tab.getAttribute("data-price");
        tab.classList.add("active");
      }
      priceTotal.textContent = `$${price.toFixed(2)}`;
    });
  });

  close.addEventListener("click", () => {
    document.documentElement.style.overflow = "auto";
    overlay.remove();
  });
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      e.stopPropagation();
      document.documentElement.style.overflow = "auto";
      overlay.remove();
    }
  });

  return overlay;
}

export function renderOverlay(data, index) {
  const overlay = initOverlay(data, index);
  document.documentElement.style.overflowY = "hidden";
  document.body.append(overlay);
}
