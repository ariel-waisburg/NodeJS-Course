const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

 // adding a note
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function () {
    console.log('Adding a new note!')
  }
})

// removing a note
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing a note!')
  }
})

// reading a note
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('Reading a note!')
  }
})

// listing all existing notes
yargs.command({
  command: 'list',
  describe: 'List notes',
  handler: function () {
    console.log('Listing notes!')
  }
})

console.log(yargs.argv)