import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { legacy_createStore as createStore } from 'redux';
import { Provider  } from 'react-redux';
import RootReducer from './Reducers/RootReducer';

const store = createStore(RootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
