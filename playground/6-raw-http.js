const https = require('https')
const http = require('http')

const forecast = (lon, lat, callback) => {
    const url = 'http://api.weatherstack.com/forecast?access_key=7ff8ab4bc21e9de16bbada4ca1821fd3&query=' 
        + lat + ',' + lon + '&units=f'
    
    const request = http.request(url, (response) => {
        let data = ""
        response.on('data', (chunk) => {
            data = data + chunk.toString()
        })
        response.on('end', () => {
            response = JSON.parse(data)
            if (response.error)
            {
                callback(response.error.info, undefined)
                return
            }
            callback(undefined, response)
        })
    })
    request.end()
    request.on('error', (msg) => {
        callback('Unable to connect to the weather service', undefined)
    }) 
}

forecast(-77, 45, (error, response) => {
    console.log(error)
    console.log(response)
})
