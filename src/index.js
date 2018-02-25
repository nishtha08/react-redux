import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers/root';
import {createStore,applyMiddleware } from 'redux';
import rootSaga from './actions/sagas/apicalls';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import createSagaMiddleware from 'redux-saga';

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const Initialstate ={
        hotels:[],
        prices:[],
        loadingPrice:false,
        loadingHotelList:false,
        errorFetching:false,
        productViewData:{},
        productDataLoaded:false
    };
    
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,Initialstate,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

ReactDOM.render(<Provider store={store}>
                        <App/>
                </Provider>, document.getElementById('root'));

registerServiceWorker();

