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
            ]
        },
        profilePage: {
            posts: [
                {id: 1, message: "Hello, it's my first post lol", likesCount: 777},
                {id: 2, message: "hu a you man?", likesCount: 1327}
            ],
            newPostText: ""
        }
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

    // addPost() {
    //     let newPost = {
    //         id: 3,
    //         message: store._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 3,
                message: store._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;