import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.infoImg}>
                <img src='https://hoteisea.ru/wp-content/uploads/2019/03/Sea.jpg'/>
            </div>
            <div className={classes.descriptionBlog}>
                ava + descr
            </div>
        </div>
    );
}

export default ProfileInfo;