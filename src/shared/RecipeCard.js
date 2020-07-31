import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Heading, Box, Container, Media, Image } from "react-bulma-components";
import Taglist from "./TagList";

export default function RecipeCard(props) {
  const { recipe, author, tags } = props.recipe;
  const createdAt = moment(recipe.created_at).startOf("hour").fromNow();

  return (
    <Box className="recipe-card">
      <Container>
        <Link className="fill-parent-link" to={`recipe/${recipe.id}`} />
        <Heading size={4}>{recipe.title}</Heading>
        <Media.Item position="center">
          <Image
            size="4by3"
            alt="4by3"
            src={`pics/${Math.floor(Math.random() * 26)}.jpg`}
            className="image-crop-cover"
          />
        </Media.Item>
        <Heading size={6}>by {author?.username}</Heading>
        {tags && <Taglist tags={tags.map((tag) => tag.tag)} />}
        <time className="font-075rem">{`${createdAt}`}</time>
      </Container>
    </Box>
  );
}
