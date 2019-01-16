//una promise permite ejecutar un trabajo sincrono o asinc y despues de resolverse, ejecutar una tarea particular
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
let getEmpleado2=(id)=>{

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
//esta función tambien es un promise, (es equivalente a 'getEmpleado2()' )
let getEmpleado= async(id)=>{
    let empleadoDB = empleados.find(empleado=>empleado.id===id)
    if(!empleadoDB){
        throw new Error(`No existe empleado con ese ID ${id}`)
    } else{
        return empleadoDB //sólo puede regresarse un argumento
    }

    //console.log(empleadoDB);
}

let getSalario=(empleado)=>{
    return new Promise((resolve, reject)=>{
        let salarioDB = salarios.find(salario=>salario.id===empleado.id)
        if(!salarioDB){
            reject(`No existe un salario para ${empleado.nombre}`)
        } else{
            resolve({
                nombre: empleado.nombre,
                salario:salarioDB.salario,
                id:empleado.id
            })
        }
    });
}

let getSalario2= async (empleado)=>{
        let salarioDB = salarios.find(salario=>salario.id===empleado.id)
        if(!salarioDB){
            throw new Error(`No existe un salario para ${empleado.nombre}`)
        } else{
            return({
                nombre: empleado.nombre+'J',
                salario:salarioDB.salario,
                id:empleado.id
            })
        }
}

let getInformacion= async(id)=>{
    let empleado= await getEmpleado(id); //que espere el resultado
    let resp= await getSalario2(empleado);
    return `${resp.nombre}, salario de ${resp.salario}`
}

getInformacion(2)
        .then(mensaje=>console.log(mensaje))
        .catch(err=>console.log(err))