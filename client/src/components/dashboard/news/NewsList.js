import React, { Component } from 'react'
import Services from '../../../services/news.services'

import NewsCard from './NewsCard'

class NewsList extends Component {

    constructor() {
        super()
        this.state = { news: [] }
        this.services = new Services()
    }

    componentDidMount = () => this.renderList()

    renderList = () => {
        this.services.getLatestNews()
            .then(response => {
                this.setState({ news: response.data.articles })
                console.log(this.state.news)})
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>

                <h1>Latest News</h1>

                {this.state.news.map((article, idx) => <NewsCard className="d-inline-flex" key={idx} {...article} />)}
                    

            </>
        )
    }
}


export default NewsList