import './Category.css'
import { Link } from "react-router-dom";

import  { useState,useEffect } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { fetchuserss2,getuserss2Count } from "../../../redux/apiCalls/usersApiCall";
import { getModificationRrequestCount } from "../../../redux/apiCalls/modificationRrequestApiCall";



const Category = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { RegisteredResearchsCount,RegisteredResearchsApprovedCount } = useSelector((state) => state.RegisteredResearch);
    const { PublishedResearchsCount } = useSelector((state) => state.PublishedResearch);
    const { userssCount  } = useSelector(state => state.users);
    // const { ModificationRrequestsCount  } = useSelector(state => state.ModificationRrequests);
    const { ModificationRrequestsCount } = useSelector(state => state.ModificationRrequest);
    const [activeLink, setActiveLink] = useState(null);
    useEffect(() => {
        if (user?.isAdmin) {
            dispatch(getuserss2Count(user.token));
        }
        
        dispatch(getModificationRrequestCount(user._id));
        // console.log(ModificationRrequestsCount)
      }, []);

    const handleLinkClick = (index) => {
        setActiveLink(index);
        console.log(index)
    };
  return (
    <>
        

            <div class="category" >

            <Link to={''} onClick={() => handleLinkClick(0)} >
                    <div  className={`Frame655 ${activeLink == 0 ? 'active' : ''}`}  >
                            <div class="Frame64" >
                            <div class="Researchers2" >Published  Research<br/></div>
                            </div>
                            <div class="Frame62" >
                            <div class="Vector">
                            <i class="fas fa-book fa-2x"></i>

                            </div>
                            <div class="Frame61">
                                <div >{PublishedResearchsCount}</div>
                            </div>
                            </div>
                    </div>
                </Link>     
            

                
            <Link to={'/RegisteredResearch'} onClick={() => handleLinkClick(1)} >
                <div className={`Frame655 ${activeLink == 1 ? 'active' : ''}`}  >
                    <div class="Frame64" >
                    <div class="Researchers2" >Registered Research<br/></div>
                    </div>
                    <div class="Frame62" >
                    <div class="Vector">
                    <i class="fas fa-book fa-2x"></i>
                    
                    </div>
                    <div class="Frame61">
                        <div >{RegisteredResearchsApprovedCount}</div>
                    </div>
                    </div>
                </div>
            </Link> 
            <Link to={'/ResearchNotAproved'} onClick={() => handleLinkClick(2)} >
                <div className={`Frame655 ${activeLink == 2 ? 'active' : ''}`}  >
                    <div class="Frame64" >
                    <div class="Researchers2" >Not Aproved<br/></div>
                    </div>
                    <div class="Frame62" >
                    <div class="Vector">
                    <i class="fas fa-book fa-2x"></i>
                    
                    </div>
                    <div class="Frame61">
                        <div >{RegisteredResearchsCount}</div>
                    </div>
                    </div>
                </div>
            </Link> 

            {user?.isAdmin ? 
                <Link to={'/Researchers'} onClick={() => handleLinkClick(3)}  >
                    <div className={`Frame655 ${activeLink == 3 ? 'active' : ''}`} >
                        <div class="Frame64" >
                        <div class="Researchers2" style={{ marginTop: '20px' }} >Researchers        <br/></div>
                        </div>
                        <div class="Frame62" >
                        <div class="Vector">
                            <i class="fas fa-user fa-2x"></i>
                        
                        </div>
                        <div class="Frame61">
                            <div >{userssCount}</div>
                        </div>
                        </div>
                    </div>
                </Link> 
               : ''}
               <Link to={'/ModificationRrequest'} onClick={() => handleLinkClick(4)}  >
                    <div className={`Frame655 ${activeLink == 4 ? 'active' : ''}`} >
                        <div class="Frame64" >
                        <div class="Researchers2"  >Modification Rrequest<br/></div>
                        </div>
                        <div class="Frame62" >
                        <div class="Vector">
                            <i class="fas fa-user fa-2x"></i>
                        
                        </div>
                        <div class="Frame61">
                            <div >{ModificationRrequestsCount}</div>
                        </div>
                        </div>
                    </div>
                </Link> 
                

            </div>



    
    </>
  )
}

export default Category