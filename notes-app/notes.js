const fs = require('fs')
const chalk = require('chalk')

const readNote = (title) => {
    const notes = loadNotes()
    const existingNote = notes.find((note) => note.title === title)
    if (! existingNote)
    {
        console.log(chalk`{bold.red Cannot find note with title : }{inverse ${title}}`)
        return
    }
    console.log()
    console.log(chalk`{italic.bold.blue ${title}}`)
    console.log('-----------------------------------------')
    console.log(existingNote.body)
}

const addNote = (title, body) => {
    const notes = loadNotes()
    // const existingNotes = notes.filter((note) => note.title === title)
    const existingNote = notes.find((note) => note.title === title)
    // debugger
    if (existingNote)
    {
        console.log(chalk`Note title "{red.inverse ${title}}" alreay exists`)
        return
    }
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log(chalk`{green.inverse New note added..}`)
}

const removeNote = (title) => {
    // console.log('Removing note with title: %s', title)
    const notes = loadNotes()
    /*
    noteIndex = getNoteIndex(notes, title)
    if (noteIndex == -1)
    {
        console.log('Title does no exist: %s', title)
        return
    }
    notes.splice(noteIndex, 1)
    */
    const otherNotes = notes.filter((note) => note.title !== title)
    if (otherNotes.length == notes.length)
    {
        console.log(chalk`Title does no exist: {red.inverse ${title}}`)
        return
    }
    saveNotes(otherNotes)
    console.log(chalk`Note removed: {green.inverse ${title}}`)
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNotes = () => {
    try 
    {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e)
    {
        callback('Unable to call the weather api', undefined)
    }
}

const getNoteIndex = (notes, title) => {
    var noteIndex = -1
    notes.forEach((note, index) => {
        if (note.title == title)
        {
            noteIndex = index
        }
    })
    return noteIndex
}

const listNotes = () => {
    notes = loadNotes()
    console.log(chalk`{bold.inverse Your notes..}`)
    notes.forEach((note, index) => {
        var lineNo = index + 1
        console.log(chalk`{blue ${lineNo}. ${note.title}}`)
    })
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
