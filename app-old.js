
const http = require('http');


http.createServer((request,respuesta)=>{
    respuesta.writeHead(200,{'Content-Type':'aplication/json'})
        let salida = {
            nombre:'facu',
            edad: 32,
            url:request.url
        }

        respuesta.write(JSON.stringify(salida))
    // respuesta.write('hola mundo');
    respuesta.end();
})
.listen(8080);

console.log("escuchando el puerto 8080");