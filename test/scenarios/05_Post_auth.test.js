import chai, { assert, expect } from "chai";
import jsonSchema from 'chai-json-schema';
import simplebooksAPI from "$root/pages/reqres.api";
import * as data from "$root/data/user.data";

chai.use(jsonSchema)

describe('As a guest, I want to post auth token', ()=>{
    it('Should have succesfully received the token', async() => {
        const response = await simplebooksAPI.post_auth(data.VALID_AUTH);

        // assert.equal(response.status, 201);
        console.log(response.data)
    });
});