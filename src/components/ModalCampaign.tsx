import { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import close from '../assets/images/close.png';

interface Props {
    onClose?(): void,
}
export interface ModalFormRef {
    showModal(): void,
}

const ModalCampaign: ForwardRefRenderFunction<ModalFormRef, Props> = (props, ref) => {
    const [visible, setVisible] = useState(false);

    useImperativeHandle(ref, () => ({
        showModal: () => {
            setVisible(true);
        }
    }));

    return (
        <>
            <Modal show={visible} className='modal-campaign'>
                <div className='modal-content-campaign'>
                    <img src={close} alt="close" className='img-close' onClick={() => setVisible(false)} />
                    <div className='form-create-campaign'>
                        <div className='title'>
                            Creat new compaign
                        </div>
                        <Form className='mt-4'>
                            <Row>
                                <Col sx={6}>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Compaign name</Form.Label>
                                        <Form.Control placeholder="Compaign name" />
                                    </Form.Group>
                                </Col>
                                <Col sx={6}>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Nft name</Form.Label>
                                        <Form.Control placeholder="Nft name" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col sx={6}>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Symbol</Form.Label>
                                        <Form.Control placeholder="Symbol" />
                                    </Form.Group>
                                </Col>
                                <Col sx={6}>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Royalty</Form.Label>
                                        <Form.Control placeholder="Royalty" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col sx={6}>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Supply of nfts per promo</Form.Label>
                                        <Form.Select placeholder='Supply of nfts per promo'>
                                            <option>Supply of nfts per promo</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col sx={6}>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Category</Form.Label>
                                        <Form.Select placeholder='Category'>
                                            <option>Category</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col sx={6}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Upload image</Form.Label>
                                        <div className="d-create-file">
                                            <p id="file_name">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</p>
                                            <div className="browse"><input type="button" id="get_file" className="btn-main" defaultValue="Upload image" /><input id="upload_file" type="file" multiple /></div>
                                        </div>
                                        <Form.Text className="text-muted text-image">
                                            Drag image here or, <span className='text-browser'>browser</span>
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col sx={6}>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Expiration date</Form.Label>
                                        <Form.Select placeholder='Expiration date'>
                                            <option>Expiration date</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3" >
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Description" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Button className='btn-main mt-3' type="submit" style={{ width: 250 }}>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default forwardRef(ModalCampaign)