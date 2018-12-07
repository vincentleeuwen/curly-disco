import React, { Fragment, Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from 'actions';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

class App extends Component {
  renderButton() {
    const { auth, changeAuth } = this.props;
    return (
      <button onClick={() => changeAuth(!auth)}>
        {auth ? 'Sign out' : 'Sign in'}
      </button>
    )
  }
  renderHeader() {
    return (
      <ul>
        <li style={{ display: 'inline', marginRight: '10px' }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '10px' }}>
          <Link to="/post">Post a comment</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '10px' }}>
          {this.renderButton()}
        </li>
      </ul>
    )
  }
  render() {
    return (
      <Fragment>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" component={CommentList} exact />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

CommentList.propTypes = {
  auth: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps, actions)(App);