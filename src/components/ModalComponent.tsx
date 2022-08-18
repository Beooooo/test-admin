import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import verify from '../assets/images/verify.png';
import close from '../assets/images/close.png';
import { useNavigate, Outlet } from 'react-router-dom'

interface Props {
    visible: boolean
    onClose?: () => void
    image?: any,
    titleContent: string
    content: string
    textButton: string
    to: string
}

const ModalComponent: React.FC<Props> = (props) => {
    const navigate = useNavigate()

    return (
        <Modal show={true} className='modal-register'>
            <div className='modal-content-register'>
                <img src={close} alt="close" className='img-close' onClick={props.onClose} />
                <div className='image-verify'>
                    <img src={props.image || verify} />
                </div>
                <div className='title-verify mt-4'>{props.titleContent}</div>
                <div className='title-verify content-verify mt-4'>{props.content}</div>
                <div className='d-grid mt-4'>
                    <Button className='btn-main' onClick={() => navigate(props.to)}>{props.textButton}</Button>
                </div>
            </div>
        </Modal>
    );
};

export default ModalComponent;