import { assert, expect } from 'chai';
import ReqresAPI from '$root/pages/reqres.api';
import getUserId from "$root/helper/get-user-id.api";


describe('As a guest, I want to my user data', () => {
    it('Should successfully showing user data', async () => {
        const userId = await getUserId()
        const response = await ReqresAPI.user_show(userId)
        
        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["data", "support"]);
        assert.isObject(response.data, "data");
        assert.isObject(response.data, "support");
        // expect(response.data).to.deep.nested.property('data.id').that.deep.equals(var_id_user_created);
    });
});