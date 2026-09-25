import "../../styles/favorite.scss";
import { imagePaths } from "../images";

export function renderFavorite() {
  const favorite = document.createElement("section");
  const row = document.createElement("div");

  const arrowLeft = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5 12H6M12 18L6 12L12 6" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
  const arrowRight = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12H18.5M12.5 18L18.5 12L12.5 6" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  favorite.classList = "section";
  favorite.id = "favorite";
  row.classList.add("row");

  const slides = [
    {
      name: "S’mores Frappuccino",
      desc: "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.",
      img: "coffee-slider-1",
      price: "5.50",
    },
    {
      name: "Caramel Macchiato",
      desc: "Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.",
      img: "coffee-slider-2",
      price: "5.00",
    },
    {
      name: "Ice coffee",
      desc: "A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.",
      img: "coffee-slider-3",
      price: "4.50",
    },
  ];

  slides.forEach((s) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    slide.innerHTML = `
    <div class="content">
      <img src="${imagePaths[s.img]}" alt="${s.name}">
      <div class='slide-info'>
        <h3 class="h3">${s.name}</h3>
        <p class="slider-text">${s.desc}</p>
        <h3 class="h3">$${s.price}</h3>
      </div>
    </div>`;
    row.append(slide);
  });

  row.querySelector(".slide").className += " active";

  favorite.innerHTML = `
    <div class="favorite-inner">
      <h2 class="h2">Choose your <span>favorite</span> coffee</h2>
      <div class="slider">
        <div class="slider-inner">
          <button class="arrow prev" data-direction="left">${arrowLeft}</button>
          <button class="arrow next" data-direction="right">${arrowRight}</button>
        </div>
        <div class="controls">
          <div class="control active"></div>
          <div class="control"></div>
          <div class="control"></div>
        </div>
      </div>
    </div>
  `;

  let slideIndex = 1;

  const plusSlides = (n, dir) => {
    showSlides((slideIndex += n), dir);
  };

  function showSlides(n, dir) {
    let i;
    let slides = document.querySelectorAll(".slide");
    let controls = document.querySelectorAll(".control");
    let active = document.querySelector(".active");

    active.classList.add("fade-" + dir + "-out");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("fade-left", "fade-right");
      slides[i].className = slides[i].className.replace(" active", "");
      controls[i].className = controls[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].classList.add("fade-" + dir);
    slides[slideIndex - 1].className += " active";
    controls[slideIndex - 1].className += " active";

    setTimeout(() => {
      for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("fade-right-out", "fade-left-out");
      }
    }, 500);
  }

  const prev = favorite.querySelector(".prev");
  const next = favorite.querySelector(".next");

  prev.addEventListener("click", () => {
    plusSlides(-1, "right");
  });
  next.addEventListener("click", () => {
    plusSlides(1, "left");
  });

  const sliderInner = favorite.querySelector(".slider-inner");
  const rightArrow = sliderInner.querySelectorAll(".arrow")[1];
  sliderInner.insertBefore(row, rightArrow);
  return favorite;
}
