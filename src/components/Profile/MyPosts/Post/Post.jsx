import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

    let onClickLikeBtn = () => {
        props.setLike(props.post.id);
    }

    let checkLike = () => {
       return props.post.isLike ?  classes.likeBtnTrue : classes.likeBtnFalse
        /*if (props.post.isLike === false) return classes.likeBtnFalse
        else return classes.likeBtnTrue*/
    }

    return (
        <div className={classes.item}>
            <img src='https://cdn.kanobu.ru/articles/pics/34e02571-ee14-4253-8185-37a975558e5b.jpg'/>
            {props.post.message}
            <div>
                <div>
                    Кол-во лайков: {props.post.like}
                </div>
                <div>
                    <button onClick={onClickLikeBtn} className={checkLike()}>
                        Нравится
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Post;