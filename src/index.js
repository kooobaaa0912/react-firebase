/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './compornents/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppContainer from './containers/AppContainer'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'

const store = applyMiddleware(
  thunk,
)(createStore)(rootReducer, window.devToolsExtension && window.devToolsExtension());

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <AppContainer />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)