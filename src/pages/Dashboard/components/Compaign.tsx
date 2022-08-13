import { Col, Row } from 'react-bootstrap';
import React from 'react';
import { useNavigate } from 'react-router-dom'
import logoDemo from '../../../assets/images/image_demo.png';

interface Props {
    title: string
}

const CompaignDashboard: React.FC<Props> = (props) => {
    const navigate = useNavigate()

    return (
        <Row className='list-content'>
            <div className='bg-content'>
                <div className='header-compaign'>
                    <div className='title'>{props.title}</div>
                    <div className='view-all cursor-pointer' onClick={() => navigate('/campaign')}>View all</div>
                </div>
                <div className='border-top-list'>
                    <Row>
                        <Col xs={3} >
                            <img src="https://dealmintr.com/img/items/thumbnail-2.jpg" className='image-compaign' />
                        </Col>
                        <Col xs={9}>
                            <div className='box-content-dashboard'>
                                <div className='expiry-date'><span className='opacity'>Expiry date</span> • 2020-03-02</div>
                                <div className='ntf-compaign'>NFT compaign</div>
                                <div className='compaign-content'>Suscipit turpis habitasse sed.Suscipit turpis habitasse sed.</div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className='border-top-list'>
                    <Row>
                        <Col xs={3} >
                            <img src="https://dealmintr.com/img/items/thumbnail-2.jpg" className='image-compaign' />
                        </Col>
                        <Col xs={9}>
                            <div className='box-content-dashboard'>
                                <div className='expiry-date'><span className='opacity'>Expiry date</span> • 2020-03-02</div>
                                <div className='ntf-compaign'>NFT compaign</div>
                                <div className='compaign-content'>Suscipit turpis habitasse sed.Suscipit turpis habitasse sed.</div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className='border-top-list'>
                    <Row>
                        <Col xs={3} >
                            <img src="https://dealmintr.com/img/items/thumbnail-2.jpg" className='image-compaign' />
                        </Col>
                        <Col xs={9}>
                            <div className='box-content-dashboard'>
                                <div className='expiry-date'><span className='opacity'>Expiry date</span> • 2020-03-02</div>
                                <div className='ntf-compaign'>NFT compaign</div>
                                <div className='compaign-content'>Suscipit turpis habitasse sed.Suscipit turpis habitasse sed.</div>
                            </div>
                        </Col>
                    </Row>
                </div>

            </div >
        </Row >
    );
};

export default CompaignDashboard;