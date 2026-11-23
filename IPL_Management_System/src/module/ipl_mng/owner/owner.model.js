import { string } from 'joi';
import mongoose from 'mongoose';

const ownerSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 25,
        required: [true, "Owner name is Required!"]
    },
    company: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 25,
        required: [true, "Companay name is Required!"]
    }
}, {timestamps: true});


export default mongoose.model("Owner", ownerSchema);