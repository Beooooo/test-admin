import { Button, Form } from 'react-bootstrap';
import React from 'react';
import { useNavigate } from 'react-router-dom'

const ForgotPasswordPage: React.FC<{}> = (props) => {
    const navigate = useNavigate()

    return (
        <div className='page-login page-recover-password'>
            <div className='text-name mb-3'>Recover password</div>
            <div className='text-name recover-password mb-2rem'>Enter your email below to recover your password</div>
            <div className='form-login'>
                <Form>
                    <Form.Group className="mb-2rem">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <div className='d-grid'>
                        <Button className='btn-main' onClick={() => navigate('/')}>
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;