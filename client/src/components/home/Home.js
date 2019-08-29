import React from 'react'
import NewsTicker from "../home/news/NewsTicker"
import DataBubble from "../home/currency/DataBubble"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"



const Home = () => {

    return (
        <>
        <Container className="lol" >

        <div className="home-container">
            <div className="data-bubble" >
            <DataBubble />
            </div>
        </div>

        </Container>
        <footer>
        <NewsTicker className="ticker"  /> 
        </footer>
</>

    )
}

export default Home





