setTimeout(() => {  //callback mas sencillo, funcion que se ejecuta despues de x tiempo o cierta condición de tiempo
    console.log('Hola mundo');
}, 3000)

let getUserById = (id, callback) => { //suponiendo qye vamos a una bd y obtenemos el user
    let usuario = {
        nombre: 'IsC',
        id                              //el valor es igual al parametro, es decir, id: id
    }
    if (id === 20) {
        callback(`El user con ID ${id} no existe`)
    }
    callback(null, usuario); 
}

getUserById(1, (err, usuario) => {      //el 1er argumento de un callback es el error, el segundo una función
    if (err) {  //como un try catch
        console.log('ocurrió un error')
        return console.log(err);
    }
    console.log('Usuario de DB :', usuario); //cuando ya tengamos en user
});