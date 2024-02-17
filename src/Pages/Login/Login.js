
import  { useState } from 'react';
import './Login.css'

import { Link,useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import { useDispatch,useSelector } from "react-redux";
import { loginUser } from "../../redux/apiCalls/authApiCall";
import "react-toastify/dist/ReactToastify.css";

import { registerUser } from "../../redux/apiCalls/authApiCall";
import swal from "sweetalert";



const Login = () => {
    
    const [count, setCount] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    var { registerMessage } = useSelector(state => state.auth);
    // const { registerMessage } = useSelector(state => state.auth);
    const [userName, setUsername] = useState("");
    const [cardNumber, setcardNumber] = useState("");
    const [emailRegister, setEmailRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");

    const dispatch = useDispatch();

    // Form Submit Handler
    const formSubmitHandler = (e) => {
        e.preventDefault();
        if(email.trim() === "") return toast.error("Email is required");
        if(password.trim() === "") return toast.error("Password is required");
        

        
        dispatch(loginUser({ email, password }));
    }   
     
    // Form Submit Handler Register
    const formSubmitHandlerRegister = (e) => {
        console.log({userName, cardNumber,email,password})
        e.preventDefault();
        if(cardNumber.trim() === "") return toast.error("cardNumber is required");
        if(userName.trim() === "") return toast.error("Username is required");
        if(email.trim() === "") return toast.error("Email is required");
        if(password.trim() === "") return toast.error("Password is required");
        // if(emailRegister.trim() === "") return toast.error("Email is required");
        // if(passwordRegister.trim() === "") return toast.error("Password is required");
       
     
        
        
        
        dispatch(registerUser({ userName, cardNumber,email, password }))
        
       
       
        handleToggle()
        toast.success("your Rigister succefule pleasse log in");
           
        
    }




    const [isActive, setIsActive] = useState(false);
    const handleToggle = () => {
        setIsActive(!isActive);
        console.log('isActive');
    };
    

    const navigate = useNavigate(); 



    // const [c, setC] = useState(true);
    // var c=true
    // if(registerMessage) {
    //     // toast.success("cardNumber is required")
    //     // c=10
       
        
    //     swal({
    //         title: registerMessage,
    //         icon: "success"
    //     }).then(isOk => {
    //         if(isOk) {
    //         //    navigate("/login");
    //          console.log("sssssssssssss")
    //         //  setC(!c);
    //         // c=false
            
    //          handleToggle()
    //         }
    //     })
    // }
    
    return (
        <div className='body'>
            <ToastContainer />
            {/* <div className={isActive ? "active" : "inactive"} */}
            {/* <div className={`form-container ${isSignup ? 'sign-up' : 'sign-in'}`}> */}

            <div className={`container ${isActive ? 'active' : ''}`} id="container">
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
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all site features</p>
                            <button className="hidden"  onClick={handleToggle} id="login">Sign In</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details to use all site features</p>
                            <button className="hidden" id="register" onClick={handleToggle}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;



