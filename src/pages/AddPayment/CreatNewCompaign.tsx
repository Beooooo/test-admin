import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useStepContext } from '../../components/StepContext';

const CreatNewCompaign = () => {
    const { dataStep, onChangeStep } = useStepContext()

    const onSubmit = () => {
        onChangeStep(2)
    }

    const onChangeFile = (file: any) => {
        var fileName = file.target.files[0];
    }

    return (
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
                            <div className="browse">
                                <input type="button" id="get_file" className="btn-main" defaultValue="Upload image" />
                                <input id="upload_file" type="file" onChange={onChangeFile} />
                            </div>
                        </div>
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

            <div className='btn-right'>
                <Button className='mt-3' onClick={onSubmit}>
                    Submit
                </Button>
            </div>
        </Form>
    );
};

export default CreatNewCompaign;