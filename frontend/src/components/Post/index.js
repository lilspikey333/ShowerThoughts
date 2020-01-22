import React, { Component } from "react";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      thought: ""
    };
  }

  getName = str => {
    //e.preventdefault()
    this.setState(prevState => ({ name: str }));
  };

  getThought = str => {
    //e.preventdefault()
    this.setState(prevState => ({ thought: str }));
  };

  postThought = () => {
    this.setState({
      name: "",
      thought: ""
    });
    this.props.post({ ...this.state });
  };

  render() {
    return (
        <>
    {/*    <Modal.Dialog>
         <Modal.Header closeButton></Modal.Header>
         <Modal.Body> */}
          <input
            placeholder="Your Name Here"
            ref={input => (this.input = input)}
            type="text"
            id="name-input"
            value={this.state.name}
            onChange={e => {
              this.getName(e.target.value);
            }}
          ></input>
          <div className="flex-container-column new-post">
            <textarea
              value={this.state.thought}
              onChange={e => {
                this.getThought(e.target.value);
              }}
            ></textarea>
          </div>
        {/* </Modal.Body>
        <Modal.Footer> */}
          <button
            variant="primary"
            className="button"
            onClick={() => {
              this.postThought();
            }}
          >
            Submit
          </button>
        {/* </Modal.Footer>
      </Modal.Dialog> */}
      </>
    );
  }
}

export default Post;
