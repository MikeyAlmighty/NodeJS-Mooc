const fs = require('fs')

const fetchNotes = () => {
    try {
        const read = fs.readFileSync('notes-data.json')
        return JSON.parse(read)
    } catch (error) {
        return []
    }
    
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes))
}

const addNote = (title,body) => {
    var notes = fetchNotes()
    var note = {
        title,
        body
    }
    var dupNotes = notes.filter((note)=> note.title === title)

    if (dupNotes.length === 0){
        notes.push(note)
        saveNotes(notes);
        return note
    } 

};

const getAll = () => {
return fetchNotes()
}


const getNote = (title) => {
    var notes = fetchNotes()
    const receivedNotes = notes.filter((note)=> note.title === title)
    return receivedNotes[0]
}

const removeNote = (title) => {
 const notes = fetchNotes()
 const filteredNotes = notes.filter((note) => note.title !== title)
 filteredNotes.length !== notes.length ? console.log('Note removed') : console.log('Note not found')
 saveNotes(filteredNotes);
}

const logNote = (note) => {
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};