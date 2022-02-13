import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
            </div>

            <div>
                <div className={classes.posts}>
                    <Post message='Hi, how are you?' like='15'/>
                    <Post message='Its my first post ' like='30'/>

                </div>

            </div>

        </div>);
}

export default MyPosts;