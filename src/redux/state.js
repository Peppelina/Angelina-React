const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

const SET_LIKE = 'SET_LIKE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', like: 15, isLike: false},
                {id: 2, message: 'Hello', like: 10, isLike: false},
                {id: 3, message: 'Way', like: 1, isLike: false},
                {id: 4, message: 'Super', like: 22, isLike: false},
                {id: 5, message: 'How are you', like: 34, isLike: false}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: '1', name: 'Angelina'},
                {id: '2', name: 'Viktoria'},
                {id: '3', name: 'Vadim'},
                {id: '4', name: 'Anton'},
                {id: '5', name: 'Igor'}
            ],
            messages: [
                {id: '1', message: 'Hi'},
                {id: '2', message: 'Hello'},
                {id: '3', message: 'Hello'},
                {id: '4', message: 'Hello'},
                {id: '5', message: 'How are you'},
            ],
            newMessageText: ''
        },
        navbar: {
            friendsBlock: [
                {id: '1', name: 'Viktoria', avatarUrl: 'https://klike.net/uploads/posts/2018-10/1539499416_1.jpg'},
                {
                    id: '2',
                    name: 'Angelina',
                    avatarUrl: 'https://klike.net/uploads/posts/2019-07/medium/1564314059_1.jpg'
                },
                {id: '3', name: 'Igor', avatarUrl: 'https://klike.net/uploads/posts/2019-07/medium/1564314087_2.jpg'},
                {id: '4', name: 'Vadim', avatarUrl: 'https://klike.net/uploads/posts/2019-07/medium/1564314090_3.jpg'},
                {id: '5', name: 'Anton', avatarUrl: 'https://klike.net/uploads/posts/2019-07/medium/1564314170_12.jpg'},
            ]
        }
    },
    getState() {
        return this._state;
    },
    _subscriber() {
    },
    subscribe(observer) {
        this._subscriber = observer;
    },

    dispatch(action) { /*обязательно type:'ADD-POST'*/
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id + 1, //берем id последнего элемента и ему +1
                    // индекс = длина массива -1, тк индексы с 0
                    message: this._state.profilePage.newPostText,
                    like: 0,
                    isLike: false
                }
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._subscriber(this._state);
                break;
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newText;
                this._subscriber(this._state);
                break;
            case UPDATE_NEW_MESSAGE_TEXT:
                this._state.dialogsPage.newMessageText = action.newText;
                this._subscriber(this._state);
                break;
            case SEND_MESSAGE:
                let newMessage = {
                    id: 6,
                    message: this._state.dialogsPage.newMessageText
                }
                this._state.dialogsPage.newMessageText = '';
                this._state.dialogsPage.messages.push(newMessage);
                this._subscriber(this._state);
                break;
            case SET_LIKE:
                let new_posts = this._state.profilePage.posts.map(post => {
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
                this._state.profilePage.posts = new_posts;
                this._subscriber(this._state);
        }
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

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const setLikeActionCreator = (postId) => {
    return {
        type: SET_LIKE,
        postId: postId
    }
}
export default store
