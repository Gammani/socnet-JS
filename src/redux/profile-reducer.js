import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_USER_STATUS';

let initialState = {
    posts: [
        {id: 1, message: "Hello, it's my first post lol", likesCount: 777},
        {id: 2, message: "hu a you man?", likesCount: 1327}
    ],
    newPostBody: "",
    profile: null,
    status: ""
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
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}
export const getStatusProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data));
            })
    }
}

export const updateStatusProfile = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if(data.resultCod === 0) {
                    dispatch(setStatus(data));
                }
            })
    }
}

export default profileReducer;