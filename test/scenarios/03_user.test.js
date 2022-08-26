import { assert, expect } from 'chai';
import ReqresAPI from '$root/pages/reqres.api';
import * as data from '$root/data/user.data';

var var_id_user_created;

describe('As a guest, I want to create user data', () => {
    it('Should successfully created user data', async () => {
        const response = await ReqresAPI.user_create(data.UPDATE_DATA)
        
        assert.equal(response.status, 201);
        assert.containsAllKeys(response.data, ["name", "job", "id"]);
        assert.isString(response.data.name);
        assert.isString(response.data.id);
        assert.equal(response.data.name, data.UPDATE_DATA.name);

        var_id_user_created = response.data.id;
        // var_id_user_created = 4;

        console.log(var_id_user_created);

    });
});

export var var_id_user_created;

describe('As a guest, I want to my user data', () => {
    it('Should successfully showing user data', async () => {
        const response = await ReqresAPI.user_show()
        
        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["data", "support"]);
        assert.isObject(response.data, "data");
        // expect(response.data).to.deep.nested.property('data.id').that.deep.equals(2);
    });
});

// describe('As a guest, I want to update my data', () => {
//     it('Should successfully update user data', async () => {
//         const response = await ReqresAPI.user_update(data.UPDATE_DATA)
        
//         assert.equal(response.status, 200);
//         assert.containsAllKeys(response.data, ["name", "job"]);
//         assert.isString(response.data.name);
//         assert.equal(response.data.name, "ocir");
//     });
// });