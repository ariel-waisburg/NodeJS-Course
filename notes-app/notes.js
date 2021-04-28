const fs = require('fs')
const chalk = require('chalk')

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

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find(note => note.title === title)
  
  if (duplicateNote) {
    console.log(chalk.red.inverse('Note title taken!'))
  } else {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.red.inverse('New note created'))
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

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.blue.inverse("Notes:"))
  notes.forEach(note => console.log(`- ${note.title}: ${note.body}`))
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find(note => note.title === title)

  if (note) {
    console.log(`${chalk.green.bold(note.title)}: ${note.body}`)
  } else {
    console.log(chalk.red.bold('Note not found'))
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}