import React, { useState } from 'react';
import { Container, Row, Col, Form, InputGroup, FormControl, Button, Card } from 'react-bootstrap';

const Subscriptions = () => {
  const [email, setEmail] = useState('');

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Subscribe to our channel</h2>
              <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                  <FormControl
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button type="submit" variant="primary">Subscribe</Button>
                </InputGroup>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Subscriptions;