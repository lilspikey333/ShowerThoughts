import React from "react";

function Header(props) {
  return (
    <header className="header">
      <h1 classname='title'>Shower Thoughts</h1>
      <button className="new-button" onClick={props.newButton}>
        New Thought
      </button>
    </header>
  );
}

export default Header;
