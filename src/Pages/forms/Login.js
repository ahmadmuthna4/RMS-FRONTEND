// import { useState } from "react";
// import "./form.css";
// import { Link } from "react-router-dom";
// import { ToastContainer,toast } from "react-toastify";

// import { useDispatch } from "react-redux";
// import { loginUser } from "../../redux/apiCalls/authApiCall";

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const dispatch = useDispatch();

//     // Form Submit Handler
//     const formSubmitHandler = (e) => {
//         e.preventDefault();
//         if(email.trim() === "") return toast.error("Email is required");
//         if(password.trim() === "") return toast.error("Password is required");
//         dispatch(loginUser({ email, password }));
//     }


//     return ( 
//         <section className="form-container">
//             <h1 className="form-title">Login to your account</h1>
//             <form onSubmit={formSubmitHandler} className="form">
//                 <div className="form-group">
//                     <label htmlFor="email" className="form-label">
//                         Email
//                     </label>
//                     <input 
//                      type="email" 
//                      className="form-input"
//                      id="email"
//                      placeholder="Enter your email"
//                      value={email}
//                      onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password" className="form-label">
//                       Password
//                     </label>
//                     <input 
//                      type="password" 
//                      className="form-input"
//                      id="password"
//                      placeholder="Enter your password"
//                      value={password}
//                      onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//                 <button className="form-btn" type="submit">
//                     Login
//                 </button>
//                 <ToastContainer />
//             </form>
//             <div className="form-footer">
//                 Did you forgot your password ? 
//                 <Link to="/forgot-password">Frogot Password</Link>
//             </div>
//         </section>
//      );
// }
 
// export default Login;






import  { useState } from 'react';
import './form.css'

import { Link,useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import { useDispatch,useSelector } from "react-redux";
import { loginUser } from "../../redux/apiCalls/authApiCall";
import "react-toastify/dist/ReactToastify.css";

import { registerUser } from "../../redux/apiCalls/authApiCall";
import swal from "sweetalert";



const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

 

    const dispatch = useDispatch();

    // Form Submit Handler
    const formSubmitHandler = (e) => {
        e.preventDefault();
        if(email.trim() === "") return toast.error("Email is required");
        if(password.trim() === "") return toast.error("Password is required");
        

        
        dispatch(loginUser({ email, password }));
    }   
     
   




   



  
    
    return (
        <div className='body'>
            <ToastContainer />
       

            <div className={`container `} id="container">
               

                <div className="form-container sign-in">
                    <form onSubmit={formSubmitHandler} >
                        <h1>Sign In</h1>
                        <span>Or use your email password</span>
                        {/* <input type="email" placeholder="Email" /> */}
                        <input 
                            type="email" 
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        {/* <input type="password" placeholder="Password" /> */}
                        <input 
                            type="password" 
                            className="form-input"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <a href="#">Forget Your Password?</a>
                        <button type="submit" >Sign In</button>
                        
                    </form>
                </div>


                <div className="toggle-container">
                    <div className="toggle">
                        
                        <div className="toggle-panel toggle-right">
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details to use all site features</p>
                            <Link to={'/Register'} ><button className="hidden" id="register" >Sign Up</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;



