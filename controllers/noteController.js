import Note from "../models/model.js";

const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const note = new Note({ title: title, content: content });
        console.log('note :>> ', note);
        await note.save();
        res.send({
            "statusCode": "200",
            "success": true,
            "message": "Note added Successfully",
        });
    } catch (err) {
        res.send({
            statusCode: "400",
            "success": false,
            "message": "Unable to add note",
        })
    }
}

const searchNote = async (req, res) => {
    const search = req.body.searchString;
    const note = await Note.findOne({ 'title': search });
    if (note) {
        res.send({
            "statusCode": 200,
            "body": { note },
            "success": true,
            "message": "note found",
        })
    } else {
        res.send({
            "statusCode": 404,
            "success": false,
            "message": "note not found",
        })
    }
    res.send(note);
}

const updateNote = async (req, res) => {
    const { title, newContent } = req.body;
    const update = await Note.updateOne({ 'title': title }, { 'content': newContent });
    if (update.modifiedCount === 0) {
        res.send({
            "statusCode": 404,
            "success": false,
            "message": "note not found",
        })
    } else {
        res.send({
            "statusCode": 404,
            "success": true,
            "message": "note was updated",
        })
    }
}

const deleteNote = async (req, res) => {
    const { title } = req.body;
    const del = await Note.deleteOne({ 'title': title });
    console.log('del :>> ', del);
    if (del.deletedCount === 0) {
        res.send({
            "statusCode": 400,
            "success": false,
            "message": "Unable to delete",
        })
    } else {
        res.send({
            "statusCode": 200,
            "success": true,
            "message": "Successfully deleted",
        })
    }
}
const deleteNoteByID = async (req, res) => {
    const { id } = req.body;
    Note.findByIdAndDelete(id)
        .then(deletedUser => {
            if (deletedUser) {
                res.send({
                    "statusCode": 200,
                    "success": true,
                    "message": "note deleted",
                })
            } else {
                res.send({
                    "statusCode": 400,
                    "success": false,
                    "message": "Error deleting user",
                })
            }
        })
        .catch(error => {
            res.send({
                "statusCode": 400,
                "success": false,
                "message": "Error deleting user"+ error,
            })
        });
}

const getAll = async (req, res) => {
    const notes = await Note.find({})
    res.send({
        "statusCode": 200,
        "body": { notes },
        "success": true,
        "message": "notes found",
    })
}

export { createNote, searchNote, updateNote, deleteNote, getAll, deleteNoteByID };