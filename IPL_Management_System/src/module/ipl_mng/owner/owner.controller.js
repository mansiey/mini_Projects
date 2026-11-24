import APIResponses from "../../../common/utils/api-res.js";
import ApiError from "../../../common/utils/api-error.js";
import * as ownerService from "./owner.services.js";

const createOwner = async (req, res) => {
    try {
        const owner = await ownerService.createOwner(req.body);

        return APIResponses.created(res, "Owner created successfully!", owner);
    } catch(err) {
        next(err);
    }
    
}



export {
    createOwner,
}