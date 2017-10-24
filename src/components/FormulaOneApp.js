import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class FormulaOneApp extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    return (
      <div className="container">
        <h3 className="center-align">Formula One Database</h3>
        <div className="row">
          {this.props.children}
        </div>
      </div>
    );
  }
}
