import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

export default () => (
  <Fragment>
    <Route path="/post" component={CommentBox} />
    <Route path="/" component={CommentList} exact />
  </Fragment>
);