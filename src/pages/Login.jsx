
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here, e.g. call API to verify credentials
    setLoggedIn(true);
  };

  return (
    <div className="container">
      <h1 style={{"padding-top":"80px"}}>Login to Zomord</h1>
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
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
      {loggedIn && <p>You are now logged in!</p>}
    </div>
  );
}

export default Login;