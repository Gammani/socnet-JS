import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                {id: 1, message: "Hello, it's my first post lol", likesCount: 777},
                {id: 2, message: "hu a you man?", likesCount: 1327}
            ],
            newPostBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("state changed");
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },


    dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;