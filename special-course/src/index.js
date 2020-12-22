import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

// import counterReducer from './SectionRedux/store/reducers/counter'
// import resultReducer from './SectionRedux/store/reducers/result';
import reducer from './store/reducer'

import './index.css';

// import App from './SectionRedux/App';
import App from './App';
import registerServiceWorker from './reportWebVitals';

// const rootReducer = combineReducers({
//   ctr: counterReducer,
//   res: resultReducer,
// });


const store = createStore(reducer);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();