import React, { useContext, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { ModalContext } from '../../contexts/ModalContext';


const AddModal = ({ postData }) => {
  const { addModal, closeAddModal, checkbox, changeCheckbox } = useContext(ModalContext);


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      checked: false,
      name: name,
      email: email,
      address: address,
      phone: phone
    }
    
    console.log('newData', newData)

    postData(newData);
  }

  return (
    <Modal show={addModal} onHide={closeAddModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" rows="1" name="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeAddModal}>
          Close
        </Button>
        <Button variant="info" onClick={(e) => handleSubmit(e)}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddModal;
