import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import verify from '../../../assets/images/verify.png';
import close from '../../../assets/images/close.png';
import { useNavigate } from 'react-router-dom'

interface Props {
    visible: boolean
    onClose?: () => void
}

const ModalRegister: React.FC<Props> = (props) => {
    const navigate = useNavigate()

    return (
        <Modal show={props.visible} className='modal-register'>
            <div className='modal-content-register'>
                <img src={close} alt="close" className='img-close' onClick={props.onClose} />
                <div className='image-verify'>
                    <img src={verify} />
                </div>
                <div className='title-verify mt-4'>Verify Your Email</div>
                <div className='title-verify content-verify mt-4'>We have sent you verification email. let’s verity your email</div>
                <div className='d-grid mt-4'>
                    <Button className='btn-main' onClick={() => navigate('/')}>Go to Gmail</Button>
                </div>
            </div>
        </Modal>
    );
};

export default ModalRegister;