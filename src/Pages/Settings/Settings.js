import './Settings.css'
import img2 from '../../assets/9.png'

import { useEffect, useState } from "react";
import { ToastContainer,toast } from "react-toastify";

import {
    // deleteProfile,
    // getUserProfile,
    updateProfile,
    uploadProfilePhoto,
  } from "../../redux/apiCalls/profileApiCall";
  import { useDispatch, useSelector } from "react-redux";

const Settings = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);

    const [userName, setuserName] = useState(user.userNmae);
    const [password, setPassword] = useState(user.password);

    const [file, setFile] = useState(null);

    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

      // Form Submit Handler
    const formSubmitHandler = (e) => {
        e.preventDefault();
        
        if(file) 
        
        {
            const formData = new FormData();
            formData.append("image", file);
            dispatch(uploadProfilePhoto(formData));
        }
        
        dispatch(updateProfile(user._id,{ userName, password }));
        toast.success("update information successfuly :)", {
            onClose: () => {
              // Reload the page after the toast message is closed
              window.location.reload();
            }
          });
    }

 


  return (
   <>
   {/* <form onSubmit={formSubmitHandler}>  */}
   <form > 
              <section class="portfolio" id="portfolio">
                    <ToastContainer />
                    <div class="update_information_container">
                        <div class="update_image">
                            <div class="icon">
                            <img src={file ? URL.createObjectURL(file) :img2} alt="" className="profile-image" />
                                {/* <i class="fas fa-camera fa-2x"></i> */}
                            {/* <form onSubmit={formSubmitHandler}> */}
                                <abbr title="choose profile photo">
                                    <label style={{backgroundColor:'transparent'}}
                                                htmlFor="file"
                                                className="fas fa-camera fa-2x upload-profile-photo-icon"
                                    >
                                    </label>
                                </abbr>
                                <input
                                type="file"
                                name="file"
                                id="file"
                                style={{ display: "none" }}
                                onChange={e => setFile(e.target.files[0])}
                                />
                        
                            {/* </form> */}

                            </div>
                            <span>click</span>
                            <p>PNG OR JPG MAX 2MB</p>
                        </div>
                        <div class="update_information">
                            
                            <div class="title">
                                <h3>Edit Your Information</h3>
                            </div>
                         
                             <form action="" method="get"    >
                                <input 
                                type="userName" 
                                id="email"
                                placeholder="Enter your username"
                                value={userName}
                                onChange={(e) => setuserName(e.target.value)}
                                />
                                <input 
                                type="password" 
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                />
                                 
                             </form>
                             <div className="action">
                                {file || password || userName ? (
                                    <button  onClick={formSubmitHandler}>save changes</button>
                                ) : (
                                    <button>save changes</button>
                                )}
                                <button>CANCEL</button>
                            </div>        
                        </div>
                        
                    </div>

                    </section>
    </form>
   
   </>
  )
}

export default Settings
