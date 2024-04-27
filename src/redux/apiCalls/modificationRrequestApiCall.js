import { ModificationRrequestActions } from "../slices/modificationRrequestSlice";
import request from "../../utils/request";
import { toast } from "react-toastify";
import { authActions } from "../slices/authSlice";





// Fetch Posts Based On Page Number
export function fetchModificationRrequest( pageNumber, id) {
  return async (dispatch,getState) => {
    try {
      const config = {
        headers: {
          Authorization:"Bearer " + getState().auth.user.token,
        }
      };
      const { data } = await request.get(`api/modificationRrequest/${id}?pageNumber=${pageNumber}`, config);
      dispatch(ModificationRrequestActions.ModificationRrequest(data)); // Corrected action creator usage
    } catch (error) {
      // Handle errors
      if (error.response && error.response.data && error.response.data.message) {
        console.error("API error message:", error.response.data.message);
        toast.error(error.response.data.message);
      } else {
        console.error("Unexpected error:", error);
        toast.error("An error occurred while processing your request.");
      }
    }
  };
}




// Get Posts Count
export function getModificationRrequestCount(id) {
  return async (dispatch,getState) => {
    const config = {
      headers: {
        Authorization:"Bearer " + getState().auth.user.token,
      }
    };
    try {
      const { data } = await request.get(`api/modificationRrequest/${id}/count`,config);
      dispatch(ModificationRrequestActions.setModificationRrequestCount(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}



// Fetch Single Post
export function fetchSingleModificationRrequest(ModificationRrequestId) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/modificationRrequest/Single/${ModificationRrequestId}`);
      dispatch(ModificationRrequestActions.setModificationRrequest(data));
      console.log('000000000')
    } catch (error) {
      console.log('111111111111')
      toast.error(error.response.data.message);
    }
  };
}






// Create Post
export function createModificationRrequest(newModificationRrequest,id) {
  return async (dispatch, getState) => {
    try {
      dispatch(ModificationRrequestActions.setLoading());
      await request.post(`api/modificationRrequest/${id}`, newModificationRrequest, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
          "Content-Type": "application/json; charset=utf-8",
        },
      });

      dispatch(ModificationRrequestActions.setIsModificationRrequestsCreated());
      setTimeout(() => dispatch(ModificationRrequestActions.clearIsModificationRrequestsCreated()), 2000); // 2s
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(ModificationRrequestActions.clearLoading());
    }
  };
}


export function ModificationRrequestAproved(id) {
  return async (dispatch,getState) => {
    try {
    
      const { data } = await request.put(`api/modificationRrequest/${id}`,  {},{
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        }
      });
      dispatch(ModificationRrequestActions.AprovedModificationRrequest(data)); // Corrected action creator usage
      console.log("11111")
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}











// Update Post
// export function updateRegisteredResearch(newResearch,Id) {
//   return async (dispatch,getState) => {
//     try {
//       dispatch(RegisteredResearchActions.setLoading());
//       const { data } = await request.put(`/api/researchsRegistere/${Id}`, newResearch, {
//         headers: {
//           Authorization: "Bearer " + getState().auth.user.token,
//         }
//       });
//       dispatch(RegisteredResearchActions.updateRegisteredResearch(data));
//       console.log("successfuly update11111111111111")
//       toast.success("successfuly update");
      
//     } catch (error) {
//       toast.error(error.response.data.message);
//       console.log("errror update")
//     }
//   };
// }

// Delete Post
// export function deleteRegisteredResearch(postId) {
//   return async (dispatch,getState) => {
//     try {
//        await request.delete(`api/researchsRegistere/${postId}`, {
//         headers: {
//           Authorization: "Bearer " + getState().auth.user.token,
//         }
//       });
//       // dispatch(RegisteredResearchActions.delete(data));
//       toast.success("research has been deleted successfully");
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };
// }






// Get All Posts
// export function getAllPosts() {
//   return async (dispatch) => {
//     try {
//       const { data } = await request.get(`/api/posts`);
//       dispatch(postActions.setPosts(data));
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };
// }