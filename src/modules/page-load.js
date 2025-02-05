
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

  content.innerHTML=`
      <h1>Peaceful Dining</h1>
      <p>True enjoyment is a holistic experience. Not only do we prepare fresh and healthy dishes from farm-to-table ingredients, we have also created an ambience that stimulates the senses so that you can leave the hustle and bustle behind and focus on the taste experience.</p>
      <h2>How To Find Us</h2>
      <div class="stack">
        <p>In a remote, utopian location in the heart of the Valley of a Thousand Rivers:
        </p>
        <div class="small-stack address">
          <p>Riverstreet 5</p>
          <p>9999 New South Riverland</p>
        </div>
      </div>
      
      <h2>February's Most Popular Dish</h2>
  `;
  
  content.insertBefore(restaurantImageElement, content.firstChild);
  content.appendChild(dishOfMonthImageElement);
}