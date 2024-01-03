const express = require('express');
const router = express.Router();
const Mascota = require('../Models/mascota.js');

router.get('/', async (req, res) => {
    try {
        const arrayMascotasDb = await Mascota.find();
        console.log(arrayMascotasDb);
        res.render("mascotas", {
            arrayMascotas: arrayMascotasDb
            // arrayMascotas: [
            //     { id: 'a', nombre: 'rex', descripcion: 'rex descripcion' },
            //     { id: 'b', nombre: 'chanchan', descripcion: 'chanchan descripcion' }
            // ]
        })
    }
    catch (error) {
        console.log(error);
    }



})

router.get('/crear', (req, res) => {
    res.render('crear');
})

router.post('/', async (req, res) => {
    const body = req.body;
    try {
        /* Metodo 1
        const mascotaDB=new Mascota(body)
        await mascotaDB.save();*/
        /* Metodo 2*/
        await Mascota.create(body);
        res.redirect('/mascotas')
    }
    catch (error) {
        console.log(error);
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const mascotaDB = await Mascota.findOne({ _id: id })
        console.log(mascotaDB);
        res.render('detalle', {
            mascota: mascotaDB,
            error: false
        })

    } catch (error) {
        console.log(error);
        res.render('detalle', {
            error: true,
            mensaje: 'No se encuentra el id seleccionado'
        })
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const mascotaDB = await Mascota.findByIdAndDelete({ _id: id })
        if (mascotaDB) {
            res.json({
                estado: true,
                mensaje: 'eliminado!'
            })
        } else {
            res.json({
                estado: false,
                mensaje: 'fallo eliminar!'
            })
        }
    }catch(error){
        console.log(error);
    }
})

module.exports = router;