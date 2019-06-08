import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.1.54:3000'
// Обработка запросов
  axios.interceptors.request.use(request => {
    // console.log(request)
    // Edit request config
    return request
  }, error => {
    // if request sending error, then you have no internet activity
    // console.log(error)
    return Promise.reject(error)
  })

// Обработка ответов
  axios.interceptors.response.use(response => {
    // console.log(response)
    // Edit request config
    return response
  }, error => {
    // if response sending error, then you have wrong data
    // console.log(error)
    return Promise.reject(error)
  })

ReactDOM.render(<App />, document.getElementById('root'));
