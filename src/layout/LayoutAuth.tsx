import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import imageAuth from '../assets/images/image_auth.png';
import logo from '../assets/images/logo.png';
import bg_auth from '../assets/images/bg_auth.jpg';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../components/AuthContext';
import { Col, Container, Row } from 'react-bootstrap';

const LayoutAuth: React.FC<{}> = (props) => {
    const navigate = useNavigate()
    const auth = useAuth()
    const location = useLocation()
    console.log(location.pathname)

    if (auth?.dataInfo) {
        return <Navigate to={'/'} state={{ path: location.pathname }} />
    }

    return (
        <section className="jumbotron breadcumb no-bg h-vh"
            style={{
                backgroundImage: `url(${bg_auth})`,
                height: `${location.pathname === "/auth/register" ? "100%" : "100vh"}`
            }}
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4 layout-auth m-4">
                        <div className='oulet-auth cursor-pointer' onClick={() => navigate('/')}>
                            <img src={logo} alt="logo" className='logo' />
                            <div className='text-logo'>Dealmintr</div>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LayoutAuth;