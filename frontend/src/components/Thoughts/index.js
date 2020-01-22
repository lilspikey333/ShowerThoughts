import React from "react";
import ThoughtBox from "../ThoughtBox";


function Thoughts(props) {

  return (
    <div className="thoughts">
      {props.thoughts ? (
        props.thoughts.map(thought => (

          <div onClick={(e) => {props.callDetails(thought, e)}}>
            <ThoughtBox
              thought={thought.thought}
              name={thought.name}
              comments={thought.comments}
            />
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
export default Thoughts;
