import { useParams, Link } from "react-router-dom";
import { useEffect, useState,useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// import { posts } from "./dummyData";
import "./ModificationRrequestSigle.css";

import {
  fetchSingleModificationRrequest,
  ModificationRrequestAproved,
    
  } from "../../redux/apiCalls/modificationRrequestApiCall";
import {
  updateRegisteredResearchRequest,
    
  } from "../../redux/apiCalls/postApiCall";
import { useDispatch, useSelector } from "react-redux";

const ModificationRrequestDetails = () => {

    const dispatch = useDispatch();
    const pdfRef=useRef()
    const { ModificationRrequest } = useSelector((state) => state.ModificationRrequest);
    const { user } = useSelector((state) => state.auth);
    console.log(user.token)


    // const togglePopup = () => {
    //   setPopupOpen(!isPopupOpen);
    // };
        
    const { id } = useParams();
    // const post = posts.find((p) => p._id === +id);

    const [Members, setMembers] = useState([]);
    const [showSpinner, setShowSpinner] = useState(false);
    

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(fetchSingleModificationRrequest(id));
        setMembers(ModificationRrequest?.Research?.researchMembers);
      }, [id]);


   
    
      const handleDownloadPDF = async () => {
        setShowSpinner(true);

        try {
          // const canvas = await html2canvas(pdfRef.current);
          const canvas = await html2canvas(pdfRef.current, { scale: 3 });

          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'mm', 'a4', true);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();
          const imgWidth = canvas.width;
          const imgHeight = canvas.height;
          const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
          const imgX = (pdfWidth - imgWidth * ratio) / 2;
          const imgY = 15;
          pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
          pdf.save('file.pdf');
          setShowSpinner(false);
        } catch (error) {
          console.error('Error generating PDF:', error);
          setShowSpinner(false);
        }
      };


    

  
//   const history = useHistory();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   dispatch(fetchSingleRegisteredResearch2(id));
  //   console.log(RegisteredResearch?.isApproved)
  // }, []);
  
  // const [Type, setType] = useState(ModificationRrequest?.Type);
  var Type= ModificationRrequest?.Type
  // const [ResearchNameArabic, setResearchNameArabic] = useState(ModificationRrequest?.ResearchName);
  const [ResearchNameEnglish, setResearchNameEnglish] = useState("english");
  // const [memberToDelete, setmemberToDelete] = useState(ModificationRrequest?.memberIdToDelete);
  var memberToDelete=ModificationRrequest?.memberIdToDelete


  // const [researchMembers, setResearchMembers] = useState([
  //     {
  //       memberName: ModificationRrequest?.researchMembers[0]?.memberName,
  //       ScientificRank: ModificationRrequest?.researchMembers[0]?.ScientificRank,
  //       AffiliationAndNotes: ModificationRrequest?.researchMembers[0]?.AffiliationAndNotes
  //     }
  //   ]);
  var researchMembers=[
    {
            memberName: ModificationRrequest?.researchMembers[0]?.memberName,
            ScientificRank: ModificationRrequest?.researchMembers[0]?.ScientificRank,
            AffiliationAndNotes: ModificationRrequest?.researchMembers[0]?.AffiliationAndNotes
          }
  ]
  

 
