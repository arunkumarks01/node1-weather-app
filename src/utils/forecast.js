const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7e8b4087670895c07e604cff5374528a&query='+latitude+','+longitude;
    // conscd ..ole.log(url)
    // request({url, json:true, callback}, (error, response, body)=>{
        request({url, json:true, callback}, (error, response, body)=>{
        //console.log(response.body)
        if(error) {
            callback('Unable to connect to locationservices')
        }
        else if(body.error === 0){
            console.log("Unable to find location.Try another location")
        }
        else if(body.success === false){
            console.log(body.error.info)
        
            callback(body.error.info)
        }
        else{
            console.log(body)
            callback(undefined,{
                temparature: body.current.temperature,
                visibility: body.current.visibility
            })
        }   
    })
}

module.exports = forecast