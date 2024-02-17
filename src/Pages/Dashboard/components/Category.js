import './Category.css'
import { Link } from "react-router-dom";




const Category = () => {
  return (
    <>
        

            <div class="category" >

            <Link to={'/Dashboard'} >
                    <div class="Frame65 activee" >
                            <div class="Frame64" >
                            <div class="Researchers2" >Published  Research<br/></div>
                            </div>
                            <div class="Frame62" >
                            <div class="Vector">
                                <i class="fas fa-user fa-2x"></i>
                            </div>
                            <div class="Frame61">
                                <div >69</div>
                            </div>
                            </div>
                    </div>
                </Link>     
            

                
            <Link to={'/Dashboard/RegisteredResearch'} >
                <div class="Frame65" >
                    <div class="Frame64" >
                    <div class="Researchers2" >Registered Research<br/></div>
                    </div>
                    <div class="Frame62" >
                    <div class="Vector">
                        <i class="fas fa-user fa-2x"></i>
                    
                    </div>
                    <div class="Frame61">
                        <div >69</div>
                    </div>
                    </div>
                </div>
            </Link> 


            <Link to={'/Dashboard/Researchers'} >
                <div class="Frame65" >
                    <div class="Frame64" >
                    <div class="Researchers2" style={{ marginTop: '20px' }} >Researchers        <br/></div>
                    </div>
                    <div class="Frame62" >
                    <div class="Vector">
                        <i class="fas fa-user fa-2x"></i>
                    
                    </div>
                    <div class="Frame61">
                        <div >69</div>
                    </div>
                    </div>
                </div>
            </Link>     

            </div>



    
    </>
  )
}

export default Category