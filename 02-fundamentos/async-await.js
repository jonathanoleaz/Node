/**
 * Async Await
 */

 
/*
 let getNombre=async()=>{ //asincrona
    throw new Error('no existe un nombre');
    
    return 'Jonathan';
 };
*/
//es equivalente a getNombre (ambas son promises)
 let getNombre = () => {
     return new Promise((resolve, reject) => {
         setTimeout(()=>{
            resolve('nombre');
         }, 3000);
         
     });
 }

 let saludo= async ()=>{

    let nombre =await getNombre(); //no continuará la ejecución hasta que se resuelva 
                                    //la promise de getNombre

     return `Hola ${nombre}`;
 }

 //console.log(getNombre())

 saludo().then(mensaje=>{
     console.log(mensaje)
 })
 .catch(e=>{
     console.log(`Error de ASYNC ---<><>`, e);
 })