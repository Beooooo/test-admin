import { get, isEmpty, mapValues } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import ModalComponent from '../../../components/ModalComponent';
import { convertCase, ETypeToast, ToastMessage } from '../../../utils/utils';
import { registerCompany } from './services';

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

const svgInfo = (
    <svg viewBox="0 0 24 24" width="18" fill="currentColor">
        <path d="M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z">
        </path>
    </svg>
)

const RegisterPage: React.FC<{}> = (props) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(false)
    const query = useQuery()
    const [visible, setVisible] = useState<boolean>(false)
    const { register, handleSubmit, formState: { errors }, watch } = useForm<IFormRegister>();

    const typeUrl = query.get('type')

    const onSubmit = handleSubmit(async (data) => {
        setLoading(true)
        try {
            const params = { ...data }
            delete params.confirm_password
            const res = await registerCompany(params)
            if (res && res?.status) {
                switch (res.status) {
                    case "VALIDATION_ERROR":
                        setVisible(false)
                        ToastMessage(ETypeToast.ERROR, convertCase(get(res, 'message')))
                        break;
                    case "SUCCESS":
                        ToastMessage(ETypeToast.SUCCESS, "Register Company Success")
                        setVisible(true)
                        break;
                }
            }
            setLoading(false)
        } catch (error: any) {
            ToastMessage(ETypeToast.ERROR, error?.message)
            setLoading(false)
        }
    });

    return (
        <>
            {!isEmpty(errors)
                ? <div >
                    <Alert className='box-errors' key={"danger"} variant={"danger"}>
                        {Object.values(errors).map((d, k) => {
                            return (
                                <div key={`errors-${k + 1}`} className='text-white mb-2'>
                                    <span className='svg-info'>{svgInfo}</span> {d?.message}
                                </div>
                            )
                        })}
                    </Alert>
                </div>
                : ""
            }
            <div className='page-login page-register'>
                <div className='text-name mb-4'>Register Company</div>
                <div className='form-login'>
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Company name</Form.Label>
                            <Form.Control
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "You must specify a company name"
                                    },
                                    minLength: {
                                        value: 2,
                                        message: "Company name must have at least 2 characters"
                                    }
                                })}
                                placeholder="Company name"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Company email</Form.Label>
                            <Form.Control
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "You must specify a company email"
                                    },
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Entered value does not match email format"
                                    }
                                })} placeholder="Company email" type='email'
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "You must specify a password"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Password must have at least 6 characters"
                                    }
                                })}
                                type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control type="password"
                                {...register("confirm_password",
                                    {
                                        validate: (val: string | undefined) => {
                                            if (watch('password') != val) {
                                                return "Your passwords do no match";
                                            }
                                        }
                                    })}
                                placeholder="Confirm password" />
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
                            Already have an account? <b className='regsiter-company cursor-pointer' onClick={() => { navigate('/auth/login') }}>Log in</b>
                        </div>
                    </Form>
                </div>

                <ModalComponent
                    visible={visible}
                    onClose={() => setVisible(false)}
                    titleContent="Verify Your Email"
                    content='We have sent you verification email. let’s verity your email'
                    textButton='Go to Gmail'
                    to='/'
                />
            </div>
        </>
    );
};

export default RegisterPage;