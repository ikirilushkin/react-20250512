import { Dish } from "../dish/Dish";
import { Reviews } from "../review/Reviews";
import { ReviewForm } from "../reviewForm/ReviewForm";

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
        {restaurant.reviews.length ? (
          <Reviews reviews={restaurant.reviews} />
        ) : (
          "No reviews yet"
        )}
        <h4>Add new review</h4>
        <ReviewForm
          onSubmit={({ name, text, rating }) =>
            console.log(
              `New review is added by ${name} with text: ${text} and rating: ${rating}`
            )
          }
        />
      </div>
    </div>
  );
};
