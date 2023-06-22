// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const history = useHistory();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Here, you would typically call an API to verify the user's email and password
//     // If the credentials are valid, you would redirect the user to the YouTube homepage
//     history.push('/');
//   };

//   return (
//     <div>
//       <h1>Zomord Login</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;

import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login