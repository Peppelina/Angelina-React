import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => {
        return <Post post={post} setLike={props.setLike}/>
    })

    return (
        <div className={classes.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange = { (event) =>
                                {props.updateNewPostText(event.target.value) } }
                                  value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={props.addPost}>Add post</button>
                    </div>
                </div>
            </div>

            <div>
                <div className={classes.posts}>
                    {postsElements}
                </div>

            </div>

        </div>);
}

export default MyPosts;