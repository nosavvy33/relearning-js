const request = require('request-promise')

const options = {
    method: 'GET',
    uri: 'http://api.jsonbin.io/b/5bacff01a97c597b3c5a0ebc/1',
    json: true
}

request(options)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })