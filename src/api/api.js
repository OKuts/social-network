import * as axios from 'axios';

const instaceAxios = axios.create({
     withCredentials: true,
     baseURL:'https://social-network.samuraijs.com/api/1.0/',
     headers: { 'API-KEY': 'd4633feb-0512-4c9d-a3fb-0aeeb64a7faf' }
})
export const usersAPI = {
    usersServerData(addPath, method) {
        return instaceAxios[method]( addPath ).then(res => res.data);
    },
}


