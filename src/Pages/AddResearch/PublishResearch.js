// import React from 'react'
// import './PublishResearch.css'

// import { Link } from "react-router-dom";
// import  { useState, useEffect } from 'react';


// const AddResearch = () => {
//     const [isActice, setActive] = useState(false);
//     const handleActiceClick = () => {
//         setActive(!isActice);
//         console.log("active")
//       };

//     //   const [activeButton, setActiveButton] = useState(null);

//     //   const handleButtonClick = (buttonName) => {
//     //     setActiveButton(buttonName);
//     //   };
   
//   return (    
//     <>
//         <section class="portfolio" id="portfolio">

//                 <div class="header">
             
//                 {/* <Link to="/AddResearch"> <button className={activeButton === 'addResearch' ? 'active' : ''} onClick={() => handleButtonClick('addResearch')} > Add Research </button> </Link>
//                 <Link to="/AddResearch/PublishResearch"><button className={activeButton === 'publishResearch' ? 'active' : ''} onClick={() => handleButtonClick('publishResearch')}> Publish Research </button> </Link>
//                 */}
//                 <Link to={'/AddResearch'} ><button class={isActice ? 'active' : ''}   onClick={handleActiceClick}>Add Research</button></Link>
//                 <Link to={'/AddResearch/PublishResearch'}  ><button class={isActice ? '' : 'active'}  onClick={handleActiceClick}>Publish Research</button></Link>
//                 </div>
//                 <div class="update_information_container">
                    
//                     <div class="update_information">
                        

//                         <form action="" method="get">
//                             <input type="text" name="" id="" placeholder="Select Research" />
//                             <input type="date" name="" id="" placeholder="Date of publication of the research" />
//                             <input type="text" name="" id="" placeholder="Magazine name" />
//                             <input type="text" name="" id="" placeholder="Magazine type" />
//                             <input type="text" name="" id="" placeholder="Search link" />
//                         </form>  
                    
//                     </div>


                    

                    
//                 </div>

//                 <div class="action">
//                     <button>save </button>
//                     <button>cancel</button>
//                 </div> 

//         </section>
//     </>

//     )
// }

// export default AddResearch




import React, { useState, useEffect } from "react";
import "./PublishResearch.css";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate,useParams } from "react-router-dom";
import { createPublishedResearch2 } from "../../redux/apiCalls/postApiCall2";
import { RotatingLines } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";

const CreatePublishResearch2 = () => {
  const dispatch = useDispatch();
  const { loading, isPublishedResearch2Created } = useSelector((state) => state.PublishedResearch);
  const { RegisteredResearch } = useSelector((state) => state.RegisteredResearch);
  let { id } = useParams();


  const [ResearchName, setResearchName] = useState("");
//   console.log(ResearchName)
  const [MagazineName, setMagazineName] = useState("");
  const [MagazineType, setMagazineType] = useState("");
  const [ResearchLink, setResearchLink] = useState("");
  const [Date, setDate] = useState("");
  const [Year, setYear] = useState("");
  const [Number, setNumber] = useState("");
  const [ISSN, setISSN] = useState("");
  


  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (ResearchName.trim() === "") return toast.error("ResearchName is required111111111111111111");
    if (MagazineName.trim() === "") return toast.error("MagazineName is required22222222222");
    if (MagazineType.trim() === "") return toast.error("MagazineType is required");
    if (ResearchLink.trim() === "") return toast.error("ResearchLink is required");
    if (Date.trim() === "") return toast.error("Date is required");
    if (Year.trim() === "") return toast.error("Year is required");
    if (Number.trim() === "") return toast.error("Number is required");
    if (ISSN.trim() === "") return toast.error("ISSN is required");
    console.log('77777777777777777777777777777777')



    
    // console.log(RegisteredResearch._id)
    // console.log(ResearchName)
    
    dispatch(createPublishedResearch2({ ResearchName, MagazineName, MagazineType, ResearchLink, Date, Year, Number },RegisteredResearch?._id));
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (isPublishedResearch2Created) {
      navigate("/Dashboard");
    }
  }, [isPublishedResearch2Created, navigate]);

  return (
    <section className="create-post">
      <ToastContainer />
      <h1 className="create-post-title">Publish Research</h1>
      <form onSubmit={formSubmitHandler} className="create-post-form">
      <input
            onChange={(e) => setResearchName(e.target.value)}
            value={ResearchName}
            type="text"
            placeholder="ResearchName"
            className="create-post-input"
            />
        <input
          onChange={(e) => setMagazineName(e.target.value)}
          value={MagazineName}
          type="text"
          placeholder="MagazineName"
          className="create-post-input"
        />

        <input
          onChange={(e) => setMagazineType(e.target.value)}
          value={MagazineType}
          type="text"
          placeholder="MagazineType"
          className="create-post-input"
        />
        <input
          onChange={(e) => setResearchLink(e.target.value)}
          value={ResearchLink}
          type="text"
          placeholder="ResearchLink"
          className="create-post-input"
        />
        <input
          onChange={(e) => setDate(e.target.value)}
          value={Date}
          type="date"
          placeholder="Date"
          className="create-post-input"
        />
        <input
          onChange={(e) => setYear(e.target.value)}
          value={Year}
          type="text"
          placeholder="Year"
          className="create-post-input"
        />
        <input
          onChange={(e) => setNumber(e.target.value)}
          value={Number}
          type="text"
          placeholder="Number"
          className="create-post-input"
        />
        <input
          onChange={(e) => setISSN(e.target.value)}
          value={ISSN}
          type="text"
          placeholder="ISSN"
          className="create-post-input"
        />

         

        <button type="submit" className="create-post-btn">
          {loading ? (
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              color="#5644FC"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ) : (
            "Publish"
          )}
        </button>
      </form>
    </section>
  );
};

export default CreatePublishResearch2;
