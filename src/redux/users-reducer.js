const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
}

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
            return {...state, users: [...state.users, ...action.users] }
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