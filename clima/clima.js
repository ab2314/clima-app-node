const axios = require('axios');

const getclima = async(name) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=1d10c66667aaee64f6b7ff0a94bd1e53&units=metric`);
    return resp.data.main.temp
}

module.exports = {
    getclima
}