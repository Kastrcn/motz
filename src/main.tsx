import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore, { history } from './configureStore'
import App from './App'
import 'antd/dist/antd.css'
const store = configureStore()


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App history={history}/>
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
)
