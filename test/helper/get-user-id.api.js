import * as data from "$root/data/user.data";
import ReqresAPI from '$root/pages/reqres.api';

async function getUserId(/*token*/) {
    const response = await ReqresAPI.user_create(data.CREATE_VALID_USER /*, our_token*/)
    let userId = response.data.id;

    return userId;
}

export default getUserId;