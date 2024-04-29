import './ModificationRrequest'
import Category from '../components/Category'
import { ToastContainer } from "react-toastify";
import Pagenation from '../../../components/Pagenation/Pagenation'
import { Link } from "react-router-dom";

import { useEffect , useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchModificationRrequest,getModificationRrequestCount } from "../../../redux/apiCalls/modificationRrequestApiCall";


const POST_PER_PAGE = 8;

const RegisteredResearch = () => {


    const dispatch = useDispatch();
    
    const { ModificationRrequests } = useSelector(state => state.ModificationRrequest);
    const { user } = useSelector(state => state.auth);
  
    useEffect(() => {
      dispatch(fetchModificationRrequest(1,user._id));

    }, [dispatch,user._id]);

  const { ModificationRrequestsCount  } = useSelector(state => state.ModificationRrequest);
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(ModificationRrequestsCount / POST_PER_PAGE);

  useEffect(() => {
    dispatch(fetchModificationRrequest(currentPage,user._id));
    console.log(user.token)
    console.log(user._id)
    window.scrollTo(0, 0);
  }, [currentPage,dispatch,user._id,user.token]);

  useEffect(() => {
    dispatch(getModificationRrequestCount(user._id));
  }, [dispatch,user._id]);

  



  return (
    <>

<ToastContainer />
        
        <section class="portfolio" id="portfolio">

               
                <Category title='RegisteredResearch' />                
                 
                <div class="box-container">
                   {ModificationRrequests.map(item => 
                          <div class="box" key={item?._id}>
                          <div class="research" >
                              <div class="VertCard" >
                              <div class="Image" ></div>
                              <div class="Content" >
                                  <div class="Username" >{item?.Type}</div>
                                  <div class="ResearchName" >{item?.ResearchName}</div>
                                  <div class="ResearchName" >{item?.Research?.ResearchNameArabic}</div>
                              </div>
                              <div class="Button" >
                                  <Link className="Details" to={`/ModificationRrequest/Single/${item?._id}`}>
                                  
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