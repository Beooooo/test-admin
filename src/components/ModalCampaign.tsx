import { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import close from '../assets/images/close.png';
import LayoutCampaign from '../layout/LayoutCampaign';
import AddPayment from '../pages/AddPayment';
import CreatNewCompaign from '../pages/AddPayment/CreatNewCompaign';
import PaymentMethod from '../pages/AddPayment/PaymentMethod';
import { useStepContext } from './StepContext';

const svgBack = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 19L3 12M3 12L10 5M3 12H21" stroke="#444444" />
    </svg>
)

const svgClose = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 6L18 18M6 18L18 6L6 18Z" stroke="black" />
    </svg>
)

interface Props {
    onClose?(): void,
}
export interface ModalFormRef {
    showModal(): void,
}

const ModalCampaign: ForwardRefRenderFunction<ModalFormRef, Props> = (props, ref) => {
    const [visible, setVisible] = useState(false);

    const { dataStep, onChangeStep } = useStepContext()

    useImperativeHandle(ref, () => ({
        showModal: () => {
            setVisible(true);
        }
    }));

    const renderChildren = () => {
        switch (dataStep) {
            case 1:
                return <CreatNewCompaign />
            case 2:
                return <AddPayment />
            case 3:
                return <PaymentMethod />

        }
        return ""
    }

    const renderTitle = () => {
        let title = ""
        switch (dataStep) {
            case 1:
                title = "Creat new compaign"
                break;
            case 2:
                title = "Add payment to run your compaign"
                break;
            default:
                title = "Add payment method"
                break;
        }
        return title
    }

    const onBackStep = (step: number) => {
        if (step > 0) onChangeStep(step - 1)
    }

    return (
        <LayoutCampaign visible={visible} setVisible={setVisible}>
            <div className='modal-content-campaign'>
                {dataStep > 1
                    ? <div className='svg-back' onClick={() => onBackStep(dataStep)}>{svgBack}</div>
                    : ""
                }

                <div className='svg-close' onClick={() => setVisible(false)}>{svgClose}</div>
                <div className='form-create-campaign'>
                    <div className='title'>{renderTitle()}</div>
                    {renderChildren()}
                </div>
            </div>
        </LayoutCampaign>
    )
}

export default forwardRef(ModalCampaign)