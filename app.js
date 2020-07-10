const axios = require('axios');

const clima = require('./clima/clima');

const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// console.log(argv.direccion);
// clima.getclima('New York')
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(name) => {
    try {
        const temp = await clima.getclima(name);
        return `El clima de ${name} es de ${temp}.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${name}`;
    }
}

getInfo(argv.ciudad).then(console.log).catch(console.log);