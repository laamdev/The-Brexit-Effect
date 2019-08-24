import React from 'react'
import NewsTicker from "../home/news/NewsTicker"
import DataBubble from "../home/currency/DataBubble"
import '../../styles/data-bubble.css'


const Home = () => {

    return (
        <>
            <div className="dataBubble" >
            <DataBubble />
            </div>
            <div>
            <NewsTicker />
            </div>

        </>
    )
}

export default Home




