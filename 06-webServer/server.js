const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers'); //importando los helpers de hbs

const port = process.env.PORT || 3000;

/*Midleware: instrucción o callback que se ejcutará siempre que haya una petición sin importar la URL*/
app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Jonathan',
        anio: new Date().getFullYear()
    });
    // res.send(salida)//la funcion detecta que es un object, lo serializa y envia
});

app.get('/about', function (req, res) {
    res.render('about', {
        nombre: 'Jonathan',
        anio: new Date().getFullYear()
    });
    // res.send(salida)//la funcion detecta que es un object, lo serializa y envia
});

/* app.get('/data', function(req, res){
    let salida = {
        nombre: 'Jonathan',
        edad: 32,
        url: req.url
    }
    res.send(salida)//la funcion detecta que es un object, lo serializa y envia
}); */


app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`);
});