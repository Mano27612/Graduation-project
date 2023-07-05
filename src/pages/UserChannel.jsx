import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./../compenents/Sidebar";
import UploadVideo from "../compenents/UploadVideo"
import { Avatar } from "@mui/material";
const UserChannel = () => {
  const navigate = useNavigate()
  const userData = JSON.parse(localStorage.getItem("profileData"));
  const formData = JSON.parse(localStorage.getItem("formData"));
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
                {/* <img
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                  }}
                  src=""
                  alt="Channel Profile Picture"
                /> */}
                 <Avatar
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                  }}
                alt="Travis Howard"
                src=""
              />

                <div className="mx-2">
                  <>
                    <h4 className="fw-bold">{userData?.name ? userData?.name : formData?.name}</h4>
                    <h5 className="fw-bold">{userData?.bio ? userData?.bio : formData?.email}</h5>
                    <span>no subscribers no video</span>
                  </>
                </div>
              </div>
              <div>
                <Button onClick={() => navigate("/setting")} className="mx-5" variant="dark">
                  UPDATE YOUR PROFILE
                </Button>
              
              </div>
            </div>

            {/* Links of profile videos and playlists */}
            <div className="mt-3 d-flex justify-content-center w-50 gap-5">
              <Link>Videos</Link>
              <Link>Playlists</Link>
            </div>
            <hr />
          </Col>
       
        </Row>
      </Container>
    </>
  );
};

export default UserChannel;
