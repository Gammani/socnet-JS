const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
    dialogs: [
        {id: 1, name: "Kleo"},
        {id: 2, name: "Hiperion"},
        {id: 3, name: "Susan"},
        {id: 4, name: "Gektar"},
        {id: 5, name: "Chuck"}
    ],

    messages: [
        {id: 1, message: "Hi there"},
        {id: 2, message: "Yo"},
        {id: 3, message: "Helo man!"}
    ],
    newMassageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMassageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMassageBody;
            state.messages.push({id: 4, message: body});
            state.newMassageBody = '';
            return state;
        default:
            return state;
    }
}

export const sendMessageAC = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyAC = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;