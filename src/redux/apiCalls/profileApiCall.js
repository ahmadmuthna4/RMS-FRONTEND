import { profileActions  } from "../slices/profileSlice";
import { authActions } from "../slices/authSlice";
import request from "../../utils/request";
import { toast } from "react-toastify";

// Get User Profile
export function getUserProfile(userId) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/users/profile/${userId}`);
      dispatch(profileActions.setProfile(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// // Upload Profile Photo
export function uploadProfilePhoto(newPhoto) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.post(`/api/users/profile/profile-photo-upload`,newPhoto,{headers: {Authorization: "Bearer " + getState().auth.user.token,"Content-Type": "multipart/form-data",},});
      dispatch(profileActions.setProfilePhoto(data.profilePhoto));
      
      // modify the user in local storage with new photo
      const user = JSON.parse(localStorage.getItem("userInfo"));
      user.profilePhoto = data?.profilePhoto;
      localStorage.setItem("userInfo", JSON.stringify(user));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Update Profile
export function updateProfile(userId,profile) {
  return async (dispatch, getState) => {
    try {
      console.log("0000000000")
      const { data } = await request.put(
        `/api/users/profile/${userId}`,
        profile,
        {
          headers: {
            Authorization: "Bearer " + getState().auth.user.token,
            // "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("111111111111111")

      dispatch(profileActions.updateProfile(data));
      console.log("22222222222222")
      dispatch(authActions.setUsername(data.userName));
      

      // toast.success("upsate successfuly :)", {
      //   onClose: () => {
      //     // Reload the page after the toast message is closed
      //     window.location.reload();
      //   }
      // });

      // modify the user in local storage with new username
      console.log("3333333")
      const user = JSON.parse(localStorage.getItem("userInfo"));
      user.userName = data?.userName;
      localStorage.setItem("userInfo", JSON.stringify(user));
      console.log("4444444444444")
    } catch (error) {
      // toast.error("arrrrrrrrrrrrrrrrrrrr");
      toast.error(error.response.data.message);
    }
  };
}

// // Delete Profile (Account)
// export function deleteProfile(userId) {
//   return async (dispatch, getState) => {
//     try {
//       dispatch(profileActions.setLoading());
//       const { data } = await request.delete(
//         `/api/users/profile/${userId}`,
//         {
//           headers: {
//             Authorization: "Bearer " + getState().auth.user.token,
//           },
//         }
//       );

//       dispatch(profileActions.setIsProfileDeleted());
//       toast.success(data?.message);
//       setTimeout(() => dispatch(profileActions.clearIsProfileDeleted()), 2000);
//     } catch (error) {
//       toast.error(error.response.data.message);
//       dispatch(profileActions.clearLoading());
//     }
//   };
// }

// // Get Users Count (for admin dashboard)
// export function getUsersCount() {
//   return async (dispatch, getState) => {
//     try {
//       const { data } = await request.get(
//         `/api/users/count`,
//         {
//           headers: {
//             Authorization: "Bearer " + getState().auth.user.token,
//           },
//         }
//       );

//       dispatch(profileActions.setUserCount(data));
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };
// }

// // Get All Users Profile (for admin dashboard)
// export function getAllUsersProfile() {
//   return async (dispatch, getState) => {
//     try {
//       const { data } = await request.get(
//         `/api/users/profile`,
//         {
//           headers: {
//             Authorization: "Bearer " + getState().auth.user.token,
//           },
//         }
//       );

//       dispatch(profileActions.setProfiles(data));
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };
// }

// delete user 
export function deleteUser(id) {
  return async (dispatch, getState) => {
    try {
      console.log("Deleting user with ID:", id);
      console.log("User token:", getState().auth.user.token);

      const { data } = await request.delete(`api/users/profile/${id}`, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        }
      });

      console.log("User deleted successfully:", data);
      dispatch(profileActions.delete(data)); // Assuming this is the correct action creator usage
      // toast.success(data);
      toast.success(" profile has been deleted ", {
        onClose: () => {
          // Reload the page after the toast message is closed
          window.location.reload();
        }
      });
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error(error.response ? error.response.data.message : "An error occurred while deleting the user.");
    }
  }
}

