const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
}
/*[{id: 1, photoUrl:'https://klike.net/uploads/posts/2018-10/1539499416_1.jpg', followed: false, fullName: 'Angelina', status: 'Im sing', location: {city: 'Kazan', country: 'Russia'}},
    {id: 2, photoUrl: 'https://klike.net/uploads/posts/2019-07/medium/1564314059_1.jpg', followed: true, fulName: 'Viktoria', status: 'Im dance', location: {city: 'Moscow', country: 'Russia'}},
    {id: 3, photoUrl:'https://klike.net/uploads/posts/2019-07/medium/1564314087_2.jpg', followed: false, fullName: 'Vadim', status: 'Im programmist', location: {city: 'Mendeleevsk', country: 'Russia'}},
    {id: 4, photoUrl:'https://klike.net/uploads/posts/2019-07/medium/1564314090_3.jpg', followed: true, fullName: 'Anton', status: 'Im work', location: {city: 'Tolyatti', country: 'Russia'}},
]*/

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            let new_users = state.users.map(user => {
                if (user.id === action.userId) {
                    user.followed = true;
                }
                return user
            })
            return {
                ...state,
                users: new_users
            }
        }
        case UNFOLLOW: {
            let new_users = state.users.map(user => {
                if (user.id === action.userId) {
                    user.followed = false;
                }
                return user
            })
            return {
                ...state,
                users: new_users
            }
        }
        case SET_USERS: {
            return {...state, users: [...action.users] }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export default usersReducer