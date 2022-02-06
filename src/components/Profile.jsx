import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (<div className={classes.content}>
    <img src='https://hoteisea.ru/wp-content/uploads/2019/03/Sea.jpg'/>

    <div className = {classes.ava}>
      <img src = 'https://cdn.kanobu.ru/articles/pics/34e02571-ee14-4253-8185-37a975558e5b.jpg' /> 
      ava + descr
    </div>

    <div>
      My posts
        <div>New posts</div>
    </div>

    <div>
      <div className={classes.item}>post1</div>
      <div className={classes.item}>post2</div>
    </div>

  </div>);
}

export default Profile;