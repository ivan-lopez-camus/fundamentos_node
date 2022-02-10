
console.time('Tiempo de todo el codigo');
let suma = 0;
let suma2 = 0;

console.time('Tiempo bucle');
for (let i = 0; i < 1000; i++) {
    suma++;
}
console.timeEnd('Tiempo bucle')

console.time('Tiempo bucle 2');
for (let j = 0; j < 1000; j++) {
    suma2 = suma2 + j;
}
console.timeEnd('Tiempo bucle 2')

console.time('Funcion asincrona');
console.log('Empieza proceso asincrono');
asincrona()
    .then(()=>{
    console.timeEnd('Funcion asincrona');
})


console.timeEnd('Tiempo de todo el codigo');


function asincrona(){
    return new Promise((resolve)=>{
        setTimeout(function(){
            console.log('Termina proceso asincrono');
            resolve();
        }) 
    })
}