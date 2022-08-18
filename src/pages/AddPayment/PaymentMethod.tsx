import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import imageMethod from '../../assets/images/method.png'
import ModalComponent from '../../components/ModalComponent';

const iconDelete = (<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.3335 8.16667V13.1667M9.66683 8.16667V13.1667M1.3335 4.83333H14.6668M13.8335 4.83333L13.111 14.9517C13.0811 15.3722 12.8929 15.7657 12.5844 16.053C12.2759 16.3403 11.87 16.5 11.4485 16.5H4.55183C4.13028 16.5 3.72439 16.3403 3.4159 16.053C3.10742 15.7657 2.91926 15.3722 2.88933 14.9517L2.16683 4.83333H13.8335ZM10.5002 4.83333V2.33333C10.5002 2.11232 10.4124 1.90036 10.2561 1.74408C10.0998 1.5878 9.88784 1.5 9.66683 1.5H6.3335C6.11248 1.5 5.90052 1.5878 5.74424 1.74408C5.58796 1.90036 5.50016 2.11232 5.50016 2.33333V4.83333H10.5002Z" stroke="#8F8F8F" />
</svg>
)

const iconPlus = (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 6V12M12.5 12V18M12.5 12H18.5M12.5 12H6.5" stroke="#333333" />
    </svg>
)

interface Props {

}

const PaymentMethod: React.FC<Props> = (props) => {
    const [visible, setVisible] = useState<boolean>(false)

    return (
        <>
            <Row className='payment-method mt-4'>
                {[1, 2, 3].map((d) => (
                    <Col xs={6}>
                        <div className='item'>
                            <div className='info-method'>
                                <div className='item-method'>
                                    <img src={imageMethod} />
                                    <div className='name'>Taylor Fox</div>
                                </div>
                                <div>
                                    <Form.Check type="radio" />
                                </div>
                            </div>
                            <div className='card-number'>
                                123456789
                            </div>
                            <div className='expiry-method'>
                                <div className='date'>Expiry 07/09</div>
                                <div className='active'>{iconDelete} <span>Remove</span></div>
                            </div>
                        </div>
                    </Col>
                ))}
                <Col xs={6}>
                    <div className='item'>
                        <div className='text-method'>{iconPlus} <span>Add new Payment method</span></div>
                    </div>
                </Col>
            </Row>
            <div className='btn-right mt-5'>
                <Button className='mt-5'
                // onClick={() => {
                //     setVisible(true)
                // }}
                >
                    Pay for compaign
                </Button>
            </div>

            <ModalComponent
                visible={visible}
                onClose={() => setVisible(false)}
                titleContent="Congratulation"
                content='You have successfuly run your compaign click below to see and edit your compaign.'
                textButton='Go to compaign'
                to='/campaign'
            />
        </>
    );
};

export default PaymentMethod;