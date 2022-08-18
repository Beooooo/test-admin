import React from 'react';
import { Modal } from 'react-bootstrap';
import { Outlet } from 'react-router-dom'
import close from '../assets/images/close.png';

interface Props {
    visible: boolean
    setVisible: (visible: boolean) => void
    children: any
}

const LayoutCampaign: React.FC<Props> = (props) => {
    return (
        <Modal show={props.visible} className='modal-campaign'>
            {props.children}
        </Modal>
    );
};

export default LayoutCampaign;