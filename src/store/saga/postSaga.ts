// import { put, takeEvery } from "redux-saga/effects";
// import { POST_LIST, SET_POST_LIST } from "../../constant";

// function* getPosts() {
//   let data = yield fetch(
//     "https://blog-nine-fawn-91.vercel.app/users/65e0436783b98849c59aeaea"
//   );
//   data = yield data.json();
//   console.log("action is called", data);
//   yield put({ type: SET_POST_LIST, data });
// }

// function* postSaga() {
//   yield takeEvery(POST_LIST, getPosts);
// }

// export default postSaga;

// postSaga.ts
import { call, put, takeEvery } from "redux-saga/effects";
import { postListSuccess, postListFailure } from "../action/postAction"; // Adjust the path and action creators

function* fetchPostList() {
  try {
    // Your asynchronous logic here
    // For example, fetch data from an API
    const response = yield call(
      fetch,
      "https://blog-pearl-nu.vercel.app/users/65e0436783b98849c59aeaea"
    );
    const data = yield call([response, "json"]);

    // Dispatch a success action with the data
    yield put(postListSuccess(data));
  } catch (error) {
    // Dispatch an error action if something goes wrong
    yield put(postListFailure(error.message));
  }
}

// Watch for the POST_LIST_REQUEST action and trigger fetchPostList
export function* watchFetchPostList() {
  yield takeEvery("POST_LIST_REQUEST", fetchPostList);
}
