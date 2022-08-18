import React from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import bg_auth from '../assets/images/bg_auth.jpg';
import logo from '../assets/images/logo.png';
import { useAuth } from '../components/AuthContext';

const LayoutAuth: React.FC<{}> = (props) => {
    const navigate = useNavigate()
    const auth = useAuth()
    const location = useLocation()

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
                <div className='mt-4 mb-4'>
                    <div className='oulet-auth cursor-pointer' onClick={() => navigate('/')}>
                        <img src={logo} alt="logo" className='logo' />
                        <div className='text-logo'>Dealmintr</div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-4 layout-auth mb-4">
                        <Outlet />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LayoutAuth;