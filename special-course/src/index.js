import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

// import counterReducer from './SectionRedux/store/reducers/counter'
// import resultReducer from './SectionRedux/store/reducers/result';
import burgerBuilderReducer from './store/reducers/burgerBuilder';
import orderReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';

import './index.css';

// import App from './SectionRedux/App';
import App from './App';
import registerServiceWorker from './reportWebVitals';

// const rootReducer = combineReducers({
//   ctr: counterReducer,
//   res: resultReducer,
// });

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
  auth: authReducer,
})

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

// const logger = store => {
//   return next => {
//     return action => {
//       console.log("midlae dispatch", action);
//       const result = next(action);
//       console.log('misisipi', store.getState());
//       return result;
//     }
//   }
// };


const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();