const options={
    base: {
        demand:true,
        alias:'b'
    },
    limite: {
        default:10,
        alias:'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime la table de multiplicar', options)
    .command('crear', 'Crea un txt con la tabla de multiplicar', options)
    .argv;

module.exports={
    argv
}