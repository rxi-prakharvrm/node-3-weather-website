const postmanRequest = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7c05f159c0b516951b7a22f04e88c47b&query=' + latitude + "," + longitude

    postmanRequest( {url: url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if(response.body.error) {
            callback('Unable to find location. Try another search!')
        } else {
            callback(undefined, {
                forecastData: response.body.current.weather_descriptions + ". It is currently " + response.body.current.temperature + " degrees celcius out and it feels like " + response.body.current.feelslike + " degrees celcius.",

                weatherIcon: response.body.current.weather_icons
            })
        }
    })
}

module.exports = forecast