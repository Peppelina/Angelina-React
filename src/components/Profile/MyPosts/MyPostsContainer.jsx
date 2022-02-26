import React from 'react';
import {
    addPostActionCreator,
    setLikeActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let onClickAddPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    let onClickLikeBtn = (id) => {
        props.store.dispatch(setLikeActionCreator(id))
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={onClickAddPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
                 setLike={onClickLikeBtn}/>
        );
}

export default MyPostsContainer;