import { useParams, Link } from "react-router-dom";
import { useEffect, useState,useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Spinner from 'react-spinner';

// import { posts } from "./dummyData";
import "./ResearchsRegistereSigle.css";
import { toast } from "react-toastify";
import { ResearchAproved } from "../../../src/redux/apiCalls/ResearchNotAprovedApiCall";

import {
    deleteRegisteredResearch,
    fetchSingleRegisteredResearch2,
    // toggleLikeRegisteredResearch2,
    // updateRegisteredResearch2Image
  } from "../../redux/apiCalls/postApiCall";
import { useDispatch, useSelector } from "react-redux";

const RegisteredResearch2Details = () => {

    const dispatch = useDispatch();
    const { RegisteredResearch } = useSelector((state) => state.RegisteredResearch);
    const { user } = useSelector((state) => state.auth);
    const [showSpinner, setShowSpinner] = useState(false);
    console.log(user.token)

    const [isPopupOpen, setPopupOpen] = useState(false);

    const togglePopup = () => {
      setPopupOpen(!isPopupOpen);
    };
        
    const { id } = useParams();
    // const post = posts.find((p) => p._id === +id);

    const [updateRegisteredResearch2, setUpdateRegisteredResearch2] = useState(false);
    const [file, setFile] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(fetchSingleRegisteredResearch2(id));
      }, [id]);
   

    const Aproved = (id) => {
      console.log("ahasdfsfsaf")
      dispatch(ResearchAproved(id));
  };
    const Delete = (id) => {
      console.log("0000000")
      dispatch(deleteRegisteredResearch(id));
  };


  const page1Ref = useRef(null);
      const page2Ref = useRef(null);
      const page3Ref = useRef(null);
  

    

      const handleDownloadPDF = async () => {

        setShowSpinner(true);

        try {
          const page1Canvas = await html2canvas(page1Ref.current, { scale: 3 });
          const page2Canvas = await html2canvas(page2Ref.current, { scale: 3 });
          const page3Canvas = await html2canvas(page3Ref.current, { scale: 3 });
      
          const pdf = new jsPDF('p', 'mm', 'a4', true);
      
          // Add page 1
          const page1DataUrl = page1Canvas.toDataURL('image/png');
          pdf.addImage(page1DataUrl, 'PNG', 0, 0, 210, 297); // Assuming A4 size
          pdf.addPage();

          const page2DataUrl = page2Canvas.toDataURL('image/png');
          pdf.addImage(page2DataUrl, 'PNG', 0, 0, 210, 297); // Assuming A4 size
          pdf.addPage();
      
          const page3DataUrl = page3Canvas.toDataURL('image/png');
          pdf.addImage(page3DataUrl, 'PNG', 0, 0, 200, 140); // Assuming A4 size

          
      
          pdf.save('invoice.pdf');
          setShowSpinner(false);
        } catch (error) {
          console.error('Error generating PDF:', error);
          setShowSpinner(false);
        }
      };
  

    

    return (
        <>
        <div className="post-details">
            {/* <img src={RegisteredResearch?.ResearcherName?.profilePhoto?.url} alt="" className="post-details-user-image" />
            <h1 className="RegisteredResearch-details-title">{RegisteredResearch?.ResearcherName?.userName}</h1>
            <h1 className="post-details-title">{RegisteredResearch?.ResearchNameArabic}</h1>
            <h2 className="post-details-title">{RegisteredResearch?.ResearchNameEnglish}</h2>
            <h2 className="post-details-title">{RegisteredResearch?.StartDate}</h2>
            <h2 className="post-details-title">{RegisteredResearch?.Type}</h2>
            <h2 className="post-details-title">{RegisteredResearch?.NatureOfResearch}</h2>
            <h2 className="post-details-title">{RegisteredResearch?.ResearchSummaryAndObjectives}</h2>
            <h2 className="post-details-title">{RegisteredResearch?.createdAt.substring(0, 10)}</h2> */}

            <div class="box-container" dir="rtl">

                  <div class="content_aleart" ref={page1Ref}>
                    <div class="title">
                        <h1>استمارة اعتماد مشروع بحث علمي</h1>
                        <h2>للعام الدراسي 2024 / 2023</h2>
                    </div>
                      <div>
                            <h2>الجامعة: الموصل</h2>
                            <h2>الكلية: علوم الحاسوب والرياضيات</h2>
                            <h2> القسم: البرمجيات</h2>
                      </div>
                      <h2>       تاريخ تقديم االستمارة :  {RegisteredResearch?.createdAt.substring(0, 10)}     </h2>
                      <h2>يرجى التفضل بالموافقة على تسجيل البحث المذكورة تفاصيله ادناه</h2>
                      <h2>1- عنوان البحث باللغتين:</h2>
                      <div class="title">
                        <h3>   {RegisteredResearch?.ResearchNameArabic} </h3>
                        <h3 dir="ltr"> {RegisteredResearch?.ResearchNameEnglish} </h3>
                    </div>
                      
                      <h2> 2- اسماء الباحثين:</h2>                  
                      <table>
                        <tr>
                            <th className="th">اسم التدريسي المشترك بالبحث</th>
                            <th className="th">المرتبة العلمية</th>
                            <th className="th">التوقيع</th>
                            <th className="th">جهة الانتساب</th>
                        </tr>

                        {RegisteredResearch?.researchMembers?.map(item =>
                                <tr>
                                  <td className="td">{item?.memberName}</td>
                                  <td className="td">{item?.ScientificRank}  </td>
                                  <td className="td"></td>
                                  <td className="td"> علوم الحاسوب والرياضيات / قسم {item?.AffiliationAndNotes} </td>
                                </tr> 
                                
                            
                            )}
                    </table>

                    <section class="description">
                        <h2>موجز البحث واهدافه</h2>
                        <h2 dir="ltr">{RegisteredResearch?.ResearchSummaryAndObjectives}</h2>
                    </section>
                    <table>
                        <tr>
                            <th className="th">نوع البحث</th>
                            <th className="th">طبيعة البحث</th>
                            <th className="th">هل البحث؟</th>
                        </tr>
                        <tr>
                            <td className="td">{RegisteredResearch?.Type} </td>
                            <td className="td">{RegisteredResearch?.NatureOfResearch}</td>
                            <td className="td">  {RegisteredResearch?.ResearchIs}</td>
                        </tr>
                        
                    </table>
                    
                    
                      
                  </div>
    {/* 
                  <!-- ////////////////////////////////////////////////////////
                  ////////////////////////////////////////////////////////
                  ////////////////////////////////////////////////////////
                  ////////////////////////////////////////////////////////
                  //////////////////////////////////////////////////////// --> */}


                    <div class="content_aleart" ref={page2Ref}>

                      <section class="description2">
                          <h2> مصادقة القسم المختص: اوصت اللجنة العلمية في القسم بجلستها المرقمة () في 2024 / 2023 بالموافقة على تسجيل البحث ( في حالة عدم الموافقة تذكر الاسباب ) اوافق <span></span>   لااوافق   <span></span>  </h2>
                          <h2>عدم الموافقة للأسباب ادناه:</h2>
                          <h2>أ -</h2>
                          <h2>ب -</h2>
                          <div>
                              <div class="title">
                                  <h4>التوقيع:</h4>
                                  <h4>ا.د. لهيب محمد إبراهيم</h4>
                                  <h4>رئيس اللجنة العلمية في القسم</h4>
                              </div>
                              <div class="title">
                                  <h4> التوقيع:</h4>
                                  <h4> ا.م.د. نكتل مؤيد عيدان</h4>
                                  <h4>رئيس القسم</h4>
                              </div>
                          </div>
                      </section>

                      <section class="description2">
                          <h2> مصادقة اللجنة العلمية في القسم: ( في حالة عدم الموافقة تذكر الاسباب) اوافق <span></span> لااوافق  <span></span> </h2>
                          <h2>عدم الموافقة للأسباب ادناه:</h2>
                          <h2>أ -</h2>
                          <h2>ب -</h2>
                          <div>
                              <div class="title">
                                  <h4>التوقيع:</h4>
                                  <h4> م. د. علياء قصي احمد</h4>
                                  <h4>مقرر اللجنة العلمية</h4>
                              </div>
                              <div class="title">
                                  <h4> التوقيع:</h4>
                                  <h4>ا.د. لهيب محمد ابراهيم</h4>
                                  <h4>رئيس اللجنة العلمية في القسم</h4>
                              </div>
                          </div>
                      </section>
                      <section class="description2">
                          <h2> مصادقة رئيس القسم  : ( في حالة عدم الموافقة تذكر الاسباب) اوافق <span></span> لااوافق  <span></span> </h2>
                          <h2>عدم الموافقة للأسباب ادناه:</h2>
                          <h2>أ -</h2>
                          <h2>ب -</h2>
                          <div>
                              
                              <div >
                                  <h4> التوقيع:</h4>
                                  <h4>ا.م.د. نكتل مؤيد عيدان</h4>
                                  <h4>التاريخ: / /</h4>
                              </div>
                          </div>
                      </section>


                    </div>

                    {/* <!-- ////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////// --> */}

                    <div class="content_aleart" ref={page3Ref}>
                        <h1>الملاحضات:</h1>
                        <h2>1- تعد هذه الاستمارة سندا للحقوق الفكرية للباحث وتمنح هذه الاستمارة حق للباحث ان يعمل في حقل اختصاصه او خارج اختصاصه العام والدقيق سواء
                            كان البحث خارج او داخل الخطة.</h2>
                        <h2>2- يتم تقديم الاستمارة من قبل الباحثين الى اللجنة العلمية في الفرع وفي حالة عدم الموافقة تعاد الاستمارة الى الباحثين بكتاب رسمي من الفرع المختص
                            مع ذكر االسباب.</h2>
                        <h2>3- يتم اعادة الاستمارة الى الفرع العلمي المختص بعد اكمال المصادقات المطلوبة عليها.</h2>
                        <h2>4- يقوم الفرع العلمي بارسال نسخة من الاستمارة بعد المصادقة النهائية الى الاحصاء في الفرع او القسم.</h2>
                        <h2>5- يحق للباحث الغاء تسجيل البحث او تعديل عنوان البحث او اضافة باحثين للبحث بتقديم طلب رسمي لرئيس الفرع العلمي ويعرض على اللجنة العلمية
                            في الفرع.</h2>
                        <h2>6- البحوث المستلة من اطاريح الدكتوراه و رسائل الماجستير تعتبر مسجلة ويصار الى اخذ المعلومات المطلوبة من المعاون العلمي عند الحاجة.</h2>
                        <h2>7- تقدم كافة الاعتراضات الى السيد المعاون للشؤون العلمية.</h2>
                        
                    </div>

                    {/* <!-- ////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////// --> */}
            
                
              </div>
             
        </div>

        <div className="Publish-parent">
        {RegisteredResearch?.isApproved ? 
                <Link className="Publish" to={`/PublishResearch/${RegisteredResearch?._id}`}>
                                            Publish
                </Link>
             : ''
            }
          
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

        {!RegisteredResearch?.isApproved ? 
            <Link className="Publish" onClick={() => togglePopup}  to={`/UpdateReseachRegister/${RegisteredResearch?._id}` }  >
                UPDATE
            </Link>
           : ''
        }
               

            {RegisteredResearch?.isApproved ? 
                <Link className="Publish"  to={`/AddModificationRrequest/${RegisteredResearch?._id}` }  >
                    Modification Request
                </Link>
                : ''
            }

          

         
        </div>

            <div className="Publi">
           
               <div>
                {showSpinner && <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>} {/* Show spinner when `showSpinner` state is true */}
                <button onClick={handleDownloadPDF}>Download PDF</button>
               </div>
            </div>
        </>
    );
};

export default RegisteredResearch2Details;