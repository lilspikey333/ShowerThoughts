import React from "react";

function ThoughtBox() {
  const thought = props.thought
  return (
    <div className="thought-box">
      <h4>This is a Thought Box</h4>
      <p>{thought.name}</p>
      <p>{thought.thought}</p>
      <div className="flex-container-row thought-box">
        
      </div>
    </div>
  );
}

export default ThoughtBox;
