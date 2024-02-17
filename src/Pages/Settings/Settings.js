import './Settings.css'
import img2 from '../../assets/9.png'

import { useEffect, useState } from "react";
import swal from "sweetalert";
import { ToastContainer,toast } from "react-toastify";

import {
    // deleteProfile,
    // getUserProfile,
    uploadProfilePhoto,
  } from "../../redux/apiCalls/profileApiCall";
  import { useDispatch, useSelector } from "react-redux";

const Settings = () => {
    const dispatch = useDispatch();
    const [updateProfile, setUpdateProfile] = useState(false);
    const [file, setFile] = useState(null);

    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

      // Form Submit Handler
    const formSubmitHandler = (e) => {
        e.preventDefault();
        if(!file) 
        {
            // console.log("image uploaded2");
            return toast.warning("there is no file!");
        }

        const formData = new FormData();
        formData.append("image", file);
        

        dispatch(uploadProfilePhoto(formData));
    }


  return (
   <>
   <form onSubmit={formSubmitHandler}> 
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
                            <form action="" method="get">
                                <input type="text" name="" id="" placeholder="FULL NAME" />
                                <input type="text" name="" id="" placeholder="EMAIL" />
                                <input type="text" name="" id="" placeholder="PASSWORD" />
                            </form>  
                            <div class="action">
                                {/* <button>save changes</button> */}
                                <button type="submit"  onClick={() => setUpdateProfile(true)} >save changes</button>
                                {/* <button type="submit" onClick={() => { setUpdateProfile(true); window.location.reload(); }}>Save Changes</button> */}

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

// import "./Profile.css";

// import { useEffect, useState } from "react";
// import swal from "sweetalert";
// import { ToastContainer,toast } from "react-toastify";

// import {
//     // deleteProfile,
//     // getUserProfile,
//     uploadProfilePhoto,
//   } from "../../redux/apiCalls/profileApiCall";
//   import { useDispatch, useSelector } from "react-redux";


// const Profile = () => {
// const dispatch = useDispatch();
//   const [updateProfile, setUpdateProfile] = useState(false);
//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   // Form Submit Handler
//   const formSubmitHandler = (e) => {
//     e.preventDefault();
//     if(!file) 
//     {
//         // console.log("image uploaded2");
//         return toast.warning("there is no file!");
//     }

//     const formData = new FormData();
//     formData.append("image", file);
    

//     dispatch(uploadProfilePhoto(formData));
//   }

//   // Delete Account Handler
//   const deleteAccountHandler = () => {
//     swal({
//       title: "Are you sure?",
//       text: "Once deleted, you will not be able to recover your account!",
//       icon: "warning",
//       buttons: true,
//       dangerMode: true,
//     }).then((willDelete) => {
//       if (willDelete) {
//         swal("Account has been deleted!", {
//           icon: "success",
//         });
//       } else {
//         swal("Something went wrong!");
//       }
//     });
//   }

//   return (
//     <section className="profile">
//         <ToastContainer />
//       <div className="profile-header">
//         <div className="profile-image-wrapper">
//           <img src={file ? URL.createObjectURL(file) :img2} alt="" className="profile-image" />
//           <form onSubmit={formSubmitHandler}>
//           <abbr title="choose profile photo">
//             <label
//               htmlFor="file"
//               className="fas fa-camera fa-2x upload-profile-photo-icon"
//             //   className="bi bi-camera-fill upload-profile-photo-icon"
//             ></label>
//           </abbr>
//             <input
//               type="file"
//               name="file"
//               id="file"
//               style={{ display: "none" }}
//               onChange={e => setFile(e.target.files[0])}
//             />
//             <button type="submit" className="upload-profile-photo-btn">upload</button>
//           </form>
//         </div>
//         <h1 className="profile-username">Youssef Abbas</h1>
//         <p className="profile-bio">
//           hello my name is Youssef I am a web developer
//         </p>
//         <div className="user-date-joined">
//           <strong>Date Joined: </strong>
//           <span>Fri Nov 04 2022</span>
//         </div>
//         <button onClick={() => setUpdateProfile(true)} className="profile-update-btn">
//           <i className="bi bi-file-person-fill"></i>
//           Update Profile
//         </button>
//       </div>
      
//       <button  onClick={deleteAccountHandler} className="delete-account-btn">
//         Delete Your Account
//       </button>
//       {/* {updateProfile && <UpdateProfileModal setUpdateProfile={setUpdateProfile} />} */}
//     </section>
//   );
// };

// export default Profile;
