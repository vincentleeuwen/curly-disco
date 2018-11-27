import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CommentList extends Component {
  render() {
    const { comments } = this.props;
    return (
      <div>
        <br/>
        <h4>Comment list</h4>
        <ul>
          { comments.map((comment, i) => <li key={i}>{comment}</li>)}
        </ul>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, null)(CommentList);