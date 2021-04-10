import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'
import { createStore } from './store/helpers/createStore'
import RootStore from './store/RootStore'
import { StoreProvider } from './store/helpers/storeContext'
import { createUser } from './helpers'

const store: RootStore = createStore()

store.dataStore.userStore.addUser(createUser('admin'))

ReactDOM.render(
  <StoreProvider value={store}>
    <App />
  </StoreProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
