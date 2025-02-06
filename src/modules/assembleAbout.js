import holisticBreakfast from "../images/brooke-lark-HlNcigvUi4Q-unsplash.jpg";
import { createParagraph, createDivWithClass, createHeading2, createHeading1, createImg } from "./creating-html-elements";

export function assembleAbout() {
  const aboutImg = createImg(holisticBreakfast, "Holistic Breakfast", "holistic-breakfast");
  const h1 = createHeading1("About Us");
  const stackDiv = createDivWithClass("stack");
  const paragraph1 = createParagraph("Healthy eating is just the beginning. After many years of full-time employment with short breaks in noisy canteens with harsh lighting in a worn-out room, we know only too well how important not only delicious food but also a peaceful atmosphere is. Therefore, we have decided to spread the concept of “Peaceful Dining” around the world so that you too can experience a holistic dining experience.");
  const paragraph2 = createParagraph("In accordance with our concept, the number of guests is limited and prior reservation is recommended.");

  const h2 = createHeading2("Opening Hours");
  const stackDiv2 = createDivWithClass("stack");

  const div = createDivWithClass("center");  
  const paragraph3 = createParagraph("Breakfast");
  const paragraph4 = createParagraph("8:00 - 11:00");

  const div2 = createDivWithClass("center");
  const paragraph5 = createParagraph("Lunch");
  const paragraph6 = createParagraph("12:00 - 15:00");

  const div3 = createDivWithClass("center");
  const paragraph7 = createParagraph("Dinner");
  const paragraph8 = createParagraph("17:00 -22:00");

  const paragraph9 = createParagraph("Open 7 days a week.");


  content.appendChild(aboutImg);

  content.appendChild(h1);
  content.appendChild(stackDiv);
  stackDiv.appendChild(paragraph1);
  stackDiv.appendChild(paragraph2);


  content.appendChild(h2);
  content.appendChild(stackDiv2);

  stackDiv2.appendChild(div);
  div.appendChild(paragraph3);
  div.appendChild(paragraph4);

  stackDiv2.appendChild(div2);
  div2.appendChild(paragraph5);
  div2.appendChild(paragraph6);

  stackDiv2.appendChild(div3);
  div3.appendChild(paragraph7);
  div3.appendChild(paragraph8);

  stackDiv2.appendChild(paragraph9);
}