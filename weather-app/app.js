const axios = require('axios')
require('dotenv').config()

const URL = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=`

const getWeatherInfoFrom = (location) => {
    axios.get(`${URL}${location}`)
    .then(function (response) {
        // handle success
        console.log(response.data.current)
      })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    //   .then(function () {
    //     // always executed
    //   });
}

getWeatherInfoFrom('Buenos Aires')

