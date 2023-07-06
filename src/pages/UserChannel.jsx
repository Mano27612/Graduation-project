import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./../compenents/Sidebar";
import {FaUpload} from "react-icons/fa"
import {CgProfile} from "react-icons/cg"
import {FcUpload} from "react-icons/fc"
import UploadVideo from "./UploadVideo";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
const UserChannel = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("profileData"));
  const formData = JSON.parse(localStorage.getItem("formData"));
  const videos = useSelector((state) => state.uservideos.videos.videos);
  const imageURL = useSelector((state) => state.image.imageURL);
  return (
    <>
      <Container fluid style={{ marginTop: "100px" }}>
        <Row>
          <Col xs={2}>
            <Sidebar />
          </Col>
          <Col xs={10}>
            {/* Pic profile of the channel and content */}
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Avatar
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                  }}
                  alt="Travis Howard"
                  src={imageURL}
                />

                <div className="mx-2">
                  <>
                    <h4 className="fw-bold">
                      {userData?.name ? userData?.name : formData?.name}
                    </h4>
                    <h5 className="fw-bold">
                      {userData?.bio ? userData?.bio : formData?.email}
                    </h5>
                    <span>
                      {" "}
                      <span>
                        {videos?.length ? videos.length : "No videos uploaded"}{" "}
                        videos
                      </span>{" "}
                     
                    </span>
                  </>
                </div>
              </div>
             
                <div className="d-block">
                <Button
                  onClick={() => navigate("/setting")}
                  className="mx-5"
                  variant="danger"
                >
                  UPDATE YOUR PROFILE
                <CgProfile className="fs-5 text-center mx-2"/>
                </Button>
              
             
                <Button
                  onClick={() => navigate("/upload-video")}
                  className="mx-5"
                  variant="primary"
                >
                  UPLOAD VIDEO
                  <FaUpload className=" text-center mx-2"/>
                </Button>
                </div>
             
            </div>

            {/* Links of profile videos and playlists */}
            <div className="mt-3 d-flex justify-content-center w-50 gap-5">
              <Link to={"/user-videos"}>Videos</Link>
              <Link>Playlists</Link>
            </div>
            <hr />
            <Row className="d-flex flex-column align-items-center ">
              <FcUpload  style={{width:"200px", height:"250px"}}/>
              <h3 className="text-center">Download video</h3>
              <p className="text-muted text-center">Start sharing your story and connecting with your viewers. Your uploaded videos will appear here.</p>
              <Button
              style={{width:"150px"}}
                  onClick={() => navigate("/upload-video")}
                  className="mb-5"
                  variant="primary"
                >
                  UPLOAD VIDEO
                  <FaUpload className=" text-center mx-2"/>
                </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserChannel;
