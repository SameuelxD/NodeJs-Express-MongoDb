const http=require('http');  //Dependencia integrada de npm para crear servidores http
const server=http.createServer((req,res) => {   // Creamos la conexion con el servidor http
    // Al ser creada esta dispuesto a escuchar los requerimientos o peticiones y al estar pendiente de ello responde como queramos

    res.end('Respondiendo a la Solicitud...'); //Respuesta del servidor a la solicitud
})

const puerto = 3000;  //Puerto configurado para alojar el servidor o servicio

server.listen(puerto, () => { //Por medio de la conexion del servidor escucha y con el puerto muestra responde 
    console.log(`Escuchando Solicitudes en el Puerto localhost:${puerto}` ); // 
})