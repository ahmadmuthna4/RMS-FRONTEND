import './Navbar.css'
import img1 from "../../assets/9.png"
import { useSelector } from "react-redux";



const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  return (
<>
    {user ?( <>
      <div className="nav">
          <div className="Group1" >
              {/* <input type="text" className="Rectangle13" placeholder="Search" />            
              <div className="Shape_search" ><i className="fas fa-search "></i></div> */}
          </div>
          <div className="Group2" >
              <h2>{user.userName} </h2>
              <img src={user.profilePhoto.url} alt={user.userName} className="Avatar" />
              
          </div>
      </div>
      
</>):( <>
      <div className="nav">
          <div className="Group1" >
              <input type="text" className="Rectangle13" placeholder="Search" />            
              <div className="Shape_search" ><i className="fas fa-search "></i></div>
          </div>
          <div className="Group2" >
              
              <img src={img1} alt="" className="Avatar" />
          </div>
      </div>
      
</>)}
</>
   
  )
}

export default Sidebar