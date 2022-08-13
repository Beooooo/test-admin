import { Col } from 'react-bootstrap';
import React from 'react';
import boxDemo from '../../../assets/images/box_demo.png';

const CampaignItem: React.FC<{}> = (props) => {
    return (
        <Col xs={4} className="mb-4">
            <div className='box-content-item'>
                {/* boxDemo */}
                <img src={"https://dealmintr.com/mock_data/uploads/music_7_b0956a1a6e.jpg"} width={"100%"} className="image-box-compaign" />
                <div className='padding-box'>
                    <div className='d-flex-between'>
                        <div className='expiry-date'><span className='opacity'>Expiry date</span> • 2020-03-02</div>
                        <div className='expiry-date'><span className='opacity'>Catagory</span> • Sport</div>
                    </div>
                    <div className='ntf-compaign'>NFT compaign</div>
                    <div className='compaign-content f-14'>Lorem ipsum dolor sit amet, consectetur Lorem adipiscing elit. Fermentum, odio nunc turpis duis arcu, nunc. Lorem id cursus scelerisque ornare. Laoreet ultricies amet lacinia platea ut.</div>
                </div>

            </div>
        </Col>
    );
};

export default CampaignItem;