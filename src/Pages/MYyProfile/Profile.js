

import {
    // deleteProfile,
    // getUserProfile,
    // uploadProfilePhoto,
  } from "../../redux/apiCalls/profileApiCall";
  import { useDispatch, useSelector } from "react-redux";
import "./Profile.css"
import img1 from "../../assets/bg3.jpg"
import {  useEffect } from "react";
import { useParams,Link } from "react-router-dom";

import {
    // deleteProfile,
    getUserProfile,
    // uploadProfilePhoto,
  } from "../../redux/apiCalls/profileApiCall";
import {
    fetchRegisteredResearchs2,
    getRegisteredResearchs2ApprovedCount,
  } from "../../redux/apiCalls/postApiCall";
import {
    fetchPublishedResearchs2,
    getPublishedResearchs2Count,
    
  } from "../../redux/apiCalls/postApiCall2";



const Profile = () => {


    const dispatch = useDispatch();
    const { user} = useSelector((state) => state.auth);
    const { RegisteredResearchs} = useSelector((state) => state.RegisteredResearch);
    const { RegisteredResearchsApprovedCount} = useSelector((state) => state.RegisteredResearch);
    const { PublishedResearchs} = useSelector((state) => state.PublishedResearch);
    const { PublishedResearchsCount} = useSelector((state) => state.PublishedResearch);


    const { id } = useParams();

    useEffect(() => {
        dispatch(getUserProfile(id));
        dispatch(fetchRegisteredResearchs2(user.token,1,id));
        dispatch(getRegisteredResearchs2ApprovedCount(user.token,id));
        dispatch(fetchPublishedResearchs2(user.token,1,id));
        dispatch(getPublishedResearchs2Count(user.token,id));
        console.log('PublishedResearchs')
        window.scrollTo(0, 0);
    }, [id,dispatch,user.token]);

   

  return (
    <>
    
        <div class="box-container">
            <div class="box-content">

                <div class="profile_information">

                    <div class="card_infrormation">
                        <img src={user?.profilePhoto?.url} alt="" className="Avatar" />
                        <h2>{user?.userName}</h2>
                        <p>{user?.email}</p>
                        
                        <Link
                                className="buttton"
                                to={`/Settings`}>
                                <i class="fas fa-cog fa-2x"></i>
                            </Link>
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
\                            <Link
                                className="buttton"
                                to={`/`}>
                                <p>({PublishedResearchsCount}) All</p>
                            </Link>
                        </div>

                        {PublishedResearchs.map((item) => (
                            
                            <div class="content_card" key={item?._id}>
                                <img src={user?.profilePhoto?.url} alt="" className="Avatar" /> 
                                <h3>{item?.ResearchName?.substring(0, 7)}..</h3>
                                <Link
                                    className="buttton"
                                    to={`/publishedResearchSigle/Single/${item?._id}`}>
                                    Full Review
                                </Link>
                            </div>
                            
                        ))}


                                
                        </div>

                    <div class="card_infrormation">
                        <div class="header_card">
                            <h3>Registered research</h3>
                            {/* <p>({RegisteredResearchsApprovedCount}) All</p> */}
                            <Link
                                className="buttton"
                                to={`/RegisteredResearch`}>
                                <p>({RegisteredResearchsApprovedCount}) All</p>
                            </Link>
                        </div>


                        {RegisteredResearchs.map((item) => (
                        
                        <div class="content_card" key={item?._id}>
                            <img src={user?.profilePhoto?.url} alt="" className="Avatar" /> 
                            <h3>{item?.ResearchNameEnglish?.substring(0, 7)}..</h3>
                            <Link
                                className="buttton"
                                to={`/researchsRegistere/Single/${item?._id}`}>
                                Full Review
                            </Link>
                        </div>
                           
                      ))}

                     




                    </div>


                </div>
                

            </div>
        </div>
    </>
  )
}

export default Profile



