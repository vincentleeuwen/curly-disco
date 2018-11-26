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
  render() {
    return (
      <form>
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