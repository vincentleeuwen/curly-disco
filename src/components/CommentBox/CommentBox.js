import React, { Component } from 'react';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
  }
  render() {
    return (
      <form>
        <h4>Add a comment</h4>
        <textarea />
        <div>
          <button>Submit comment</button>
        </div>
      </form>
    )
  }
};

export default CommentBox;