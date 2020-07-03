const fs = require('fs')

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)
fs.writeFileSync('1-json.json', bookJSON)

// const parseddata = JSON.parse(bookJSON)
// console.log(parseddata.author)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const parseddata = JSON.parse(dataJSON)
console.log(parseddata.title)
console.log(parseddata.author)
