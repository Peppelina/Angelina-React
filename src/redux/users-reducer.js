const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    users: [],
    pageSize: 10, /*кол во на 1 страницу*/
    totalUsersCount: 0, /* всего элементов*/
    currentPage: 1,
    isFetching: true /*получение*/
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
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalCount }
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching }
        }
        default:
            return state;
    }
}

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}

export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type:  SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}

export const setTotalUsersCount = (totalCount) => {
    return {
        type:  SET_TOTAL_USERS_COUNT,
        totalCount: totalCount
    }
}
export const toggleSetIsFetching = (isFetching) => {
    return {
        type:  TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}

export default usersReducer