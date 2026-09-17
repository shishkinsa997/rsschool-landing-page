import "../../styles/main.scss";
import { renderHeader } from "../components/Header.js";
import { renderFooter } from "../components/Footer.js";

const main = document.createElement("main");
main.classList.add("main");
document.body.prepend(renderHeader());
document.body.append(main);
document.body.append(renderFooter());
