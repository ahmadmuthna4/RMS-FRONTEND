import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

// import { posts } from "./dummyData";
import "./PublishedResearchSigle.css";
import { toast } from "react-toastify";

import {
    fetchSinglePublishedResearch2,
    deletePublishdResearch,
   
  } from "../../redux/apiCalls/postApiCall2";
import { useDispatch, useSelector } from "react-redux";

const PublishedResearch2Details = () => {

    const dispatch = useDispatch();
    const { PublishedResearch } = useSelector((state) => state.PublishedResearch);
    const { user } = useSelector((state) => state.auth);
        
    const { id } = useParams();
    // const post = posts.find((p) => p._id === +id);

    const [updatePublishedResearch2, setUpdatePublishedResearch2] = useState(false);
    const [file, setFile] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(fetchSinglePublishedResearch2(id));
      }, [id]);

    const Delete = (id) => {
        console.log("0000000")
        dispatch(deletePublishdResearch(id));
    };
    

    return (
        <div className="post-details">
            <img src={PublishedResearch?.ResearcherName?.profilePhoto?.url} alt="" className="post-details-user-image" />
            <h1 className="PublishedResearch-details-title">{PublishedResearch?.ResearcherName?.userName}</h1>
            <h1 className="post-details-title">{PublishedResearch?.MagazineName}</h1>
            <h2 className="post-details-title">{PublishedResearch?.MagazineType}</h2>
            <h2 className="post-details-title">{PublishedResearch?.ResearchLink}</h2>
            <h2 className="post-details-title">{PublishedResearch?.Type}</h2>
            <h2 className="post-details-title">{PublishedResearch?.SessionNumber}</h2>
            <h2 className="post-details-title">{PublishedResearch?.PeriodForCompletingTheResearch}</h2>
            <h2 className="post-details-title">{PublishedResearch?.createdAt}</h2>
            {/* <h2 className="post-details-title">{post?.researchMembers[0].memberName}</h2>
            <h2 className="post-details-title">{post?.researchMembers[1].memberName}</h2> */}
             
             {user?.isAdmin ? 
          <Link className="Publish" onClick={() => Delete(PublishedResearch?._id)}  to={`/Dashboard` }  >
              DELETE
          </Link>
               : ''
               }

             {user?.isAdmin ? 
          <Link className="Publish"   to={`/UpdatePublishedResearchSigle/${PublishedResearch?._id}` }  >
              Update
          </Link>
               : ''
               }
      
        
        </div>
    );
};

export default PublishedResearch2Details;