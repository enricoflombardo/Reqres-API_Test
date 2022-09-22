import { assert } from 'chai';
import ReqresAPI from '$root/pages/reqres.api';
import * as data from '$root/data/user.data';


describe.only('As a guest, I want to login', () => {
    it('Should successfully login using valid account', async () => {
        const response = await ReqresAPI.login(data.VALID_LOGIN)
        
        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["token"]);
        assert.isString(response.data.token);
    });
});