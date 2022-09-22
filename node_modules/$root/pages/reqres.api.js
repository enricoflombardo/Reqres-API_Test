import BaseAPI from '$root/pages/base.api';
import {var_id_user_created} from '$root/scenarios/03_user.test';

const ReqresAPI = {
    register: (data) => BaseAPI.post('/register', data),
    login: (data) => BaseAPI.post('/login', data),
    user_create: (data) => BaseAPI.post('/users', data),
    user_show: (id) => BaseAPI.get(`/users/${id}`),
    user_update: (data) => BaseAPI.put('/users/2', data),
    user_patch: (data) => BaseAPI.patch('/users/2', data),
    user_delete: () => BaseAPI.delete('/users/2'),

    post_auth: (data) => BaseAPI.post('/api-clients', data),
}

export default ReqresAPI;