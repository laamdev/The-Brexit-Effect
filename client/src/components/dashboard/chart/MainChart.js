import React, { Component } from 'react';
import { VictoryChart, VictoryAxis, VictoryZoomContainer, VictoryLine, VictoryBrushContainer } from 'victory';
import Services from '../../../services/currency.services'
import _ from 'lodash'



class MainChart extends Component {

    constructor() {
        super();
        this.state = [{ x:"" , y:0 }];
        this.services = new Services()

    }

    componentDidMount = () => this.renderHistorical()

    renderHistorical = () => {

        this.services.getHistoricalCurrency()
            .then(response => {

                const chartPairs = response.data.rates

                console.log(chartPairs)

                let obj2 = {}
                let newObj = Object.entries(chartPairs).forEach(
    ([key, value]) => {
        let ne = Object.values(value)
        ne.forEach(el => {
            obj2[key] = el
        })
    }
);

console.log(obj2)
let sortedMoney = []
const sortedDates = Object.keys(obj2).sort((a, b) => {
    a = a.split('/').reverse().join('');
    b = b.split('/').reverse().join('');
    return a.localeCompare(b);
})
console.log(`EJE X: ${sortedDates}`)
sortedDates.forEach(el => {
    sortedMoney.push(obj2[el])
})
                console.log(`EJE Y: ${sortedMoney}`)



}
)    
             
            .catch(err => console.log(err))
    }


    handleZoom(domain) {
        this.setState({ selectedDomain: domain });
    }

    handleBrush(domain) {
        this.setState({ zoomDomain: domain });
    }



    render() {
        return (

            <div>

                <VictoryChart width={600} height={350} scale={{ x: "time" }}
                    containerComponent={
                        <VictoryZoomContainer responsive={false}
                            zoomDimension="x"
                            zoomDomain={this.state.zoomDomain}
                            onZoomDomainChange={this.handleZoom.bind(this)} //the onZoomDomainChange prop on VictoryZoomContainer alters the brushDomain prop on VictoryBrushContainer tying highlighted brush region of the mini-map to the zoom level of the chart 
                        />
                    }
                >
                    <VictoryLine
                        style={{
                            data: { stroke: "tomato" }
                        }}
                        data={[
                
                            { x: 89, y: 257 },
            
                            
                        ]}
                    />

                </VictoryChart>

                <VictoryChart
                    padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
                    width={600} height={90} scale={{ x: "time" }}
                    containerComponent={
                        <VictoryBrushContainer responsive={false}
                            brushDimension="x"
                            brushDomain={this.state.selectedDomain}
                            onBrushDomainChange={this.handleBrush.bind(this)}
                        />
                    }
                >
                    <VictoryAxis
                        tickValues={[
                            new Date(1985, 1, 1),
                            new Date(1990, 1, 1),
                            new Date(1995, 1, 1),
                            new Date(2000, 1, 1),
                            new Date(2005, 1, 1),
                            new Date(2010, 1, 1)
                        ]}
                        tickFormat={(x) => new Date(x).getFullYear()}
                    />
                    <VictoryLine
                        style={{
                            data: { stroke: "blue" }
                        }}
                        data={[
                            { x: new Date(1982, 1, 1), y: 125 },
                            { x: new Date(1987, 1, 1), y: 257 },
                            { x: new Date(1993, 1, 1), y: 345 },
                            { x: new Date(1997, 1, 1), y: 515 },
                            { x: new Date(2001, 1, 1), y: 132 },
                            { x: new Date(2005, 1, 1), y: 305 },
                            { x: new Date(2011, 1, 1), y: 270 },
                            { x: new Date(2015, 1, 1), y: 470 }
                        ]}
                    />
                </VictoryChart>
            </div>
        );
    }
}

export default MainChart











// let obj = {
//     "2016-08-29": {
//         "GBP": 0.85476
//     },
//     "2016-08-23": {
//         "GBP": 0.85995
//     },
//     "2016-08-24": {
//         "GBP": 0.8513
//     },
//     "2016-08-25": {
//         "GBP": 0.8557
//     },
//     "2016-08-26": {
//         "GBP": 0.8545
//     }
// }
// let obj2 = {}
// let newObj = Object.entries(obj).forEach(
//     ([key, value]) => {
//         let ne = Object.values(value)
//         ne.forEach(el => {
//             obj2[key] = el
//         })
//     }
// );
// console.log(obj2)
// let final = []
// const sortedDates = Object.keys(obj2).sort((a, b) => {
//     a = a.split('/').reverse().join('');
//     b = b.split('/').reverse().join('');
//     return a.localeCompare(b);
// })
// console.log(sortedDates)
// sortedDates.forEach(el => {
//     final.push(obj2[el])
// })
// console.log(final)








// const arrayDates = Object.keys(chartDates)

// console.log(_.toPairs(chartDates))

// // console.log(arrayDates)

// const sortedDates = arrayDates.sort((a, b) => {
//     a = a.split('/').reverse().join('');
//     b = b.split('/').reverse().join('');
//     return a.localeCompare(b);
// })

// console.log(sortedDates)

// console.log(response.data.rates)



// const arrayValues = Object.values(chartDates)

// const finalValues = arrayValues.map(elm => Object.values(elm))

// console.log(finalValues)



// const sortedValues = arrayDates.sort((a, b) => {
//     a = a.split('/').reverse().join('');
//     b = b.split('/').reverse().join('');
//     return a.localeCompare(b);
// })


// this.setState({ xDates: sortedDates, yValue: sortedValues })


// console.log(sortedDates)
//                 // this.state.xDates.map((idx) => { x: this.state.xDates[idx], y: 257 })

