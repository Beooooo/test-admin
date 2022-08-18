import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../components/AuthContext';
import { ETypeToast, ToastMessage } from '../../../utils/utils';
import { loginAdmin } from './services';

export interface IFormLogin {
    email: string,
    password: string,
    remember?: boolean
}


const LoginPage: React.FC<{}> = (props) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(false)
    const auth = useAuth()

    const { register, handleSubmit } = useForm<IFormLogin>();

    const onSubmit = handleSubmit(async (data) => {
        setLoading(true)
        try {
            const res = await loginAdmin(data)
            if (res && res.status) {
                setLoading(false)
                switch (res.status) {
                    case "RECORD_NOT_FOUND":
                        return ToastMessage(ETypeToast.SUCCESS, 'Record not found')
                    case "PASSWORD_INCORRECT":
                        return ToastMessage(ETypeToast.SUCCESS, 'Password incorrect')
                    case "SUCCESS":
                        auth?.loginAdmin(res)
                        navigate('/', { replace: true })
                        ToastMessage(ETypeToast.SUCCESS, 'Login success')
                }
            }
        } catch (error) {
            setLoading(false)
        }
    });

    return (
        <div className='page-login'>
            <div className='text-name mb-4'>Log In</div>
            <div className='form-login'>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" {...register("email")} placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" {...register("password")} placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 footer-login">
                        <Form.Check type="checkbox" {...register("remember")}
                            label="Remember me" checked />
                        <div className='text-login cursor-pointer' onClick={() => { navigate('/auth/forgot-password') }}>Forget password</div>
                    </Form.Group>
                    <div className='d-grid'>
                        <Button className='btn-main mt-2rem' type='submit' disabled={loading}>
                            {loading
                                ? <span>
                                    <span className="spinner-border spinner-border-sm mright-5" role="status" aria-hidden="true"></span>
                                    Loading...
                                </span>
                                : "Submit"
                            }
                        </Button>
                    </div>

                    <div className='account mt-4 text-center'>
                        Have no account? <b className='regsiter-company cursor-pointer' onClick={() => { navigate('/auth/register') }}>Regsiter company</b>
                    </div>
                </Form>
            </div >
        </div >
    );
};

export default LoginPage;