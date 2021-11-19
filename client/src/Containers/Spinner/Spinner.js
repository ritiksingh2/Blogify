import React, { Component } from "react";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">excuse us ...</span>
        </div>
        <h4>Be patient loading..</h4>
      </div>
    );
  }
}

export default Spinner;
