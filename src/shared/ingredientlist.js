import React from "react";

export default function IngredientList(props) {
  const { ingredients } = props;
  return (
    <div>
      {ingredients.map((ingredient, idx) => {
        return (
          <p key={idx}>
            {ingredient.name}
          </p>
        );
      })}
    </div>
  );
}
