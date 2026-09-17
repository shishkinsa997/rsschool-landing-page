import "../../styles/header.scss";
import logo from "/favicon.svg";
import logoDark from "/logo_dark.svg";

function renderHeader() {
  const header = document.createElement("header");
  const headerInner = document.createElement("div");
  const logoWrapper = document.createElement("a");
  const nav = document.createElement("nav");
  const navUl = document.createElement("ul");
  const liFav = document.createElement("li");
  const liAbout = document.createElement("li");
  const liMobile = document.createElement("li");
  const liContacts = document.createElement("li");

  const theme = document.createElement("div");
  const themeInput = document.createElement("input");
  const themeLabel = document.createElement("label");

  const menu = document.createElement("a");
  const menuTitle = document.createElement("span");

  const sunIcon = document.createElement("div");
  const moonIcon = document.createElement("div");
  const menuIcon = document.createElement("div");

  const svgSun =
    '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3V1C10 0.45 10.45 0 11 0C11.55 0 12 0.45 12 1V3C12 3.55 11.55 4 11 4C10.45 4 10 3.55 10 3ZM17.36 6.05L18.77 4.63C19.16 4.24 19.16 3.61 18.77 3.22C18.38 2.83 17.75 2.83 17.36 3.22L15.95 4.64C15.56 5.03 15.56 5.66 15.95 6.05C16.34 6.44 16.97 6.44 17.36 6.05ZM21 10H19C18.45 10 18 10.45 18 11C18 11.55 18.45 12 19 12H21C21.55 12 22 11.55 22 11C22 10.45 21.55 10 21 10ZM11 18C10.45 18 10 18.45 10 19V21C10 21.55 10.45 22 11 22C11.55 22 12 21.55 12 21V19C12 18.45 11.55 18 11 18ZM4.64 6.05L3.22 4.64C2.83 4.25 2.83 3.61 3.22 3.23C3.61 2.85 4.25 2.84 4.63 3.23L6.04 4.64C6.43 5.03 6.43 5.67 6.04 6.05C5.65 6.43 5.02 6.44 4.64 6.05ZM15.95 15.95C15.56 16.34 15.56 16.98 15.95 17.36L17.36 18.77C17.75 19.16 18.39 19.16 18.77 18.77C19.16 18.38 19.16 17.74 18.77 17.36L17.36 15.95C16.98 15.56 16.34 15.56 15.95 15.95ZM1 12H3C3.55 12 4 11.55 4 11C4 10.45 3.55 10 3 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM4.64 18.78L6.05 17.37C6.44 16.98 6.44 16.34 6.05 15.96C5.66 15.58 5.02 15.57 4.64 15.96L3.23 17.37C2.84 17.76 2.84 18.4 3.23 18.78C3.61 19.17 4.25 19.17 4.64 18.78ZM11 5C7.69 5 5 7.69 5 11C5 14.31 7.69 17 11 17C14.31 17 17 14.31 17 11C17 7.69 14.31 5 11 5Z" fill="#E1D4C9"/></svg>';
  const svgMoon =
    '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0C4.03 0 0 4.03 0 9C0 13.97 4.03 18 9 18C13.97 18 18 13.97 18 9C18 8.54 17.96 8.08 17.9 7.64C16.92 9.01 15.32 9.9 13.5 9.9C10.52 9.9 8.1 7.48 8.1 4.5C8.1 2.69 8.99 1.08 10.36 0.0999999C9.92 0.0399999 9.46 0 9 0Z" fill="#403F3D"/></svg>';
  const svgMenu =
    '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.167 9.76667V11.6667C14.167 14.8883 11.5553 17.5 8.33366 17.5C5.112 17.5 2.50033 14.8883 2.50033 11.6667V9.76667C2.50033 9.4353 2.76896 9.16667 3.10033 9.16667H13.567C13.8984 9.16667 14.167 9.4353 14.167 9.76667Z" stroke="#403F3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.0003 7.50008C10.0003 6.66675 10.5956 5.83341 11.786 5.83341C13.101 5.83341 14.167 4.76743 14.167 3.45246V2.91675" stroke="#403F3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.66634 7.5V7.08333C6.66634 5.70262 7.78563 4.58333 9.16634 4.58333C10.0868 4.58333 10.833 3.83714 10.833 2.91667V2.5" stroke="#403F3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.333 9.16675H15.4163C16.5669 9.16675 17.4997 10.0995 17.4997 11.2501C17.4997 12.4007 16.5669 13.3334 15.4163 13.3334H14.1663" stroke="#403F3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const burgerToggle = document.createElement("input");
  const burgerLabel = document.createElement("label");

  burgerToggle.id = "burger-toggle";
  burgerToggle.type = "checkbox";
  burgerLabel.setAttribute("for", "burger-toggle");

  header.classList.add("header");
  headerInner.classList.add("header-inner");
  logoWrapper.classList.add("logo-wrapper");
  nav.classList.add("nav");
  theme.classList.add("theme-toggle");
  sunIcon.classList.add("theme-sun");
  moonIcon.classList.add("theme-moon");
  themeLabel.classList.add("theme-label");
  themeInput.classList.add("theme-input");
  menu.classList.add("menu");

  logoWrapper.innerHTML = `
    <img src="${logo}" alt="logo" class="logo"/>`;
  liFav.innerHTML = `<a href="#fav">Favorite coffee</a>`;
  liAbout.innerHTML = `<a href="#about">About</a>`;
  liMobile.innerHTML = `<a href="#mobile">Mobile app</a>`;
  liContacts.innerHTML = `<a href="#contacts">Contacts</a>`;

  logoWrapper.setAttribute("href", "/");
  logoWrapper.setAttribute("data-link", "home");
  menu.setAttribute("href", "/menu");
  menu.setAttribute("data-link", "menu");

  navUl.append(liFav, liAbout, liMobile, liContacts);
  nav.append(burgerToggle, burgerLabel, navUl);
  headerInner.append(logoWrapper, nav, theme, menu);
  header.append(headerInner);

  themeInput.type = "checkbox";
  themeInput.id = "theme-toggle";
  themeLabel.setAttribute("for", "theme-toggle");
  theme.append(themeInput, themeLabel);
  themeLabel.append(sunIcon, moonIcon);

  menu.append(menuTitle, menuIcon);
  menuTitle.textContent = "Menu";
  sunIcon.innerHTML = svgSun;
  moonIcon.innerHTML = svgMoon;
  menuIcon.innerHTML = svgMenu;

  const burgerOpen = () => {
    document.documentElement.style.overflowY = "hidden";
  };
  const burgerClose = () => {
    document.documentElement.style.overflow = "auto";
  };

  burgerToggle.addEventListener("change", () => {
    if (burgerToggle.checked) {
      burgerOpen();
    } else {
      burgerClose();
    }
  });

  [liFav, liAbout, liMobile, liContacts].forEach((li) => {
    li.addEventListener("click", () => {
      if (burgerToggle.checked) {
        burgerToggle.checked = false;
        burgerClose();
      }
    });
  });

  themeInput.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      logoWrapper.innerHTML = `
    <img src="${logoDark}" alt="logo" class="logo"/>`;
    } else {
      logoWrapper.innerHTML = `
    <img src="${logo}" alt="logo" class="logo"/>`;
    }
  });

  return header;
}

export { renderHeader };
