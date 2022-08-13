import { Col, Row } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import CompaignDashboard from './components/Compaign';

const dataTotal = [
    {
        title: "Total NFTs",
        value: "25,000"
    },
    {
        title: "Total NFTs sold",
        value: "25,000"
    },
    {
        title: "Total compaign",
        value: "25,000"
    },
    {
        title: "Total revenue",
        value: "$125k"
    }
]

const DashboardPage: React.FC<{}> = (props) => {
    const navigate = useNavigate()

    return (
        <div>
            <div className='title-page'>Dashboard</div>
            <Row>
                {dataTotal.map((d, i) => {
                    return <Col xs={3} key={`data_${i}`}>
                        <div className='box-data'>
                            <div className='title-total'>{d.title}</div>
                            <div className='value-total'>{d.value}</div>
                        </div>
                    </Col>
                })}
            </Row>

            {/* Recent Compaign */}
            <Row>
                <Col xs={12} className="recent-compaign">Recent Compaign</Col>

                <Col xs={6}>
                    <CompaignDashboard title='Active Compaign' />
                </Col>

                <Col xs={6}>
                    <CompaignDashboard title='Inactive compaign' />
                </Col>
            </Row>
        </div>
    );
};

export default DashboardPage;