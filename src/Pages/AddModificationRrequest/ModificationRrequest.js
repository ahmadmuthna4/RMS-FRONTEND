


import React, { useState, useEffect } from "react";
import "./ModificationRrequest.css";
import { useSelector, useDispatch  } from "react-redux";
import { useNavigate,useParams } from "react-router-dom";
import { createModificationRrequest } from "../../redux/apiCalls/modificationRrequestApiCall";
import { fetchSingleRegisteredResearch2 } from "../../redux/apiCalls/postApiCall";
import { RotatingLines } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";


const CreateModificationRrequest = () => {
  const dispatch = useDispatch();
  const { loading, isModificationRrequestsCreated } = useSelector((state) => state.ModificationRrequest);
  const { RegisteredResearch  } = useSelector((state) => state.RegisteredResearch);
  let { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchSingleRegisteredResearch2(id));
    console.log(RegisteredResearch?.researchMembers)
  }, [id]);
  const [Type, setType] = useState("");
  const [ResearchName, setResearchName] = useState("");
  const [memberIdToDelete, setmemberIdToDelete] = useState("");
  const [researchMembers, setResearchMembers] = useState([
    {
      memberName: '',
      ScientificRank: '',
      AffiliationAndNotes: ''
    }
  ]);


  const addResearchMember = (e) => {
    e.preventDefault();
    setResearchMembers([
      ...researchMembers,
      {
        memberName: '',
        ScientificRank: '',
        AffiliationAndNotes: ''
      }
    ]);
  };

  const removeResearchMember = (index) => {
    const updatedMembers = [...researchMembers];
    updatedMembers.splice(index, 1);
    setResearchMembers(updatedMembers);
  };

  const handleMemberChange = (e, index, field) => {
    const { value } = e.target;
    const updatedMembers = [...researchMembers];
    updatedMembers[index][field] = value;
    setResearchMembers(updatedMembers);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (Type.trim() === "") return toast.error("Type is required000000000000000");
    if (Type =="تغيير عنوان بحث") {
      dispatch(createModificationRrequest({ Type, ResearchName },id));
    } else if (Type =="إضافة باحث") {
      dispatch(createModificationRrequest({ Type,  researchMembers },id));
    }else{
      dispatch(createModificationRrequest({ Type,  memberIdToDelete },id));
    }
    
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (isModificationRrequestsCreated) {
      navigate("/Dashboard/ResearchNotAproved");
    }
  }, [isModificationRrequestsCreated, navigate]);

  return (
    <section className="create-post">
      <ToastContainer />
      <h1 className="create-post-title">Create New RegisteredResearch</h1>
      <form onSubmit={formSubmitHandler} className="create-post-form">
        
        {/* <input
          onChange={(e) => setType(e.target.value)}
          value={Type}
          type="text"
          placeholder="Type"
          className="create-post-input"
        /> */}
        <select
          onChange={(e) => setType(e.target.value)}
          value={Type}
          className="create-post-input"
        >
        <option value="">Select Type</option>
        <option value="إنسحاب باحث">إنسحاب باحث</option>
        <option value="إضافة باحث">إضافة باحث</option>
        <option value="تغيير عنوان بحث">تغيير عنوان بحث</option>
      </select>



      {Type =="تغيير عنوان بحث" ? 
                <input
                  onChange={(e) => setResearchName(e.target.value)}
                  value={ResearchName}
                  type="text"
                  placeholder="ResearchName"
                  className="create-post-input"
                />
                :
                Type =="إضافة باحث" ?
                <>
                    {researchMembers.map((member, index) => (
                          <div key={index}>
                            <input
                              onChange={(e) => handleMemberChange(e, index, 'memberName')}
                              value={member.memberName}
                              type="text"
                              placeholder="Member Name"
                              className="create-post-input"
                            />
                            <input
                              onChange={(e) => handleMemberChange(e, index, 'ScientificRank')}
                              value={member.ScientificRank}
                              type="text"
                              placeholder="Scientific Rank"
                              className="create-post-input"
                            />
                            <input
                              onChange={(e) => handleMemberChange(e, index, 'AffiliationAndNotes')}
                              value={member.AffiliationAndNotes}
                              type="text"
                              placeholder="Affiliation and Notes"
                              className="create-post-input"
                            />
                            {index > 0 && (
                              <button onClick={() => removeResearchMember(index)}>Remove Member</button>
                            )}
                          </div>
                    ))}
                    <button onClick={addResearchMember}>Add Member</button>
                
                </>
                :
                <>
                <select
                  onChange={(e) => setmemberIdToDelete(e.target.value)}
                  value={memberIdToDelete}
                  className="create-post-input"
                >
                <option value="">Select Member To Delete</option>


                  {RegisteredResearch?.researchMembers.map(item=>
                  <>
                  <option value={item?._id}>{item?.memberName}</option>
                  </>)}
                  {/* <option value="إنسحاب باحث">إنسحاب باحث</option>
                  <option value="إضافة باحث">إضافة باحث</option>
                  <option value="تغيير عنوان بحث">تغيير عنوان بحث</option> */}

              </select>
                </>

      }
        

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

export default CreateModificationRrequest;







