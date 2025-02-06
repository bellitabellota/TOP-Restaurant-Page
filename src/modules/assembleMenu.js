import { createParagraph, createHeading2, createHeading1 } from "./creating-html-elements";

export function assembleMenu(content) {
  const h1 = createHeading1("Menu");
  const paragraph = createParagraph("We are updating our menu monthy. So don't forget to check it out on a regular basis.");
  const firstH2 = createHeading2("Breakfast");
  const paragraph1 = createParagraph("Yogurt with fruit");
  const paragraph2 = createParagraph("Croissant served with butter, jam, ham and cheese and a soft egg");
  const paragraph3 = createParagraph("Rice pudding with mango");

  const secondH2 = createHeading2("Lunch");
  const paragraph4 = createParagraph("Fluffy yeast dumpling filled with spiced plum jam and served with melted butter,  poppy seeds and sugar");
  const paragraph5 = createParagraph("Creamed spinach with roast potatoes and fried egg");
  const paragraph6 = createParagraph("Vegetable lasagne with zucchini, carrot and red bell pepper");

  const thirdH2 = createHeading2("Dinner");
  const paragraph7 = createParagraph("Fried rice balls with tzatziki");
  const paragraph8 = createParagraph("Pad Thai with Tofu");
  const paragraph9 = createParagraph("Polenta pizza with arugula and cocktail tomatoes");

  content.appendChild(h1);
  content.appendChild(paragraph);
  content.appendChild(firstH2);
  content.appendChild(paragraph1);
  content.appendChild(paragraph2);
  content.appendChild(paragraph3);

  content.appendChild(secondH2);
  content.appendChild(paragraph4);
  content.appendChild(paragraph5);
  content.appendChild(paragraph6);

  content.appendChild(thirdH2);
  content.appendChild(paragraph7);
  content.appendChild(paragraph8);
  content.appendChild(paragraph9);
}