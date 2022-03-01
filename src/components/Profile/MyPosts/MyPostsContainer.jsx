import React from 'react';
import {
    addPostActionCreator,
    setLikeActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        /*posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText*/
        ...state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) =>{
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () =>{
            dispatch(addPostActionCreator())
        },
        setLike: (id) => {
            dispatch(setLikeActionCreator(id))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;