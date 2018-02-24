import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import categories from './reducers/root';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { createStore, compose,applyMiddleware } from 'redux';
import rootSaga from './actions/sagas/mySaga';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';


import createSagaMiddleware from 'redux-saga';
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const sagaMiddleware = createSagaMiddleware()
const store = createStore(categories,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

ReactDOM.render(<Provider store={store}>
                        <App/>
                </Provider>, document.getElementById('root'));

registerServiceWorker();

