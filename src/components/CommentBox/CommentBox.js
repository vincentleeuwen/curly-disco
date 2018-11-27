import React, { Component } from 'react';

class CommentBox extends Component {
  state = {
    comment: '',
  };
  handleChange = ({ target: { value }}) => {
    this.setState({
      comment: value,
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();

    // TODO
    // call action create to add comment to store and save the comment

    this.setState({
      comment: '',
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>Submit comment</button>
        </div>
      </form>
    )
  }
};

export default CommentBox;