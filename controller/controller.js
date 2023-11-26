const { default: axios } = require("axios");

require("dotenv").config();
const apiKey = process.env.OPEN_WEATHER_API;
const apiUrl = process.env.OPEN_WEATHER_URI;

const responseOpenWeather = async (req, res) => {
  // console.log(req.body);
  try {
    const { city } = req.body;
    // console.log(city);
    const response = await axios.get(apiUrl + city + `&appid=${apiKey}`);
    // console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = responseOpenWeather;
