import counterSaga from "@/store/saga/counterSaga";
import { watchFetchPostList } from "@/store/saga/postSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  console.log("root saga");
  yield all([counterSaga(), watchFetchPostList()]);
}
