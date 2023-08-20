import React, { useState } from 'react';
import './AddUser.css';
import { AppHeaderDropdown } from '../common';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../common/index';
import validateData from 'json-server/lib/server/router/validate-data';

const AddUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobileNo: "",
    password: "",
    confirmpassword: '',

  });

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    validate();
    await axios.post("http://localhost:3000/posts/", user);
    console.log("aaya")

  };

  let validate = () => {
    console.log("Inside Validate")
    if (user.password === user.confirmpassword) {
      console.log('password matched')
      navigate('/user/userList')
    }
    else {
      alert("password not matched,Try again!")
    }
  }

  return (
    <div className='main_page'>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">

          <div className='login' >
            <form className='login_form' onSubmit={e => onSubmit(e)} >
              <h1>Add User 👤</h1>

              <input type="text"
                placeholder="Enter Your Name"
                name="name"
                required
                value={user.name}
                onChange={e => onInputChange(e)}>
              </input>

              <input type='email'
                placeholder='Enter Your Email ID'
                name='email'
                required
                value={user.email}
                onChange={e => onInputChange(e)}>
              </input>

              <input type='number'
                placeholder='Enter Your Mobile number'
                name='mobileNo'
                required
                value={user.mobileNo}
                onChange={e => onInputChange(e)}>
              </input>

              <input type='password'
                placeholder='Enter Your Password'
                name='password'
                value={user.password}
                onChange={e => onInputChange(e)}>
              </input>

              <input type='password'
                placeholder='Confirm Password'
                name='confirmpassword'
                value={user.confirmpassword}
                onChange={e => onInputChange(e)}>
              </input>

              <button type='submit' className='submit_btn'>Submit</button>

            </form>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>

  )
}

export default AddUser


// import { useState, useEffect } from "react";
// import axios from 'axios'

// function AddUser() {
//   const initialValues = { username: "", email: "", password: "" };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   };

//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//        axios.post("http://localhost:3004/adduser");
//     }
//   }, [formErrors]);
//   const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.username) {
//       errors.username = "Username is required!";
//     }
//     if (!values.email) {
//       errors.email = "Email is required!";
//     } else if (!regex.test(values.email)) {
//       errors.email = "This is not a valid email format!";
//     }
//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (values.password.length < 4) {
//       errors.password = "Password must be more than 4 characters";
//     } else if (values.password.length > 10) {
//       errors.password = "Password cannot exceed more than 10 characters";
//     }
//     return errors;
//   };

//   return (
//     <div className="container">
//       {Object.keys(formErrors).length === 0 && isSubmit ? (
//         <div className="ui message success">Signed in successfully</div>
//       ) : (
//         <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
//       )}

//       <form onSubmit={handleSubmit}>
//         <h1>Login Form</h1>
//         <div className="ui divider"></div>
//         <div className="ui form">
//           <div className="field">
//             <label>Username</label>
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formValues.username}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.username}</p>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={formValues.email}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.email}</p>
//           <div className="field">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formValues.password}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.password}</p>
//           <button className="fluid ui button blue">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddUser;