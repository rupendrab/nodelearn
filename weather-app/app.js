const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

printWeather = (location) => {
    geocode(location, (error, {latitude, longitude, location}) => {
        if (error)
        {
            console.log('Error', error)
            return
        }
        forecast(longitude, latitude, (error, forecastData) => {
            if (error)
            {
                console.log(error)
                return
            }
            console.log(location)
            console.log(forecastData)
        })
    })
}

if (process.argv.length < 3)
{
    console.log('Please provide an address!')
    process.exit()
}

printWeather(process.argv[2])

// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

