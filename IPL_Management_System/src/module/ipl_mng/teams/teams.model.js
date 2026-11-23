import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 25,
        required: [true, "Team name is Required!"]
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,        //giving reference to the owner
        ref: "Owner",
        required: [true, "Owner is required"]
    }
    
}, {timestamps: true});


export default mongoose.model("Team", teamSchema);