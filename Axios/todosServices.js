import { todosAxios } from "./axiosConfig"; 

const todosServices = {
    getAllTodos : async () => {
        try {
            const response = await todosAxios.get('https://jsonplaceholder.typicode.com/todos');
            console.log('getAllTodos')
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
}


export default todosServices;

