import React, { Component } from "react";
import Comment from "./Comment";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class ThoughtDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.thought._id,
            thought: this.props.thought.thought,
            name: this.props.thought.name,
            comments: this.props.thought.comments,
            edit: false,
            newComment: false,
            show: this.props.show
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
            _id: this.state.id,
            thought: this.state.thought,
            name: this.state.name,
            comments: this.state.comments
        });
        this.setState({
            edit: false,
            show: false
        });
    };

    componentDidUpdate = newProps => {
        if (newProps.thought !== this.props.thought) {
            this.setState({
                id: this.props.thought._id,
                thought: this.props.thought.thought,
                name: this.props.thought.name,
                comments: this.props.thought.comments,
                show: this.props.show
            });
        }
    };

    showComments = () => (
        <ul>
            {this.state.comments.map(comment => (
                <li>{comment}</li>
            ))}
        </ul>
    );

    stopShow = () => {
        this.setState({
            show: false,
            newComment: false
        });
    };

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
        console.log(this.props);
        return (
            <div>
                <Modal show={this.state.show} size="xl">
                    {this.setRender()}
                    <div className="buttons">
                        <Modal.Footer>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    this.setState({
                                        newComment: true
                                    });
                                }}
                            >
                                Comment
              </Button>
                            <Button
                                variant="info"
                                onClick={() => {
                                    this.setState({ edit: true });
                                }}
                            >
                                Edit
              </Button>
                            <Button
                                variant="danger"
                                onClick={() => {
                                    this.props.delete(this.props.thought._id);
                                    this.setState({ show: false });
                                }}
                            >
                                Delete
              </Button>
                            <Button
                                variant="secondary"
                                onClick={() => {
                                    this.stopShow();
                                }}
                            >
                                Cancel
              </Button>
                        </Modal.Footer>
                    </div>
                    {this.state.newComment ? (
                        <Comment
                            className="comment"
                            comment={this.props.comment}
                            id={this.props.thought._id}
                            stopShow={this.stopShow}
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
