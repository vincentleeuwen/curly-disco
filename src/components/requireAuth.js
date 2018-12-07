import React, { Component } from 'react';
import { connect } from 'react-redux';

// starting code for creating higher order components
export default (ChildComponent) => {
  class ComposedComponent extends Component {
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

    render() {
      return <ChildComponent {...this.props} />
    }
  }

  const mapStateToProps = state => ({ auth: state.auth });

  return connect(mapStateToProps, null)(ComposedComponent);
};
