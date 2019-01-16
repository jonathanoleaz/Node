const descripcion= {
    demand: true,
    alias: 'd',
    desc: 'Descripción de una tarea por hacer'
};

const completado= {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear elementos por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el edo completo de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar elementos', {
        descripcion
    })
    .help()
    .argv;

module.exports = { //para poder exportarlo desde el app.js
    argv
}


