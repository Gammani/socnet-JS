import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

let _callSubscriber = (state) => {
    ReactDOM.render(<App
        state={state}
        dispatch={store.dispatch.bind(store)}
        store={store}
    />, document.getElementById('root'));
}

_callSubscriber(store.getState());

store.subscribe(_callSubscriber);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
