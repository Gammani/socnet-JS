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
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMassageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
            }
        default:
            return state;
    }
}

export const sendMessage = (newMassageBody) => ({type: SEND_MESSAGE, newMassageBody});

export default dialogsReducer;