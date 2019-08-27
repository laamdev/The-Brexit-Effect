import React from 'react'
import NewsTicker from "../home/news/NewsTicker"
import DataBubble from "../home/currency/DataBubble"
import '../../styles/data-bubble.css'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"


const Home = () => {

    return (
        <>
        <Container>
            <Row>

            <div className="dataBubble" >
            <DataBubble />
            </div>
            </Row>

        </Container>
            <NewsTicker />
        </>
    )
}

export default Home




