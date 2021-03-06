const fs = require('fs')

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = (JSON.stringify(book))
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.author)

const dataJSON = fs.readFileSync('1-json.json').toString()
const dataParsed = JSON.parse(dataJSON)

dataParsed.name = 'Ariel'
dataParsed.age = 19

const newDataJSON = JSON.stringify(dataParsed)
fs.writeFileSync('1-json.json', newDataJSON)