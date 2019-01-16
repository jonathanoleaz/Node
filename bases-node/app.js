const argv=require('./yargs').argv;
const colors=require('colors');

const {crearArchivo, listar} = require('./multiplicar/multiplicar');
let comando=argv._[0]

switch(comando){
    case 'listar':
        console.log('listar')
        listar(argv.base, argv.limite)
        break
    case 'crear':
        console.log('crear')
        crearArchivo(argv.base, argv.limite)
        .then(archivo=>console.log(`Archivo creado: ${archivo.random}`))
        .catch(e => console.log(e))
        break
    default:
        console.log('no existe ese comando')
        break
}
console.log(argv)



//let parametro=argv[2]
//let base=parametro.split('=')[1]





  //crearArchivo(base)
  //.then(archivo=>console.log(`archivo credo`))