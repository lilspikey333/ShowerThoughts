import React from "react";

function Header(props) {
  return (
    <header className="header">
      <h1>This is the Header</h1>
      <button className="new-button" onClick={props}>
        New Thought
      </button>
    </header>
  );
}

export default Header;
