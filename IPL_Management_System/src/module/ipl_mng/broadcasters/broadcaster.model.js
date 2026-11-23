import mongoose from 'mongoose';

const broadcasterSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 25,
        required: [true, "broadcaster's name is Required!"]
    },
    
}, {timestamps: true});


export default mongoose.model("Broadcaster", broadcasterSchema);