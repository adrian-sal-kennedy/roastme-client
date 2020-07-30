import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Heading, Box, Container, Media, Image } from "react-bulma-components";
import Taglist from "./TagList";

export default function RecipeCard(props) {
  const { recipe, author, tags } = props.recipe;
  const createdAt = moment(recipe.created_at).startOf("hour").fromNow();

  return (
    <Box style={{ width: "100%", height: "100%" }}>
      <Container style={{ display: "flex", flexDirection: "column" }}>
        <Link className="fill-parent-link" to={`recipe/${recipe.id}`} />
        <Heading size={4}>{recipe.title}</Heading>
        <Media.Item position="left">
          <Image
            size="16by9"
            alt="64x64"
            src={`pics/${Math.floor(Math.random() * 26)}.jpg`}
            className="image-crop-cover"
          />
        </Media.Item>
        <Heading subtitle>{author?.username}</Heading>
        {tags && <Taglist tags={tags.map((tag) => tag.tag)} />}
        <time className="font-075rem">{`${createdAt}`}</time>
      </Container>
    </Box>
  );
}
