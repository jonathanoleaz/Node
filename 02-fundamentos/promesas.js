//una promise permite ejecutar un trabajo sincrono o asinc y despues de resolverse, ejecutar una tarea particular
//sriven para evitar el 'callback heaven'
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

//1er promesa
let getEmpleado=(id)=>{

    return new Promise((resolve, reject)=>{
        let empleadoDB = empleados.find(empleado=>empleado.id===id)
        if(!empleadoDB){
            reject(`No existe empleado con ese ID ${id}`)
        } else{
            resolve(empleadoDB) //sólo puede regresarse un argumento
        }
    });
    //console.log(empleadoDB);
}

let getSalario=(empleado)=>{
    return new Promise((resolve, reject)=>{
        let salarioDB = salarios.find(salario=>salario.id===empleado.id)
        if(!salarioDB){
            reject(`No existe un salario para ${empleado.nombre}`)
        } else{
            resolve(salarioDB)
        }
    });
}

 getEmpleado(10).then(empleado=>{ //encadenar promises
     return getSalario(empleado);
 })
.then (resp=>{
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}`)
})
.catch( err=>{
    console.log(err)
})