const axios = require('axios');

const getClima=async(lat, lng)=>{
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=da0df6eb5c436d3178ef72be8cf65438`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let temp=resp.data.main.temp;
    return temp;
}

module.exports={
    getClima
}