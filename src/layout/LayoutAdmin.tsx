import { isEmpty } from 'lodash';
import React, { useEffect, useRef } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link, LinkProps, Navigate, Outlet, useLocation, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { useAuth } from '../components/AuthContext';
import AvatarHeader from '../components/AvatarHeader';
import ModalCampaign, { ModalFormRef } from '../components/ModalCampaign';
import { StepProvider } from '../components/StepContext';
import localStorageHelper, { KeyStorage } from '../utils/localStorage';
import { Session } from '../utils/session';

const iconDashboard = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.99998 3.6001C5.36346 3.6001 4.75301 3.85295 4.30292 4.30304C3.85283 4.75313 3.59998 5.36358 3.59998 6.0001V8.4001C3.59998 9.03662 3.85283 9.64707 4.30292 10.0972C4.75301 10.5472 5.36346 10.8001 5.99998 10.8001H8.39998C9.03649 10.8001 9.64694 10.5472 10.097 10.0972C10.5471 9.64707 10.8 9.03662 10.8 8.4001V6.0001C10.8 5.36358 10.5471 4.75313 10.097 4.30304C9.64694 3.85295 9.03649 3.6001 8.39998 3.6001H5.99998ZM5.99998 13.2001C5.36346 13.2001 4.75301 13.453 4.30292 13.903C3.85283 14.3531 3.59998 14.9636 3.59998 15.6001V18.0001C3.59998 18.6366 3.85283 19.2471 4.30292 19.6972C4.75301 20.1472 5.36346 20.4001 5.99998 20.4001H8.39998C9.03649 20.4001 9.64694 20.1472 10.097 19.6972C10.5471 19.2471 10.8 18.6366 10.8 18.0001V15.6001C10.8 14.9636 10.5471 14.3531 10.097 13.903C9.64694 13.453 9.03649 13.2001 8.39998 13.2001H5.99998ZM13.2 6.0001C13.2 5.36358 13.4528 4.75313 13.9029 4.30304C14.353 3.85295 14.9635 3.6001 15.6 3.6001H18C18.6365 3.6001 19.2469 3.85295 19.697 4.30304C20.1471 4.75313 20.4 5.36358 20.4 6.0001V8.4001C20.4 9.03662 20.1471 9.64707 19.697 10.0972C19.2469 10.5472 18.6365 10.8001 18 10.8001H15.6C14.9635 10.8001 14.353 10.5472 13.9029 10.0972C13.4528 9.64707 13.2 9.03662 13.2 8.4001V6.0001ZM13.2 15.6001C13.2 14.9636 13.4528 14.3531 13.9029 13.903C14.353 13.453 14.9635 13.2001 15.6 13.2001H18C18.6365 13.2001 19.2469 13.453 19.697 13.903C20.1471 14.3531 20.4 14.9636 20.4 15.6001V18.0001C20.4 18.6366 20.1471 19.2471 19.697 19.6972C19.2469 20.1472 18.6365 20.4001 18 20.4001H15.6C14.9635 20.4001 14.353 20.1472 13.9029 19.6972C13.4528 19.2471 13.2 18.6366 13.2 18.0001V15.6001Z" fill="#444444" />
    </svg>
)

const iconCampaign = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.16672 4.90167V16.0333C9.16647 16.3787 9.04434 16.7129 8.82184 16.9771C8.59934 17.2413 8.29075 17.4185 7.95043 17.4774C7.61011 17.5364 7.2599 17.4734 6.96149 17.2994C6.66309 17.1255 6.43564 16.8518 6.31922 16.5267L4.53005 11.4017M4.53005 11.4017C3.82274 11.1009 3.24104 10.5659 2.88341 9.88555C2.52578 9.20523 2.41418 8.42223 2.5675 7.66908C2.72082 6.91593 3.12963 6.23888 3.72476 5.7525C4.31989 5.26612 5.06479 5.00029 5.83339 5H7.36005C10.7767 5 13.7142 3.97167 15.0001 2.5V14.1667C13.7142 12.695 10.7776 11.6667 7.36005 11.6667H5.83339C5.38558 11.6673 4.94226 11.5766 4.53005 11.4017ZM15.0001 10.8333C15.6631 10.8333 16.299 10.5699 16.7678 10.1011C17.2367 9.63226 17.5001 8.99637 17.5001 8.33333C17.5001 7.67029 17.2367 7.03441 16.7678 6.56557C16.299 6.09673 15.6631 5.83333 15.0001 5.83333V10.8333Z" stroke="#444444" />
    </svg>
)

const CustomLink = ({ children, to }: LinkProps) => {
    let { pathname } = useResolvedPath(to)
    let match = useMatch({ path: pathname, end: true })

    return (
        <Link to={to} className={`menu-list text-decoration-none ${match ? "active-menu" : ""}`}>
            {children}
        </Link>
    )
}

const LayoutAdmin: React.FC = () => {
    const navigate = useNavigate()
    const modalCampaignRef = useRef<ModalFormRef>(null)

    const auth = useAuth()
    const location = useLocation()

    useEffect(() => {
        const dataSection: Session = localStorageHelper.getObject(KeyStorage.SESSION)
        if (isEmpty(dataSection)) {
            navigate('/auth/login', { replace: true })
        }
    }, [location.pathname])

    const routes = [
        {
            key: 'dashboard',
            icon: iconDashboard,
            label: 'Dashboard',
        },
        {
            key: 'campaign',
            icon: iconCampaign,
            label: 'Compaign',
        }
    ]

    return (
        <Row className="menu-layout">
            <Col xs={3} className="bg-menu">
                <div className='layout-cms mb-2'>
                    <div className='oulet-auth cursor-pointer' onClick={() => navigate('/')}>
                        <img src={logo} alt="logo" className='logo' />
                        <div className='text-logo'>NFTs</div>
                    </div>
                </div>

                {routes.map((d, i) => {
                    return (
                        <CustomLink key={`menu_${i + 1}`} to={d.key}>
                            <div className='menu-item'>
                                <div className='menu-icon'>{d.icon}</div>
                                <div className='menu-label'>{d.label}</div>
                            </div>
                        </CustomLink>
                    )
                })}
            </Col>
            <Col xs={9} className="p-0">
                <div className='header-cms'>
                    <Button className='btn-main' onClick={() => {
                        modalCampaignRef?.current?.showModal()
                    }}>Creat new compaign</Button>
                    <AvatarHeader />
                    <Button className='btn-danger'
                        onClick={() => {
                            auth?.logoutAdmin()
                            navigate('/auth/login', { replace: true })
                        }}>LOG OUT</Button>
                </div>

                <div className='content-outlet'>
                    <Outlet />
                </div>

                <StepProvider>
                    <ModalCampaign ref={modalCampaignRef} />
                </StepProvider>
            </Col>
        </Row>
    );
};

export default React.memo(LayoutAdmin);