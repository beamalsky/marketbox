import React from "react";
import "./slider.css";

class Slider extends React.Component {
  handleChange = (event) => {
    this.props.vizState.setStateFromVariableKey(
      this.props.variable,
      event.target.value
    )
  }

  getStep = (s, max) => {
    if (s.match(/\./)) {
      return s.replace(/.+?\.(\d+)\d$/, "0.$11");
    } else {
      if (max < 1000) {
        return 1;
      } else {
        var order = Math.floor(Math.log(max) / Math.LN10 + 0.000000001);
        return Math.pow(10, order - 2);
      }
    }
  }

  render() {
    return (
      <span className="slider">
        <input
          type="range"
          onChange={(e) => this.handleChange(e)}
          value={this.props.valueFromState}
          step={this.getStep(this.props.value.formatString, this.props.value.max)}
          max={this.props.value.max}
          min={this.props.value.min}
        />
      </span>
    )
  }
}

export default Slider
