import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Heading, Box, Container, Content } from "react-bulma-components";
import Taglist from "./TagList";

export default function RecipeCard(props) {
  // console.log(props.recipe);
  const { recipe, author, tags } = props.recipe;
  const createdAt = moment(recipe.created_at).startOf("hour").fromNow();
  console.log("RecipeCard.js", tags);
  return (
    <Box style={{ height: "100%" }}>
      <Container>
        <Link className="fill-parent-link" to={`recipe/${recipe.id}`} />
        <Heading size={4}>{recipe.title}</Heading>
        <Content>{recipe.blog}</Content>
        <Heading subtitle>{author.username}</Heading>
        <time>{`${createdAt}`}</time>
      </Container>
      <Container>
        <Taglist tags={tags} />
      </Container>
    </Box>
  );
}
