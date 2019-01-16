const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion)=>{    //si es async, regresa una promesa
    try{
    let coords=await lugar.getLugarLatLng(direccion);
    let temp=await clima.getClima(coords.lat, coords.lng);
    return `Clima en ${coords.direccion} es de ${temp}`;
} catch(e){
    return `No se detemrinó el clima para ${direccion}`
}
}

getInfo(argv.direccion)
    .then (mensaje=>console.log(mensaje))
    .catch(e=>console.log(e));


