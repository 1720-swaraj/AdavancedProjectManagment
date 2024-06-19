import { taskSchema } from "../Models/taskSchema.js";
import { timeEntriesSchema } from "../Models/timeEntriesSchema.js";

export const enterTimeEntries = async (req, res) => {
  const { task, user, timespent, date } = req.body;
  try {
    const timeEntry = await timeEntriesSchema.create({
      task,
      user,
      timespent,
      date,
    });
    const taskDoc = await taskSchema.findById(task);
    taskDoc.timeEntries.push(timeEntry._id);
    await taskDoc.save();
    return res
      .status(200)
      .json({ message: "Time entry created successfully", timeEntry });
  } catch (error) {
    return res.status(404).json({ message: "time not added", error });
  }
};
//------------------------>>get Time Entries

export const getTimeEntries = async (req, res) => {
    try {
        const timeEntries = await timeEntriesSchema.find().populate('task').populate('user');
        res.status(200).json({ timeEntries });
    } catch (error) {
        res.status(500).json({ message: 'Failed to get time entries', error });
    }
};