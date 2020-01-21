import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      thought: ""
    };
  }

  getName = (str) => {
    //e.preventdefault()
    this.setState(prevState => ({ name: str }));
  };

  getThought = (str) => {
    //e.preventdefault()
    this.setState(prevState => ({ thought: str }));
  };

  postThought = () => {
      this.setState({
          name: '',
          thought: ''
      })
      this.props.post({ ...this.state })
  }

  render() {
      return (
        <div className="flex-container-column new-post">
        <input 
            placeholder="Your Name Here"
            ref={input => (this.input = input)}
            type="text"
            id="name-input"
            value={this.state.name}
            onChange={(e) => {
            this.getName(e.target.value);
            }}
        ></input>
        <textarea
            value={this.state.value}
            onChange={(e) => {
            this.getThought(e.target.value);
            }}
        ></textarea>
        <button
            className="button"
            onClick={() => {
            this.postThought()
            }}
        >
            Submit
        </button>
        </div>
      )
  }
}

export default Post;
