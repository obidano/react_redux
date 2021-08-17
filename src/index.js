import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducers} from "./reducers/reducers";
// import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducers);
console.log("INITIAL store STATE", store.getState());
store.subscribe(() => console.log('Store', store.getState()))
// store.dispatch(MyActions.addCharacterById(1))
// store.dispatch(MyActions.createCharacter(1))
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);

