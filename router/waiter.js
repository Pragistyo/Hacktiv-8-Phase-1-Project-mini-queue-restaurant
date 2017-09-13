const express = require('express');
const router  = express.Router();
const models = require('../models');

router.get('/',(req, res)=>{
    models.Waiter.findAll({
        order:[['id','ASC']]
    }).then(bla=>{
      res.render('waiter',{data:bla,err_msg:false})
    })
    .catch(err=>{
      throw err.toString()
    })
  })


//   ADD Officer
  router.post('/', (req, res)=>{
//   res.send(req.body)
    models.Waiter.create({
                        nama:`${req.body.nama}`,
                        jabatan:`${req.body.jabatan}`
                      })
    .then(()=>{
        res.redirect('/admin/seatingTable')
    })
    .catch(err=>{
        throw err.toString()
    })
})

// DELETE officer
router.get('/delete/:id', (req, res)=>{
    models.Waiter.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(()=>{
        res.redirect('/admin/seatingTable')
    })
    .catch(err=>{
        res.send(err)
    })
})

// EDIT officer
router.get('/edit/:id', (req, res)=> {
    models.Waiter.findAll({
        where : {
            id : req.params.id
        }
    })
    .then(rows =>{
        res.render('seatingTable-edit', {data:rows[0]})
    }) 
    .catch(err =>{
        res.send(err)
    })
})

router.post('/edit/:id', (req, res)=>{
    models.Waiter.update({
        nama:`${req.body.nama}`, 
        jabatan:`${req.body.jabatan}`
    },{
        where:{
            id : req.params.id
        }
    })
    .then((r)=>{
        res.redirect('/admin/seatingTable')
    })
    .catch(err=>{
        res.send(err)
    })
})

module.exports = router;
