import React from "react";

export default function MethodList(props) {
  const { method } = props;
  return (
    <div className="md">
      <ol className="keylist">
        {Object.entries(method).map((step, idx) => {
          return (
            <li key={idx}>
              <b>{`${step[0]}:`}</b>
              {` ${step[1]}`}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
