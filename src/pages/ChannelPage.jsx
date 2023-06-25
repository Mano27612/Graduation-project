import React from 'react'
import { Container, Row, Col, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

function ChannelPage() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://example.com/channel-logo.png" />
            <Card.Body>
              <Card.Title>My Channel</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut quam ut tortor
                aliquam pharetra.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <ListGroup>
            <ListGroupItem>Video 1</ListGroupItem>
            <ListGroupItem>Video 2</ListGroupItem>
            <ListGroupItem>Video 3</ListGroupItem>
            <ListGroupItem>Video 4</ListGroupItem>
            <ListGroupItem>Video 5</ListGroupItem>
          </ListGroup>
          <Button variant="primary">Load More</Button>
        </Col>
      </Row>
    </Container>
  );
}
export default ChannelPage;