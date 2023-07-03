import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm:''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://youtube.softscope.net/api/auth/register',
        formData
      );


      console.log(response.data); // Do something with the response


       // Redirect to sign-in page on successful registration
    if (response.status === 200) {
      // Replace '/sign-in' with the actual route/path of your sign-in page
      window.location.href = '/sign-in';
      
    }
  } catch (error) {
    if (error.response && error.response.status === 422) {
      const validationErrors = error.response.data.errors;
      // Handle validation errors, e.g., display error messages to the user
      toast.error("incorrect data !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      console.error(error);
    }
  }
};
  return (
    <div className="container-xxl  d-flex align-items-center justify-content-center">
      <ToastContainer/>
      <div className="row mt-5">
        <div className="col-12 ">
          <div className="login-card">
            <h3 className="text-center mb-3">Sign Up</h3>

            <form onSubmit={handleSubmit} className="d-flex flex-column ">
              <div className="name">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="name"
                  type="text"
                  className="neumer-input"
                  required
                />
              </div>
              <div className="email">
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email"
                  type="email"
                  className="neumer-input"
                  required
                />
              </div>
              <div className="password">
                <input
                   name="password"
                   value={formData.password}
                   onChange={handleChange}
                  placeholder="password"
                  type="password"
                  className="neumer-input"
                  required
                />
              </div>
              <div className="confirm">
                <input
                  name="confirm"
                 
                  value={formData.confirm}
                  onChange={handleChange}
                  placeholder="confirm password"
                  type="password"
                  className="neumer-input"
                  required
                />
              </div>

              <div>
                <div className="mt-3 d-flex align-items-center justify-content-center gap-15">
                  <button type="submit" className=" mb-4 submit-btn">
                    Sign Up
                  </button>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                Already have account{" "}
                <Link className="mx-2 text-primary" to="/sign-in">
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../App.css";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirm: "",
//   });
// const navigate = useNavigate()
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Save user data in local storage
//     localStorage.setItem("user", JSON.stringify(formData));
//     navigate("/sign-in")

//   };

//   return (
//     <div className="container-xxl  d-flex align-items-center justify-content-center">
//       <div className="row mt-5">
//         <div className="col-12 ">
//           <div className="login-card">
//             <h3 className="text-center mb-3">Sign Up</h3>

//             <form onSubmit={handleSubmit} className="d-flex flex-column ">
//               <div className="name">
//                 <input
//                   name="username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   placeholder="username"
//                   type="text"
//                   className="neumer-input"
//                   required
//                 />
//               </div>
//               <div className="email">
//                 <input
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="email"
//                   type="email"
//                   className="neumer-input"
//                   required
//                 />
//               </div>
//               <div className="password">
//                 <input
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="password"
//                   type="password"
//                   className="neumer-input"
//                   required
//                 />
//               </div>
//               <div className="confirm">
//                 <input
//                   name="confirm"
//                   value={formData.confirm}
//                   onChange={handleChange}
//                   placeholder="confirm password"
//                   type="password"
//                   className="neumer-input"
//                   required
//                 />
//               </div>

//               <div>
//                 <div className="mt-3 d-flex align-items-center justify-content-center gap-15">
//                   <button type="submit" className=" mb-4 submit-btn">
//                     Sign Up
//                   </button>
//                 </div>
//               </div>
//               <div className="d-flex align-items-center justify-content-center">
//                 Already have an account{" "}
//                 <Link className="mx-2 text-primary" to="/sign-in">
//                   Sign in
//                 </Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
