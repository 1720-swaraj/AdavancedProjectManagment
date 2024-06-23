import { teamsSchema } from "../Models/teamsSchema.js";
import { usersSchema } from "../Models/usersSchema.js";

//-------------------->>Create task
export const createTeam = async (req, res) => {
  try {
    const { teamName, members } = req.body;
    const teamMembers = await usersSchema.find({ _id: { $in: members } });
    console.log(teamMembers);
    console.log("team Members", teamMembers.length, "Members", members.length);
    if (teamMembers.length !== members.length) {
      return res.status(404).json({ message: "invalid team members" });
    }
    const newTeam = await teamsSchema.create({ teamName, members });
    return res
      .status(200)
      .json({ message: "Team created successfully", team: newTeam });
  } catch (error) {
    return res.status(400).json({ message: "Failed to create team", error });
  }
};

//---------------------->>Get Teams

export const getTeams = async (req, res) => {
  try {
    const teams = await teamsSchema.find().populate("members");
    return res.status(200).json({ teams:teams });
  } catch (error) {
    return res.status(500).json({ message: "Failed to get teams", error });
  }
};
