const request = require('postman-request')

const geocode = (address, callback) => {
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYXJ1bmt1bWFya3MiLCJhIjoiY2tpZnMxZGNlMDB3NTMzbzNua3Z2aHpoMCJ9.vhCdSK03ZuP8ZiNVrTRc9A'

    request({url, json:true, callback}, (error, response, body)=>{
        if(error) {
            callback('Unable to connect to locationservices')
        }
        else if(response.body.features.length === 0){
            console.log("Unable to find location.Try another location")
        }
        else{
            // console.log('Latitute and Longitute valies for '+response.body.features[0].place_name+' is '+ response.body.features[0].center[1]+','+response.body.features[0].center[0] )
            callback(undefined,{
                latitude: response.body.features[0].center[1],
                longitute: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }   
    })
}

module.exports = geocode