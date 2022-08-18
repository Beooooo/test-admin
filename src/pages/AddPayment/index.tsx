import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import logoPayment from '../../assets/images/payment.png';
import { useStepContext } from '../../components/StepContext';

const AddPayment = () => {
    const { onChangeStep } = useStepContext()

    return (
        <Row className='add-payment mt-4'>
            <Col xs={3}>
                <img src={logoPayment} className="logo-payment" />
            </Col>
            <Col xs={9}>
                <div className='title-payment'>Bird world mystery box</div>
                <div className='content-payment pt-2 pb-3'>Facilisis vitae consequat faucibus mattis in mauris. A ipsum condimentum eu mollis in egestas dolor. Nibh lobortis egestas cras morbi rhoncus cursus lorem volutpat ut. Sem amet.</div>
                <div className='d-flex-between info mt-2'>
                    <div className='expiry-date'><span className='opacity'>Expiry date</span> • 2020-03-02</div>
                    <div className='expiry-date'><span className='opacity'>Catagory</span> • Arts and Entertainment</div>
                    <div className='expiry-date'><span className='opacity'>Supply of nfts per promo</span> • 12</div>
                </div>
            </Col>

            <Col xs={12} className="pt-2">
                <div className='border-payment' />
            </Col>

            <Col xs={12} className="total-payment mt-5">
                <div className='border-total pb-3'>
                    <div className='text'>Total Amount you have to pay for compaign</div>
                    <div className='price'>$350</div>
                </div>
            </Col>

            <div className='btn-right mt-5'>
                <Button className='mt-5' onClick={() => onChangeStep(3)}>
                    Pay for compaign
                </Button>
            </div>
        </Row>
    );
};

export default AddPayment;