

import './Report.css'
import img1 from "../../assets/0.jpg"


import { ToastContainer } from "react-toastify";
import Pagenation from '../../components/Pagenation/Pagenation'
import { Link } from "react-router-dom";

import { useEffect , useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResearchs } from "../../redux/apiCalls/researchApiCall";


const Report = () => {


    const dispatch = useDispatch();

    
    
    // const { Researchs } = useSelector(state => state.Research);
    const { user } = useSelector(state => state.auth);
    const { Researchs } = useSelector(state => state.Research);
    const [type, setType] = useState("");
    const [typeResearchRegistere, setTypeResearchRegistere] = useState("");
    const [typeResearchPublished, setTypeResearchPublished] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [MagazineType, setMagazineType] = useState("");

    const formSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(fetchResearchs( user._id,type,startDate,endDate,MagazineType))
      };


  return (
    <>
                <div class="report_container">

                    <div class="form">
                        <form  onSubmit={formSubmitHandler} action="" method="get">
                      
                            <select
                                onChange={(e) => setType(e.target.value)}
                                value={type}
                                className="create-post-input"
                            >
                                <option value="">Select Type Research </option>
                                <option value="ResearchRegistere">ResearchRegistere </option>
                                <option value="ResearchPublished">ResearchPublished</option>
                            </select>
                            {type=="ResearchPublished" ?
                                <select
                                onChange={(e) => setMagazineType(e.target.value)}
                                value={MagazineType}
                                className="create-post-input"
                                >
                                    <option value="">Select MagazineType </option>
                                    <option value="Scope">Scope </option>
                                    <option value="عالمي">عالمي</option>
                                    <option value="محلي">محلي</option>
                                </select>
                            :''}

                            <input
                                onChange={(e) => setStartDate(e.target.value)}
                                value={startDate}
                                type="date"
                                placeholder="startDate"
                                className="create-post-input"
                            />
                            <input
                                onChange={(e) => setEndDate(e.target.value)}
                                value={endDate}
                                type="date"
                                placeholder="endDate"
                                className="create-post-input"
                            />
    
                            <button type="submit" className="Publish"  >report print</button>
                        </form>
                        {/* <button>report print</button> */}
                    </div>

                    <div class="researchs">

                        
                    {Researchs.map(item => 

                        <div class="box" key={item?._id}>
                            <div class="research" >
                                <div class="VertCard" >
                                <div class="Image" ></div>
                                <div class="Content" >
                                    <img src={item?.ResearcherName?.profilePhoto?.url} alt="" className="Avatar" />
                                    <div class="Username" >{item?.ResearcherName?.userName}</div>
                                    <div class="ResearchName" >{item?.ResearchNameArabic}</div>
                                </div>
                                <div class="Button" >
                                    <div class="Details" >Details      </div>
                                    {/* <Link className="Details" to={`/publishedResearchSigle/Single/${item?._id}`}>
                                    Read More...
                                    </Link> */}
                                </div>
                                </div>
                            </div>
                        </div>
                        
                    
                    )}

                    
                    





                    </div>

                    </div>
    </>
  )
}

export default Report