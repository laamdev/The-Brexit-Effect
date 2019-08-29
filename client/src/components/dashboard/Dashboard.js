import React, { Component } from 'react';
import MainChart from "./chart/MainChart"
import NewsList from './news/NewsList';
import { Container, Row, Col } from 'react-bootstrap';

class Dashboard extends Component {
    constructor(props) {
      super(props);
    }

    render() {
  
        return (
        <Container >
            <Row className="justify-content-center">
                <MainChart className="main-chart" />
            </Row>  
            <NewsList/>
        </Container>
    )

}
}
export default Dashboard;