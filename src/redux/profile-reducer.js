const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_LIKE = 'SET_LIKE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi', like: 15, isLike: false},
        {id: 2, message: 'Hello', like: 10, isLike: false},
        {id: 3, message: 'Way', like: 1, isLike: false},
        {id: 4, message: 'Super', like: 22, isLike: false},
        {id: 5, message: 'How are you', like: 34, isLike: false}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState,action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts[state.posts.length - 1].id + 1,
                //берем id последнего элемента и ему +1
                // индекс = длина массива -1, тк индексы с 0
                message: state.newPostText,
                like: 0,
                isLike: false
            }
           return {
                ...state,
                posts:[...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_LIKE: {
            let new_posts = state.posts.map(post => {
                if (post.id === action.postId)
                    if (post.isLike === false) {
                        post.like++;
                        post.isLike = true;
                    } else {
                        post.like--;
                        post.isLike = false;
                    }
                return post
            })
            return {
                ...state,
                posts: new_posts
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const
    setLikeActionCreator = (postId) => {
    return {
        type: SET_LIKE,
        postId: postId
    }
}
export default profileReducer