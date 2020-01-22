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
        this.setState(prevState => ({ name: str }));
      };

    postComment = () => {
        const text = this.state.comment
        this.props.comment(text)
    }

    render () {
        return(
            <div className="add-comment">
                <textarea
              value={this.state.comment}
              onChange={e => {
                this.getThought(e.target.value);
              }}
            ></textarea>
            <Button
            className="button"
            onClick={() => {
              this.postComment();
            }}
          >
            Submit
          </Button>
            </div>
        )
    }

}