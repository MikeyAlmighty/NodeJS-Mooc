const fs = require('fs')

var originalNote = {
    title:'someTitle',
    body:'someBody'
}

var originalNoteString = JSON.stringify(originalNote)

fs.writeFileSync('notes.json', originalNoteString)

var note = fs.readFileSync('notes.json')
var out = JSON.parse(note)
console.log(typeof out);
console.log(out.title);