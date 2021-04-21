import * as axios from 'axios';

const instaceAxios = axios.create({
     withCredentials: true,
     baseURL:'https://social-network.samuraijs.com/api/1.0/'
})
export const usersAPI = {
    getUsers(addPath) {
        return instaceAxios.get( addPath ).then(res => res.data);
    },
}


