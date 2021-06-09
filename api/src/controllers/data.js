const axios = require('axios')

async function getData(req, res, next){
   res.send("prueba")
}

module.exports = {
    getData,
}