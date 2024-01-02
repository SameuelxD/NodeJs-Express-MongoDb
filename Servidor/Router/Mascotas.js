const express = require('express');
const router = express.Router();
const Mascota=require('../Models/mascota.js');

router.get('/',async (req, res) => {
    try{
        const arrayMascotasDb = await Mascota.find();
        console.log(arrayMascotasDb);
        res.render("mascotas", {
            arrayMascotas:arrayMascotasDb
            // arrayMascotas: [
            //     { id: 'a', nombre: 'rex', descripcion: 'rex descripcion' },
            //     { id: 'b', nombre: 'chanchan', descripcion: 'chanchan descripcion' }
            // ]
        })
    }
    catch(error){
        console.log(error);
    }
    
    
    
})

module.exports=router;