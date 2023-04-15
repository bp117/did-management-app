import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import axios from 'axios';

const DIDManagement = () => {
  const [alias, setAlias] = useState('');
  const [alias1, setAlias1] = useState('');
  const [didToUpdate, setDidToUpdate] = useState('');

  const createDID = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/api/did/create/${alias}`);
      setAlias('');
      alert('DID created successfully');
    } catch (error) {
      console.error('Error creating DID:', error);
      alert('Error creating DID');
    }
  };

  const updateDID = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/did/${didToUpdate}`, { alias });
      setAlias('');
      setDidToUpdate('');
      alert('DID alias updated successfully');
    } catch (error) {
      console.error('Error updating DID:', error);
      alert('Error updating DID');
    }
  };

  return (
    <div className="mt-3">
      <h4>Create DID</h4>
      <Form onSubmit={createDID}>
        <Form.Group controlId="createAlias">
          <Form.Label>Alias</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter an alias for the new DID"
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
          />
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit">
          Create
          </Button>
  </Form>

  <h4 className="mt-4">Update DID Alias</h4>
  <Form onSubmit={updateDID}>
    <Form.Group controlId="updateDid">
      <Form.Label>DID</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter the DID to update"
        value={didToUpdate}
        onChange={(e) => setDidToUpdate(e.target.value)}
      />
    </Form.Group>
    <Form.Group controlId="updateAlias">
      <Form.Label>New Alias</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter the new alias for the DID"
        value={alias1}
        onChange={(e) => setAlias(e.target.value)}
      />
    </Form.Group>
    <br/>
    <Button variant="primary" type="submit">
      Update
    </Button>
  </Form>
</div>
  );
};
export default DIDManagement;