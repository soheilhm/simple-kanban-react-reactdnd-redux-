import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import appReducer from './reducers/index'
import { createStore } from 'redux'
import App from './components/App'

const store = createStore(appReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
