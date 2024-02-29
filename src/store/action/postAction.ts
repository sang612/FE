// import { POST_LIST } from "@/constant";

// export const postList = async () => {
//   return {
//     type: POST_LIST,
//     data: "apple",
//   };
// };

export const postListRequest = () => ({ type: "POST_LIST_REQUEST" });
export const postListSuccess = (data) => ({
  type: "POST_LIST_SUCCESS",
  payload: data,
});
export const postListFailure = (error) => ({
  type: "POST_LIST_FAILURE",
  payload: error,
});
