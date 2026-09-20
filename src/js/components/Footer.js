import "../../styles/footer.scss";
import { iconPaths } from "../images";

export function renderFooter() {
  const footer = document.createElement("footer");
  footer.id = "contacts";

  footer.innerHTML = `
    <section class="footer">
      <div class="footer-inner">
        <div class="offer">
          <div>
            <span class="offer__title1">Sip, Savor, Smile.</span><br>
            <span class="offer__title2">It’s coffee time!</span>
          </div>
          <ul class="socials">
            <li><a href="https://twitter.com/" target="_blank">
              <img src="${iconPaths["x"]}" alt="twitter">
            </a></li>
            <li><a href="https://www.instagram.com/" target="_blank">
              <img src="${iconPaths["instagram"]}" alt="instagram">
            </a></li>
            <li><a href="https://www.facebook.com/" target="_blank">
              <img src="${iconPaths["facebook"]}" alt="facebook">
            </a></li>
          </ul>
        </div>
        <div class="contacts-info">
          <span class="contacts-title">Contact us</span>
          <ul class="contacts">
            <li><a class="contact-item" href="https://www.google.com/maps" target="_blank">
              <img src="${iconPaths["pin-alt"]}" alt="pin-alt">
              <span class="contact-item__title">8558 Green Rd.,  LA</span>
            </a></li>
            <li><a class="contact-item" href="tel:+1 (603) 555-0123">
              <img src="${iconPaths["phone"]}" alt="pin-alt">
              <span class="contact-item__title">+1 (603) 555-0123</span>
            </a></li>
            <li><a class="contact-item" href="#">
              <img src="${iconPaths["clock"]}" alt="pin-alt">
              <span class="contact-item__title">Mon–Sat: 9:00–23:00</span>
            </a></li>
          </ul>
        </div>
      </div>
    </section>
  `;

  return footer;
}
