import React from "react";
import moment from "moment";
// import { Link } from "react-router-dom";
import {
  Card,
  Media,
  Content,
  Heading,
  Image,
  Breadcrumb,
  Tile,
} from "react-bulma-components";

export default function RecipeCard(props) {
  const { recipe, author, tags } = props.recipe;
  const createdAt = moment(recipe.created_at).startOf("hour").fromNow();
  console.log(recipe);
  return (
    <Tile size={4}>
      <Tile>
        <Tile kind="parent">
          <Tile renderAs="article" kind="child" notification color="primary">
            <Heading>{recipe.title}</Heading>
            <Heading subtitle>{author.username}</Heading>
            <time>{`${createdAt}`}</time>
          </Tile>
        </Tile>
      </Tile>
    </Tile>
  );
}
