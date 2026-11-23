import mongoose from "mongoose";

const teamSponsorSchema = new mongoose.Schema({
  teamId: {
    type: mongoose.Schema.Types.ObjectId, //giving reference to the Team
    ref: "Team",
    required: [true, "Player is required"],
  },
  sponsorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sponsor",
    required: [true, "Sponsor is required"]
  }
}, {timestamps: true});


//avoid duplicate entries
teamSponsorSchema.index({teamId: 1, sponsorId:1}, {unique: true});



export default mongoose.model("TeamSponsor", teamSponsorSchema);