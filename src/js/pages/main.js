import "../../styles/main.scss";
import { renderHeader } from "../components/Header.js";
import { renderFooter } from "../components/Footer.js";
import { renderHero } from "../components/Hero.js";
import { renderFavorite } from "../components/Favorite.js";
import { renderAbout } from "../components/About.js";

const main = document.createElement("main");
main.classList.add("main");

document.body.prepend(renderHeader());
document.body.append(main);
document.body.append(renderFooter());

main.append(renderHero());
main.append(renderFavorite());
main.append(renderAbout());
