import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const ProfilePage = ({ user }) => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <Image src={user.avatarUrl} roundedCircle />
        </Col>
        <Col md={9}>
          <h2>{name}</h2>
          <p>{bio}</p>
          <Button variant="primary">Edit Profile</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;