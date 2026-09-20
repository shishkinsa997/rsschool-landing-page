import "../../styles/about.scss";
import { imagePaths } from "../images";

export function renderAbout() {
  const about = document.createElement("section");
  about.classList = "section";
  about.id = "about";

  about.innerHTML = `
    <div class="about-inner">
      <h2 class="h2">Resource is <span>the perfect and cozy place</span> where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done.</h1>
      <div class='gallery'>
        <div class="column">
          <div class="image-box about1">
            <img src="${imagePaths["about-1"]}" alt="">
          </div>
          <div class="image-box about2">
            <img src="${imagePaths["about-2"]}" alt="">
          </div>
        </div>
        <div class="column">
          <div class="image-box about3">
            <img src="${imagePaths["about-3"]}" alt="">
          </div>
          <div class="image-box about4">
            <img src="${imagePaths["about-4"]}" alt="">
          </div>
        </div>
      </div>
    </div>
  `;

  return about;
}
