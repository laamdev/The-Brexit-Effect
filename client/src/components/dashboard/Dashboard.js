import React from 'react'
import MainChart from "./chart/MainChart"
import NewsList from './news/NewsList';
import { Container, Row, Col } from 'react-bootstrap'

const Dashboard = () => {

    return (
        <>
        <Container >


            <Row className="justify-content-center">
                <MainChart className="main-chart" />
            </Row>  

            <div className="dashboard-bottom">


            <Row className="justify-content-center">
            <input type="date" id="start" name="trip-start"value="2018-07-22" min="2016-06-23" max="2018-12-31"></input>

            </Row>

            <Row className="justify-content-center">
            <NewsList />
            </Row>
            </div>


        </Container>
        </>
    )
}

export default Dashboard




