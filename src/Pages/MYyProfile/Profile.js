
import swal from "sweetalert";
import { ToastContainer,toast } from "react-toastify";

import {
    // deleteProfile,
    // getUserProfile,
    uploadProfilePhoto,
  } from "../../redux/apiCalls/profileApiCall";
  import { useDispatch, useSelector } from "react-redux";
import "./Profile.css"
import img1 from "../../assets/bg3.jpg"
import img2 from "../../assets/0.jpg"
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import {
    // deleteProfile,
    getUserProfile,
    // uploadProfilePhoto,
  } from "../../redux/apiCalls/profileApiCall";


const Profile = () => {
    const dispatch = useDispatch();
    const { profile} = useSelector((state) => state.profile);

    const { id } = useParams();

    useEffect(() => {
        dispatch(getUserProfile(id));
        window.scrollTo(0, 0);
    }, [id]);

    const navigate = useNavigate();
  return (
    <>
    
        <div class="box-container">
            <div class="box-content">

                <div class="profile_information">

                    <div class="card_infrormation">
                        <img src={profile?.profilePhoto?.url} alt="" className="Avatar" />
                        <h2>{profile?.userName}</h2>
                        <p>{profile?.email}</p>
                        <i class="fas fa-cog fa-2x"></i>
                    </div>

                    <div class="background_image">
                        <img src={img1} alt="" className="Avatar" />
                        <i class="fas fa-camera fa-2x"></i>
                    </div>

                </div>

                <div class="my_researchs">

                    <div class="card_infrormation">
                        <div class="header_card">
                            <h3>Published research  </h3>
                            <p>(123) All</p>
                        </div>
                        <div class="content_card">
                            <img src={img2} alt="" className="Avatar" />    
                            <h3>Research Name</h3>
                            <button>Full Review</button>
                        </div>
                        <div class="content_card">
                            <img src={img2} alt="" className="Avatar" /> 
                            <h3>Research Name</h3>
                            <button>Full Review</button>
                        </div>
                        <div class="content_card">
                            <img src={img2} alt="" className="Avatar" /> 
                            <h3>Research Name</h3>
                            <button>Full Review</button>
                        </div>
                        <div class="content_card">
                            <img src={img2} alt="" className="Avatar" /> 
                            <h3>Research Name</h3>
                            <button>Full Review</button>
                        </div>
                    </div>

                    <div class="card_infrormation">
                        <div class="header_card">
                            <h3>Registered research</h3>
                            <p>(123) All</p>
                        </div>
                        <div class="content_card">
                            <img src={img2} alt="" className="Avatar" /> 
                            <h3>Research Name</h3>
                            <button>Full Review</button>
                        </div>
                        <div class="content_card">
                            <img src={img2} alt="" className="Avatar" /> 
                            <h3>Research Name</h3>
                            <button>Full Review</button>
                        </div>
                        <div class="content_card">
                            <img src={img2} alt="" className="Avatar" /> 
                            <h3>Research Name</h3>
                            <button>Full Review</button>
                        </div>
                        <div class="content_card">
                            <img src={img2} alt="" className="Avatar" /> 
                            <h3>Research Name</h3>
                            <button>Full Review</button>
                        </div>
                    </div>


                </div>
                

            </div>
        </div>
    </>
  )
}

export default Profile



