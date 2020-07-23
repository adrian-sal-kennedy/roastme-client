import React from "react";

export default function TagList(props) {
  const { tags } = props;
  return (
    <div style={{ display: "flex", flexWrap: "true", width: "min-width" }}>
      {tags.map((tag, idx) => {
        return (
          <a style={{display:"block"}} key={idx} style={{ marginRight: "5px" }} href={`#${tag}`}>
            {tag.tag}
          </a>
        );
      })}
    </div>
  );
}
