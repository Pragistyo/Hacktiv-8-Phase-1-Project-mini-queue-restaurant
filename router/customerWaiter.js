const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/',(req,res)=>{
    models.SeatingTableWaiter.findAll({
        include:[{all: true}],
        order:[['id', 'ASC']],
        where:{
            WaiterId : req.query.WaiterId
        }
    })
    .then(eachWaiter=>{
        if(eachWaiter.length>0){
        res.render('customerWaiter',{data:eachWaiter, pageTitle: 'Check Your Order',errs:false})
        }else{
            models.SeatingTable.findAll({
                order:[['id', 'ASC']]
            })
            .then(tables=>{
                models.Waiter.findAll()
                .then(pelayan=>{
                    res.render('indexCustomer', {data: tables, dataWaiter: pelayan,errs:true,err_msg:false, pageTitle: 'Restaurant Magic'});
                })
            })
        }
    })
    .catch(err=>{
       throw err.toString()
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