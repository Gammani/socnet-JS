import {rerenderEntireTree} from "../render";

let state = {
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
};


export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;