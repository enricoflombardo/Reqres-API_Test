import { assert } from 'chai';
import ReqresAPI from '$root/pages/reqres.api';
import * as data from '$root/data/user.data';

describe('As a guest, I want to register', () => {
    it('Should succesfully register using valid account', async () => {
        const response = await ReqresAPI.register(data.VALID_REGISTER)
        
        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["id", "token"]);
        assert.isNumber(response.data.id);
        assert.isString(response.data.token);
    });
});

// describe('As a guest, I must insert a password when register', () => {
//     it('Should failed to register when password not filled', async () => {
//         const response = await ReqresAPI.register(data.INVALID_REGISTER)
        
//         assert.equal(response.status, 200);
//         assert.containsAllKeys(response.data, ["id", "token"]);
//         assert.isNumber(response.data.id);
//         assert.isString(response.data.token);
//     });
// });