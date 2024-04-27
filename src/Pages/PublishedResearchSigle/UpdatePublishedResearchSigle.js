import React, { useState, useEffect } from "react";
import "../AddResearch/AddResearch.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchSingleRegisteredResearch2 } from "../../redux/apiCalls/postApiCall";
import { updatePublishedResearch  } from "../../redux/apiCalls/postApiCall2";
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
  
  const { PublishedResearch } = useSelector((state) => state.PublishedResearch);

  const [MagazineName, setMagazineName] = useState(PublishedResearch?.MagazineName);
  const [MagazineType, setMagazineType] = useState(PublishedResearch?.MagazineType);
  const [ResearchLink, setResearchLink] = useState(PublishedResearch?.ResearchLink);
  const [ResearchName, setResearchName] = useState(PublishedResearch?.ResearchName);
  const [Number, setNumber] = useState(PublishedResearch?.Number);
  const [Date, setDate] = useState(PublishedResearch?.Date);
  const [Year, setYear] = useState(PublishedResearch?.Year);
  const [ISSN, setISSN] = useState(PublishedResearch?.ISSN);
  

 
  const formSubmitHandler = () => {
    
    
    dispatch(updatePublishedResearch({ MagazineName, MagazineType, ResearchLink,ResearchName,Number,Date,Year,ISSN},id));
    console.log("xxxxxxxxxxxxxxxxxx")
  };
  
  
 

  return (
    <section className="create-post">
      <ToastContainer />
      <h1 className="create-post-title">Create New RegisteredResearch</h1>
      <form  className="create-post-form"  >
        <input
          onChange={(e) => setMagazineName(e.target.value)}
          onClick={() => setMagazineName('')}
          value={MagazineName}
          type="text"
          placeholder="MagazineName"
          className="create-post-input"
        />
        <input
          onChange={(e) => setMagazineType(e.target.value)}
          onClick={() => setMagazineType('')}
          value={MagazineType}
          type="text"
          placeholder="MagazineType"
          className="create-post-input"
        />

        <input
          onChange={(e) => setResearchLink(e.target.value)}
          onClick={() => setResearchLink('')}
          value={ResearchLink}
          type="text"
          placeholder="ResearchLink"
          className="create-post-input"
        />

        <input
          onChange={(e) => setResearchName(e.target.value)}
          onClick={() => setResearchName('')}
          value={ResearchName}
          type="text"
          placeholder="ResearchName"
          className="create-post-input"
        />
        <input
          onChange={(e) => setNumber(e.target.value)}
          onClick={() => setNumber('')}
          value={Number}
          type="text"
          placeholder="Number"
          className="create-post-input"
        />
        <input
          onChange={(e) => setDate(e.target.value)}
          onClick={() => setDate('')}
          value={Date}
          type="date"
          placeholder="Date"
          className="create-post-input"
        />
        <input
          onChange={(e) => setYear(e.target.value)}
          onClick={() => setYear('')}
          value={Year}
          type="text"
          placeholder="Year"
          className="create-post-input"
        />
        <input
          onChange={(e) => setISSN(e.target.value)}
          onClick={() => setISSN('')}
          value={ISSN}
          type="text"
          placeholder="ISSN"
          className="create-post-input"
        />







        <Link
            className="Publish"
            onClick={() => formSubmitHandler()}
            to={`/Dashboard`}
        >
            Update
        </Link>





      </form>
    </section>
  );
};

export default UpdateRegisteredResearch;