let store = {
    _state : {
        profilePage:  {
            posts: [
                {id: '1', message: 'Hi', like: '15'},
                {id: '2', message: 'Hello', like: '10'},
                {id: '3', message: 'Way', like: '1'},
                {id: '4', message: 'Super', like: '22'},
                {id: '5', message: 'How are you', like: '34'}
            ],
            newPostText: ''
        },
        messagesPage: {
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
            ]
        },
        navbar: {
            friendsBlock: [
                {id:'1', name:'Viktoria', avatarUrl:'https://klike.net/uploads/posts/2018-10/1539499416_1.jpg'},
                {id:'2', name:'Angelina', avatarUrl:'https://klike.net/uploads/posts/2019-07/medium/1564314059_1.jpg'},
                {id:'3', name:'Igor', avatarUrl:'https://klike.net/uploads/posts/2019-07/medium/1564314087_2.jpg'},
                {id:'4', name:'Vadim', avatarUrl:'https://klike.net/uploads/posts/2019-07/medium/1564314090_3.jpg'},
                {id:'5', name:'Anton', avatarUrl:'https://klike.net/uploads/posts/2019-07/medium/1564314170_12.jpg'},
            ]
        }
    },
    getState() {
    return this._state;
    },
    _subscriber() {
    },
    subscribe(observer) {
        this._subscriber  = observer;
    },

    dispatch (action) { /*обязательно type:'ADD-POST'*/
        if (action.type === 'ADD-POST') {
            let newPost = {
                id:6,
                message: this._state.profilePage.newPostText,
                like: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText='';
            this._subscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._subscriber(this._state);
        }
    }
}

export default store
