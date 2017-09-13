const express = require('express');
const router = express.Router();
const Models = require('../models/waiter')

// router untuk menampilkan data meja yang ada
router.get('/', (req, res)=>{
    Models.Waiter.findAll()
    .then(officer=>{
        res.render('waiter', {data: officer})
    })
    .catch(err=>{
        res.send(err)
    })
})

router.post('/add', (req,res) => {
    Models.Waiter.create({
        nama:`${req.body.nama}`, 
        jabatan: `${req.body.jabatan}` 
    })
    .then(()=>{
        res.redirect('/waiter')
    })
    .catch(err=>{
        res.send(err)
    })
})

module.exports = router
