import mongoose from 'mongoose';

const sponsorSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 25,
        required: [true, "Sponsor's name is Required!"]
    },
    
}, {timestamps: true});


export default mongoose.model("Sponsor", sponsorSchema);