import { Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import ModalComponent from '../../../components/ModalComponent';

enum ETypeForgotPassword {
    FORGOT_PASSWORD = "FORGOT_PASSWORD",
    SEND_EMAIL = "SEND_EMAIL",
    NEW_PASSWORD = "NEW_PASSWORD"
}

const ForgotPasswordPage: React.FC<{}> = (props) => {
    const navigate = useNavigate()
    const [type, setType] = useState<ETypeForgotPassword>(ETypeForgotPassword.FORGOT_PASSWORD)
    const [visible, setVisible] = useState<boolean>(false)

    return (
        <div className='page-login page-recover-password'>
            <div className='text-name mb-3'>Recover password</div>
            {type === ETypeForgotPassword.FORGOT_PASSWORD
                ? <>
                    <div className='text-name recover-password mb-2rem'>Enter your email below to recover your password</div>
                    <div className='form-login'>
                        <Form>
                            <Form.Group className="mb-2rem">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <div className='d-grid'>
                                <Button className='btn-main' onClick={() => setType(ETypeForgotPassword.SEND_EMAIL)}>
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </div>
                </>
                : ""
            }

            {type === ETypeForgotPassword.SEND_EMAIL
                ? (
                    <>
                        <div className='text-name recover-password'>
                            We have sent you an email at jhon123... to recover your password
                        </div>
                        <div className='d-grid mt-4'>
                            <Button className='btn-main' onClick={() => setType(ETypeForgotPassword.NEW_PASSWORD)}>
                                Got it
                            </Button>
                            <div className='text-center text-email mt-2'>Did’t receive email yet</div>
                        </div>
                    </>

                )
                : ""
            }

            {type === ETypeForgotPassword.NEW_PASSWORD
                ? <>
                    <div className='text-name recover-password mb-2rem'>Enter new password you like</div>
                    <div className='form-login'>
                        <Form>
                            <Form.Group className="mb-2rem">
                                <Form.Label>Enter password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" />
                            </Form.Group>

                            <Form.Group className="mb-2rem">
                                <Form.Label>Confirm password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm password" />
                            </Form.Group>

                            <div className='d-grid'>
                                <Button className='btn-main' onClick={() => setVisible(true)}>
                                    Change password
                                </Button>
                            </div>
                        </Form>
                    </div>
                </>
                : ""
            }

            <ModalComponent
                visible={visible}
                onClose={() => setVisible(false)}
                titleContent="Recover password"
                content='You have successfuly recover your password click below to login'
                textButton='Login'
                to='/auth/login'
            />
        </div>
    );
};

export default ForgotPasswordPage;