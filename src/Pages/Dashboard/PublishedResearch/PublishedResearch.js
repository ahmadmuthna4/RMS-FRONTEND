// import './PublishedResearch.css'
// import img1 from "../../../assets/9.png"
// import Category from '../components/Category'


// const PublishedResearch = () => {
//   return (
//     <>


        
//         <section class="portfolio" id="portfolio">

                
                
//                 {/* <div class="category" >
//                     <Category title='PublishedResearch' /> 
//                     <Category title='PublishedResearch' /> 
//                     <Category title='PublishedResearch' /> 
//                 </div> */}
//                 <Category title='PublishedResearch' /> 

//                 <div class="box-container">
//                         <div class="box">
//                             <div class="research" >
//                                 <div class="VertCard" >
//                                 <div class="Image" ></div>
//                                 <div class="Content" >
//                                     <img src={img1} alt="" className="Avatar" />
//                                     <div class="Username" >UserName</div>
//                                     <div class="ResearchName" >Research Name</div>
//                                 </div>
//                                 <div class="Button" >
//                                     <div class="Details" >Details  ----    </div>
//                                 </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="box">
//                             <div class="research" >
//                                 <div class="VertCard" >
//                                 <div class="Image" ></div>
//                                 <div class="Content" >
//                                     <img src={img1} alt="" className="Avatar" />
//                                     <div class="Username" >UserName</div>
//                                     <div class="ResearchName" >Research Name</div>
//                                 </div>
//                                 <div class="Button" >
//                                     <div class="Details" >Details  ----    </div>
//                                 </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="box">
//                             <div class="research" >
//                                 <div class="VertCard" >
//                                 <div class="Image" ></div>
//                                 <div class="Content" >
//                                     <img src={img1} alt="" className="Avatar" />
//                                     <div class="Username" >UserName</div>
//                                     <div class="ResearchName" >Research Name</div>
//                                 </div>
//                                 <div class="Button" >
//                                     <div class="Details" >Details  ----    </div>
//                                 </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="box">
//                             <div class="research" >
//                                 <div class="VertCard" >
//                                 <div class="Image" ></div>
//                                 <div class="Content" >
//                                     <img src={img1} alt="" className="Avatar" />
//                                     <div class="Username" >UserName</div>
//                                     <div class="ResearchName" >Research Name</div>
//                                 </div>
//                                 <div class="Button" >
//                                     <div class="Details" >Details  ---   </div>
//                                 </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="box">
//                             <div class="research" >
//                                 <div class="VertCard" >
//                                 <div class="Image" ></div>
//                                 <div class="Content" >
//                                     <img src={img1} alt="" className="Avatar" />
//                                     <div class="Username" >UserName</div>
//                                     <div class="ResearchName" >Research Name</div>
//                                 </div>
//                                 <div class="Button" >
//                                     <div class="Details" >Details  -----    </div>
//                                 </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="box">
//                             <div class="research" >
//                                 <div class="VertCard" >
//                                 <div class="Image" ></div>
//                                 <div class="Content" >
//                                     <img src={img1} alt="" className="Avatar" />
//                                     <div class="Username" >UserName</div>
//                                     <div class="ResearchName" >Research Name</div>
//                                 </div>
//                                 <div class="Button" >
//                                     <div class="Details" >Details  ----    </div>
//                                 </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="box">
//                             <div class="research" >
//                                 <div class="VertCard" >
//                                 <div class="Image" ></div>
//                                 <div class="Content" >
//                                     <img src={img1} alt="" className="Avatar" />
//                                     <div class="Username" >UserName</div>
//                                     <div class="ResearchName" >Research Name</div>
//                                 </div>
//                                 <div class="Button" >
//                                     <div class="Details" >Details  ----    </div>
//                                 </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="box">
//                             <div class="research" >
//                                 <div class="VertCard" >
//                                 <div class="Image" ></div>
//                                 <div class="Content" >
//                                     <img src={img1} alt="" className="Avatar" />
//                                     <div class="Username" >UserName</div>
//                                     <div class="ResearchName" >Research Name</div>
//                                 </div>
//                                 <div class="Button" >
//                                     <div class="Details" >Details  ----    </div>
//                                 </div>
//                                 </div>
//                             </div>
//                         </div>
                    

//                 </div>

//         </section>

            
//     </>
//   )
// }

// export default PublishedResearch



import './PublishedResearch.css'
import img1 from "../../../assets/9.png"
import Category from '../components/Category'
import { ToastContainer } from "react-toastify";
import Pagenation from '../../../components/Pagenation/Pagenation'
import { Link } from "react-router-dom";

import { useEffect , useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPublishedResearchs2,getPublishedResearchs2Count } from "../../../redux/apiCalls/postApiCall2";


const POST_PER_PAGE = 8;

const PublishedResearch = () => {


    const dispatch = useDispatch();
    
    const { PublishedResearchs } = useSelector(state => state.PublishedResearch);
    const { user } = useSelector(state => state.auth);
  
    useEffect(() => {
      dispatch(fetchPublishedResearchs2(user.token,1,user._id));

    }, []);

  const { PublishedResearchsCount  } = useSelector(state => state.PublishedResearch);
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(PublishedResearchsCount / POST_PER_PAGE);

  useEffect(() => {
    dispatch(fetchPublishedResearchs2(user.token,currentPage,user._id));
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    dispatch(getPublishedResearchs2Count(user.token,user._id));
  }, []);

  



  return (
    <>

<ToastContainer />
        
        <section class="portfolio" id="portfolio">

               
                <Category title='PublishedResearch' />                
                 
                <div class="box-container">
                {PublishedResearchs.map(item => 
                        <div class="box" key={item?._id}>
                        <div class="research" >
                            <div class="VertCard" >
                            <div class="Image" ></div>
                            <div class="Content" >
                                {/* {item.ResearcherName && item.ResearcherName.profilePhoto &&
                                  <img src={item.ResearcherName.profilePhoto.url} alt="" className="Avatar" />
                                } */}
                                <img src={item?.ResearcherName?.profilePhoto?.url} alt="" className="Avatar" />
                                
                                {/* {item.ResearcherName && item.ResearcherName.profilePhoto &&
                                  <div class="Username" >{item.ResearcherName.userName}</div>
                                } */}
                                <div class="Username" >{item?.ResearcherName?.userName}</div>
                                <div class="ResearchName" >{item?.ResearchName}</div>
                            </div>
                            <div class="Button" >
                                {/* <div class="Details" >Details  ----    </div> */}
                                <Link className="Details" to={`/publishedResearchSigle/Single/${item?._id}`}>
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

export default PublishedResearch