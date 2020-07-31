import React from "react";

export default function IngredientList(props) {
  const { ingredients, className } = props;
  return (
    <div className={className}>
      <ul>
        {ingredients.map((ingredient, idx) => {
          return <li key={idx}>{ingredient.name}</li>;
        })}
      </ul>
    </div>
  );
}
