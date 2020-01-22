import React, { Component } from "react";
import Comment from "./Comment"

class ThoughtDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            thought: props.thought,
            name: props.name,
            comments: [...props.comments],
            edit: false,
            newComment: false
        }

        getThought = (str) => {
            this.setState({ thought: str })
        }

        getName = (str) => {
            this.setState({ name: name})
        }

        postUpdate = () => {
            
        }

        setRender = () => {
            if (this.edit) {
                return (
                    <div className="edit-post">
                        <textarea
                            value={this.state.thought}
                            onChange={e => {
                                this.getThought(e.target.value);
                            }}>
                        </textarea>
                        <p>Courtesy of <input type="text"
                            value={this.state.name}
                            onChange={e => {
                                this.getName(e.target.value);
                            }}>
                        </input>
                        </p>
                        <button onClick={() => {this.postUpdate()}}>Update</button>
                    </div>
                )
                
            } else {
                return (
                    <div className="details">
                    <h4>{this.thought}</h4>
                    <p>Courtesy of {this.name}</p>
                    <ul>
                        {this.comments.map(comment => (
                            <li>{comment}</li>
                        ))}
                    </ul>
                    </div>
                )
            }
        }
    }

    render() {
        return (
            <div>
                {this.setRender()}
                <div className="buttons">
                    <button onClick={() => {this.setState({newComment: true})}}>Comment</button>
                    <button onClick={() => {this.setState({edit: true})}}>Edit</button>
                    <button>Delete</button>
                </div>
                {this.state.newComment ? <Comment className="comment" postComment={this.props.postComment}></Comment> : ''}
            </div>
        )
    }

}