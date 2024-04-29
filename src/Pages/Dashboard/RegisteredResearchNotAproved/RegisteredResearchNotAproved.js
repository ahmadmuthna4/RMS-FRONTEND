import '../RegisteredResearch/RegisteredResearch.css'
import Category from '../components/Category'
import { ToastContainer } from "react-toastify";
import Pagenation from '../../../components/Pagenation/Pagenation'
import { Link } from "react-router-dom";

import { useEffect , useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResearchNotAproved } from "../../../redux/apiCalls/ResearchNotAprovedApiCall";


const POST_PER_PAGE = 8;

const RegisteredResearch = () => {


    const dispatch = useDispatch();
    
    const { Research } = useSelector(state => state.ResearchNotAproved);
    console.log(Research)
    
    const { user } = useSelector(state => state.auth);
  


  const { RegisteredResearchsCount  } = useSelector(state => state.RegisteredResearch);
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(RegisteredResearchsCount / POST_PER_PAGE);

  useEffect(() => {
    dispatch(fetchResearchNotAproved(user.token,currentPage,user._id));
    window.scrollTo(0, 0);
  }, [currentPage,dispatch,user._id,user.token]);

  
  



  return (
    <>

<ToastContainer />
        
        <section class="portfolio" id="portfolio">

               
                <Category title='RegisteredResearch' />                
                 
                <div class="box-container">
                {Research.map(item => 
                        <div class="box" key={item?._id}>
                        <div class="research" >
                            <div class="VertCard" >
                            <div class="Image" ></div>
                            <div class="Content" >
                                <img src={item.ResearcherName.profilePhoto.url} alt="" className="Avatar" />
                                <div class="Username" >{item.ResearcherName.userName}</div>
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