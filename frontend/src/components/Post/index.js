import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "You Name Here",
      thought: ""
    };
  }

  getName = str => {
    this.setState(prevState => ({ name: str }));
  };

  getThought = str => {
    this.setState(prevState => ({ thought: str }));
  };

  // postThought = () => {
  //     this.props.post({ ...this.state })
  // }

  render() {
    <div className="flex-container-column new-post">
      <input
        ref={input => (this.input = input)}
        type="text"
        id="name-input"
        value={this.state.name}
        onchange={e => {
          this.getName(e.target.value);
        }}
      ></input>
      <input
        type="text-area"
        value={this.state.value}
        onChange={e => {
          this.getThought;
        }}
      ></input>
      <button
        className="button"
        onClick={() => {
          this.props.post({ ...this.state });
        }}
      >
        Submit
      </button>
    </div>;
  }
}

export default Post;
