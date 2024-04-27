import './RegisteredResearch.css'
import img1 from "../../../assets/9.png"
import Category from '../components/Category'
import { ToastContainer } from "react-toastify";
import Pagenation from '../../../components/Pagenation/Pagenation'
import { Link } from "react-router-dom";

import { useEffect , useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegisteredResearchs2,getRegisteredResearchs2Count,getRegisteredResearchs2ApprovedCount } from "../../../redux/apiCalls/postApiCall";


const POST_PER_PAGE = 8;

const RegisteredResearch = () => {


    const dispatch = useDispatch();
    
    const { RegisteredResearchs } = useSelector(state => state.RegisteredResearch);
    const { user } = useSelector(state => state.auth);
  
    useEffect(() => {
      dispatch(fetchRegisteredResearchs2(user.token,1,user._id));

    }, []);

  const { RegisteredResearchsCount,RegisteredResearchsApprovedCount  } = useSelector(state => state.RegisteredResearch);
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(RegisteredResearchsApprovedCount / POST_PER_PAGE);

  useEffect(() => {
    dispatch(fetchRegisteredResearchs2(user.token,currentPage,user._id));
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    dispatch(getRegisteredResearchs2Count(user.token,user._id));
    dispatch(getRegisteredResearchs2ApprovedCount(user.token,user._id));
  }, []);

  



  return (
    <>

<ToastContainer />
        
        <section class="portfolio" id="portfolio">

               
                <Category title='RegisteredResearch' />                
                 
                <div class="box-container">
                {RegisteredResearchs.map(item => 
                        <div class="box" key={item?._id}>
                        <div class="research" >
                            <div class="VertCard" >
                            <div class="Image" ></div>
                            <div class="Content" >
                                {/* <img src={item.ResearcherName.profilePhoto.url} alt="" className="Avatar" />
                                <div class="Username" >{item.ResearcherName.userName}</div> */}

                                {item.ResearcherName && item.ResearcherName.profilePhoto &&
                                  <img src={item.ResearcherName.profilePhoto.url} alt="" className="Avatar" />
                                }
                                
                                {item.ResearcherName && item.ResearcherName.profilePhoto &&
                                  <div class="Username" >{item.ResearcherName.userName}</div>
                                }
                                {/* <div class="ResearchName" >{item?.ResearcherName.userName}</div> */}
                                <div class="ResearchName" >{item?.ResearchNameArabic}</div>
                            </div>
                            <div class="Button" >
                                {/* <div class="Details" >Details  ----    </div> */}
                                <Link className="Details" to={`/researchsRegistere/Single/${item?._id}`}>
                                    Read More...
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                    )}
                  
                    

                </div>
                {/* <Pagenation /> */}
                <Pagenation
                    pages={pages} 
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                   
                   />

        </section>

            
    </>
  )
}

export default RegisteredResearch