import React, { Fragment, Component } from 'react';
import { Route, Link } from 'react-router-dom';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

export default class App extends Component {
  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    )

  }
  render() {
    return (
      <Fragment>
        <Route path="/post" component={CommentBox} />
        <Route path="/" component={CommentList} exact />
      </Fragment>
    );
  }
}
