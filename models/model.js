// Connecting to DB
import mongoose from "mongoose";
const connectToDataBase = async () => {
    await mongoose.connect(process.env.MONGO_DB_LINK)
}
connectToDataBase();

//creating schema
const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
})

const Note = mongoose.model("Note", notesSchema);
export default Note;