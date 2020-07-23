import React from "react";

export default function TagList(props) {
  const { tags } = props;
  return (
    <div style={{ display: "flex", flexWrap: "true", width: "min-width" }}>
      {tags.map((tag, idx) => {
        return (
          <a
            style={{ display: "block", marginRight: "5px" }}
            key={idx}
            href={`#${tag}`}
          >
            {tag.tag}
          </a>
        );
      })}
    </div>
  );
}
