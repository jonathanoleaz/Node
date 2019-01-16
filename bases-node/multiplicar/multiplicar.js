
const fs= require('fs');
const colors = require('colors');

let listar=(base, limite=10)=>{ //valor por default del parametro
    if(!Number(base)){
        reject('Base no es un number')
        return;
    }

    if(!Number(limite)){
        reject('Limite no es un number')
        return;
    }
    
    console.log(`tabla de multiplicar ${base}`.green);
    for(let i=1; i<limite; i++){
        console.log(base*i);
    }
}

let crearArchivo=(base, limite=10)=>{
    return new Promise((resolve, reject)=>{

        if(!Number(base)){
            reject('No es un number')
            return;
        }

        if(!Number(limite)){
            reject('Limite no es un number')
            return;
        }

    let data=''

    for(let i=1; i<limite; i++){
        data+=`${base*i} \n`
    }
    
    
    fs.writeFile('files/tabla-2.txt', data, (err) => {
        if (err) reject(err);
        else
            resolve(`tabla-2.txt`)
        });
    });
}

module.exports={
    crearArchivo, //ó crearArchivo:=crearArchivo
    listar
}
