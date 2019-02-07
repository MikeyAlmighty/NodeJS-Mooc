const yargs = require('yargs')

const notes = require('./notes')

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add', 'Add a new note',{
    title: titleOptions,
    body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv

var command = argv._[0]

if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body)
    note ? notes.logNote(note) : console.log('Duplicate note.')
} else if (command === 'list') {
    const noteList = notes.getAll()
    noteList.forEach(note => {
    notes.logNote(note)
});

} else if (command === 'read') {
    const note = notes.getNote(argv.title)
    note ? notes.logNote(note) : console.log('Note not found.')
} else if (command === 'remove') {
    notes.removeNote(argv.title)
}
