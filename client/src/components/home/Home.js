import React from 'react'
import NewsTicker from "../home/news/NewsTicker"
import DataBubble from "../home/currency/DataBubble"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import '../../styles/home.css'



const Home = () => {

    return (
        <div className="home-container">
            <div className="data-bubble" >
            <DataBubble />
            </div>
        <NewsTicker />
        </div>
    )
}

export default Home




