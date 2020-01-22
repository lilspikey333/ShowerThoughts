import React, { Component } from "react";
import Comment from "./Comment";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class ThoughtDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thought: this.props.thought.thought,
      name: this.props.thought.name,
      comments: this.props.thought.comments,
      edit: false,
      newComment: false
    };
  }

  getThought = str => {
    this.setState({ thought: str });
  };

  getName = str => {
    this.setState({ name: str });
  };


  postUpdate = () => {
    this.props.update({
      _id: this.props._id,
      thought: this.state.thought,
      name: this.state.name,
      comments: this.state.comments
    });
    this.setState({ edit: false });
  };
  // postComment = () => {
  //     this.props.update({...this.state.newComment})

  // }


  componentDidMount = () => {
      console.log(this.props.thought)
    this.setState({
      thought: this.props.thought.thought,
      name: this.props.thought.name,
      comments: this.props.thought.comments
    });
  };

  showComments = () => (
    <ul>
      {this.state.comments.map(comment => (
        <li>{comment}</li>
      ))}
    </ul>
  );

  setRender = () => {
    if (this.state.edit) {
      return (
        <div className="edit-post">
          <Modal.Body>
            <textarea
              value={this.state.thought}
              onChange={e => {
                this.getThought(e.target.value);
              }}
            ></textarea>
            <p>
              Courtesy of{" "}
              <input
                type="text"
                value={this.state.name}
                onChange={e => {
                  this.getName(e.target.value);
                }}
              ></input>
            </p>
          </Modal.Body>
          <Button
            onClick={() => {
              this.postUpdate();
            }}
          >
            Update
          </Button>
        </div>
      );
    } else {
      return (
        <div className="details">
          <Modal.Body>
            <h4>{this.state.thought}</h4>
            <p>Courtesy of {this.state.name}</p>
            {this.state.comments ? this.showComments() : ""}
          </Modal.Body>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <Modal {...this.props} size="xl">
          <Modal.Header closeButton></Modal.Header>

          {this.setRender()}
          <div className="buttons">
            <button
              onClick={() => {
                this.setState({ newComment: true });
              }}
            >
              Comment
            </button>
            <button
              onClick={() => {
                this.setState({ edit: true });
              }}
            >
              Edit
            </button>
            <button onClick={() => this.props.delete(this.props.thought._id)}>
              Delete
            </button>
          </div>
          {this.state.newComment ? (
            <Comment
              className="comment"
              comment={this.props.comment}
              id={this.props.thought._id}
            ></Comment>
          ) : (
            ""
          )}
        </Modal>
      </div>
    );
  }
}

export default ThoughtDetails;
