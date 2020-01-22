import React, { Component } from "react";

class Comment extends Component {
    constructor (props) {
        super(props)
        this.state = {
            comment: ''
        }
    }

    getComment = str => {
        //e.preventdefault()
        this.setState(prevState => ({ comment: str }));
      };

    postComment = () => {
        const text = this.state.comment
        this.props.comment(this.props.id, text)
        this.setState({comment: ''})
        this.props.stopShow()
    }

    render () {
        return(
            <div className="add-comment">
                <textarea
              value={this.state.comment}
              onChange={e => {
                this.getComment(e.target.value);
              }}
            ></textarea>
            <button
            className="button"
            onClick={() => {
              this.postComment();
            }}
          >
            Submit
          </button>
            </div>
        )
    }

}

export default Comment