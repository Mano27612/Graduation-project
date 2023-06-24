import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform registration logic here, e.g. call API to create new user
    setRegistered(true);
  };

  return (
    <div className="container">
      <h1 style={{"padding-top":"80px"}}>Register for Zomord</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label style={{"padding-top":"20px"}}>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
      <br/>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
      <br/>
        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
      <br/>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      {registered && <p>You are now registered!</p>}
    </div>
  );
}

export default Register;