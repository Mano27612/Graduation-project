import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function WatchLater() {
  const [watchLaterVideos, setWatchLaterVideos] = useState([]);

  

  return (
    <Container>
      <Row>
        <Col>
          <h1>Watch Later</h1>
        </Col>
      </Row>
      {watchLaterVideos.map((video) => (
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

export default WatchLater