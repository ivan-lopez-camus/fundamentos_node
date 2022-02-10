const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.info('Nueva Petición');
    console.log(req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //escribir respuesta al usuario
    //res.write('esto es un mensaje para ver que hace en http');
    res.write('Ruta => '+ req.url);
    switch (req.url) {
        case '/hola':
            let saludo = hola();
            res.write("\n"+saludo);
            res.end();
            break;
        default:
            res.write('\n\rError 404');
            res.end();

    }
}
console.info('escuchando 3000');

function hola(){
    return 'Hola, que tal';
}