import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://cdn.kanobu.ru/articles/pics/34e02571-ee14-4253-8185-37a975558e5b.jpg'/>
            {props.message}
            <div>
                <span>
                    Кол-во лайков: {props.like}
                </span>
            </div>
        </div>
    );
}

export default Post;