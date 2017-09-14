const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/',(req,res)=>{
    models.SeatingTableWaiter.findAll({
        include:[{all: true}],
        where:{
            WaiterId : req.query.WaiterId
        }
    })
    .then(eachWaiter=>{
        // res.send(eachWaiter)
        console.log(eachWaiter)
        res.render('customerWaiter',{data:eachWaiter, title: 'Check Your Order'})
    })
    .catch(err=>{
        // res.send(`waiter doesn't has order(s) yet`)
        res.send(err)
    })
})

router.get('/done/:id',(req,res)=>{
    models.SeatingTableWaiter.findById(req.params.id)
    .then(obj=>{
        models.SeatingTableWaiter.update(
                                {status: 1},
                                {where:{id:req.params.id}})
                .then(()=>{
                    res.redirect(`/customer/waiter?WaiterId=${obj.WaiterId}`)
                    // res.send(obj.WaiterId)
                })
    })        
})

router.get('/onProgress/:id',(req,res)=>{
    models.SeatingTableWaiter.findById(req.params.id)
    .then(obj=>{
        models.SeatingTableWaiter.update(
                        {status: 0},
                        {where:{id:req.params.id}})
        .then(()=>{
            res.redirect(`/customer/waiter?WaiterId=${obj.WaiterId}`)
            // res.redirect('/customer')
        })
    })
})

module.exports = router;