var ResearchNameArabic =ModificationRrequest?.ResearchName
  const modificationRrequest = () => {
    if (ModificationRrequest?.Type==="تغيير عنوان بحث" ) {
      dispatch(updateRegisteredResearchRequest({Type, ResearchNameArabic,ResearchNameEnglish },ModificationRrequest?.Research?._id));
      console.log("vvvvvvvvvvvvvvvvv")
      console.log(ResearchNameArabic)
      console.log(ResearchNameEnglish)
      console.log(ModificationRrequest?.ResearchName)
      console.log(ResearchNameArabic)
      
    } else if (ModificationRrequest?.Type==="إضافة باحث") {
      console.log(" sssssssssssss " )
      dispatch(updateRegisteredResearchRequest({Type,researchMembers },ModificationRrequest?.Research?._id));
      console.log(researchMembers)

    }else{
      console.log("  ffffffffffffff" )
      console.log( ModificationRrequest?.Type )
      console.log( memberToDelete )
      console.log( ModificationRrequest?.Research?._id )
      dispatch(updateRegisteredResearchRequest({Type,memberToDelete },ModificationRrequest?.Research?._id));
      
    }
    
    dispatch(ModificationRrequestAproved(ModificationRrequest?._id));
    
    
  };
    
  

    

    return (
        <>
        <div className="post-details">
           

          {!ModificationRrequest?.isApproved ? 
              <>
               <div class="box-container" dir="rtl" ref={pdfRef}>

               <div class="content_aleart">
                   <h2>السيدة عميد كلية علوم الحاسوب والرياضيات المحترمة</h2>
                   <h2>السيد رئيس قسم البرمجيات المحترم</h2>
                   <div class="div">
                     <p>م/{ModificationRrequest?.Type}  </p>
                   </div>
                   <h2>تحية طيبة</h2>
                   
                   {ModificationRrequest?.Type === "إنسحاب باحث" ? (
                     <>
                       <h2>أرجو التفضل بالموافقة على سحب اسم الباحث:</h2>
                       <h2 style={{ borderBottom: '1px solid', textAlign: 'center' }}>
                         {ModificationRrequest?.Research?.researchMembers
                           ?.filter(member => member._id === ModificationRrequest?.memberIdToDelete)
                           .map(filteredMember => (
                               <h2 key={filteredMember._id}>{filteredMember.memberName}</h2>
                           ))}
                       </h2>
                     </>
                       
                     ) : ModificationRrequest?.Type === "إضافة باحث" ? (
                       <>
                         <h2>أرجو التفضل بالموافقة على إضافة الباحث:</h2>
                         <h2 style={{'border-bottom': '1px solid',  'text-align': 'center'}}>{ModificationRrequest?.researchMembers[0]?.memberName}</h2>
                       </>
                     ) : (
                       <>
                         <h2>أرجو التفضل بالموافقة على تغييرعنوان بحثي الموسوم :</h2>
                         
                         <h2 style={{'border-bottom': '1px solid',  'text-align': 'center'}}>{ModificationRrequest?.Research?.ResearchNameArabic}</h2>
                       </>
                     )}
                   
                   {ModificationRrequest?.Type === "إنسحاب باحث" ? (
                       <>
                         <h2>من البحث المعنون:</h2>
                         <h2 style={{'border-bottom': '1px solid',  'text-align': 'center'}}>{ModificationRrequest?.Research?.ResearchNameArabic}</h2>
                       </>
                     ) : ModificationRrequest?.Type === "إضافة باحث" ? (
                       <>
                         <h2>الى البحث الموسوم:</h2>
                         <h2 style={{'border-bottom': '1px solid',  'text-align': 'center'}}>{ModificationRrequest?.Research?.ResearchNameArabic}</h2>
                       </>
                     ) : (
                       <>
                         <h2>الى العنوان الجديد :</h2>
                         <h2 style={{'border-bottom': '1px solid',  'text-align': 'center'}}>{ModificationRrequest?.ResearchName}</h2>
                       </>
                     )}
                   
                   
                   
                   <h2>المشترك مع : </h2>

                   <table>
                     <tr>
                         <th className="th">تسلسل</th>
                         <th className="th">اسم التدريسي المشترك بالبحث</th>
                         <th className="th">التوقيع</th>
                     </tr>

                     {ModificationRrequest?.Research?.researchMembers.map(item =>
                     <tr>
                       <td className="td"> </td>
                       <td className="td">{item?.memberName}</td>
                       <td className="td"></td>
                     </tr> 
                     
                 
                 )}

                     
                 </table>

                 <h2>وذلك بسبب............................................................................................. </h2>
                 <h2>علما ان البحث يقع ضمن الخطة للعام الدراسي .................... الفصل ............. </h2>
                 
                 <div>
                     <h2> الجلسة -----</h2>
                     <h2>وبتاريخ -----</h2>
                     <h2>حسب الكتاب المرقم -----</h2>
                     <h2>بتاريخ -----</h2>
                 </div>
                 <h2 class="signature">اسم وتوقيع احد أعضاء لجنة البحوث في القسم</h2>
                 
                 <div class="div">
                     <h2>التوقيع:</h2>
                     <h2>سم التدريسي:</h2>
                     <h2>القسم:</h2>
                     <h2>التاريخ:</h2>
                     
                 </div>
                   
               </div>

               </div>


               <div style={{ position: 'relative' ,display:'flex' ,overflow: 'visible' ,height: '134px',overflow: 'hidden', alignItems : 'center'}}>
                  <div>
                    {showSpinner && <div style={{top: '2%'}} class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>} {/* Show spinner when `showSpinner` state is true */}
                    <button onClick={handleDownloadPDF}>Download PDF</button>
                  </div>
                  {user?.isAdmin ? 
                  <Link
                  className="Details"
                  onClick={() => modificationRrequest()}
                  
                  to={`/researchsRegistere/Single/${ModificationRrequest?.Research?._id}`}
                  style={{
                    marginLeft: '10px',                  // Left margin of 10 pixels
                    backgroundColor: 'var(--secondary-color)', // Background color from CSS variable
                    color: 'var(--main-color)',           // Text color from CSS variable
                    border: 'none',                       // Remove border
                    borderRadius: '5px',                  // Border radius of 5 pixels
                    cursor: 'pointer',                    // Set cursor to pointer
                    fontSize: '17px',                     // Font size of 17 pixels
                    padding: '2px 5px',                   // Padding of 2 pixels top and bottom, 5 pixels left and right
                    border: '1px solid var(--blue-color)', // Border style from CSS variable
                    backgroundColor: 'green'               // Override background color to blue
                  }}
                >
                  UPDATE
                  </Link>
                  : ''
                  }
               </div>

              
              </>
       
       :
       <Link
              className="Details"
              to={`/researchsRegistere/Single/${ModificationRrequest?.Research?._id}`}
              style={{
                marginLeft: '10px',                  // Left margin of 10 pixels
                backgroundColor: 'blue', // Background color from CSS variable
                color: 'var(--main-color)',           // Text color from CSS variable
                border: 'none',                       // Remove border
                borderRadius: '5px',                  // Border radius of 5 pixels
                cursor: 'pointer',                    // Set cursor to pointer
                fontSize: '17px',                     // Font size of 17 pixels
                padding: '7px 7px', 
                display: 'block',            // Padding of 2 pixels top and bottom, 5 pixels left and right
                border: '1px solid var(--blue-color)', // Border style from CSS variable
                textAlign: 'center',
              }}
          >
              تم الموافقة على التعديلات  
       </Link>
              
          }
          
                
               

              
        
        </div>
        













</>






);
};

{/* <div className="Publish-parent">
  <Link className="Publish" to={`/PublishResearch/${RegisteredResearch?._id}`}>
                              Publish
  </Link>
  
  {user?.isAdmin ? 
  <Link className="Publish" onClick={() => Aproved(id)}  to={`/Dashboard/RegisteredResearch` }  >
      APROVED
  </Link>
       : ''
       }

  {user?.isAdmin ? 
  <Link className="Publish" onClick={() => Delete(RegisteredResearch?._id)}  to={`/Dashboard/RegisteredResearch` }  >
      DELETE
  </Link>
       : ''
       }

  {user?.isAdmin ? 
  <Link className="Publish" onClick={() => togglePopup}  to={`/UpdateReseachRegister/${RegisteredResearch?._id}` }  >
      UPDATE
  </Link>
       : ''
       }
       

 
</div> */}

{/* <button  className="Publish"  onClick={() => Aproved(id)}>APROVED</button> */}
export default ModificationRrequestDetails;