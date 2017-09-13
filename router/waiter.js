const express = require('express');
const router  = express.Router();
const models = require('../models');

//GET ALL DATA
router.get('/waiter',(req.res)=>{
  models.Waiter.findAll().then(bla=>{
    res.render('waiter',{data:bla,err_msg:false})
  })
  .catch(err=>{
    throw err.toString()
  })
})

//ADD DATA
router.post('/waiter',(req,res)=>{
  models.Waiter.create({
                        nama:req.body.name
                        jabatan:
                      })
})
