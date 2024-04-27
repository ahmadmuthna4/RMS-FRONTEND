import React, { useState, useEffect } from "react";
import "./AddResearch.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createRegisteredResearch2 } from "../../redux/apiCalls/postApiCall";
import { RotatingLines } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";

const CreateRegisteredResearch2 = () => {
  const dispatch = useDispatch();
  const { loading, isRegisteredResearch2Created } = useSelector((state) => state.RegisteredResearch);

  const [ResearchNameArabic, setResearchNameArabic] = useState("");
  const [ResearchNameEnglish, setResearchNameEnglish] = useState("");
  const [Type, setType] = useState("");
  const [NatureOfResearch, setNatureOfResearch] = useState("");
  const [ResearchIs, setResearchIs] = useState("");
  const [ResearchSummaryAndObjectives, setResearchSummaryAndObjectives] = useState("");
  const [researchMembers, setResearchMembers] = useState([
    {
      memberName: '',
      ScientificRank: '',
      AffiliationAndNotes: ''
    }
  ]);
  console.log(researchMembers)


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
    if (ResearchNameArabic.trim() === "") return toast.error("ResearchNameArabic is required");
    if (ResearchNameEnglish.trim() === "") return toast.error("ResearchNameEnglish is required");
    if (Type.trim() === "") return toast.error("Type is required");
    if (NatureOfResearch.trim() === "") return toast.error("NatureOfResearch is required");
    if (ResearchIs.trim() === "") return toast.error("ResearchIs is required");
    if (ResearchSummaryAndObjectives.trim() === "") return toast.error("ResearchSummaryAndObjectives is required");
    dispatch(createRegisteredResearch2({ ResearchNameArabic, ResearchNameEnglish, Type, NatureOfResearch, ResearchIs, ResearchSummaryAndObjectives, researchMembers }));
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (isRegisteredResearch2Created) {
      navigate("/Dashboard/ResearchNotAproved");
    }
  }, [isRegisteredResearch2Created, navigate]);

  return (
    
    <section className="create-post">
      <ToastContainer />
      <h1 className="create-post-title">Create New RegisteredResearch</h1>
      <form onSubmit={formSubmitHandler} className="create-post-form" dir="rtl">
        <input
          onChange={(e) => setResearchNameArabic(e.target.value)}
          value={ResearchNameArabic}
          type="text"
          placeholder="عنوان البحث باللغة العربية "
          className="create-post-input"
        />
        <input
          onChange={(e) => setResearchNameEnglish(e.target.value)}
          value={ResearchNameEnglish}
          type="text"
          placeholder="عنوان البحث باللغة الانجليزية "
          className="create-post-input"
        />

        {/* <input
          onChange={(e) => setStartDate(e.target.value)}
          value={StartDate}
          type="date"
          placeholder="تاريخ البدء"
          className="create-post-input"
        /> */}
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
          <option value="">  نوع البحث </option>
          <option value=" اكاديمي"> اكاديمي</option>
          <option value=" تطبيقي"> تطبيقي</option>
          <option value=" اكاديمي تطبيقي   ">   اكاديمي تطبيقي</option>
        </select> 

        <select
            onChange={(e) => setNatureOfResearch(e.target.value)}
            value={NatureOfResearch}
            className="create-post-input"
          >
          <option value="">  طبيعة البحث </option>
          <option value=" نظري"> نظري</option>
          <option value=" عملي"> عملي</option>
          <option value=" نظري عملي   ">    نظري عملي</option>
        </select> 

        <select
            onChange={(e) => setResearchIs(e.target.value)}
            value={ResearchIs}
            className="create-post-input"
          >
          <option value="">  هل  البحث ؟ </option>
          <option value=" مخطط"> مخطط</option>
          <option value=" منجز"> منجز</option>
          <option value=" منشور"> منشور</option>
          <option value=" خارج الخطة "> خارج الخطة </option>
          <option value=" داخل الخطة   ">    داخل الخطة</option>
        </select> 
        
        <input
          onChange={(e) => setResearchSummaryAndObjectives(e.target.value)}
          value={ResearchSummaryAndObjectives}
          type="text"
          placeholder="موجز البحث واهدافه "
          className="create-post-input"
        />

        {researchMembers.map((member, index) => (
          <div key={index}>
            <input
              onChange={(e) => handleMemberChange(e, index, 'memberName')}
              value={member.memberName}
              type="text"
              placeholder="اسم العضو  المشارك في البحث"
              className="create-post-input"
            />
            <input
              onChange={(e) => handleMemberChange(e, index, 'ScientificRank')}
              value={member.ScientificRank}
              type="text"
              placeholder="المرتبة العلمية"
              className="create-post-input"
            />
            {/* <input
              onChange={(e) => handleMemberChange(e, index, 'AffiliationAndNotes')}
              value={member.AffiliationAndNotes}
              type="text"
              placeholder="جهة الانتساب "
              className="create-post-input"
            /> */}

            <select
              onChange={(e) => handleMemberChange(e, index, 'AffiliationAndNotes')}
              value={member.AffiliationAndNotes}
              className="create-post-input"
            >
              <option value="">اختر جهة الانتساب</option>
              {/* Add options based on your data */}
              <option value="برمجيات">برمجيات</option>
              <option value="علوم الحاسوب">علوم الحاسوب</option>
              <option value="الرياضيات">الرياضيات</option>
              <option value="الاحصاء">الاحصاء</option>
              <option value="الشيكات">الشيكات</option>
              <option value="الامن السيبراني">الامن السيبراني</option>
            </select>



            {index > 0 && (
              <button onClick={() => removeResearchMember(index)}>حذف هذا العضو </button>
            )}
          </div>
        ))}
        <button onClick={addResearchMember}>اضافة عضو اخر </button>

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

export default CreateRegisteredResearch2;







