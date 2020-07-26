import React from "react";

export default function IngredientList(props) {
  const { ingredients } = props;
  return (
    <div className="md">
      <ul>
        {ingredients.map((ingredient, idx) => {
          return <li key={idx}>{ingredient.name}</li>;
        })}
      </ul>
    </div>
  );
}
