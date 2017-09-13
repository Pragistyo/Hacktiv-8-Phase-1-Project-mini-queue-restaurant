const express = require('express');
const router = express.Router();
const models = require('../models');
// const waiter = require('./waiter');
// const seatTable = require('./seatingTable')

// Customer bisa memilih meja
router.get('/', (req, res)=>{
    models.SeatingTable.findAll()
    .then(tables=>{
        res.render('indexCustomer', {data: tables});
    })
    .catch(err=>{
        throw err
    })   
});

router.get('/orders/:id',(req, res)=>{
    models.FoodList.findAll()
    .then(food=>{
        models.Waiter.findAll()
            .then(pelayan=>{
                models.SeatingTable.findById(req.params.id).then(meja=>{

                res.render('orders',{data:food,dataWaiter:pelayan,dataMeja:meja})
            })
        })
    })
    .catch(err=>{
        throw err
    }) 
})

router.post('/orders',(req, res)=>{

    // res.send(req.body.tanggal.slice(8))
    let antrian;
    models.SeatingTableWaiter.findAll().then(bla=>{
        let tanggalnya = bla[bla.length-1].tanggal
        if(!bla[bla.length-1].tanggal){
            antrian = 1
        }
        else if(tanggalnya){
            if(req.body.tanggal != tanggalnya){
                antrian = 1
            }
        }
        else{
            antrian = parseInt(bla[bla.length-1].noAntrian)+1
        }
    
        models.SeatingTableWaiter.create({
            SeatingTableId:req.body.SeatingTableId,
            WaiterId: req.body.WaiterId,
            tanggal: req.body.Tanggal,
            status: req.body.Status,
            noAntrian:antrian
        })
        .then(bener=>{
            res.redirect('/customer')
        })
    })
})




// router.use('/waiter', waiter)
// router.use('/seatingTable', seatTable)


module.exports = router;