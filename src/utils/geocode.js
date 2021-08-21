const postmanRequest = require('postman-request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoicHJha2hhcnZlcm1hMTAyMiIsImEiOiJja3F0OHh3NHkxcDh1MnJxaDgyeGZkdHRxIn0.XZsTebo2R1JiYckX5S8vgA&limit=1"

    postmanRequest( {url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to location services.', undefined)
        } else if(response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode