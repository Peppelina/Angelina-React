import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (<div className={classes.content}>
        <img src='https://hoteisea.ru/wp-content/uploads/2019/03/Sea.jpg'/>
    <div>
      ava + descr
    </div>

    <MyPosts/>

  </div>);
}

export default Profile;