import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={classes.infoImg}>
                <img src='https://hoteisea.ru/wp-content/uploads/2019/03/Sea.jpg'/>
            </div>
            <div className={classes.descriptionBlog}>
                <img src={props.profile.photos.large} alt=""/>
                <div>
                    {props.profile.fullName}
                </div>
                <div>
                    {props.profile.lookingForAJobDescription}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;