import APIResponses from "../../../common/utils/api-res.js";
import * as OwnerService from "./owner.services.js";

const createOwner = async (req, res) => {
    try {
        const owner = await OwnerService.createOwner(req.body);

        return APIResponses.created(res, "Owner created successfully!", owner);
    } catch(err) {
        next(err);
    }
    
}

const getAllOwners = async (req, res) => {
    try{
        const owners = await OwnerService.getAllOwners();
        return APIResponses.ok(res, "These are all the current owners!", owners);
    } catch(err) {
        next(err);
    }
}

const getOwnerById = async (req, res) => {
    try {
        const owner = await OwnerService.getOwnerById(req.params.id);
        return APIResponses.ok(res, "Found owner!", owner);
    } catch (err) {
        next(err);
    }
}

const updateOwner = async(req, res) => {
    try{
        const updatedOwner = await Owner.updateOwner(req.params.id, req.body);
        return APIResponses.ok(res, "Updated owner successfully!", updateOwner);
    } catch (err) {
        next();
    }
}

const deleteOwner = async (id) => {
    try{
        const deletedOwner = await Owner.deleteOwner(req.params.id);
        return APIResponses.ok(res, "Deleted owner successfully!");
    } catch (err) {
        next();
    }
}

export {
    createOwner,
    getAllOwners,
    getOwnerById,
    updateOwner,
    deleteOwner
}