import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import PropTypes from 'prop-types';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

const Root = ({ children, initialState }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromise)
  );
  return <Provider store={store}>{children}</Provider>
};

Root.propTypes = {
  initialState: PropTypes.object.isRequired,
}

Root.defaultProps = {
  initialState: {}
}

export default Root;