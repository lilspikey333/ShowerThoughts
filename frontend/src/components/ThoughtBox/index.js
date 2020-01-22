
import React from "react";

function ThoughtBox(props) {
    const shorterComments = props.comments.slice(0,5)
    console.log(shorterComments)
  return (
    <section className="thought-box">
      <h5>{props.thought}</h5>
      <p>Courtesy of {props.name}</p>
      <ul className="comment-list">
          {shorterComments.map(comment => (
              <li className="comments">{comment}</li>
          ))}
      </ul>
    </section>
  );
}

export default ThoughtBox;