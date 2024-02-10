// //STEP 1 -- IMPORT REACT
// import React, { useState } from 'react'
// import axios from 'axios'
// import Navbar from './Navbar'
// // import './Registration.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './login.css'; 


// //STEP 2 -- CREATE FUNCTIONAL COMPONENT
// function UserRegistration() {
//     const [ename, setEmpName] = useState("");
//     const [eemail, setEmpEmail] = useState("");
//     const [emobile, setEmpmobile] = useState("");
//     const [edob, setEmpDOB] = useState("");
//     const [epass, setEmpPass] = useState("");
//     const [egender, setEmpGender] = useState("");
//     const [ecountry, setEmpCountry] = useState("");
//     const [eaddress, setEmpAddress] = useState("");
//     const [msg, setMessage] = useState("");

//     const handleSubmit = (evt) => {

//       if (userType == "Admin" && secretKey != "AdarshT") {
//       e.preventDefault();
//       alert("Invalid Admin");
//     } else {
//       e.preventDefault();
//         evt.preventDefault();
//         console.log(`Form submitted:`);
//         console.log(`NAME: ${ename}`);
//         console.log(`EMAIL: ${eemail}`);

//         //CREATE JSON AND STORE ALL USER INPUT
//         const empinfo = {
//             empname: ename,
//             empemail: eemail,
//             empmobile: emobile,
//             empdob: edob,
//             emppass: epass,
//             empgender: egender,
//             empcountry: ecountry,
//             empaddress: eaddress
//         }

//         axios.post('http://localhost:4500/emp/register', empinfo)
//             .then(res => {
//               //  console.log(res.data)
//                 setMessage('REGISTRATION SUCCESSFUL')
//             });

//         setEmpName('')
//         setEmpEmail('')
//         setEmpmobile('')
//         setEmpDOB('')
//         setEmpPass('')
//         setEmpGender('')
//         setEmpCountry('')
//         setEmpAddress('')
//     }

//     return (
//         <>
//         <div>
//             <Navbar/>
//             </div>

//             <br />
            
            
//             <br/>
//             {/* <div class="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
//             <div class="max-w-md w-full p-6">
//             <h4 style={{ color: "brown" }}> {msg}</h4>
//             <form onSubmit={handleSubmit} method="POST" class="space-y-4">
//             <h3>REGISTRATION FORM</h3>

//             <div>
//           <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
//           <input type="text" id="username" name="username" class="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
//         </div>
//                 <label>Name</label>
//                 <input type="text" value={ename}
//                     onChange={(e) => setEmpName(e.target.value)} placeholder="Enter Name"
//                     required />
//                 <br /><br />
//                 <label>Email</label>

//                 <input type="email" value={eemail}
//                     onChange={(e) => setEmpEmail(e.target.value)} placeholder="Enter Email"
//                     required />
//                 <br /><br />
//                 <label>Mobile Number</label>
//                 <input type="number" value={emobile}
//                     onChange={(e) => setEmpmobile(e.target.value)} placeholder="Enter Mobile No"
//                     required />
//                 <br /><br />
//                 <label>Date Of Birth</label>
//                 <input type="date" value={edob}
//                     onChange={(e) => setEmpDOB(e.target.value)} />
//                 <br /><br />
//                 <label>Password</label>
//                 <input type="password" value={epass}
//                     onChange={(e) => setEmpPass(e.target.value)} placeholder="Enter Password"
//                     required />
//                 <br /><br />
//                 <label>Gender </label>
//                 <input type="radio" name="gender" value="MALE"
//                     checked={egender === 'MALE'}
//                     onChange={(e) => setEmpGender(e.target.value)} />
//                 <label>Male</label>

//                 <input type="radio" name="gender" value="FEMALE"
//                     checked={egender === 'FEMALE'}
//                     onChange={(e) => setEmpGender(e.target.value)} />
//                 <label>Female</label>
//                 <br /><br />
//                 <label>Country</label>
//                 <select value={ecountry} onChange={(e) => setEmpCountry(e.target.value)}>
//                     <option value="NULL">--Select--</option>
//                     <option value="AF">Afghanistan</option>
//                     <option value="India">India</option>
//                     <option value="UK">UK</option>
//                     <option value="USA">USA</option>
//                 </select>
//                 <br /><br />

//                 <label>ADDRESS: </label>
//                 <input type='text' value={eaddress}
//                     onChange={(e) => setEmpAddress(e.target.value)} rows="3" >
//                 </input>
//                 <br /><br />

