import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      bio: formData.bio,
      image: formData.image,
    };
  
    try {
      // Save the form data in localStorage
      localStorage.setItem("profileData", JSON.stringify(formDataToSend));
  
      // Handle the form data
      console.log("Profile data saved:", formDataToSend);
      navigate('/user-channel');
  
      // Reset the form fields
      setFormData({
        name: "",
        email: "",
        password: "",
        bio: "",
        image: null,
      });
    } catch (error) {
      console.error("Error saving profile data:", error);
    }
  };
  
  return (
    <div className="container-xxl d-flex align-items-center justify-content-center">
      <div className="row mt-5">
        <div className="col-12">
          <div className="mt-5 shadowDark">
            <h3 className="bg-dark text-white p-2 text-center mb-2 mt-2">Update your profile</h3>
            <form className="form-control" onSubmit={handleSubmit}>
              <div>
                <label>Name:</label>
                <input

                className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                />
              </div>
              <div>
                <label>Bio:</label>
                <textarea
                className="form-control"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>
                <label>Image:</label>
                <input
                className="form-control"
                  name="image"
                  onChange={handleChange}
                  type="file"
                  accept="image/*"
                />
              </div>
              <Button className="mt-2" type="submit">Update</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
