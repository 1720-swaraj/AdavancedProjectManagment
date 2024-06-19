import mongoose from "mongoose";

const timeEntries = new mongoose.Schema({
    task:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Task",
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    timespent:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

export const timeEntriesSchema = mongoose.model("TimeEntries", timeEntries);
