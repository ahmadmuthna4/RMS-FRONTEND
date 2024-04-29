import './Researchers.css'
import Category from '../components/Category'

import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";


import { useEffect , useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchuserss2,getuserss2Count } from "../../../redux/apiCalls/usersApiCall";
import { deleteUser } from "../../../redux/apiCalls/profileApiCall";






const Researchers = () => {

    



    const dispatch = useDispatch();
    
    const { userss } = useSelector(state => state.users);
    const { user } = useSelector(state => state.auth);
    const { id } = useParams();
    console.log("////////////////////")
    console.log(id)
    console.log("///////////////////////////")
    useEffect(() => {
      if (user?.isAdmin) {
        dispatch(fetchuserss2(user.token,1));
    }
      

    }, [dispatch,user?.isAdmin,user.token]);

  const [currentPage] = useState(1);
  // const pages = Math.ceil(userssCount / POST_PER_PAGE);

  useEffect(() => {
    dispatch(fetchuserss2(user.token,currentPage,user._id));
    window.scrollTo(0, 0);
  }, [currentPage,dispatch,user._id,user.token]);

  useEffect(() => {
    dispatch(getuserss2Count(user.token));
  }, [dispatch,user.token]);

  


  const DELETE = (id) => {
    console.log("delete")
    dispatch(deleteUser(id));
};



  return (
    <>
            
         <section class="portfolio" id="portfolio">
         <ToastContainer />



           

            <Category title='Researchers' />
            <div class="box-container">
                <table>
                    <tr className='tr'>
                    <th className='thh'>Id</th>
                    <th className='thh'>Email</th>
                    <th className='thh'>Firstname</th>
                    <th className='thh'>Lastname</th>
                    <th className='thh'>Action</th>
                    </tr>


                    {userss.map(user => 
                        <tr className='tr'>
                        <td className='tdd'>{user?._id}</td>
                        <td className='tdd'>{user?.email}</td>
                        <td className='tdd'>{user?.userName}</td>
                        <td className='tdd'>Griffin</td>
                        <td className='tdd'>
                            <button onClick={() => DELETE(user?._id)} >Delete</button>
                        </td>
                        </tr>
                        
                    
                    )}




                </table>

                
            </div>

        </section>
    
    </>
  )
}

export default Researchers