import React, { useState } from 'react';
import { Modal, Button, Form, FormControl } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import { ContactServices } from '../../services/ContactServices';
import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';

enum councils {
    tech = "gstech@iitdh.ac.in",
    acad = "gsacad@iitdh.ac.in",
    cult = "gscult@iitdh.ac.in",
    sports = "gssports@iitdh.ac.in",
    hostel = "gsha@iitdh.ac.in",
    mess = "messcommittee@iitdh.ac.in"
}


export interface IContactQuery {
    council: councils;
    name: string;
    email: string;
    phone: string;
    mssg: string;
}
const defaultVal: IContactQuery = {
    council: councils.tech,
    email: "",
    mssg: "",
    name: "",
    phone: ""
};

const ContactForm = () => {
    const [show, setShow] = useState(false);
    const [contactQuery, setContactQuery] = useState<IContactQuery>({
        council: councils.tech,
        email: "",
        mssg: "",
        name: "",
        phone: ""
    });
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = async () => {
        // validators
        // submission
        try {
            const resp = await ContactServices.contactQueryGeneral(contactQuery);
            var result = '';
            if (resp) {
                result = 'Mail successfully sent, please wait for a reply'
            } else {
                result = 'Something went wrong, please reload the page and try again'
            }
            setContactQuery(defaultVal);
            toast(result);
        } catch (error) {
            setContactQuery(defaultVal);
            result = 'Something went wrong, please reload the page and try again'
            toast(result);
        }
    }



    return (
        <div>
            <p onClick={handleShow}>CONTACT</p>
            <ToastContainer />
            <div
                onKeyDown={e => e.stopPropagation()}
                onClick={e => e.stopPropagation()}
                onFocus={e => e.stopPropagation()}
                onMouseOver={e => e.stopPropagation()}
            >
                <Modal
                    // open={show} onClose={handleClose} center
                    // style={{marginTop:30}}
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    size='lg'
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Write To Us
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <Form.Group controlId="ContactFormForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <FormControl
                                    className='form-input'
                                    type='text'
                                    placeholder='Name'
                                    value={contactQuery.name}
                                    onChange={
                                        (event: any) => {
                                            console.log(event.target.value);
                                            setContactQuery({ ...contactQuery, name: event.target.value });
                                        }} />
                                <Form.Text
                                    className="text-muted"
                                ></Form.Text>
                            </Form.Group>
                            <Form.Group controlId="ContactFormForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="name@ContactForm.com" value={contactQuery.email}
                                    onChange={
                                        (event: any) => {
                                            console.log(event.target.value);
                                            setContactQuery({ ...contactQuery, email: event.target.value });
                                        }} />
                            </Form.Group>
                            <Form.Group controlId="ContactFormForm.ControlInput1">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="XXXX-XXX-XXX" value={contactQuery.phone}
                                    onChange={
                                        (event: any) => {
                                            console.log(event.target.value);
                                            setContactQuery({ ...contactQuery, phone: event.target.value });
                                        }} />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Select Council</Form.Label>
                                <Form.Control as="select" onChange={(e) => setContactQuery({ ...contactQuery, council: e.target.value as councils })}>
                                    <option value={councils.acad}>Academic Council</option>
                                    <option value={councils.cult}>Cultural Council</option>
                                    <option value={councils.hostel}>Hostel Council</option>
                                    <option value={councils.mess}>Mess committee</option>
                                    <option value={councils.sports}>Sports Council</option>
                                    <option value={councils.tech}>Technical Council</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="ContactFormForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <FormControl as="textarea" rows={3} value={contactQuery.mssg}
                                    onChange={
                                        (event: any) => {
                                            console.log(event.target.value);
                                            setContactQuery({ ...contactQuery, mssg: event.target.value });
                                        }} />
                            </Form.Group>

                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
            </Button>
                        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default ContactForm