//                 <input type="submit" value="REGISTER" />

//             </form> 
//             </div>
//             </div> */}
// <div className="auth-wrapper">
//       <div className="auth-inner">
//         <form onSubmit={handleSubmit}>
//           <h3>Sign Up</h3>
//           <div>
//             Register As
//             <input
//               type="radio"
//               name="UserType"
//               value="User"
//               onChange={(e) => setUserType(e.target.value)}
//             />
//             User
//             <input
//               type="radio"
//               name="UserType"
//               value="Admin"
//               onChange={(e) => setUserType(e.target.value)}
//             />
//             Admin
//           </div>
//           {userType == "Admin" ? (
//             <div className="mb-3">
//               <label>Secret Key</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Secret Key"
//                 onChange={(e) => setSecretKey(e.target.value)}
//               />
//             </div>
//           ) : null}

//           <div className="mb-3">
//             <label>User name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="First name"
//               onChange={(e) => setEmpName(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label>Full Name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Last name"
//               onChange={(e) => setEmpName(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label>Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//               onChange={(e) => setEmpEmail(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter password"
//               onChange={(e) => setEmpPass(e.target.value)}
//             />
//           </div>

//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary">
//               Sign Up
//             </button>
//           </div>
//           <p className="forgot-password text-right">
//             Already registered <a href="/sign-in">sign in?</a>
//           </p>
//         </form>
//       </div>
//     </div>
//     </>
//   );
// };


// //STEP 3 -- EXPORT IT TO USE IT
// export default UserRegistration

import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css';

export default function UserRegistration() {
    const [ename, setEmpName] = useState('');
    const [eemail, setEmpEmail] = useState('');
    const [emobile, setEmpMobile] = useState('');
    const [edob, setEmpDob] = useState('');
    const [epass, setEmpPass] = useState('');
    const [egender, setEmpGender] = useState('');
    const [ecountry, setEmpCountry] = useState('');
    const [eaddress, setEmpAddress] = useState('');
    const [msg, setMessage] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        console.log(`Name: ${ename}`);
        console.log(`Email: ${eemail}`);

        const empinfo = {
            empname: ename,
            empemail: eemail,
            empmobile: emobile,
            empdob: edob,
            emppass: epass,
            empgender: egender,
            empcountry: ecountry,
            empaddress: eaddress
        };

        axios.post('http://localhost:4500/emp/register', empinfo)
            .then(res => {
                setMessage('Registration Successful');
            })
            .catch(error => {
                console.error('Registration Error:', error);
                setMessage('Something went wrong. Please try again.');
            });

        setEmpName('');
        setEmpEmail('');
        setEmpMobile('');
        setEmpDob('');
        setEmpPass('');
        setEmpGender('');
        setEmpCountry('');
        setEmpAddress('');
    };

    return (
        <>
            <div className="auth-wrapper d-flex justify-content-center align-items-center">
                <div className="auth-inner">
                    <form onSubmit={handleSubmit}>
                        <h3>Registration Form</h3>

                        <div className="mb-3 text-left">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Name"
                                value={ename}
                                onChange={(e) => setEmpName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3 text-left">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Email"
                                value={eemail}
                                onChange={(e) => setEmpEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3 text-left">
                            <label>Mobile Number</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Mobile No"
                                value={emobile}
                                onChange={(e) => setEmpMobile(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3 text-left">
                            <label>Date Of Birth</label>
                            <input
                                type="date"
                                className="form-control"
                                value={edob}
                                onChange={(e) => setEmpDob(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3 text-left">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter Password"
                                value={epass}
                                onChange={(e) => setEmpPass(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3 text-left">
                            <label>Gender</label>
                            <select
                                className="form-control"
                                value={egender}
                                onChange={(e) => setEmpGender(e.target.value)}
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>

                        <div className="mb-3 text-left">
                            <label>Country</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Country"
                                value={ecountry}
                                onChange={(e) => setEmpCountry(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3 text-left">
                            <label>Address</label>
                            <textarea
                                className="form-control"
                                placeholder="Enter Address"
                                value={eaddress}
                                onChange={(e) => setEmpAddress(e.target.value)}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Register</button>
                        <p className="forgot-password text-right">
                            Already registered <a href="./login">sign in?</a>
                        </p>
                        <h4>{msg}</h4>
                    </form>
                </div>
            </div>
        </>
    );
}



