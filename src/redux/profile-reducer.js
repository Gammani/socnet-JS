const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Hello, it's my first post lol", likesCount: 777},
        {id: 2, message: "hu a you man?", likesCount: 1327}
    ],
    newPostBody: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostBody,
                likesCount: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostBody: ""
            }
        case UPDATE_NEW_POST_TEXT:
          return {
              ...state,
              newPostBody: action.newText
          }
        default:
            return state;
    }
}

export const addPostAC = () => ({type: ADD_POST});
export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;