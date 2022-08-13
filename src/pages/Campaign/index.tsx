import { Col, Nav, Row, Tab } from 'react-bootstrap';
import React, { useState } from 'react';
import CampaignCard from './components/CampaignCard';

const CampaignPage: React.FC<{}> = (props) => {
    const [key, setKey] = useState<string>('active');

    return (
        <div>
            <div className='title-page'>Campaign</div>
            <Row className='tab-campaign'>
                <Col xs={12} >
                    <div className='bg-tab-campaign'>
                        <Tab.Container defaultActiveKey={key} onSelect={(k) => setKey(k!)}>
                            <div className='border-botton-tab'>
                                <div className='header-tab'>
                                    <Nav.Link className={`title-tab ${key === "active" ? 'active-tab' : ""}`} eventKey="active">Active Campaign</Nav.Link>
                                    <Nav.Link className={`title-tab ${key === "inctive" ? 'active-tab' : ""}`} eventKey="inctive">Inctive Campaign</Nav.Link>
                                </div>
                            </div>

                            <Tab.Content>
                                <Tab.Pane eventKey="active">
                                    <CampaignCard />
                                </Tab.Pane>
                                <Tab.Pane eventKey="inctive">
                                    <CampaignCard />
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>

                </Col>
            </Row>
        </div>
    );
};

export default CampaignPage;