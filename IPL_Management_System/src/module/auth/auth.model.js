import mongoose from 'mongoose'; 
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 20,
        required: [true, "Name is Required"]
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "Name is Required"]
    },
    password: {
        type: String,
        required:[true, "Password is required"],
        minlength: 8,
        select: false
    },
    role: {
        type: String,
        enum: ['customer', 'seller', 'admin'],
        default: 'customer',
    },
    isVerified: {
        type: Boolean,
        default: false,
    },

    verificationToken: {
        type: String,
        select: false,
    },
    refreshToken: {
        type: String,
        select: false,
    },
    resetPasswordToken: {
        type: String,
        select: false,
    },
    resetPasswordExpires: {
        type: Date,
        select: false,
    },


}, {timestamps: true})


userSchema.pre('save', async function() {
    if(!this.isModified('password')) return;

    this.password = await bcrypt.hash(this.password, 12);
})

userSchema.methods.comparePassword = async function(userPassword) {
    bcrypt.compare(userPassword, this.password);
}

export default mongoose.model("User", userSchema);