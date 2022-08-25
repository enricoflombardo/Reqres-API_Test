import { assert, expect } from 'chai';
import ReqresAPI from '$root/pages/reqres.api';
import * as data from '$root/data/user.data';

describe('As a guest, I want to my user data', () => {
    it('Should successfully showing user data', async () => {
        const response = await ReqresAPI.user()
        
        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["data", "support"]);
        assert.isObject(response.data, "data");
        expect(response.data).to.deep.nested.property('data.id').that.deep.equals(2);
    });
});

describe('As a guest, I want to update my data', () => {
    it('Should successfully update user data', async () => {
        const response = await ReqresAPI.update_user(data.UPDATE_DATA)
        
        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["name", "job"]);
        assert.isString(response.data.name);
        assert.equal(response.data.name, "rico");
    });
});