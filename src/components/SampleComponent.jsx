import React, { Component } from "react";
import "scss/SampleComponent.scss";

class SampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="sample-component-div">
        <h1>This is a sample component</h1>
      </div>
    );
  }
}

export default SampleComponent;
