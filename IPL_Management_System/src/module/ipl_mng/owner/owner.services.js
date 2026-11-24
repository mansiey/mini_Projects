import ApiError from "../../../common/utils/api-error.js";
import Owner from "./owner.model.js";

const createOwner = async({name, company}) => {
    const existingOwner = await Owner.findOne({ name, company });

    if(existingOwner){
        ApiError.conflict("Owner with this name already exist!");
    }

    const owner = await Owner.create({name, company});

    return owner;
}

const getAllOwners = async() => {
    const owners = await Owner.find();

    return owners;
}

const getOwnerById = async ( id ) => {
    const owner = await Owner.findById(id);

    if(!owner) {
        ApiError.notfound("Owner not found!");
    }

    return owner;
}

const updateOwner = async (id, {name, companay}) => {
    const owner = await Owner.findByIdAndUpdate(id, 
        {name, company},
        {new: true, runValidators:true});

    if(!owner){
        ApiError.notfound("Couldn't find the owner!");
    }

    return owner;
}

const deleteOwner = async (id) => {
    const owner = await Owner.findByIdAndDelete(id);

    if(!owner){
        ApiError.notfound("The owner does not exist!");
    }

    return owner;
}




export {
    createOwner,
    getAllOwners,
    getOwnerById,
    updateOwner,
    deleteOwner
}
