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








export {
    createOwner,
}
