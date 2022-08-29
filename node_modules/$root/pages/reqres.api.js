import BaseAPI from '$root/pages/base.api';
import {var_id_user_created} from '$root/scenarios/03_user.test';

const ReqresAPI = {
    register: (data) => BaseAPI.post('/register', data),
    login: (data) => BaseAPI.post('/login', data),
    user_create: (data) => BaseAPI.post('/users', data),
    user_show: () => BaseAPI.get('/users/' + var_id_user_created),
    user_update: (data) => BaseAPI.put('/users/2', data),
    user_patch: (data) => BaseAPI.patch('/users/2', data),
    user_delete: () => BaseAPI.delete('/users/2'),
}

export default ReqresAPI;