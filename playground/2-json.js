const fs = require('fs')

const fileName = '2-json.json'

const data = JSON.parse(fs.readFileSync(fileName).toString())
data.name = 'Rupendra'
data.age = 51
fs.writeFileSync(fileName, JSON.stringify(data))
