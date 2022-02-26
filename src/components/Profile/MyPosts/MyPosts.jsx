import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => {
        return <Post post={post} setLike={props.setLike}/>
    })

    let newPostElement = React.createRef();

    let onClickAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value; /* берем значение введеное в textarea*/
        props.updateNewPostText(text);
    }
    return (
        <div className={classes.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={onClickAddPost}>Add post</button>
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