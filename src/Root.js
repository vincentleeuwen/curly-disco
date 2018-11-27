import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PropTypes from 'prop-types';
import reducers from 'reducers';

const Root = ({ children, initialState }) => (
  <Provider store={createStore(reducers, initialState)}>
    { children }
  </Provider>
);

Root.propTypes = {
  initialState: PropTypes.object.isRequired,
}

Root.defaultProps = {
  initialState: {}
}

export default Root;