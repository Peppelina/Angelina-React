const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}


const dialogsReducer = (state = initialState,action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        case SEND_MESSAGE: {
            let newMessage = {
                id: 6,
                message: state.newMessageText
            }
            let stateCopy = {...state}
            stateCopy.newMessageText = '';
            stateCopy.messages.push(newMessage);
            return stateCopy;
        }
        default:
            return state;
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

export default dialogsReducer