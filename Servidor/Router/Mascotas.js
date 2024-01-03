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

router.get('/crear', (req,res) => {
    res.render('crear');
})

router.post('/',async (req,res) => {
    const body=req.body;
    try{
        /* Metodo 1
        const mascotaDB=new Mascota(body)
        await mascotaDB.save();*/
        /* Metodo 2*/
        await Mascota.create(body);
        res.redirect('/mascotas')
    }
    catch(error){
        console.log(error);
    }
})
module.exports=router;