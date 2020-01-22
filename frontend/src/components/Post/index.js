import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      thought: "",
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
    this.props.dismiss();
  };


  render() {
    return (
      <>
        <Modal {...this.props} size="xl">
          <Modal.Body>
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
                placeholder="New thought"
                value={this.state.thought}
                onChange={e => {
                  this.getThought(e.target.value);
                }}
              ></textarea>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              className="button"
              onClick={() => {
                this.postThought();
              }}
            >
              Submit
            </Button>
            <Button
              variant="secondary"
              className="button"
              onClick={this.props.dismiss}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Post;
