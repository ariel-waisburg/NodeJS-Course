// Importing modules class
// const fs = require('fs');

// fs.writeFileSync('notes.txt', 'My name is Ariel Waisburg');
// fs.appendFileSync('notes.txt', ` and I'm learning NodeJS!!`);

// Importing own files class
// const validator = require('validator')
const chalk = require('chalk')
const notes = require('./notes')

// const printNotes = notes()

// console.log(printNotes)

// console.log(chalk.green.bold.inverse('Success!'));

// // console.log(validator.isURL('http://ariel.io'))

const command = process.argv[2]

console.log(process.argv[3])

if (command === 'add') {
  console.log('adding a note!')
} else if (command === 'remove') {
  console.log('deleting a note')
} else if (command === 'update') {
  console.log('updating a note')
}
else {
  console.log('listing notes...')
}