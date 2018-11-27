import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CommentList extends Component {
  render() {
    const { comments } = this.props.store;
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
    store: state
  }
}

CommentList.propTypes = {
  store: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, null)(CommentList);