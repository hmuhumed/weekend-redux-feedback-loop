import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {createStore , combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';

const feedbackReducer = (state = [] , action) => {
    if(action.type === 'GET_FEEDBACK'){
        return action.payload
    }
    

    return state;
    
}

const feelingReducer = (state = [] , action) => {
    if(action.type === 'FEELING'){
        return [...state, action.payload] 
    }
    else if (action.type === 'NOTHING'){
        return [];
    }
    return state;
}

const understandingReducer = (state = [] , action) => {
    if(action.type === 'UNDERSTANDING'){
        return [...state, action.payload] 
    } 
    else if (action.type === 'NOTHING'){
        return [];
    }
    return state;
}

const supportReducer = (state = [] , action) => {
    if(action.type === 'SUPPORT'){
        return [...state, action.payload] 
    }
    else if (action.type === 'NOTHING'){
        return [];
    }
    return state;
}

const commentsReducer = (state = [] , action) => {
    if(action.type === 'COMMENTS'){
        return [...state, action.payload] 
    }
    else if (action.type === 'NOTHING'){
        return [];
    }
    return state;
}



const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
    }),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <Provider store={storeInstance}>
        <App />
    </Provider>
    </React.StrictMode>
);
