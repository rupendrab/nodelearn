setTimeout(() => {
    console.log('Two seconds are up!')
}, 2000)

const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter((name) => name.length <= 4)
console.log(shortNames)

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0        
        }
        callback(data)
    }, 2000)
}

geocode('Philadelphia', (data) => {
    console.log(data)
})

const add = (num1, num2, callback) => {
    setTimeout(() => {
        callback(num1 + num2)
    }, 3000)
}

add(2, 4, (sum) => {
    console.log(sum) // Should print: 5
})

/*
const geourl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicnVwZW5kcmFiIiwiYSI6ImNrYzQ4dWtwbDA1angzMHBtOGxyNTZvNGMifQ.5IexIS91X7OdKoWnSYbZ_A&limit=1'
const geourl_badlocation = 'https://api.mapbox.com/geocoding/v5/mapbox.places/whatisthis.json?access_token=pk.eyJ1IjoicnVwZW5kcmFiIiwiYSI6ImNrYzQ4dWtwbDA1angzMHBtOGxyNTZvNGMifQ.5IexIS91X7OdKoWnSYbZ_A&limit=1'

request({url: geourl, json: true}, (error, response) => {
    if (error)
    {
        console.log('Unable to connect to the geolocation service')
        return
    }
    if (! response.body.features || response.body.features.length == 0 )
    {
        console.log('Please enter a valid location')
        return
    }
    center = response.body.features[0].center
    lon = center[0]
    lat = center[1]
    console.log('Lat = %f, Lon = %f', lat, lon)
})
*/

/*
const url = 'http://api.weatherstack.com/forecast?access_key=7ff8ab4bc21e9de16bbada4ca1821fd3&query=37.8267,-122.4233&units=f'
const url_bad_query = 'http://api.weatherstack.com/forecast?access_key=7ff8ab4bc21e9de16bbada4ca1821fd3&units=f'

request({url: url, json: true}, (error, response) => {
    if (error)
    {
        console.log('Unable to connect to weather service')
        return
    }
    if (response.body.error)
    {
        console.log(response.body.error.info)
        return
    }
    current = response.body.current
    console.log('%s. It is currently %d degrees out, It feels like %d degrees out. Humidity is %d%.', 
        current.weather_descriptions[0],
        current.temperature,
        current.feelslike,
        current.humidity)
})
*/

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})
