import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import ModalRegister from './ModalRegister';

export interface IFormRegister {
    email: string,
    name: string,
    password: string,
    confirm_password?: string
}

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const RegisterPage: React.FC<{}> = (props) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(false)
    const query = useQuery()
    const [visible, setVisible] = useState<boolean>(false)
    const typeUrl = query.get('type')

    const onFinish = async (values: IFormRegister) => {
        // setLoading(true)
        // try {
        //     const params = { ...values }
        //     delete params.confirm_password
        //     const res = await registerCompany(params)
        //     if (res && res?.status) {
        //         switch (res.status) {
        //             case "VALIDATION_ERROR":
        //                 notification.error({ message: get(res, 'message') })
        //                 break;
        //             case "SUCCESS":
        //                 form.resetFields()
        //                 notification.success({ message: "Register Company Success" })
        //                 navigate(`/auth/register?type=verify`)
        //                 setVisible(true)
        //                 break;
        //         }
        //     }
        //     setLoading(false)
        // } catch (error: any) {
        //     notification.error({ message: error?.message })
        //     setLoading(false)
        // }
    };

    // <ModalRegister visible={visible} onClose={() => setVisible(false)} />
    return (
        <div className='page-login page-register'>
            <div className='text-name mb-4'>Register Company</div>
            <div className='form-login'>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Company name</Form.Label>
                        <Form.Control placeholder="Company name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Company email</Form.Label>
                        <Form.Control placeholder="Company email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm password" />
                    </Form.Group>

                    <div className='d-grid'>
                        <Button className='btn-main mt-2rem' onClick={() => setVisible(true)}>
                            Submit
                        </Button>
                    </div>

                    <div className='account mt-4 text-center'>
                        Already have an account? <b className='regsiter-company cursor-pointer' onClick={() => { navigate('/auth/login') }}>Log in</b>
                    </div>
                </Form>
            </div>

            <ModalRegister visible={visible} onClose={() => setVisible(false)} />
        </div>
    );
};

export default RegisterPage;