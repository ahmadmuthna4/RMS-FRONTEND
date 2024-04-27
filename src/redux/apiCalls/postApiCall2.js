import { PublishedResearchActions } from "../slices/postSlice2";
import request from "../../utils/request";
import { toast } from "react-toastify";
import { authActions } from "../slices/authSlice";



// Fetch Posts Based On Page Number
export function fetchPublishedResearchs2(token, pageNumber, id) {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}` // Add token to the Authorization header
        }
      };
      const { data } = await request.get(`api/researchsPublished/${id}?pageNumber=${pageNumber}`, config);
      dispatch(PublishedResearchActions.PublishedResearchs2(data)); // Corrected action creator usage
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
export function getPublishedResearchs2Count(token,id) {
  return async (dispatch) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}` // Add token to the Authorization header
      }
    };
    try {
      const { data } = await request.get(`api/researchsPublished/${id}/count`,config);
      dispatch(PublishedResearchActions.setPublishedResearchs2Count(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}





// Create Post
export function createPublishedResearch2(newPublishedResearch2,id) {
  return async (dispatch, getState) => {
    try {
      dispatch(PublishedResearchActions.setLoading());
      console.log(111111)
      await request.post(`/api/researchsPublished/${id}`,newPublishedResearch2,  {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
          "Content-Type": "application/json; charset=utf-8",
        },
      });
      console.log(2222222222222222)

      dispatch(PublishedResearchActions.setIsPublishedResearch2Created());
      setTimeout(() => dispatch(PublishedResearchActions.clearIsPublishedResearch2Created()), 2000); // 2s
      
    } catch (error) {
      toast.error("ddddddddddddddddddddddddddddddddddd");
      toast.error(error.response.data.message);
      console.log(error.response.data)
      dispatch(PublishedResearchActions.clearLoading());
    }
  };
}




// Fetch Single Post
export function fetchSinglePublishedResearch2(PublishedResearchId) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/researchsPublished/Single/${PublishedResearchId}`);
      dispatch(PublishedResearchActions.setPublishedResearch2(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

export function deletePublishdResearch(postId) {
  return async (dispatch,getState) => {
    try {
       await request.delete(`/api/researchsPublished/${postId}`, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        }
      });
      // dispatch(RegisteredResearchActions.delete(data));
      toast.success("research has been deleted successfully");
    } catch (error) {
      console.log("000000000000")
      toast.error(error.response.data.message);
    }
  };
}


// Update Post
export function updatePublishedResearch(newResearch,Id) {
  return async (dispatch,getState) => {
    try {
      const { data } = await request.put(`/api/researchsPublished/${Id}`, newResearch, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        }
      });
      dispatch(PublishedResearchActions.updatePublishedResearch(data));
      console.log("successfuly update11111111111111")
      toast.success("successfuly update");
      
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("errror update")
    }
  };
}
