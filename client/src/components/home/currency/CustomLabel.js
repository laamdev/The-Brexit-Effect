import React, { Component } from "react";

import { VictoryLabel, VictoryPie, VictoryTooltip, PropTypes} from "victory";


class CustomLabel extends Component {
    render() {
      return (
        <g>
          <VictoryLabel {...this.props}/>
          <VictoryTooltip
            {...this.props}
            x={200} y={250}
            text={2}
            orientation="top"
            pointerLength={0}
            cornerRadius={50}
            width={100}
            height={100}
            flyoutStyle={{ fill: "black" }}
          />
        </g>
      );
    }
  }
  
  CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;
  CustomLabel.propTypes = { text: PropTypes.string };

  export default CustomLabel