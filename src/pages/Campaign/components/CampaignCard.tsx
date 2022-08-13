import { Card, Col, Form, Row } from 'react-bootstrap';
import React from 'react';
import CampaignItem from './CampaignItem';

const CampaignCard = () => {
    return (
        <>
            <Row className='mt-4'>
                <Col xs={5}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control placeholder="Search here" />
                    </Form.Group>
                </Col>
                <Col xs={{ span: 3, offset: 1 }} >
                    <Form.Select placeholder='Date'>
                        <option>Date</option>
                    </Form.Select>
                </Col>
                <Col xs={3}>
                    <Form.Group className="mb-3">
                        <Form.Select placeholder='Sport'>
                            <option>Sport</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mt-1">
                <CampaignItem />
                <CampaignItem />
                <CampaignItem />
                <CampaignItem />
                <CampaignItem />
                <CampaignItem />
            </Row>
        </>
    );
};

export default CampaignCard;