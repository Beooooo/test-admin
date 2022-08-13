import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../components/AuthContext';
import { loginAdmin } from './services';
import { Button, Form } from 'react-bootstrap';

export interface IFormLogin {
    email: string,
    password: string,
    remember?: boolean
}

const LoginPage: React.FC<{}> = (props) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(false)
    const auth = useAuth()

    const onFinish = async (values: IFormLogin) => {
        // setLoading(true)
        // try {
        //     const res = await loginAdmin(values)
        //     if (res && res.status) {
        //         setLoading(false)
        //         switch (res.status) {
        //             case "RECORD_NOT_FOUND":
        //                 return notification.error({ message: 'RECORD_NOT_FOUND' })
        //             case "PASSWORD_INCORRECT":
        //                 return notification.error({ message: 'PASSWORD_INCORRECT' })
        //             case "SUCCESS":
        //                 auth?.loginAdmin(res)
        //                 navigate('/', { replace: true })
        //                 notification.success({ message: "Login Success" })
        //         }
        //     }
        // } catch (error) {
        //     setLoading(false)
        // }
    };

    return (
        <div className='page-login'>
            <div className='text-name mb-4'>Log In</div>
            <div className='form-login'>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 footer-login">
                        <Form.Check type="checkbox" label="Remember me" />
                        <div className='text-login cursor-pointer' onClick={() => { navigate('/auth/forgot-password') }}>Forget password</div>
                    </Form.Group>
                    <div className='d-grid'>
                        <Button className='btn-main mt-2rem' onClick={() => navigate('/')}>
                            Submit
                        </Button>
                    </div>

                    <div className='account mt-4 text-center'>
                        Have no account? <b className='regsiter-company cursor-pointer' onClick={() => { navigate('/auth/register') }}>Regsiter company</b>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;