import React from 'react'
import ReactDom from 'react-dom'

import {applyMiddleware,createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './main/reducers'
import App from './main/app.jsx'

import promise from 'redux-promise'

const devToos = window.__REDUX_DEVTOOLS_EXTENSION__ &&__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise)(createStore)(reducers,devToos)
ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>

, document.getElementById('app'))

