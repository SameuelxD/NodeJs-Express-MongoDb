//Instalar la dependencia/framework de Express
// npm i express;

const express=require('express');
const app=express();
require('dotenv').config();

const mongoose=require('mongoose');

const port= process.env.PORT || 3000;

//Conexion Base de Datos ,Dependencia Mongoose , Base de Datos MongoDb

//Variables de Entorno utilizando la dependencia dotenv almacenadas en el archivo .env

const uri=`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.jm2rmy9.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, 
        {useNewUrlParser: true, useUnifiedTopology: true}
)
    .then(() => console.log('Base de Datos Conectada'))
    .catch(e => console.log(e));

//Template Engines(EJS) , se usa para reenderizar archivos que trabajan con NodeJs de manera que el navegador pueda leer como HTML,CSS,JS 
//Motor de plantillas
app.set('view engine','ejs');
app.set('views',__dirname + '/views');

app.use(express.static(__dirname + "/public")); //Middleware antes de hacer las solicitudes para mostrar la pagina principal HTML


//Routes , Rutas para mostrar diferentes respuestas
/*app.get('/',(req,res) => { 
    //console.log(__dirname); //Ruta estatica del pc local
    //res.send('Respuesta usando Express V.2');  // Route localhost:3000/
    
    res.render("index", {titulo: "Mi titulo Dinamico"}); //Variable para ser implementada en el motor de plantillas EJS en el archivo index.ejs
})

app.get('/servicios',(req,res) => {
   // res.send('Estas en los servicios');     //  Route localhost:3000/servicios 
   res.render("servicios", {tituloServicios: "Mis Servicios Dinamico"})
})
*/  
app.use('/', require('./Router/RutasWeb.js'));
app.use('/mascotas', require('./Router/Mascotas.js'));

app.use((req,res,next) => {  //Middleware para si ocurre un error de codigo 404 Not Found , No encontrada mostrara la pagina 404.html
    //res.status(404).sendFile(__dirname + "/public/404.html");
    res.render("404", {tituloError404: "¡Error 404 Not Found!" , descripcion: "No se encontro ninguna pagina"})
})

app.listen(port, () => {
    console.log('Servidor a su servicio en el puerto localhost:',port);
})

// Instalar la dependencia ejs 
// npm i ejs

/* Instalar la dependencia de NodeJs, mongoose para manejar bases de datos con MongoDb , npm i mongoose */

/* Para la proteccion de la configuracion a la base de datos por medio de variables de entorno instalar dotenv , npm i dotenv */