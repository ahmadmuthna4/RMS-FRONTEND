import { ResearchNotAprovedActions } from "../slices/ResearchNotAprovedSlice";
import request from "../../utils/request";
import { toast } from "react-toastify";


// Fetch Posts Based On Page Number
export function fetchResearchNotAproved(token, pageNumber, id) {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}` // Add token to the Authorization header
        }
      };
      const { data } = await request.get(`api/researchsRegistere/notapproved/${id}?pageNumber=${pageNumber}`, config);
      dispatch(ResearchNotAprovedActions.ResearchNotAproved(data)); // Corrected action creator usage
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


// export function ResearchAproved(token, id) {
export function ResearchAproved(id) {
  return async (dispatch,getState) => {
    try {
    
      
      const { data } = await request.put(`api/researchsRegistere/${id}/approved`,  {},{
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        }
      });
      // const { data } = await request.put(`api/researchsRegistere/${id}/approved`, config);
      dispatch(ResearchNotAprovedActions.AprovedResearch(data)); // Corrected action creator usage
      
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("jjjjjjjjjjjj")
    }
  };
}








