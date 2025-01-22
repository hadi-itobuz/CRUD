import express from 'express';
const route = express.Router();
import { createNote, searchNote, updateNote, deleteNote ,getAll,deleteNoteByID} from '../controllers/noteController.js';
//Create notes
route.post('/addNote', createNote)
//Read note by title
route.get('/searchNote', searchNote)
//Update note
route.put('/updateNote', updateNote)
//Delete note
route.delete('/deleteNote', deleteNote)
//get All
route.get('/getAll',getAll)
//delete by ID
route.delete('/deleteNoteByID',deleteNoteByID)

export default route;