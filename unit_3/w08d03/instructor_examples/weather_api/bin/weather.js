const request = require('request');

const apiKey = process.env.API_KEY;


const getWeather = (res, city) => {

  const responseToClient = (res, data) => {
    res.send(data)
  }


  request('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=' + apiKey, function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    // console.log(typeof body)
    // JSON.parse changes a JSON string into an object that we can access
    // its properties or methods
    // const parsedBody = JSON.parse(body);
    // console.log(parsedBody.main.temp, parsedBody.name)
    responseToClient(res, body)

  });


}



module.exports = getWeather;
