import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

// import { posts } from "./dummyData";
import "./ResearchsRegistereSigle.css";
import { toast } from "react-toastify";

import {
    deletePost,
    fetchSinglePost,
    toggleLikePost,
    updatePostImage
  } from "../../redux/apiCalls/postApiCall";
import { useDispatch, useSelector } from "react-redux";

const PostDetails = () => {

    const dispatch = useDispatch();
    const { post } = useSelector((state) => state.post);
    const { user } = useSelector((state) => state.auth);
        
    const { id } = useParams();
    // const post = posts.find((p) => p._id === +id);

    const [updatePost, setUpdatePost] = useState(false);
    const [file, setFile] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(fetchSinglePost(id));
      }, [id]);

    

    return (
        <div className="post-details">
            <img src={post?.ResearcherName.profilePhoto.url} alt="" className="post-details-user-image" />
            <h1 className="post-details-title">{post?.ResearcherName.userName}</h1>
            <h2 className="post-details-title">{post?.fieldOfKnowledge}</h2>
            <h2 className="post-details-title">{post?.StartDate}</h2>
            <h2 className="post-details-title">{post?.Type}</h2>
            <h2 className="post-details-title">{post?.SessionNumber}</h2>
            <h2 className="post-details-title">{post?.PeriodForCompletingTheResearch}</h2>
            <h2 className="post-details-title">{post?.createdAt}</h2>
            {/* <h2 className="post-details-title">{post?.researchMembers[0].memberName}</h2>
            <h2 className="post-details-title">{post?.researchMembers[1].memberName}</h2> */}
        
      
        
        </div>
    );
};

export default PostDetails;