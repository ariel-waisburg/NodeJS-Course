const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'These are your notes...'

const loadNotes = () => {
  try {
    const dataJSON = fs.readFileSync('notes.json').toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.blue.inverse("Notes:"))
  notes.forEach(note => console.log(`- ${note.title}: ${note.body}`))
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter((note) => note.title === title)

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.red.inverse('New note created'))
  } else {
    console.log(chalk.red.inverse('Note title taken!'))
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => note.title !== title)

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed'))
  } else {
    console.log(chalk.red.inverse('No note found!'))
  }

  saveNotes(notesToKeep)
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes
}