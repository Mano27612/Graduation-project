import React from 'react';
import { ListGroup } from 'react-bootstrap';

const PlayList = ({ videos, onVideoSelect }) => {
  return (
    <ListGroup>
      {videos.map((video) => (
        <ListGroup.Item
          key={video.id.videoId}
          onClick={() => onVideoSelect(video)}
          className="playlist-item"
        >
          <img
            src={video.snippet.thumbnails.default.url}
            alt={video.snippet.title}
            className="playlist-item-thumbnail"
          />
          {video.snippet.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default PlayList;