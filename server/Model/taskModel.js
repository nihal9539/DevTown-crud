import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
    userId: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    task: {
        type: String,
        require: true
    }
    
},
    { timestamps: true }
)

const TaskModel = mongoose.model('task',TaskSchema);

export default TaskModel