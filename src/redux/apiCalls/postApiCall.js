import { postActions } from "../slices/postSlice";
import request from "../../utils/request";
import { toast } from "react-toastify";
import { authActions } from "../slices/authSlice";



// Fetch Posts Based On Page Number
export function fetchPosts(token,pageNumber,id) {
    return async (dispatch) => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}` // Add token to the Authorization header
          }
        };
        const { data } = await request.get(`api/researchsRegistere/${id}?pageNumber=${pageNumber}`, config);
        console.log('data')
        console.log(data)
        dispatch(postActions.setPosts(data));
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
  }








// Get Posts Count
export function getPostsCount(token,id) {
  return async (dispatch) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}` // Add token to the Authorization header
      }
    };
    try {
      const { data } = await request.get(`api/researchsRegistere/${id}/count`,config);
      dispatch(postActions.setPostsCount(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Fetch Posts Based On Category
// export function fetchPostsBasedOnCategory(category) {
//   return async (dispatch) => {
//     try {
//       const { data } = await request.get(`/api/posts?category=${category}`);
//       dispatch(postActions.setPostsCate(data));
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };
// }



// Create Post
export function createPost(newPost) {
  return async (dispatch, getState) => {
    try {
      dispatch(postActions.setLoading());
      await request.post(`/api/researchsRegistere`, newPost, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
          "Content-Type": "multipart/form-data",
        },
      });

      dispatch(postActions.setIsPostCreated());
      setTimeout(() => dispatch(postActions.clearIsPostCreated()), 2000); // 2s
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(postActions.clearLoading());
    }
  };
}




// Fetch Single Post
export function fetchSinglePost(postId) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/researchsRegistere/Single/${postId}`);
      dispatch(postActions.setPost(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}





// Toggle Like Post
// export function toggleLikePost(postId) {
//   return async (dispatch,getState) => {
//     try {
//       const { data } = await request.put(`/api/posts/like/${postId}`, {}, {
//         headers: {
//           Authorization: "Bearer " + getState().auth.user.token,
//         }
//       });
//       dispatch(postActions.setLike(data));
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };
// }

// Update Post Image
// export function updatePostImage(newImage,postId) {
//   return async (dispatch,getState) => {
//     try {
//       await request.put(`/api/posts/update-image/${postId}`, newImage, {
//         headers: {
//           Authorization: "Bearer " + getState().auth.user.token,
//           "Content-Type":"multipart/form-data",
//         }
//       });
//       toast.success("New post image uploaded successfully");
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };
// }

// Update Post
// export function updatePost(newPost,postId) {
//   return async (dispatch,getState) => {
//     try {
//       const { data } = await request.put(`/api/posts/${postId}`, newPost, {
//         headers: {
//           Authorization: "Bearer " + getState().auth.user.token,
//         }
//       });
//       dispatch(postActions.setPost(data));
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };
// }

// Delete Post
// export function deletePost(postId) {
//   return async (dispatch,getState) => {
//     try {
//       const { data } = await request.delete(`/api/posts/${postId}`, {
//         headers: {
//           Authorization: "Bearer " + getState().auth.user.token,
//         }
//       });
//       dispatch(postActions.deletePost(data.postId));
//       toast.success(data.message);
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