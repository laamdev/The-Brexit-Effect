import React, { Component } from "react";
import { VictoryChart, VictoryAxis, VictoryZoomContainer, VictoryLine, VictoryBrushContainer, VictoryScatter, VictoryTooltip, VictoryArea } from "victory";
import Services from "../../../services/currency.services";



class MainChart extends Component {
  constructor() {
    super();
    this.state = { res: [{ x: 0, y: "" }], updatedToday: new Date().toISOString().slice(0,10) };
    this.services = new Services();
  }


  componentDidMount = () => this.renderHistorical();

  renderHistorical = () => {

    this.services
      .getHistoricalCurrency(this.state.updatedToday)
      .then(response => {

        const chartPairs = response.data.rates;

        // console.log(chartPairs);

        let obj2 = {};
        let newObj = Object.entries(chartPairs).forEach(([key, value]) => {
          let ne = Object.values(value);
          ne.forEach(el => {
            obj2[key] = el;
          });
        });

        // console.log(obj2);
        let sortedMoney = [];
        let yey = [];
        const sortedDates = Object.keys(obj2).sort((a, b) => {
          a = a
            .split("/")
            .reverse()
            .join("");
          b = b
            .split("/")
            .reverse()
            .join("");
          return a.localeCompare(b);
        });

        // console.log(`EJE X: ${sortedDates}`);

        sortedDates.forEach(el => {
          sortedMoney.push(obj2[el]);
        });

        // console.log(`EJE Y: ${sortedMoney}`);

        for (let i = 0; i < sortedMoney.length; i++) {
          yey.push({ x: new Date(sortedDates[i]), y: sortedMoney[i] });
        }

        this.setState({ res: yey});

        console.log(this.state.updatedToday);
      })

      .catch(err => console.log(err));
  };

  handleZoom(domain) {
    this.setState({ selectedDomain: domain });
  }

  handleBrush(domain) {
    this.setState({ zoomDomain: domain });
  }

  render() {
    return (
      <div className="chart">
        <VictoryChart

          width={1000}
          height={400}
          maxDomain={{ y: 1 }}
          minDomain={{ y: 0.7 }}
          scale={{ x: "time" }}
          containerComponent={<VictoryZoomContainer responsive={false} zoomDimension="x" zoomDomain={this.state.zoomDomain} onZoomDomainChange={this.handleZoom.bind(this)} />}
        >

      

          <VictoryArea
            style={{
              data: { fill: "#D93E30" }
            }}
            data={this.state.res}
          />



          {/* <VictoryScatter 
            style={{data: {fill: 'green'}, labels: {fill: 'tomato'}}}
            size={2}
            data={this.state.res} 
            labels={(d) => `Rate: ${d.y} Date: ${d.x}`}
            events={[{
              target: "data",
              eventHandlers: {
                onClick: () => {
                  return [
                    {
                      target: "data",
                      mutation: (props) => {
                        const fill = props.style && props.style.fill;
                        return fill === "black" ? null : { style: { fill: "black" } };
                      }
                    }, {
                      target: "labels",
                      mutation: (props) => {
                        return props.text === "clicked" ?
                          null : { text: "clicked" }; 
                              }
                    }
                  ];
                }
              }
            }]}
            labelComponent={<VictoryTooltip/>}
            data={this.state.res}
  
          />
 */}
        </VictoryChart>

        <VictoryChart
          padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
          width={1000}
          height={100}
          maxDomain={{ y: 1 }}
          scale={{ x: "time" }}
          containerComponent={<VictoryBrushContainer responsive={false} brushDimension="x" brushDomain={this.state.selectedDomain} onBrushDomainChange={this.handleBrush.bind(this)} />}
        >
          <VictoryAxis tickValues={[new Date(2016, 1, 1), new Date(2017, 1, 1), new Date(2018, 1, 1), new Date(2019, 1, 1)]} tickFormat={x => new Date(x).getFullYear()} />
          <VictoryLine
            style={{
              data: { stroke: "#D93E30"}
            }}
            data={this.state.res}
          />



        </VictoryChart>
      </div>
    );
  }
}

export default MainChart;
