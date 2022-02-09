//const process = require('process');


process.on('beforeExit',()=>{
    console.log("El proceso va a terminar");
})

process.on('exit',()=>{
    console.log("El proceso se ha terminado");
    //nunca se vera porque ya se termino el event loop por el exit
    setTimeout(()=>{
        console.log("Esto no se vera nunca")
    },0);
})

process.on('uncaughtException',(err,origen) => {
    console.error("Vaya se nos ha olvidado capturar un error: ");
    console.error(err);
})

//functionNoExiste();

console.log("Esto si el error no se recoge no sale");