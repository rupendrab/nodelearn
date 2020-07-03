const path = require('path')
const express = require('express')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.set('view engine', 'hbs')

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        author: 'Rupen Bandyopadhyay'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        author: 'Rupen Bandyopadhyay'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        message: 'Use this guide to navigate this application and use it effectively'
    })
})

// The below no longer works as it is going to look up the index.html from the public directory
/*
app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res) => {
    res.send({
        name: 'Andrew',
        age: 27
    })
})

app.get('/about', (req, res) => {
    res.send('<b><u>About the weather app</u></b>')
})
*/

app.get('/weather', (req, res) => {
    res.send({
        location: 'Gaithersburg, MD',
        forecast: 'Sunny Day'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
