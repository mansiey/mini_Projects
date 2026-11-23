import mongoose from "mongoose";

const teamBroadcasterSchema = new mongoose.Schema({
  teamId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Team",
    required: [true, "Player is required"],
  },
  broadcasterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Broadcaster",
    required: [true, "Broadcaster is required"]
  }
}, {timestamps: true});


//avoid duplicate entries
teamSponsorSchema.index({teamId: 1, broadcasterId:1}, {unique: true});



export default mongoose.model("TeamBroadcaster", teamBroadcasterSchema);