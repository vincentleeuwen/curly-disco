import React, { Component } from 'react';

// starting code for creating higher order components
export default (ChildComponent) => {
  class ComposedComponent extends Component {
    render() {
      return <ChildComponent />
    }
  }

  return ComposedComponent;
};
