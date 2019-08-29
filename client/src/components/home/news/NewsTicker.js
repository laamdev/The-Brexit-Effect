import React, { Component } from 'react'
import Ticker from 'react-ticker'
import Services from '../../../services/news.services'
import NewsCardTicker from '../news/NewsCardTicker'

class NewsTicker extends Component {

    constructor() {
        super()
            this.state = { tickers: [] }
            this.services = new Services()
    }

    componentDidMount = () => this.renderList()

    renderList = () => {
        this.services.getLatestNews()
            .then(response => {
                this.setState({ tickers: response.data.articles })
            })
            .catch(err => console.log(err))

        }

        render() {
            return  this.state.tickers.length !== 0 ? (
        
                <Ticker speed={5} mode="smooth"> 
                {() => (
                            <div className="ticker d-flex text-center">
                                {this.state.tickers.map((tickers, idx) => <NewsCardTicker key={idx} {...tickers} />)}
                            </div>
                )}
                                    </Ticker>


                    ) : (
                        <p>Loading...</p>
                    )
                    }

    
    }

export default NewsTicker
