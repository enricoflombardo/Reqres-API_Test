import chai, { assert, expect } from 'chai';
import jsonSchema from 'chai-json-schema';
import ReqresAPI from '$root/pages/reqres.api';
import * as data from '$root/data/user.data';
import * as schema from '$root/schema/register.schema';

chai.use(jsonSchema)

describe.only('As a guest, I want to register', (done) => {
    it('Should succesfully register using valid account', async () => {
        const response = await ReqresAPI.register(data.VALID_REGISTER)
        
        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["id", "token"]);
        assert.isNumber(response.data.id);
        assert.isString(response.data.token);

        expect(response.data).to.be.jsonSchema(schema.VALIDATE_REGISTER_SCHEMA)
    });
});

describe('As a guest, I must insert a password when register', (done) => {
    it('Should failed to register when password not filled', async () => {
        const response = await ReqresAPI.register(data.INVALID_REGISTER)
        
        assert.equal(response.status, 400);
        assert.containsAllKeys(response.data, ["error"]);
        assert.isString(response.data.error);
    });
});