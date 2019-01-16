let empleados=[{
    id:1,
    nombre: 'Jonathan'
},{
    id:2,
    nombre: 'Melissa'
},{
    id:3,
    nombre:'Juan'
}]

let salarios=[{
    id:1,
    salario: 1000
},{
    id:2,
    salario: 2000
}]

let getEmpleado=(id, callback)=>{
    let empleadoDB = empleados.find(empleado=>empleado.id===id)
    if(!empleadoDB){
        callback(`No existe empleado con ese ID ${id}`)
    } else{
        callback(null, empleadoDB) //null porque no existe ningun error
    }
    //console.log(empleadoDB);
}

let getSalario=(empleado, callback)=>{
    let salarioDB=salarios.find(salario=>salario.id===empleado.id)
    if(!salarioDB){
        callback(`No se encontró un salario para ${empleado.nombre}`)
    } else{
        callback(null, salarioDB)
    }
}

getEmpleado(3, (err, empleado)=>{
    if(err){
        return console.log(err);
    }
    console.log(empleado);

    getSalario(empleado,(err2, salarioObt)=>{
        if(err2){
            return console.log(err2)
        }
        console.log(salarioObt)
    }
    )
});