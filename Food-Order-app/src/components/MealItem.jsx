import { useContext } from "react";
import Button from "./UI/Button.jsx";
import { CartContext } from "../store/CartContext.jsx";

export default function MealItem({meal}) {

  const { addItem } = useContext(CartContext)

  function handleAddMeal() {
    addItem(meal)
  }

  return (
    <li key={meal.id} className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">${meal.price}</p>
          <p>{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMeal}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
