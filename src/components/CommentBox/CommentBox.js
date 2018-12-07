import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
  state = {
    comment: '',
  };

  componentDidMount() {
    this.shouldNavigateAway();
  }

  componentDidUpdate() {
    this.shouldNavigateAway();
  }

  shouldNavigateAway() {
    if (!this.props.auth) {
      this.props.history.push('/');
    }
  }

  handleChange = ({ target: { value }}) => {
    this.setState({
      comment: value,
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({
      comment: '',
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button>Submit comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch comments
        </button>
      </div>
    );
  }
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, actions)(CommentBox);