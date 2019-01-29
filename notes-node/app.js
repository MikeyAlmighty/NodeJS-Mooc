
const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')

console.log('Starting app.js')
var argv = yargs.argv
var command = process.argv[2]
console.log('Command: ', argv);


if (command === 'add') {
    notes.addNote(argv.title, argv.body)
}
