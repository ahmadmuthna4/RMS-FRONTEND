import React, { useState, useEffect } from "react";
import "../AddResearch/AddResearch.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateRegisteredResearch ,fetchSingleRegisteredResearch2 } from "../../redux/apiCalls/postApiCall";
import { RotatingLines } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import { useParams, Link } from "react-router-dom";
import { useHistory } from "react-router";



const UpdateRegisteredResearch = () => {
    
  const dispatch = useDispatch();
  const { loading, isRegisteredResearch2Created } = useSelector((state) => state.RegisteredResearch);

  
  const { id } = useParams();
  const navigate = useNavigate();
//   const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchSingleRegisteredResearch2(id));
    console.log(RegisteredResearch?.isApproved)
  }, []);
  const { RegisteredResearch } = useSelector((state) => state.RegisteredResearch);

  const [ResearchNameArabic, setResearchNameArabic] = useState(RegisteredResearch?.ResearchNameArabic);
  const [ResearchNameEnglish, setResearchNameEnglish] = useState(RegisteredResearch?.ResearchNameEnglish);
  const [StartDate, setStartDate] = useState(RegisteredResearch?.StartDate);
  const [Type, setType] = useState(RegisteredResearch?.Type);
  const [NatureOfResearch, setNatureOfResearch] = useState(RegisteredResearch?.NatureOfResearch);
  const [ResearchSummaryAndObjectives, setResearchSummaryAndObjectives] = useState(RegisteredResearch?.ResearchSummaryAndObjectives);
  

 
//   const [researchMembers, setResearchMembers] = useState([
//     {
//       memberName: '',
//       ScientificRank: '',
//       AffiliationAndNotes: ''
//     }
//   ]);


//   const addResearchMember = (e) => {
//     e.preventDefault();
//     setResearchMembers([
//       ...researchMembers,
//       {
//         memberName: '',
//         ScientificRank: '',
//         AffiliationAndNotes: ''
//       }
//     ]);
//   };

//   const removeResearchMember = (index) => {
//     const updatedMembers = [...researchMembers];
//     updatedMembers.splice(index, 1);
//     setResearchMembers(updatedMembers);
//   };

//   const handleMemberChange = (e, index, field) => {
//     const { value } = e.target;
//     const updatedMembers = [...researchMembers];
//     updatedMembers[index][field] = value;
//     setResearchMembers(updatedMembers);
//   };

  const formSubmitHandler = () => {
    
    
    dispatch(updateRegisteredResearch({ ResearchNameArabic, ResearchNameEnglish, StartDate, Type, NatureOfResearch, ResearchSummaryAndObjectives,  },id));
    console.log("xxxxxxxxxxxxxxxxxx")
  };
  
  
 

  return (
    <section className="create-post">
      <ToastContainer />
      <h1 className="create-post-title">Create New RegisteredResearch</h1>
      <form  className="create-post-form"  >
        <input
          onChange={(e) => setResearchNameArabic(e.target.value)}
          onClick={() => setResearchNameArabic('')}
          value={ResearchNameArabic}
          type="text"
          placeholder="ResearchNameArabic"
          className="create-post-input"
        />
        <input
          onChange={(e) => setResearchNameEnglish(e.target.value)}
          onClick={() => setResearchNameEnglish('')}
          value={ResearchNameEnglish}
          type="text"
          placeholder="ResearchNameEnglish"
          className="create-post-input"
        />

        <input
          onChange={(e) => setStartDate(e.target.value)}
          onClick={() => setStartDate('')}
          value={StartDate}
          type="date"
          placeholder="StartDate"
          className="create-post-input"
        />
        <input
          onChange={(e) => setType(e.target.value)}
          onClick={() => setType('')}
          value={Type}
          type="text"
          placeholder="Type"
          className="create-post-input"
        />
        <input
          onChange={(e) => setNatureOfResearch(e.target.value)}
          onClick={() => setNatureOfResearch('')}
          value={NatureOfResearch}
          type="text"
          placeholder="NatureOfResearch"
          className="create-post-input"
        />
        <input
          onChange={(e) => setResearchSummaryAndObjectives(e.target.value)}
          onClick={() => setResearchSummaryAndObjectives('')}
          value={ResearchSummaryAndObjectives}
          type="text"
          placeholder="ResearchSummaryAndObjectives"
          className="create-post-input"
        />

{RegisteredResearch?.isApproved ? (
  <Link
    className="Publish"
    onClick={() => formSubmitHandler()}
    to={`/Dashboard/RegisteredResearch`}
  >
    Update
  </Link>
) : (
  <Link
    className="Publish"
    onClick={() => formSubmitHandler()}
    to={`/Dashboard/ResearchNotAproved`}
    
  >
    Update
  </Link>
)}



      </form>
    </section>
  );
};

export default UpdateRegisteredResearch;