console.log('Inicio del programa')

setTimeout( function(){
    console.log('Primer timout')
}, 3000)

setTimeout( function(){
    console.log('2do timout')
}, 0)

setTimeout( function(){
    console.log('3er timout')
}, 0)

console.log('fin del timeout')