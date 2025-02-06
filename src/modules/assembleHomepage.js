import restaurantImage from "../images/josh-berendes-WItC-f-K2Ho-unsplash.jpg";
import dishOfMonthImage from "..//images/farhad-ibrahimzade-59lfMHMZugY-unsplash.jpg";
import { createParagraph, createDivWithClass, createHeading2, createHeading1, createImg } from "./creating-html-elements";


export function assembleHomepage(content) {
  const restaurantImageElement = createImg(restaurantImage, "Our Restaurant in the Valley of a Thousand Rivers", "restaurant-image");
  const h1 = createHeading1("Peaceful Dining");
  const paragraph1 = createParagraph("True enjoyment is a holistic experience. Not only do we prepare fresh and healthy dishes from farm-to-table ingredients, we have also created an ambience that stimulates the senses so that you can leave the hustle and bustle behind and focus on the taste experience.");
  const firstH2 = createHeading2("How To Find Us");
  const stackDiv = createDivWithClass("stack");
  const paragraph2 = createParagraph("In a remote, utopian location in the heart of the Valley of a Thousand Rivers:");
  const addressDiv = createDivWithClass("small-stack address");
  const paragraph3 = createParagraph("Riverstreet 5");
  const paragraph4 = createParagraph("9999 New South Riverland");
  const heading3 = createHeading2("February's Most Popular Dish");
  const dishOfMonthImageElement = createImg(dishOfMonthImage, "Summer Salad", "dish-of-month-image");

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