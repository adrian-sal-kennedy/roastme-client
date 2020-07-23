import React from "react";

export default function TagList(props) {
  const { tags } = props;
  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "min-width" }}>
      {tags.map((tag, idx) => {
        return (
          <a
            className="recipetag"
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
