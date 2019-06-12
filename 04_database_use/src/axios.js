import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://posts-6113b.firebaseio.com'
})

export default instance