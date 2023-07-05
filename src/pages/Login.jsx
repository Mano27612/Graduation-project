import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        'https://youtube.softscope.net/api/auth/login',
        formData
      );
  
      console.log(response.data); // Do something with the response
  
      if (response.status === 200) {
        const authToken = response.data.token;
  
        // Save the authentication token in localStorage
        localStorage.setItem('authToken', authToken);
  
        // Redirect to the desired page
        window.location.href = '/';
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Handle invalid login credentials, e.g., display an error message to the user
        toast.error('Invalid login credentials!', {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        console.error(error);
      }
    }
  };
  
  
  
  return (
    <div className="container-xxl d-flex align-items-center justify-content-center">
      <ToastContainer/>
      <div className="row mt-5">
        <div className="col-12 ">
          <div className="login-card shadowDark">
            <h3 className="text-center mb-3">Sign In</h3>

            <form onSubmit={handleSubmit} className="d-flex flex-column gap-30">
              <div className="email">
                <input
                value={formData.email}
                onChange={handleChange}
                  name="email"
                  placeholder="email"
                  type="email"
                  className="neumer-input"
                  required
                />
              </div>
              <div className="password">
                <input
                value={formData.password}
                onChange={handleChange}
                  name="password"
                  placeholder="password"
                  type="password"
                  className="neumer-input"
                  required
                />
              </div>

              <div>
                <div className="mt-3 d-flex align-items-center justify-content-center gap-15">
                  <button type="submit" className="submit-btn">
                    Sign In
                  </button>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center link">
                Don't have account{" "}
                <Link className="mx-2 text-primary" to="/sign-up">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


