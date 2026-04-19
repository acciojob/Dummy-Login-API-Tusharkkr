// import React, { useState } from 'react';

// const GPTwalacode = () => {

//   const API = [
//     { id: 1, name: "ABC", email: "abc@gmail.com", password: "12" },
//     { id: 2, name: "DEF", email: "def@gmail.com", password: "1234" },
//     { id: 3, name: "GHI", email: "ghi@gmail.com", password: "123456" }
//   ];

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const [userError, setUserError] = useState('');
//   const [passError, setPassError] = useState('');

//   function handleSubmit(e) {
//     e.preventDefault();

//     // reset errors
//     setUserError('');
//     setPassError('');

//     setTimeout(() => {

//       const user = API.find(u => u.email === email);

//       if (!user) {
//         setUserError("User not found");
//         console.log("User not found");
//       } 
//       else if (user.password !== password) {
//         setPassError("Password Incorrect");
//         console.log("Password Incorrect");
//       } 
//       else {
//         console.log(user); // ✅ required
//       }

//     }, 3000);
//   }

//   return (
//     <div className="Login">
//       <form onSubmit={handleSubmit}>

//         {/* Email */}
//         <input
//           id="input-email"
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//             setUserError('');
//           }}
//         />
//         <p id="user-error" style={{ color: "red" }}>
//           {userError}
//         </p>

//         {/* Password */}
//         <input
//           id="input-password"
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//             setPassError('');
//           }}
//         />
//         <p id="password-error" style={{ color: "red" }}>
//           {passError}
//         </p>

//         {/* Submit */}
//         <button id="submit-form-btn">Submit</button>

//       </form>
//     </div>
//   );
// };

// export default GPTwalacode