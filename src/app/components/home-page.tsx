import React, { useEffect } from "react";
import { useAppSelector } from "@/store";
import { useDispatch } from "react-redux";
import { postListRequest } from "@/store/action/postAction";
import Header from "./header";

const HomePage = () => {
  //   const postListState = useAppSelector((state) => state.post.postListState);
  const dispatch = useDispatch();
  const postList = useAppSelector((state) => state.post.postList);
  useEffect(() => {
    dispatch(postListRequest());
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};
export default HomePage;
