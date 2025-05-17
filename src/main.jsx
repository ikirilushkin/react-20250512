import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock";

const rootElem = document.getElementById("root");

const root = createRoot(rootElem);

root.render(
  <ul>
    {restaurants.map(({ id, name, menu, reviews }) => (
      <li key={id}>
        <h2>{name}</h2>
        <div>
          <h3>Menu</h3>
          <ul>
            {menu.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Reviews</h3>
          <ul>
            {reviews.map(({ id, text }) => (
              <li key={id}>{text}</li>
            ))}
          </ul>
        </div>
      </li>
    ))}
  </ul>
);
