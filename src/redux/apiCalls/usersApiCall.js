import { usersActions } from "../slices/usersSlice";
import request from "../../utils/request";
import { toast } from "react-toastify";



// Fetch Posts Based On Page Number
// export function fetchuserss2(token,pageNumber,id) {
//     return async (dispatch) => {
//       try {
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}` // Add token to the Authorization header
//           }
//         };
//         const { data } = await request.get(`api/researchsRegistere/${id}?pageNumber=${pageNumber}`, config);
//         dispatch(usersActions.setuserss2(data));
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
export function fetchuserss2(token, pageNumber) {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}` // Add token to the Authorization header
        }
      };
      const { data } = await request.get(`api/users/profile?pageNumber=${pageNumber}`, config);
      dispatch(usersActions.userss2(data)); // Corrected action creator usage
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
export function getuserss2Count(token) {
  return async (dispatch) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}` // Add token to the Authorization header
      }
    };
    try {
      const { data } = await request.get(`api/users/count`,config);
      dispatch(usersActions.setuserss2Count(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}





// Create Post
export function createusers2(newusers2) {
  return async (dispatch, getState) => {
    console.log("pppppppppppp")
    try {
      dispatch(usersActions.setLoading());
      await request.post(`/api/researchsRegistere`, newusers2, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
          "Content-Type": "multipart/form-data",
        },
      });

      dispatch(usersActions.setIsusers2Created());
      setTimeout(() => dispatch(usersActions.clearIsusers2Created()), 2000); // 2s
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("reererererererr")
      dispatch(usersActions.clearLoading());
    }
  };
}




// Fetch Single Post
export function fetchSingleusers2(usersId) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/researchsRegistere/Single/${usersId}`);
      dispatch(usersActions.setusers2(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}





