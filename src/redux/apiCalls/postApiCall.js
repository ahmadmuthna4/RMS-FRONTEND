import { RegisteredResearchActions } from "../slices/postSlice";
import request from "../../utils/request";
import { toast } from "react-toastify";
import { authActions } from "../slices/authSlice";



// Fetch Posts Based On Page Number
// export function fetchRegisteredResearchs2(token,pageNumber,id) {
//     return async (dispatch) => {
//       try {
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}` // Add token to the Authorization header
//           }
//         };
//         const { data } = await request.get(`api/researchsRegistere/${id}?pageNumber=${pageNumber}`, config);
//         dispatch(RegisteredResearchActions.setRegisteredResearchs2(data));
//       } catch (error) {
//         // toast.error(error.response.data.message);
//         if (error.response && error.response.data && error.response.data.message) {
//           console.error("API error message:", error.response.data.message);
//           toast.error(error.response.data.message);
//         } else {
//           console.error("Unexpected error:", error);
//           toast.error("An error occurred while processing your request.");
//         }
//       }
//     };
//   }

// Fetch Posts Based On Page Number
export function fetchRegisteredResearchs2(token, pageNumber, id) {
  return async (dispatch,getState) => {
    try {
      const config = {
        headers: {
          Authorization:"Bearer " + getState().auth.user.token,
        }
      };
      const { data } = await request.get(`api/researchsRegistere/${id}?pageNumber=${pageNumber}`, config);
      dispatch(RegisteredResearchActions.RegisteredResearchs2(data)); // Corrected action creator usage
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
export function getRegisteredResearchs2Count(token,id) {
  return async (dispatch) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}` // Add token to the Authorization header
      }
    };
    try {
      const { data } = await request.get(`api/researchsRegistere/${id}/count`,config);
      dispatch(RegisteredResearchActions.setRegisteredResearchs2Count(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

export function getRegisteredResearchs2ApprovedCount(token,id) {
  return async (dispatch) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}` // Add token to the Authorization header
      }
    };
    try {
      const { data } = await request.get(`api/researchsRegistere/${id}/countApproved`,config);
      dispatch(RegisteredResearchActions.setRegisteredResearchs2ApprovedCount(data));
      console.log('data')
      console.log(data)
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}





// Create Post
export function createRegisteredResearch2(newRegisteredResearch2) {
  return async (dispatch, getState) => {
    try {
      dispatch(RegisteredResearchActions.setLoading());
      await request.post(`/api/researchsRegistere`, newRegisteredResearch2, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
          "Content-Type": "multipart/form-data",
        },
      });

      dispatch(RegisteredResearchActions.setIsRegisteredResearch2Created());
      setTimeout(() => dispatch(RegisteredResearchActions.clearIsRegisteredResearch2Created()), 2000); // 2s
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(RegisteredResearchActions.clearLoading());
    }
  };
}




// Fetch Single Post
export function fetchSingleRegisteredResearch2(RegisteredResearchId) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/researchsRegistere/Single/${RegisteredResearchId}`);
      dispatch(RegisteredResearchActions.setRegisteredResearch2(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}







// Update Post
export function updateRegisteredResearch(newResearch,Id) {
  return async (dispatch,getState) => {
    try {
      dispatch(RegisteredResearchActions.setLoading());
      const { data } = await request.put(`/api/researchsRegistere/${Id}`, newResearch, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        }
      });
      dispatch(RegisteredResearchActions.updateRegisteredResearch(data));
      console.log("successfuly update11111111111111")
      toast.success("successfuly update");
      
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("errror update")
    }
  };
}

// Update Post
export function updateRegisteredResearchRequest(newResearch,Id) {
  return async (dispatch,getState) => {
    try {
      dispatch(RegisteredResearchActions.setLoading());
      const { data } = await request.put(`/api/researchsRegistere/AppendMember/${Id}`, newResearch, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        }
      });
      dispatch(RegisteredResearchActions.updateRegisteredResearch(data));
      console.log("successfuly update11111111111111")
      console.log(data)
      console.log("successfuly update11111111111111")
      toast.success("successfuly update");
      
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("errror update")
    }
  };
}

// Delete Post
export function deleteRegisteredResearch(postId) {
  return async (dispatch,getState) => {
    try {
       await request.delete(`api/researchsRegistere/${postId}`, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        }
      });
      // dispatch(RegisteredResearchActions.delete(data));
      toast.success("research has been deleted successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

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