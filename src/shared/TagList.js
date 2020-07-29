import React from "react";

export default function TagList(props) {
  const { tags, className } = props;
  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "min-width" }}>
      {tags.map((tag, idx) => {
        return (
          <a className={`recipetag ${className}`} key={idx} href={`#${tag}`}>
            {/* {tag.tag} */}
            {tag}
          </a>
        );
      })}
    </div>
  );
}
