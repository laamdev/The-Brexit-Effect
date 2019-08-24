import React from 'react'
import MainChart from "./chart/MainChart"
import NewsList from './news/NewsList';

const Dashboard = () => {

    return (
        <div className="container">
            <MainChart />
            <NewsList />
        </div>
    )
}

export default Dashboard




