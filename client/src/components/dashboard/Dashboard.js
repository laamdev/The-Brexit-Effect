import React from 'react'
import MainChart from "./chart/MainChart"
import NewsList from './news/NewsList';
import { Container, Row, Col } from 'react-bootstrap'

import "../../styles/dashboard.css"

const Dashboard = () => {

    return (
        <>
        <Container >
            <Row className="justify-content-center">
                <MainChart className="main-chart" />
                <NewsList />
            </Row>  
        </Container>
        </>
    )
}

export default Dashboard




