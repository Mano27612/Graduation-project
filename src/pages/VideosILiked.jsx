import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function VideosILiked() {
  const [videosILiked, setVideosILiked] = useState([]);



  return (
    <Container>
      <Row>
        <Col>
          <h1>Videos I Liked</h1>
        </Col>
      </Row>
      {videosILiked.map((video) => (
        <Row key={video.id}>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>{video.title}</Card.Title>
                <Card.Text>
                  {video.description}
                </Card.Text>
                <Button variant="primary">Watch Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
}
export default VideosILiked