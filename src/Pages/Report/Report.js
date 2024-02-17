

import './Report.css'
import img1 from "../../assets/0.jpg"


const Report = () => {
  return (
    <>
                <div class="report_container">

                    <div class="form">
                        <form action="" method="get">
                            <input type="date" name="" id="" placeholder="Start Date" />
                            <input type="date" name="" id="" placeholder="End Date" />
                            <input type="text" name="" id="" placeholder="Researcher's Name" />
                            <input type="text" name="" id="" placeholder="Type" />
                        </form>
                        <button>report print</button>
                    </div>
                    <div class="researchs">


                        <div class="box">
                            <div class="research" >
                                <div class="VertCard" >
                                <div class="Image" ></div>
                                <div class="Content" >
                                    <img src={img1} alt="" className="Avatar" />
                                    <div class="Username" >UserName</div>
                                    <div class="ResearchName" >Research Name</div>
                                </div>
                                <div class="Button" >
                                    <div class="Details" >Details      </div>
                                </div>
                                </div>
                            </div>
                        </div>


                        <div class="box">
                            <div class="research" >
                                <div class="VertCard" >
                                <div class="Image" ></div>
                                <div class="Content" >
                                    <img src={img1} alt="" className="Avatar" />
                                    <div class="Username" >UserName</div>
                                    <div class="ResearchName" >Research Name</div>
                                </div>
                                <div class="Button" >
                                    <div class="Details" >Details      </div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="box">
                            <div class="research" >
                                <div class="VertCard" >
                                <div class="Image" ></div>
                                <div class="Content" >
                                    <img src={img1} alt="" className="Avatar" />
                                    <div class="Username" >UserName</div>
                                    <div class="ResearchName" >Research Name</div>
                                </div>
                                <div class="Button" >
                                    <div class="Details" >Details      </div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="box">
                            <div class="research" >
                                <div class="VertCard" >
                                <div class="Image" ></div>
                                <div class="Content" >
                                    <img src={img1} alt="" className="Avatar" />
                                    <div class="Username" >UserName</div>
                                    <div class="ResearchName" >Research Name</div>
                                </div>
                                <div class="Button" >
                                    <div class="Details" >Details      </div>
                                </div>
                                </div>
                            </div>
                        </div>




                    
                    
                    </div>

                    </div>
    </>
  )
}

export default Report