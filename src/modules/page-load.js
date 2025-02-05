
import restaurantImage from "../images/josh-berendes-WItC-f-K2Ho-unsplash.jpg";
import dishOfMonthImage from "..//images/farhad-ibrahimzade-59lfMHMZugY-unsplash.jpg";

const restaurantImageElement = document.createElement("img");
restaurantImageElement.src = restaurantImage;
restaurantImageElement.alt = "Our Restaurant in the Valley of a Thousand Rivers";
restaurantImageElement.className = "restaurant-image";

const dishOfMonthImageElement = document.createElement("img");
dishOfMonthImageElement.src = dishOfMonthImage;
dishOfMonthImageElement.alt = "Summer Salad";
dishOfMonthImageElement.className ="dish-of-month-image";


export function pageLoad() {
  const content = document.getElementById("content");

  assembleHomepage(content);
}

function assembleHomepage(content) {
  const h1 = document.createElement("h1");
  h1.textContent = "Peaceful Dining";

  const paragraph1 = createParagraph("True enjoyment is a holistic experience. Not only do we prepare fresh and healthy dishes from farm-to-table ingredients, we have also created an ambience that stimulates the senses so that you can leave the hustle and bustle behind and focus on the taste experience.");
  const firstH2 = createHeading2("How To Find Us");
  const stackDiv = createDivWithClass("stack");
  const paragraph2 = createParagraph("In a remote, utopian location in the heart of the Valley of a Thousand Rivers:");
  const addressDiv = createDivWithClass("small-stack address");
  const paragraph3 = createParagraph("Riverstreet 5");
  const paragraph4 = createParagraph("9999 New South Riverland");
  const heading3 = createHeading2("February's Most Popular Dish");

  content.appendChild(restaurantImageElement);
  content.appendChild(h1);
  content.appendChild(paragraph1);
  content.appendChild(firstH2);
  content.appendChild(stackDiv);
  stackDiv.appendChild(paragraph2);
  stackDiv.appendChild(addressDiv);
  addressDiv.appendChild(paragraph3);
  addressDiv.appendChild(paragraph4);
  content.appendChild(heading3);
  content.appendChild(dishOfMonthImageElement);
}

function createParagraph(text){
  const p = document.createElement("p");
  p.textContent = text;
  return p;
}

function createHeading2(text){
  const h2 = document.createElement("h2");
  h2.textContent = text;
  return h2;
}

function createDivWithClass(className){
  const div = document.createElement("div");
  div.className = className;
  return div;
}