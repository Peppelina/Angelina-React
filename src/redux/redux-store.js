import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers(
    {
        profilePage:profileReducer,
        dialogsPage:dialogsReducer,
        navbarPage:navbarReducer
    }
)
let store = createStore(reducers);

export default store;
