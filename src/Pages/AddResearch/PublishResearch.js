import React from 'react'
import './PublishResearch.css'

import { Link } from "react-router-dom";
import  { useState, useEffect } from 'react';


const AddResearch = () => {
    const [isActice, setActive] = useState(false);
    const handleActiceClick = () => {
        setActive(!isActice);
        console.log("active")
      };

    //   const [activeButton, setActiveButton] = useState(null);

    //   const handleButtonClick = (buttonName) => {
    //     setActiveButton(buttonName);
    //   };
   
  return (    
    <>
        <section class="portfolio" id="portfolio">

                <div class="header">
             
                {/* <Link to="/AddResearch"> <button className={activeButton === 'addResearch' ? 'active' : ''} onClick={() => handleButtonClick('addResearch')} > Add Research </button> </Link>
                <Link to="/AddResearch/PublishResearch"><button className={activeButton === 'publishResearch' ? 'active' : ''} onClick={() => handleButtonClick('publishResearch')}> Publish Research </button> </Link>
                */}
                <Link to={'/AddResearch'} ><button class={isActice ? 'active' : ''}   onClick={handleActiceClick}>Add Research</button></Link>
                <Link to={'/AddResearch/PublishResearch'}  ><button class={isActice ? '' : 'active'}  onClick={handleActiceClick}>Publish Research</button></Link>
                </div>
                <div class="update_information_container">
                    
                    <div class="update_information">
                        

                        <form action="" method="get">
                            <input type="text" name="" id="" placeholder="Select Research" />
                            <input type="date" name="" id="" placeholder="Date of publication of the research" />
                            <input type="text" name="" id="" placeholder="Magazine name" />
                            <input type="text" name="" id="" placeholder="Magazine type" />
                            <input type="text" name="" id="" placeholder="Search link" />
                        </form>  
                    
                    </div>


                    

                    
                </div>

                <div class="action">
                    <button>save </button>
                    <button>cancel</button>
                </div> 

        </section>
    </>

    )
}

export default AddResearch