import React from "react";
import moment from "moment";
// import { Link } from "react-router-dom";
import { Heading, Tile } from "react-bulma-components";
import Taglist from "./taglist";

export default function RecipeCard(props) {
  const { recipe, author, tags } = props.recipe;
  const createdAt = moment(recipe.created_at).startOf("hour").fromNow();
  return (
    <Tile size={4}>
      <Tile>
        <Tile kind="parent">
          <Tile className="recipe-card" renderAs="article" kind="child" notification>
            <Heading size={4}>{recipe.title}</Heading>
            <Heading subtitle>{author.username}</Heading>
            <time>{`${createdAt}`}</time>
            <Taglist tags={tags} />
          </Tile>
        </Tile>
      </Tile>
    </Tile>
  );
}
