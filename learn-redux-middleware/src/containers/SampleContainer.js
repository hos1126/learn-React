import React from "react";
import Sample from "../components/Sample";
import { connect } from "react-redux";
import { getPost, getUsers } from "../modules/sample";

const { useEffect } = React;

const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers
}) => {
  useEffect(() => {
    getPost(1);
    getUsers();
  }, [getPost, getUsers]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  ({ sample }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: sample.loading.GET_POST,
    loadingUsers: sample.loading.GET_USERS
  }),
  { getPost, getUsers }
)(SampleContainer);
