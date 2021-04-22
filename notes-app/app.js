// Importing modules class
// const fs = require('fs');

// fs.writeFileSync('notes.txt', 'My name is Ariel Waisburg');
// fs.appendFileSync('notes.txt', ` and I'm learning NodeJS!!`);

// Importing own files class
const validator = require('validator')
const notes = require('./notes')

const printNotes = notes()

console.log(printNotes)

console.log(validator.isURL('http://ariel.io'))