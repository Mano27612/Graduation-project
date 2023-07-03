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
        // Replace '/sign-in' with the actual route/path of your sign-in page
        localStorage.setItem('formData', JSON.stringify(formData));
        window.location.href = '/';
        
      
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Handle invalid login credentials, e.g., display an error message to the user
        toast.error("invalid login credentials !", {
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
          <div className="login-card">
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
              <div className="d-flex align-items-center justify-content-center">
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

// import React, { useState } from "react";
// import { Link, useNavigate} from "react-router-dom";
// import '../App.css';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform authentication check
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       const user = JSON.parse(storedUser);
//       if (user.email === formData.email && user.password === formData.password) {
//         console.log("User logged in:", user);
//         navigate("/"); // Navigate to the homepage
//         return;
//       }
//     }
//     toast.error("Invalid email or password !", {
//       position: toast.POSITION.TOP_RIGHT,
//     });
    
//   };

//   return (
    
//     <div className="container-xxl d-flex align-items-center justify-content-center">
//       <ToastContainer/>
//       <div className="row mt-5">
//         <div className="col-12 ">
//           <div className="login-card">
//             <h3 className="text-center mb-3">Sign In</h3>

//             <form onSubmit={handleSubmit} className="d-flex flex-column gap-30">
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

//               <div>
//                 <div className="mt-3 d-flex align-items-center justify-content-center gap-15">
//                   <button type="submit" className="submit-btn">
//                     Sign In
//                   </button>
//                 </div>
//               </div>
//               <div className="d-flex align-items-center justify-content-center">
//                 Don't have an account{" "}
//                 <Link className="mx-2 text-primary" to="/sign-up">
//                   Sign up
//                 </Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
