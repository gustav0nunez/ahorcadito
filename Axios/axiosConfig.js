import axios from 'axios'

export const todosAxios = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
})

