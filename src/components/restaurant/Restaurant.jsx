import { Dish } from "../dish/Dish";
import { Review } from "../review/Review";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <div>
        <h3>Menu</h3>
        {restaurant.menu.map((dish) => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </div>
      <div>
        <h3>Reviews</h3>
        {restaurant.reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};
