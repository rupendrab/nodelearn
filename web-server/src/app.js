const express = require('express')

const app = express()

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

app.get('/weather', (req, res) => {
    res.send({
        location: 'Gaithersburg, MD',
        forecast: 'Sunny day'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
