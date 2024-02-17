// import React from 'react'
// import './AddResearch.css'
// import  { useState, useEffect } from 'react';

// import { Link } from "react-router-dom";


// const AddResearch = () => {
//     const [isActice, setActive] = useState(true);
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
// {/*                 
//                 <Link to="/AddResearch"> <button className={activeButton == 'addResearch' ? 'active' : ''} onClick={() => handleButtonClick('addResearch')} > Add Research </button> </Link>
//                 <Link to="/AddResearch/PublishResearch"><button className={activeButton == 'publishResearch' ? 'active' : ''} onClick={() => handleButtonClick('publishResearch')}> Publish Research </button> </Link>
//                 */}
//                 <Link to={'/AddResearch'} ><button class={isActice ? 'active' : ''}   onClick={handleActiceClick}>Add Research</button></Link>
//                 <Link to={'/AddResearch/PublishResearch'}  ><button class={isActice ? '' : 'active'}  onClick={handleActiceClick}>Publish Research</button></Link>
              
//                 </div>
//                 <div class="update_information_container">
                    
//                     <div class="update_information">
                        

//                         <form action="" method="get">
//                             <input type="text" name="" id="" placeholder="Research Name" />
//                             <input type="text" name="" id="" placeholder="Researcher's name" />
//                             <input type="text" name="" id="" placeholder="field of knowledge" />
//                             <input type="date" name="" id="" placeholder="Start Date" />
//                             <input type="text" name="" id="" placeholder="Type" />
//                             <input type="text" name="" id="" placeholder="Session Number" />
//                         </form>  
                    
//                     </div>


//                     <div class="update_information "  >
                        
//                         <form action="" method="get">
//                             <input type="text" name="" id="" placeholder="Period for completing the research" />
//                             <input type="text" name="" id="" placeholder="Number of participants in the research" />
//                             <input type="text" name="" id="" placeholder="Name of participant 1" />
//                             <input type="text" name="" id="" placeholder="Name of participant 2" />
//                             <input type="text" name="" id="" placeholder="description" style={{ height: '100px'}} />
//                             {/* <input type="text" name="" id="" placeholder="description" style="    height: 100px ;" /> */}
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



import { useState, useEffect } from "react";
import "./AddResearch.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../redux/apiCalls/postApiCall";
import { RotatingLines } from "react-loader-spinner";
// import { fetchCategories } from "../../redux/apiCalls/categoryApiCall";

import { ToastContainer,toast } from "react-toastify";

const CreatePost = () => {

    const dispatch = useDispatch();
    const { loading, isPostCreated } = useSelector((state) => state.post);




    const [ResearchName, setResearchName] = useState("");
    const [fieldOfKnowledge, setfieldOfKnowledge] = useState("");
    const [StartDate, setStartDate] = useState("");
    const [Type, setType] = useState("");
    const [SessionNumber, setSessionNumber] = useState("");
    const [PeriodForCompletingTheResearch, setPeriodForCompletingTheResearch] = useState("");
   
  
    // From Submit Handler
    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (ResearchName.trim() === "") return toast.error("ResearchName is required");
        if (fieldOfKnowledge.trim() === "") return toast.error("fieldOfKnowledge is required");
        if (StartDate.trim() === "") return toast.error("StartDate is required");
        if (Type.trim() === "") return toast.error("Type is required");
        if (SessionNumber.trim() === "") return toast.error("SessionNumber is required");
        if (PeriodForCompletingTheResearch.trim() === "") return toast.error("PeriodForCompletingTheResearch is required");
      
    
        const formData = new FormData();
        formData.append("ResearchName", ResearchName);
        formData.append("fieldOfKnowledge", fieldOfKnowledge);
        formData.append("StartDate", StartDate);
        formData.append("Type", Type);
        formData.append("SessionNumber", SessionNumber);
        formData.append("PeriodForCompletingTheResearch", PeriodForCompletingTheResearch);
        


        dispatch(createPost(formData));
        // console.log({ title, category, description });
    };
    const navigate = useNavigate();
    useEffect(() => {
    if (isPostCreated) {
      navigate("/Dashboard/RegisteredResearch");
      }
    }, [isPostCreated, navigate]);

 

  
    return (
      <section className="create-post">
        <ToastContainer />
        <h1 className="create-post-title">Create New Post</h1>
        <form onSubmit={formSubmitHandler} className="create-post-form">
          <input
            onChange={(e) => setResearchName(e.target.value)}
            value={ResearchName}
            type="text"
            placeholder="ResearchName"
            className="create-post-input"
          />
          <input
            onChange={(e) => setfieldOfKnowledge(e.target.value)}
            value={fieldOfKnowledge}
            type="text"
            placeholder="fieldOfKnowledge"
            className="create-post-input"
          />
          <input
            onChange={(e) => setStartDate(e.target.value)}
            value={StartDate}
            type="text"
            placeholder="StartDate"
            className="create-post-input"
          />
          <input
            onChange={(e) => setType(e.target.value)}
            value={Type}
            type="text"
            placeholder="Type"
            className="create-post-input"
          />
          <input
            onChange={(e) => setSessionNumber(e.target.value)}
            value={SessionNumber}
            type="text"
            placeholder="SessionNumber"
            className="create-post-input"
          />
          <input
            onChange={(e) => setPeriodForCompletingTheResearch(e.target.value)}
            value={PeriodForCompletingTheResearch}
            type="text"
            placeholder="PeriodForCompletingTheResearch"
            className="create-post-input"
          />
          {/* <select
            className="create-post-input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option disabled value="">
              Select A Category
            </option>
            <option value="music">music</option>
            <option value="travelling">travelling</option>
          </select>
          <textarea
            className="create-post-textarea"
            placeholder="Post Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="5"
          ></textarea>
          <input
            className="create-post-upload"
            type="file"
            name="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          /> */}
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
            "Create"
          )}
          </button>
        </form>
      </section>
    );
  };
  
  export default CreatePost;