// import './Pagenation.css'
// import img1 from "../../assets/9.png"


// const Sidebar = () => {
//   return (
//     <>

//         <div class="parent_pagination">
//             <div class="pagination">
//                 <a href="#">&laquo;</a>
//                 <a href="#">1</a>
//                 <a href="#" class="active">2</a>
//                 <a href="#">3</a>
//                 <a href="#">4</a>
//                 <a href="#">5</a>
//                 <a href="#">6</a>
//                 <a href="#">&raquo;</a>
//             </div>
//         </div>
            
//     </>
//   )
// }

// export default Sidebar





import "./Pagenation.css";



const Pagination = ({pages, currentPage, setCurrentPage}) => {



  const generatedPages = [];
  for(let i = 1; i <= pages; i++) {
      generatedPages.push(i);
  }

  return ( 
      <div className="pagination">
          <button 
           className="page previous"
           onClick={() => setCurrentPage(current => current - 1)}
           disabled={currentPage === 1}
          >
              Previous
          </button>
          {generatedPages.map(page => (
              <div 
               onClick={() => setCurrentPage(page)} 
               key={page} 
               className={currentPage === page ? "page active" : "page"} 
              >
                  {page}
              </div>
          ))}
          <button 
           className="page next"
           onClick={() => setCurrentPage(current => current + 1)}
           disabled={currentPage === pages}
          >
              Next
          </button>
      </div>
   );
}

export default Pagination;


