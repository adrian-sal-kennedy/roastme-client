import React from "react";

export default function MethodList(props) {
  const { method } = props;
  return (
    <div className="md">
      <ul>
        {Object.entries(method).map((step, idx) => {
          return <li key={idx}>{`${step[0]}: ${step[1]}`}</li>;
        })}
      </ul>
    </div>
  );
}
