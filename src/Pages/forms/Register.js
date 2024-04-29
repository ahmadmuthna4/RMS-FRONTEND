// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer,toast } from "react-toastify";
// import "./form.css";
// import { useDispatch, useSelector } from "react-redux";
// import 'react-toastify/dist/ReactToastify.css';

// import { registerUser } from "../../redux/apiCalls/authApiCall";
// import swal from "sweetalert";

// const Register = () => {
//     const dispatch = useDispatch();
//     console.log(dispatch)
//     const { registerMessage } = useSelector(state => state.auth);

//     const [userName, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [cardNumber, setcardNumber] = useState("");

 

//     // Form Submit Handler
//     const formSubmitHandler = (e) => {
//         e.preventDefault();
//         if(userName.trim() === "") return toast.error("Username is required");
//         if(cardNumber.trim() === "") return toast.error("cardNumber is required");
//         if(email.trim() === "") return toast.error("Email is required");
//         if(password.trim() === "") return toast.error("Password is required");
        
//         console.log({userName, cardNumber,email,password})
//         dispatch(registerUser({ userName, cardNumber,email, password }))
//     }

//     const navigate = useNavigate(); 

//     if(registerMessage) {
//         swal({
//             title: registerMessage,
//             icon: "success"
//         }).then(isOk => {
//             if(isOk) {
//                navigate("/login");
//             }
//         })
//     }


//     return ( 
//         <section className="form-container">
//             <h1 className="form-title">Create new account</h1>
//             <form onSubmit={formSubmitHandler} className="form">
//                 <div className="form-group">
//                     <label htmlFor="username" className="form-label">
//                         Username
//                     </label>
//                     <input 
//                      type="text" 
//                      className="form-input"
//                      id="username"
//                      placeholder="Enter your username"
//                      value={userName}
//                      onChange={(e) => setUsername(e.target.value)}
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="cardNumber" className="form-label">
//                     cardNumber
//                     </label>
//                     <input 
//                      type="text" 
//                      className="form-input"
//                      id="username2"
//                      placeholder="Enter your cardNumber"
//                      value={cardNumber}
//                      onChange={(e) => setcardNumber(e.target.value)}
//                     />
//                 </div>

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
//                 <button className="form-btn" type="submit" >
//                     Register
//                 </button>
//                 <ToastContainer />
//             </form>
//             <div className="form-footer">
//                 Already have an account? <Link to="/login">Login</Link>
//             </div>
//         </section>
//      );
// }
 
// export default Register;








import  { useState } from 'react';
import './form.css'

import { Link,useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import { useDispatch,useSelector } from "react-redux";
// import { loginUser } from "../../redux/apiCalls/authApiCall";
import "react-toastify/dist/ReactToastify.css";

import { registerUser } from "../../redux/apiCalls/authApiCall";
import swal from "sweetalert";



const Login = () => {
    
    
    

    const { registerMessage } = useSelector(state => state.auth);

    const [userName, setUsername] = useState("");
    const [cardNumber, setcardNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

     
     
    // Form Submit Handler Register
    const formSubmitHandlerRegister = (e) => {
        console.log({userName, cardNumber,email,password})
        e.preventDefault();
        if(cardNumber.trim() === "") return toast.error("cardNumber is required");
        if(userName.trim() === "") return toast.error("Username is required");
        if(email.trim() === "") return toast.error("Email is required");
        if(password.trim() === "") return toast.error("Password is required");
        console.log("000000")
        dispatch(registerUser({ userName, cardNumber,email, password }))    
        console.log("11111")  
    }
    



   

    const navigate = useNavigate();
    console.log("33333333") 



    
    if(registerMessage) {
    console.log("44444444444") 
        
        swal({
            title: registerMessage,
            icon: "success"
        }).then(isOk => {
            if(isOk) {
               navigate("/");
            }
        })
    }
    
    return (
        <div className='body'>
            <ToastContainer />
         

            <div className={`container active`} id="container">
                <div className="form-container sign-up">
                    <form onSubmit={formSubmitHandlerRegister} >
                        <h1>Create Account</h1>
                        <span>Use your email for registration</span>
                        {/* <input type="text" placeholder="Card Number" /> */}
                        <input 
                            type="text" 
                            id="username2"
                            placeholder="Enter your cardNumber"
                            value={cardNumber}
                            onChange={(e) => setcardNumber(e.target.value)}
                            />
                        {/* <input type="text" placeholder="Name" /> */}
                        <input 
                            type="text" 
                            id="username"
                            placeholder="Enter your username"
                            value={userName}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                        {/* <input type="email" placeholder="Email" /> */}
                        <input 
                            type="email" 
                            className="form-input"
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
                        <button type="submit"  >Sign Up</button>
                    </form>
                </div>

                


                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all site features</p>
                            <Link to={'/Login'} ><button className="hidden"   id="login">Sign In</button></Link>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;



