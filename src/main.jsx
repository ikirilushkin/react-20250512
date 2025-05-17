import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock";

const rootElem = document.getElementById("root");

const root = createRoot(rootElem);

root.render(
  <ul>
    {restaurants.map((restaurant) => (
      <li key={restaurant}>
        <h2>{restaurant.name}</h2>
        <div>
          <h3>Menu</h3>
          <ul>
            {restaurant.menu.map((dish) => (
              <li key={dish}>{dish.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Reviews</h3>
          <ul>
            {restaurant.reviews.map((review) => (
              <li key={review}>{review.text}</li>
            ))}
          </ul>
        </div>
      </li>
    ))}
  </ul>
);
