const express = require("express");
const router = express.Router();


router.get('/', (req, res) => {
    //console.log(__dirname); //Ruta estatica del pc local
    //res.send('Respuesta usando Express V.2');  // Route localhost:3000/

    res.render("index", { titulo: "Mi titulo Dinamico" }); //Variable para ser implementada en el motor de plantillas EJS en el archivo index.ejs
})

router.get('/servicios', (req, res) => {
    // res.send('Estas en los servicios');     //  Route localhost:3000/servicios 
    res.render("servicios", { tituloServicios: "Mis Servicios Dinamico" })
})

module.exports = router;