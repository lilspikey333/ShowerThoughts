
import React from "react";

function ThoughtBox(props) {
  return (
    <section className="thought-box">
      <h4>{props.thought}</h4>
      <p>Courtesy of {props.name}</p>
      <ul>
          {props.comments.map(comment => (
              <li>{comment}</li>
          ))}
      </ul>
    </section>
  );
}

export default ThoughtBox;