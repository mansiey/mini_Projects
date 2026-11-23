import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
    name: {
            type: String,
            trim: true,
            minlength: 2,
            maxlength: 25,
            required: [true, "Player name is Required!"]
        },
        role: {
            type: String,
            trim: true,
            required: [true, "Role is required"],
            enum: {
                value: ["Batsman", "Bowler", "Wicket-Keeper", "All-Rounder"],
                message: 'Role must be: "Batsman", "Bowler", "Wicket-Keeper", "All-Rounder" '
            }

        },
        teamId: {
            type: mongoose.Schema.Types.ObjectId,        //giving reference to the Team
            ref: "Team",
            required: [true, "Player is required"]
        }
}, {timestamps: true});


export default mongoose.model("Player", playerSchema);