import { imagePaths } from "../images";

export function renderCard(data, index) {
  const cardItem = document.createElement("a");
  const cardImage = document.createElement("img");
  const cardImageWrapper = document.createElement("div");
  const cardText = document.createElement("div");
  const cardTitle = document.createElement("h3");
  const cardDesc = document.createElement("p");
  const cardPrice = document.createElement("h3");

  cardItem.classList.add("card");
  cardImage.src = imagePaths[data.category + "-" + index];

  cardImageWrapper.classList.add("card-image");
  cardImage.alt = data.category;

  cardTitle.classList.add("h3");
  cardTitle.textContent = data.name;

  cardDesc.classList.add("card-description");
  cardDesc.textContent = data.description;

  cardPrice.classList.add("h3");
  cardPrice.textContent = `€${data.price}`;

  cardText.classList.add("card-text");

  cardText.append(cardTitle, cardDesc, cardPrice);
  cardImageWrapper.append(cardImage);
  cardItem.append(cardImageWrapper, cardText);

  return cardItem;
}
